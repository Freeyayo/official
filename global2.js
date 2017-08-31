window.onload=function(){
	highlightPage();
	prepareInternalnav();
	showSection();
}
function showSection(id){
	var sections=document.getElementsByTagName('section');
	for(var i=0;i<sections.length;i++){
		if(sections[i].getAttribute('id')!=id){
			sections[i].style.display='none';
		}else{
			sections[i].style.display='block';
		}
	}
}

function prepareInternalnav(){
	var articles=document.getElementsByTagName('article');
	var navs=articles[0].getElementsByTagName('nav');
	var nav=navs[0];
	var links=nav.getElementsByTagName('a');
	for(var i=0;i<links.length;i++){
		var sectionId=links[i].getAttribute('href').split('#')[1];
		links[i].destination=sectionId;
		links[i].onclick=function(){
			showSection(this.destination);
			return false;
		}
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