window.onload=function(){
	highlightPage();
	prepareSlideshow();
	moveElement();
}

function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

function highlightPage(){
	var headers=document.getElementsByTagName('header');
	var navs=headers[0].getElementsByTagName('nav');
    var links=navs[0].getElementsByTagName('a');
    var linkurl;
    for(var i=0;i<links.length;i++){
    	linkurl=links[i].getAttribute('href');
    	if(window.location.href.indexOf(linkurl)!=-1){
    		links[i].className='here';
    		var linktext=links[i].lastChild.nodeValue.toLowerCase();
    		document.body.setAttribute('id',linktext);
    	}
    }
}

function prepareSlideshow(){
	var intro=document.getElementById('intro');
	var slideshow=document.createElement('div');
	slideshow.setAttribute('id','slideshow');
	var preview=document.createElement('img');
	preview.setAttribute('src','images/slideshow.png');
	preview.setAttribute('id','preview');
	slideshow.appendChild(preview);
	insertAfter(slideshow,intro);
	var links=document.getElementsByTagName('a');
	var destination;
	for(var i=0;i<links.length;i++){
		links[i].onmouseover=function(){
			destination=this.getAttribute('href');
			if(destination.indexOf('index.html')!=-1){
				moveElement('preview',0,0,5);
			}
			if(destination.indexOf('about.html')!=-1){
				moveElement('preview',-150,0,5);
			}
			if(destination.indexOf('photos.html')!=-1){
				moveElement('preview',-300,0,5);
			}
			if(destination.indexOf('schedule.html')!=-1){
				moveElement('preview',-450,0,5);
			}
			if(destination.indexOf('contact.html')!=-1){
				moveElement('preview',-600,0,5);
			}
		}
	}
}

function moveElement(elementID,final_x,final_y,interval){
    var elem=document.getElementById(elementID);
    var dist=0;
    if(elem.movement){
    	clearTimeout(elem.movement);
    }
    if(!elem.style.left){
    	elem.style.left='0px';
    }
    if(elem.style.top){
    	elem.style.top='0px';
    }
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    if(xpos==final_x&&ypos==final_y){
    	return true;
    }
    if(xpos<final_x){
    	dist=Math.ceil((final_x-xpos)/10);
    	xpos=xpos+dist;
    }
    if(xpos>final_x){
    	dist=Math.ceil((xpos-final_x)/10);
    	xpos=xpos-dist;
    }
    if(ypos<final_y){
    	dist=Math.ceil((final_y-xpos)/10);
    	ypos=ypos+dist;
    }
    if(ypos>final_y){
    	dist=Math.ceil((xpos-final_y)/10);
    	ypos=ypos-dist;
    }
    elem.style.left=xpos+'px';
    elem.style.top=ypos+'px';
    var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement=setTimeout(repeat,interval);
}
