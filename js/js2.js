/* 
* @Author: anchen
* @Date:   2017-04-11 10:06:05
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-11 12:59:53
*/




 // $(document).ready(function(){
    
 // }); 

function aFun() {
    document.getElementById('demo1').innerHTML = "my javascript";
}
document.write("<h1> this is from js.</h1>");

function aFun1() {
    document.write("wow, all gone...");
}

var txt = 'hello';
document.write(txt.length);

var y = 1;
var greeting;
greeting = (y > 0)? 'yes': 'no';//condition
document.write(greeting);

document.write('<p></p>');
document.write(3 == '3');//true
document.write(3 === '3');//false

if (3===3) document.write('yes');


var cars = ['bmw', 'volvo', 'saab', 'ford'];
for (var i =0; i < cars.length; i++) {
    document.write('<br />' +cars[i] + '<br />');
}
//x 只对应下标
for (x in cars) {
    document.write('<br />' +x + '<br />');
}


var person={fname:"John",lname:"Doe",age:25};
//x对应前面的属性名
for (x in person) {
    document.write('<br />' +x + '<br />');
}





person = new Object();
person.firstName = 'bill';
person.lastName = 'gates';
person.age = '45';
document.write(person.firstName);//yes
document.write(person[firstName]);//no

// function aFun4() {
//     var x1;
//     var d = new Date().getDay();
//     switch (d)
//     {
//         case 0:
//             x1 = 'today is sunday';
//             break;
//         case 1;
//             x1 = 'today is Monday';
//             break;
//         case 2;
//             x1 = 'today is Tuesday';
//             break;
//         case 3;
//             x1 = 'today is Wednesday';
//             break;
//         case 4;
//             x1 = 'today is Thursday';
//             break;
//         case 5;
//             x1 = 'today is Friday';
//             break;
//         case 6;
//             x1 = 'today is Saturday';
//             break;

//     }
//     document.getElementById('demo2').innerHTML = x1;
// }

function aFun2() {
    var x = 5;
    return x;
    alert(x);
}
function aFun3(name, job) {
    alert(name + 'is a ' + job);
}

