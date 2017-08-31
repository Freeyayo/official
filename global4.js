window.onload=function(){
	highlightPage();
    stripeTables();
    highlightRows();
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



function addClass(element,value){
    if(!element.className){
        element.className=value;
    }else{
        newClassName=element.className;
        newClassName+=" ";
        newClassName+=value;
        element.className=newClassName;
    }
}

function stripeTables(){
    var tables=document.getElementsByTagName('table');
    for(var i=0;i<tables.length;i++){
        var odd=false;
        var rows=tables[i].getElementsByTagName('tr');
        for(var j=0;j<rows.length;j++){
            if(odd==true){
                addClass(rows[j],'odd');
                odd=false;
            }else{
                odd=true;
            }
        }
    }
}

function highlightRows(){
    var rows=document.getElementsByTagName('tr');
    for(var i=0;i<rows.length;i++){
        rows[i].oldClassName=rows[i].className
        rows[i].onmouseover=function(){
            addClass(this,'highlight');
        }
        rows[i].onmouseout=function(){
            this.className=this.oldClassName
        }
    }
}