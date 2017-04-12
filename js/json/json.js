/* 
* @Author: anchen
* @Date:   2017-04-12 09:40:39
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-12 11:43:53
*/

// $(document).ready(function(){
    
// });

// toJSON

var message = "hello world.";
var x = message.length;

var x1 = message.toUpperCase();

// several ways to create json
// 1
person1 = new Object();
person1.firstName = "Bill";
person1.lastName = "Gates";
person1.age = 34;
person1.eyeColor = "blue";
document.write(person1.firstName + " is " + person1.age + " years old.");
// 2
person2 = {
    firstName: "Bill",
    lastName: "Gates",
    age: 34,
    eyeColor: "blue"
}
document.write(person2.firstName + " is " + person2.age + " years old.");
// 3
function person3 (firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;

    // add method
    this.changeName = changeName;
    function changeName (name) {
        this.lastName = name;
    }
}
myFather = new person3("Bill", "Gates", 53, "blue");
document.write(myFather.firstName + " is " + myFather.age + " years old." + "<p></p>");

// use defined method
myFather.changeName ("Steve");
document.write(myFather.lastName);

var txt = '';
for (x in person1) {
    txt = txt + person1[x];
}
document.write(txt + "<hr />");



// 
var x2;
document.write("<p>整数有效位数17");
x2 = 12345678901234567890;
document.write(x2 + "</p>");

document.write("<p> 浮点数计算不准确0.2 + 0.1 = ");
x2 = 0.2 + 0.1;
document.write(x2 +"</p> ");

document.write("<p> 想要准确的结果，先乘再除：");
x2 = (0.2 * 10 + 0.1 * 10) / 10;
document.write(x2 + "</p>" + "<hr>");

var txt1 = "Hello World!";

document.write("<p> big: "　+ txt.big() + "</p>");
document.write("<p> small: "　+ txt.small() + "</p>");
document.write("<p> bold: "　+ txt.bold() + "</p>");
document.write("<p> italics: "　+ txt.italics() + "</p>");
document.write("<p> blink: "　+ txt.blink() + "</p>");
document.write("<p> fixed: "　+ txt.fixed() + "</p>");
document.write("<p> strike: "　+ txt.strike() + "</p>");
document.write("<p> fontcolor: "　+ txt.fontcolor("red") + "</p>");
document.write("<p> fontsize: "　+ txt.fontsize(16) + "</p>");
document.write("<p> sub: "　+ txt.sub() + "</p>");
document.write("<p> sup: "　+ txt.sup() + "</p>");
document.write("<p> link: "　+ txt.link("http://www.baidu.com") + "</p>" + "<hr />");

var str = "Hello world";

document.write(str.indexOf("Hello") +" ");
document.write(str.indexOf("hello") +" ");
document.write(str.indexOf("world") +"  indexOf找到了立即输出位置，找不到 -1 <br>");


document.write(str.match("Hello") +" ");
document.write(str.match("hello") +" ");
document.write(str.match("world") +"  match找到了输出字符，找不到 null<br>");

document.write("replace替换:" + str.replace( /world/, "World")+ "<hr />");

// time date
document.write(Date());
var d = new Date();
document.write("从 1970/01/01 至今已过去 " + d.getTime() + " 毫秒");

var d1 =new Date();
d1.setFullYear(1992, 5, 5);
document.write("setFullYear设置的时间" + d1);

document.write(d.toUTCString()+ "时间格式变了");


var weekday=new Array(7)
weekday[0]="星期日"
weekday[1]="星期一"
weekday[2]="星期二"
weekday[3]="星期三"
weekday[4]="星期四"
weekday[5]="星期五"
weekday[6]="星期六"

document.write("     今天是" + weekday[d.getDay()]+ '<hr />');

// 动态时间，自动刷新

// @自己的程序不运行啊
// function startTime() {
//     var today = new Date()
//     var h = today.getHours()
//     var m = today.getMinutes()
//     var s = today.getSeconds()

//     m = checkTime(m)
//     a = checkTime(s)

//     document.getElementById("time").innerHTML = h +":" + m + ":" s
//     // document.write(h +":" + m + ":" s);

//     t = setTimeout("startTime()", 500)
// }

// function checkTime(i) {
//     if (i < 10)
//     {
//         i = "0" + i
//         return i
//     }

// }

function startTime()
{
var today=new Date()
var h=today.getHours()
var m=today.getMinutes()
var s=today.getSeconds()
// add a zero in front of numbers<10
m=checkTime(m)
s=checkTime(s)
document.getElementById('time').innerHTML=h+":"+m+":"+s
t=setTimeout('startTime()',500)
}

function checkTime(i)
{
if (i<10) 
  {i="0" + i}
  return i
}


// array
// 
// 

// 1
var arr1 = new Array();
arr1[0] = 'fdsf';
arr1[1] = "dafds";
arr1[2] = "jack";
// 2
var arr2 = new Array("jh", "fjhgsjhd", "weq");

document.write(arr1.concat(arr2) + "<br>");


document.write(arr1.join() + "<br>");
document.write();
document.write();