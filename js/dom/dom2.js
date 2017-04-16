/* 
* @Author: anchen
* @Date:   2017-04-14 11:36:34
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-15 11:24:01
*/

// $(document).ready(function(){
    
// });

x = document.getElementById('p1');
document.write("<p>"+ x.innerHTML+"</p> <hr />");

document.write("nodeName 节点名"+x.nodeName + "<br />" );
document.write("nodeType 类型"+x.nodeType + "<br />" );
document.write("节点第一个子元素的属性名" + x.firstChild.nodeValue + '<hr />');

x1 = document.getElementsByTagName("p");
document.write("use getElementsByTagName:  " + x1[0].innerHTML + "<br> getElementsbyClassName 用法 同 <hr>");   //这里要写下标，区分选的是哪个 p


// 在id为p1 下面加入了一个p 内容是 “this is new”
// 先向p追加一个文本节点，再向id p1的追加p 节点
var para = document.createElement("p");
var node = document.createTextNode("这个是在js里面新建追加的；this is new");
para.appendChild(node);     

var element = document.getElementById("div1");

var para2 = document.createElement("p");
var node2 = document.createTextNode("another new ,use the insertBefore放在某个前面");
para2.appendChild(node2);

var child = document.getElementById("p1");
// inserBefore
element.insertBefore(para2, child);
// appendChild
child.appendChild(para);
// remove  已知 父元素和 删除元素
var child2 = document.getElementById("del");
element.removeChild(child2); 

// replace 
var para3 = document.createElement("p");
var node3 = document.createTextNode("this has been replaced");
para3.appendChild(node3);

var child3 = document.getElementById("re");
element.replaceChild(para3, child3);


// 创建事件

function fun1() {
    document.body.style.backgroundColor = 'yellow'

}
function fun2() {
    document.getElementById("p1").style.backgroundColor = 'blue';
}

document.getElementById("jsonclick").onclick=function() {display()};

function display() {
    document.getElementById("jsonclick").innerHTML= Date();
}

// cookie 检测
function checkCookies() {
    // if (navigator.cookieEnabled == true) {
    //     alert("cookies is on");
    // }
    // else {
    //     alert('cookie is off');
    // }
}

// 导航节点
// firstchild
document.write(para.firstChild.nodeValue + "<br>");
// childNodes可以指定第几个子节点
document.write(para.childNodes[0].nodeValue + "<br>");
// 取父节点
document.write(para.parentNode.id + "<br>");
// lastChild
document.write(element.lastChild.id + "<br>");

// 下面alert的内容包括 html 标签名，内容，js打印内容
alert(document.body.innerHTML);
