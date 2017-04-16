/* 
* @Author: anchen
* @Date:   2017-04-15 11:28:38
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-15 20:39:55
*/

// $(document).ready(function(){
    
// });

// 例子来自http://www.w3school.com.cn/example/hdom_examples.asp

// 更改一个链接的文本 url target
function changeLink() {
    document.getElementById("baidu").innerHTML = "to sina";
    document.getElementById("baidu").href = "http://www.sina.com.cn";
    document.getElementById("baidu").target = "_blank";

}

document.write("<hr />");

// 获取焦点 focus 失去焦点blur
function getFocus() {
    document.getElementById("baidu").focus();
}

function lostFocus() {

    document.getElementById("baidu").blur();
}

// 向超链接添加快捷键
// 在body 方法
function accesskey() {
    document.getElementById('w3').accessKey="w";
    document.getElementById("sina").accessKey = "d";
}

// 返回当前document的标题

document.write("the title is:" + document.title + "<br>");
document.write("the URL is:" + document.URL + "<br>");
// document.write("本文档的域名:" + document.domain + "<br>")
document.write("本文档a 带name 属性的数量:" + document.anchors.length + "<br>");
document.write("本文档form 带name 属性的数量:" + document.forms.length + "<br>");
document.write("本文档form 1:" + document.forms[0].name + "<br>");
document.write("本文档form 2:" + document.getElementById("form2").name + "<br>");
document.write("referrer属性返回加载本文档的文档的URL:" + document.referrer + "<br>");



// 打开一个新文档，添加一些文本，然后关闭

function createNewDoc() {
    var newDoc = document.open("1.html", 'replace');
    var txt = "<html> <body> coding is great !</body></html>";
    newDoc.write(txt);
    newDoc.close();
}

// 鼠标点击 显示 body方法 onmousedown="whichButton(event)"
function whichButton(event) {
    var btnNum = event.button;
    if (btnNum == 2) {
        alert("you click right");
    }
    else if (btnNum == 0)
    {
        alert("you click left");
    }
    else if (btnNum == 1) {
        alert("you click middle")
    }
    else {
        alert("你点击了" + btnNum+ "号键，我不能确定ta 的名称")
    }
}

// 获取鼠标指针的xy坐标  oumousedown="showCoord(event)"
// 不知道和下面那个的区别
function showCoord(event) {
    x = event.clientX;
    y = event.clientY;
    alert("x is "+ x + "y is "+ y);

}

// 指针相对于屏幕的 x y 坐标
oumousedown = "coord(event)"
function coordinates(event) {
    x = event.screenX;
    y = event.screenY;
    alert("X = " + x + "Y = " +y);
}

// 显示按键的Unicode 码
function whichButton(event) {
    alert(event.keyCode);
}

// from input 对象