window.onload=function(){
	highlightPage();
	preparePlaceholder();
    prepareGallery();
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

function showPic(whichpic){
    var source=whichpic.getAttribute('href');
    var placeholder=document.getElementById('placeholder');
    placeholder.setAttribute('src',source);
    if(whichpic.getAttribute('title')){
    	var text=whichpic.getAttribute('title')
    }else{
    	var text='';
    }
    var description=document.getElementById('description');
    if(description.firstChild.nodeType==3){
    	description.firstChild.nodeValue=text;
    }
    return false;
}

function preparePlaceholder(){
	var placeholder=document.createElement('img');
	placeholder.setAttribute('id','placeholder');
	placeholder.setAttribute('src','images/placeholder.JPG');
	placeholder.setAttribute('alt','my imagegallery');
	var description=document.createElement('p');
	description.setAttribute('id','description');
	var desctext=document.createTextNode('点击小图浏览');
	description.appendChild(desctext);
	var gallery=document.getElementById('imagegallery');
	insertAfter(description,gallery);
	insertAfter(placeholder,description);
}

function prepareGallery(){
	var gallery=document.getElementById('imagegallery');
	var links=gallery.getElementsByTagName('a');
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			return showPic(this);
		}
	}
}