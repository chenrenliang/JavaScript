function  getElementsByClassName(oParent,sClass){
    if(oParent.getElementsByClassName){
        return oParent.getElementsByClassName(sClass);
    }else{
        var aResult=[];
        var aEle=oParent.getElementsByTagName("*");
        var  re=new RegExp("\\b"+sClass+"\\b",'i');
        for(var i=0;i<aEle.length;i++){
            if(re.rest(aEle[i].className)){// aEle[i].className.indexOf(sClass) !=-1
                aResult.push(aEle[i]);
            }
        }
        return aResult;
    }
}


var   paras=document.getElementsByTagName("p");
for(var i=0;i<paras.length;i++){
    var title_text=paras[i].getAttribute("title");
    if(title_text){
        console.log(title_text);
        paras[i].setAttribute("title","brand new title text");
    }
}

function showPic(node){
    var source=node.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    // placeholder.setAttribute("src",source);
    placeholder.src=source;
    // document.getElementById("placeholder").setAttribute("src",node.getAttribute("href"));
    var  title=node.getAttribute("title");
    var description=document.getElementById("description");
    // description.firstElementChild.nodeValue=title;
    // description.innerHTML=title;
    description.textContent=title;
    return true;
}




function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];
    return body_element.childNodes.length;
}

function popUp(URL){
    window.open(URL,'popup','width=320,height=480');
}

function prepareLinks(){
    var  gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    if(links.length>0){
        for(var i=0;i<links.length;i++){
            if(links[i].getAttribute("class")=='popup'){
                links[i].onclick=function(){
                    popUp(this.getAttribute("href"));
                    return false;
                }
            }
        }
    }
}

/*window.onload=function(){
    firstFunction();
    secondFunction();
}*/

function   addLoadEvent(func){//添加多个句柄
    var  oldload=window.onload;
    if(typeof window.onload !='function'){
        window.onload=func;
    }else{
        window.onload=function(){
            oldload();
            func();
        }
    }
}

function prepareGallery() {
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function(){
            // return !showPic(this);
            return showPic(this)?false:true;
        }
    }
}


function showPic(node){
    var source=node.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    if(placeholder.nodeName !="IMG")return false;
    placeholder.setAttribute("src",source);

    if(document.getElementById("description")){
        var text=node.getAttribute("title")?node.getAttribute("title"):"";
        var description=document.getElementById("description");
        if(description.firstElementChild.nodeType==3){
            // description.firstElementChild.nodeValue=text;
            description.textContent=text;
            // description.innerHTML=text;
        }
    }
    return true;
}

function insertParagraph(text){
    var str="<p>";
    str+=text;
    str+="</p>";
    document.write(str);
}

var placeholder=document.createElement("img");
placeholder.setAttribute("id","placeholder");
placeholder.setAttribute("src","images/placeholder.gif");
placeholder.setAttribute("alt","my image gallery");
var description=document.createElement("p");
description.setAttribute("id","description");
var desctext=document.createTextNode("Choose an image");
description.appendChild(desctext);

document.body.appendChild(placeholder);
document.body.appendChild(description);



var gallery=document.getElementById("imagegallery");
gallery.parentNode.insertBefore(placeholder,gallery);
gallery.parentNode.insertBefore(description,gallery);



function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if(parent.lastElementChild==targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextElementSibling);
    }
}


function preparePlaceholder(){
    //1.placeholder
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");

    //2.description
    var  description=document.createElement("p");
    description.setAttribute("id",'description');

    var desc_text=document.createTextNode("Choose an image");
    description.appendChild(desc_text);

    //3.
    var  gallery=document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}


function addLoadEvent(func){
    var  oldonload=window.onload;
    if(typeof oldload !='function'){
        window.onload=func;
    }else{
        window.onload=function(){
            oldload();
            func();
        }
    }
}

function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if(parent.lastElementChild==targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextElementSibling);
    }
}

function preparePlaceholder(){
    //1.placeholder
    var  placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");

    //2.description
    var description=document.createElement("p");
    description.setAttribute("id","description");
    var desc_text=document.createTextNode("Choose an image");
    description.appendChild(desc_text);

    //3.
    var gallery=document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

function prepareGallery(){
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function(){
            return showPic(this);
        };
        links[i].onkeypress=links[i].onclick;
    }
}

