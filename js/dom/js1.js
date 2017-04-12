/* 
* @Author: anchen
* @Date:   2017-04-11 19:58:55
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-11 20:09:49
*/

// $(document).ready(function(){
    
// });

// ***********
// 查找指定id的第一个p
// **********
// alert('fds');
var x = document.getElementById("main");

var y = x.getElementsByTagName('p');
document.write( "<p>this is from js: the first p is " + y[0].innerHTML + "</p>");
document.write('')