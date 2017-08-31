window.onload=function(){
	highlightPage();
    focusLabels();
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

function focusLabels(){
    var labels=document.getElementsByTagName('label');
    for(var i=0;i<labels.length;i++){
        if(!labels[i].getAttribute('for')) continue;
        labels[i].onclick=function(){
            var id=this.getAttribute('for');
            var element=document.getElementById(id);
            element.focus();
        }
    }
}