function showPic(node){
    var source=node.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text=node.getAttribute("title");
    var description=document.getElementById("description");
    description.textContent=text;
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);



function  getHTTPObject(){
    var  req=null;
   if(window.ActiveXObject){
       req=new ActiveXObject("Microsoft.XMLHTTP");
   }else{
       req=new XMLHttpRequest();
   }
}

function getNewContent(){
    var  req=getHTTPObject();
    req.open("GET","example.txt",true);
    req.onreadystatechange=function(){
        if(req.readyState==4){
            if(req.status==200){
                var  para=document.createElement("p");
                var txt=document.createTextNode(req.responseText);
                para.appendChild(txt);
                document.body.appendChild(para);
            }
        }
    };

    req.send(null);
}

function  displayAbbreviations(){
    var  aAbbr=document.getElementsByTagName("abbr");
    var arr=[];
    for(var i=0;i<aAbbr.length;i++){
        var current=aAbbr[i];
        var  def=current.getAttribute("title");
        // var key=current.lastElementChild.nodeValue;
        var key=current.textContent;
        arr[key]=def;
    }
    //arr[key]=def;   API:Application Programming Interface
    var dl=document.createElement("dl");
    for(var key in arr){
        var dt=document.createElement("dt");
       dt.textContent=key;
        var dd=document.createElement("dd");
        dd.textContent=arr[key];
        dl.appendChild(dt);
        dl.appendChild(dd);
    }

    /*
      <dl>
            <dt>
                API:
                <dd>
                    Application Programming interface
                </dd>
            </dt>
      </dl>
     */



    var oH2=document.createElement("h2");
    oH2.textContent="Abbreviations";
    document.body.appendChild(oH2);
    document.body.appendChild(dl);

}

function displayCitations(){
    var quotes=document.getElementsByTagName("blockquote");
    for(var i=0;i<quotes.length;i++){
        var cite=quotes[i].getAttribute("cite");
        var quoteChildren=quotes[i].getElementsByTagName("*");
        var elem=quoteChildren[quoteChildren.length-1];
        var link=document.createElement("a");
        link.textContent='source';
        link.setAttribute("href",cite);
        var superscript=document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}

function displayAccesskeys(){
    var aA=document.getElementsByTagName("a");
    var arr=[];
    for(var i=0;i<aA.length;i++){
        var current=aA[i];
        var current_key=current.getAttribute("accesskey");
        var current_text=current.textContent;
        // var  current_text=current.innerHTML;
        // var current_text=current.lastElementChild.nodeValue;

        arr[current_key]=current_text;
    }

    var oUl=document.createElement("ul");
    for(var current_key in arr){
        var text=arr[current_key];
        var str=current_key+": "+text;
        var oLi=document.createElement("li");
        oLi.innerHTML=str;
        oUl.appendChild(oLi);
    }

    var oH3=document.createElement("h3");
    oH3.textContent="Accesskeys";
    document.body.appendChild(oH3);
    document.body.appendChild(oUl);

}

addLoadEvent(displayAccesskeys);

function getNextElement(node){
    if(node.nodeType==1){return node;}
    if(node.nextSibling){return getNextElement(node.nextSibling);}
    return null;
}

function styleHeaderSiblings(){
    var aH=document.getElementsByTagName("h1");
    var elem=null;
    for(var i=0;i<aH.length;i++){
        elem=getNextElement(aH[i].nextSibling);
      /*  elem.style.fontWeight='bold';
        elem.style.fontSize='1.2em';*/
      elem.className="intro";
        //.intro{font-weight:bold;font-size:1.4em;}
    }
}

/*
function stripeTables(){
    var tables=document.getElementsByTagName("table");
    for(var i=0;i<tables.length;i++){
        var rows=tables[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
            rows[i].style.backgroundColor=j%2?"#ffc":"";
        }
    }
}
*/

function stripeTables(){
    var tables=document.getElementsByTagName("table");
    var odd=false;
    for(var i=0;i<tables.length;i++){
        var rows=tables[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
            if(odd==true){
                rows[j].style.background="#ffc";
                odd=false;
            }else{
                odd=true;
            }
        }
    }
}

function highlightRows(){
    var rows=document.getElementsByTagName("tr");
    for(var i=0;i<rows.length;i++){
        rows[i].onmouseover=function(){
            this.style.fontWeight='bold';
        };
        rows[i].onmouseout=function(){
            this.style.fontWeight='normal';
        };
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