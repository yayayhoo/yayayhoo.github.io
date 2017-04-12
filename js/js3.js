/* 
* @Author: anchen
* @Date:   2017-04-11 11:24:49
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-11 16:17:01
*/

// $(document).ready(function(){
    
// });

// alert('aaa');
function aFun4() {
    // var x1;
    // var d = new Date().getDay();
    // switch (d)
    // {
    //     case 0:
    //         x1 = 'today is sunday';
    //         break;
    //     case 1;
    //         x1 = 'today is Monday';
    //         break;
    //     case 2;
    //         x1 = 'today is Tuesday';
    //         break;
    //     case 3;
    //         x1 = 'today is Wednesday';
    //         break;
    //     case 4;
    //         x1 = 'today is Thursday';
    //         break;
    //     case 5;
    //         x1 = 'today is Friday';
    //         break;
    //     case 6;
    //         x1 = 'today is Saturday';
    //         break;

    // }
    // document.getElementById('demo2').innerHTML = x1;
    // document.write(x1);
    // alert(x1);




var x;
var d=new Date().getDay();
switch (d)
  {
  case 0:
    x="Today it's Sunday";
    break;
  case 1:
    x="Today it's Monday";
    break;
  case 2:
    x="Today it's Tuesday";
    break;
  case 3:
    x="Today it's Wednesday";
    break;
  case 4:
    x="Today it's Thursday";
    break;
  case 5:
    x="Today it's Friday";
    break;
  case 6:
    x="Today it's Saturday";
    break;
  }
document.getElementById("demo1").innerHTML=x;
}

function aFun5() {
    var cars = ['bmw', 'volvo', 'saab', 'ford'];
    var x='', i = 0;
    while (i<5) {
        x += 'the item is ' + cars[i] + '<br />';
        i++;
        
    }
    document.getElementById('demo2').innerHTML = x;
}

function aFun6() {
    // var x1 = '', i=0;
    // do {
    //     x1 = x1 + 'the number is ' + i + '<br>';
    //     i++;
    // }while (i < 5)
    // document.getElementById('demo3').innerHTML = x1;
    var x="",i=0;
    do
      {
      x=x + "The number is " + i + "<br>";
      i++;
      }
    while (i<5)  
    document.getElementById("demo3").innerHTML=x;
}

function myFunction()
    {
    var x="",i=0;
    do
      {
      x=x + "The number is " + i + "<br>";
      i++;
      }
    while (i<5)  
    document.getElementById("demo").innerHTML=x;
    }

function myFun7() {

var cars=["BMW","Volvo","Saab","Ford"];
var x1;
var x2;

document.write('<p> this is from for :</p>')
for (;cars[i];) {
    x1 += cars[i];
    // document.write(cars[i]);
    i++;
}
document.getElementById('demo4').innerHTML = x1;

}


var cars=["BMW","Volvo","Saab","Ford"];
var x1;
var x2;
var i = 0;

document.write('<p> this is from for :</p>')
for (;cars[i];) {
    // x1 += cars[i];
    document.write(cars[i] + '<br>');
    i++;
}


document.write('<p> this is from while</p>')
i = 0;
while (cars[i]) {
    document.write(cars[i] + '<br>');
    i++; 
}

document.write('<h1>带标签的break:</h1>');
list: 
{
    document.write(cars[0] + '<br>');
    document.write(cars[1] + '<br>');
    document.write(cars[2] + '<br>');
    break list;
    document.write(cars[3] + '<br>');
    document.write(cars[4] + '<br>');
    document.write(cars[5] + '<br>');
}

function myFun8() {
    var x = '';
    var i = 0;

    for(; i < 10; i++) {
        if (i == 3) continue;
        x += 'the num is ' + i + '<br>';

    }
    document.getElementById('demo5').innerHTML = x;
}

function myFun9() {
    var txt='';

    try {
        addslert('welcomfe');
    }
    catch(err) {
        txt = 'this a error.\n\n';
        txt += err.message + '\n\n';
        txt += 'click ok to continue.\n\n';
        alert(txt);// \n is valid in here
        // document.write(txt);
    }
}

function myFun10() {
    try {
        var x = document.getElementById('demo7').value;
        // document.write(x);
        if (x=='') throw "it's null";
        if(isNaN(x)) throw 'no number';
        if(x < 5)   throw 'too small';
        if(x > 10)  throw 'too big';
        // else throw 'good.'
        if((x >= 5) && (x<=10)) throw "you are good."
    }
    catch(err) {
        var y = document.getElementById("show");
        // if (!(x>=5 && x=<10))
       y.innerHTML = 'err:' + err +'.';
        // else{ y.innerHTML = err;}
    }
}