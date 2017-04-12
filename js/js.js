/* 
* @Author: anchen
* @Date:   2017-04-08 21:59:10
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-08 23:54:47
*/

// $(document).ready(function(){});
    // document.write('<h1> This is a heading from javascript.</h1>');
    // document.getElementById();
    // console.log('hello.');
    // alert("你好！")
    // 
// alert('shima');

// 访问id 改变内容
document.getElementById('h1').innerHTML='jjjjjMy first js.'
document.write('<h1> this is from javascript</h1>')

function myFunc() {
    document.write('oh, no');
}

// 下面这行代码显示在控制台，不显示在页面上。
console.log('is in console?');

// 显示效果 自动减缩进，只保留一个空格
document.write('hello       \
                    world.    ');

// 变量
// 在代码开始处，统一命名
var someVarible='gate'; //驼峰命名
var _jerk;              //声明时候都有初始值。无类型 undefined ，这种类型进行运算后会有结果NaN，
var age = 45;

//null boolean object symbol
//
var num = 3 + 3;
var num1 = 12e-3;
var num2 = 12.99;

var arr = new Arry();
arr[0] = 'saab';    //基于0
arr[1] = 'volvo';
arr[2] = 'bmw';
var a = arr.length;

// 
var arr1 = new Array('assv', 'volvo', 'bmw');

var arr2 = ['like', 5]
arr2.push(4);
arr2.pop();
arr2.shift();


//对象。有各自的属性和方法
var person = {
    firstName: 'john',
    lastName: 'dog',
    id      : 5566
};

//或
person1 = new Object();
person.firstName = 'bill';
person.lastName = 'gates';
person.age = 56;


// 两种寻址，更喜欢后者。
name = person.lastName;
name = person['lastname'];

var s = 'firstName';
var s1 = person[s]; //s 不能加引号，因为调用的是s的值， 不是 属性s




var ca = null;

var cd = 'nangs';
//字符串 不可变


// 函数语法


// if else
function foo(x) {   //多变量，逗号隔离
    if(x < 1) {
        return 'less than one';
    }
    else if (x < 2) {
        return 'less than two';
    }
    else {
        return 'more than two';
    }
}

function myFu() {
    var x1 = document.getElementById('demo').value;
    if (x1 == ''|| isNaN(x1) ) {
        alert('no numeric');

    }
}