/* 
* @Author: anchen
* @Date:   2017-04-29 17:10:06
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-30 16:43:51
*/

$(document).ready(function(){
    $('.div1 .btn1').click(function(event) {   
        $("div").css('border', '1px solid green')
            // .add("p")
            .add('<p>hellfsdfsdfasdfo</p>')
            .css('background', 'yellow');
        });

    $(".div1 .btn2").click(function(event) {
        $("div").find("p").addBack().addClass("border-yellow");
    });

    $(".div1 .btn3").click(function(event) {
        
        
        $( "div" ).css( "border", "2px solid red" )
          .add( "<p>fsd</p>" )
          .css( "background", "blue" )
          .appendTo('.div1');
    });

    $(".div1 .btn4").click(function(event) {
        $("p").clone().appendTo('.div1');
    });

    $(".div1 .btn5").click(function(event) {

        $("p").add(document.getElementById("a")).css('background', 'yellow');
        
    });

    // 含有 指定类（hasClass判断） 隐藏
    $(".div1 p").click(function(event) {
        if ($(this).hasClass('test')) {
            $(this).hide('400');
        }
    });

    $(".div2 .btn1").click(function(event) {
        // not work
        // $(".div2").find('a').eq(2).text().replace("foo", "bar");

        // work
        var thirdLink = $(".div2").find('a').eq(2);
        var linkText = thirdLink.text().replace("foo", "bar");
        thirdLink.text(linkText);
        
    });

    // 使用end
    $(".div2 .btn2").click(function(event) {
        $( ".div2" )
            .find('p')
                .html("Some text and markup")
                .end()
                .end()
            .find( "a" )
            .eq( 2 )
                .html( " h3!" )
                .end() // Restores the selection to all h3s in #content
            .eq( 0 )
                .html( " h3!" )
                .end()
            .eq( 1 )
                .html( " h3!" );



        
    });

    $(".div2 .btn3").click(function(event) {
        
        $( ".div2 a:first" ).html( "New <strong>first</strong> paragraph!" );
    });

    
    $(".div2 .btn4").click(function(event) {
        
        $( ".div2 a:first" ).appendTo('.div2');
    });  
    $(".div2 .btn5").click(function(event) {
        
        $( ".div2" ).append($ ('.div2 a:first'));
    });
    $(".div2 .btn6").click(function(event) {
        
        $( ".div2 a:first" ).clone().appendTo('.div2');
    });

// detach 不行
    $(".div2 .btn7").click(function(event) {
        a = $(".div2 a")
        if (a) {
            a.appendTo('.div2');
            a = null;

        }
        else {
            a = $(".div2 a").detach();
        }
    });

    $("<p>this is a new from jq</p>").appendTo('body');

    $( "<li class=\"new\">new in jq</li>" ).insertBefore('.div2');
    
    $( "<a/>", {
        html: "This is a <strong>new</strong> link",
        "class": "new",
        href: "foo.html"
    }).appendTo('.div2');


// add multi-elements to a container
    var myItems = [];
    var myList = $( ".div3" );
     
    for ( var i = 0; i < 100; i++ ) {
        myItems.push( "<li>item " + i + "</li>" );
    }
     
    myList.append( myItems.join( "" ) );
    myList.appendTo(".div3");



    var headings = $( "a" );
    // 3 ways
    var firstHeading = headings.eq(0);
    var firstHeadingElem2 = $("a").get(0);
    var firstHeadingElem3 = $("a")[0];

    alert( headings.length );

// 自动去除前后的空格
    // some utility methods
    $.trim("         lot of money        ");

// 遍历数组
    $.each(["foo", "bar", "baz"], function(index, val) {
         console.log("elemenent "+index+" is " + val);
    });
    $.each({foo: "bar", baz: "bim"}, function(i, j) {
         console.log(i + " : " + j);
    });

// 判断值是否在数组中
    var myArr = [ 1, 2, 4, 5];
    if ($.inArray(3, myArr) !== -1) {
        console.log("found it");
    }


// 改变键对值
    var firstObject = {foo: "bar", a: "b"};
    var secondObject = {foo: "baz"};
    var newObject = $.extend(firstObject, secondObject);
    console.log( firstObject.foo );
    console.log( newObject.foo)
    // 不改变firstObject本身
    var firstObject = { foo: "bar", a: "b" };
    var secondObject = { foo: "baz" };
     
    var newObject = $.extend( {}, firstObject, secondObject );
     
    console.log( firstObject.foo ); // "bar"
    console.log( newObject.foo ); // "baz"


// 把运行范围设置成第二个参数
    var myFun = function() {
        console.log(this);
    };
    var myOb = {foo: "bar"};
    myFun();        //window
    var myProxyFun = $.proxy(myFun, myOb);
    myProxyFun();       //myOb
    // 如果有一个带有方法的对象，可以传递对象和方法的名字来返回 一个在给定范围的对象
    var myOb1 = {
        myFn: function () {
            console.log(this);
        }
    }
    $("#ff").click(myOb1.myFn );
    $("#ff").click($.proxy(myOb1, "myFn"));


// type
    $.isArray([])       //true
    $.isFunction(function() {}); //true
    $.isNumeric(3.3);       //true

});