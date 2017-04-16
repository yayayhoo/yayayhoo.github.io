/* 
* @Author: anchen
* @Date:   2017-04-12 16:47:53
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-12 17:21:00
*/

// $(document).ready(function(){
    
// });

// 逻辑值判断
// alert('dfsad');

var b1 = new Boolean(0);
var b2 = new Boolean(1);
var b3 = new Boolean("")
var b4 = new Boolean(NaN);
var b5 = new Boolean("false");
var b6 = new Boolean(null);

document.write("0 " + b1 + "<br>");
document.write("1 " + b2 + "<br>");
document.write("空格  " + b3 + "<br>");
document.write("NaN " + b4 + "<br>");
document.write("null " + b6 + "<br>");
document.write("false字符串 " + b5 + "<br>");
document.write("false字符串 " + b5 + "<br>");
// document.write("null " + b6 + "<br>");

// ***********************
// @math
// ***************

document.write(Math.round(0.5) + "<br>");
document.write(Math.round(-0.5) + "<br>");
document.write(Math.round(3.4) + "<br>");
// random
document.write(Math.random() + "<br>");

// max min
document.write(Math.max(3.3, 2, 6, 13.3));
document.write(Math.E + "<br>");
document.write(Math.PI + "<br>");
document.write(Math.SQRT2 + "<br> <hr />" );

// ********************
// @正则表达式
// *******************

var patt1 = new RegExp("e");

document.write(patt1.test("Tehe best thins in life") + "<br>");
document.write(patt1.exec("Tehe best thins in life") + "<br>");

var patt2 = new RegExp("e", "g");

do {
    result = patt2.exec("the best things is live ");
    document.write(result);

}while (result != null)

document.write("<br>");
// compile 可以更改匹配的字符
patt1.compile("d");
document.write(patt1.test("Tehe best thins in life") + "<br>");
