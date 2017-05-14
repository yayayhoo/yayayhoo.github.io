/* 
* @Author: anchen
* @Date:   2017-04-15 20:41:09
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-29 16:24:12
*/

// 当$符号有冲突，可用下面的语句自定义符号
// var jQ = jQuery.noConflict();
// // 
// // 
// jQ(document).ready(function(){
//     jQ("p").click(function(){
//         jQ(this).hide();          
        
//     })
//     jQ(".buttonClick2").click(function(){
//         jQ("p").hide();
//     }) ;

//     jQ("button.buttonClick1").click(function() {
//         jQ(this).hide();
//     })
//     jQ("button#buttonClick1").click(function() {
//         jQ("#test").hide();
//     });

//     jQ(".buttonClick4").click(function() {
//         jQ("p").css("background-color", " red");
//     });

// });
//更改$后 同样代码有效果


$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();          
        
    })
    $(".buttonClick2").click(function(){
        $("p").hide();
    }) ;

    $("button.buttonClick1").click(function() {
        $(this).hide();
    })
    $("button#buttonClick1").click(function() {
        $("#test").hide();
    });

    $(".buttonClick4").click(function() {
        $("p").css("background-color", " red");
    });

    $(".hide").click(function  (argument) {
        // body...
        // $(".ex").hide("slow");
        $(".ex").hide(1000);
    })
    $(".show").click(function  (argument) {
        // body...
        $(".ex").show("slow");
    })

    $(".toggle").click(function(event) {
        /* Act on the event */
        $(".ex").toggle(1000);
    });

    $(".fadeIn").click(function(event) {
        /* Act on the event */
        $(".ex").fadeIn(1000);
    });

    $(".fadeOut").click(function(event) {
        /* Act on the event */
        $(".ex").fadeOut(1000);
    });
    $(".fadeToggle").click(function() {
        $(".ex").fadeToggle(1000);
            
       
    })
    $(".fadeTo").click(function(event) {
        $(".ex").fadeTo("slow", 0.12);
    });

    $(".animate").click(function(event) {
        /* Act on the event */
        $("p").animate({
            borderWidth: "10px",
            });

    });
    $(".reset").click(function(event) {
        /* Act on the event */
        $("p").animate({
            borderWidth: "1px",
            });
    });
    $(".animate2").click(function(event) {
        /* Act on the event */
        $("p").animate({letterSpacing: "10px"});
    });


    // animate 修改属性 只要在（）里面的都是逗号，隔开
    // clearQueue 暂停动效
    $(".start").click(function(event) {
        /* Act on the event */
        $(".box").animate({
            height: 300},
            "slow");
        $(".box").animate({
            width: 300},
            "slow");

      


        $(".box").queue(function() {
            $(this).css(
                "background-color",'green'
            );
            $(this).dequeue();
        });
        $(".box").animate({
            width: 100
        }, "slow");
        $(".box").animate({
            height: 100
        }, "slow");
    });

    $(".stop").click(function(event) {
        /* Act on the event */
        $(".box").clearQueue();
    });

    $(".slideUp").click(function(event) {
        /* Act on the event */
        $("p").slideUp();
    });
    $(".slideDown").click(function(event) {
        /* Act on the event */
        $("p").slideDown();
    });
    $(".slideToggle").click(function(event) {
        /* Act on the event */
        $("p").slideToggle(3444);
    });


    $(".move").click(function(event) {
           $(".moveTo").animate({
               left: '250px'
           }, 2000);
    });

    $(".multi").click(function(event) {
        $(".multiCss").animate({
            left: '200px',
            opacity: "0.6",
            height: "100px",
            width: "100px"
            });
    
    });

    $(".plus").click(function(event) {
            $(".To").animate({
                left: "200px",
                height: "+=50px",
                width: "+=50px"
            })
    
    });

    $(".minus").click(function(event) {
            $(".To").animate({
                // marginRight: "200px",
                height: "-=50px",
                width: "-=50px"});
    
    });
    $(".heightToggle").click(function(event) {
            $(".To").animate({
                height: "toggle"});
    
    });

    $(".animate3").click(function(event) {
            var a=$(".animate3To");
            a.animate({height:'300px',opacity:'0.4'},"slow");
            // a.animate({height: "100px"})
            a.animate({left: '1100px'}, 3000);
            a.animate({fontSize: '3em'});
    
    });

    $(".stop2").click(function(event) {
        /* Act on the event */
        $(".animate3To").stop();
    });
    $(".stop3").click(function(event) {
        /* Act on the event */
        $(".animate3To").stop(true);
    });
    $(".stop4").click(function(event) {
        /* Act on the event */
        $(".animate3To").stop(true,true);
    });
    $(".back").click(function(event) {
        
        $(".animate3To").animate({height: "200px", opacity: "1",  left: "0",   fontSize: "1em"});
    });


    // 两个 对比，用和没用 callback
    $(".div1 .hide").click(function(event) {
        $("p.callback").hide(200, function  () {
            alert("message")
        })
    });

    $(".div2 .hide").click(function(event) {
        $(".div2 p.callback").hide('200');
        alert("message");
    });

    $(".div3 .chain").click(function(event) {
        $(".div3 p").css("color", "red")
        .slideUp(1000)
        .slideDown(1000, function() {
            
        });
    });


// html dom  .text .html .val
    $(".div4 .btn1").click(function(event) {
        alert("text: " + $(".div4 p").text());
    });
    $(".div4 .btn2").click(function(event) {
        alert("html: " + $(".div4 p").html());
    });
    $(".div4 .btn3").click(function(event) {
        alert("message: " + $(".div4 input").val());
    });
    $('.div5 .btn1').click(function(event) {
        $(".div5 .p1").text("sna q");
    });
    $('.div5 .btn3').click(function(event) {
        $(".div5 input").val("sna q");
    });
    $('.div5 .btn2').click(function(event) {
        $(".div5 .p2").html("sn <span>sankou</span> <b>fdsf</b>a <em>fdsfdsf</em>q");
    });

    $(".div5 .btn4").click(function(event) {
        $(".div5 a").attr("href", "http://www.sina.com.cn/")
    });
    // 改变多个值 需要大括号 属性值对：
    $(".div5 .btn5").click(function(event) {
        $(".div5 a").attr({"href": "http://www.w3school.com.cn/", "title": "w3cschool"})
    });

    $(".div5 .btn6").click(function(event) {
        $(".div5 a").attr(
            "href", function(i, origValue) {
                return origValue + "/hhh";
            
        });
    });
    $(".div5 .btn7").click(function(event) {
        $(".div5 .p1").text(function (i, origText) {
            return "old text: " + origText + " .now:" + i + ".   ";
        })
    });
    $(".div5 .btn8").click(function(event) {
        $(".div5 .p1").append('Some text');
    });
    $(".div5 .btn9").click(function(event) {
        $(".div5 .p1").prepend('Some text');
    });

    $(".div5 .before").click(function(event) {
        $(".div5 .p2").before('<span><b>before</b></span>');
    });
    
    $(".div5 .after").click(function(event) {
        $(".div5 .p2").after('<span>after</span>');
    });

    $(".btn11").click(function(event) {
        $(".div5").remove()
    });
    $(".btn13").click(function(event) {
        $("#div5").remove(".p2")
    });
    $(".btn12").click(function(event) {
        $(".div5").empty()
    });

    $(".div6 .btn1").click(function(event) {
        $("h4").addClass('blue');
        $("p").addClass('important');
    });

    $(".div6 .btn2").click(function(event) {
        $("p, h4").removeClass('blue');
        $("h4").removeClass('important');
    });
    $(".div6 .btn3").click(function(event) {
        $("h4, p").toggleClass("blue");
    });

    $(".div7 .btn1").click(function(event) {
        // var color = $(".div7 p").css("color");
        alert("color: " + $(".div7 p").css("color"));
    });

    $(".div7 .btn2").click(function(event) {
        $(".div7 p").css({
            "background-color": 'red',
            "color": 'white'
        });
    });


    $(".div7 .btn3").click(function(event) {
        var txt = "";
        txt += "width : " + $("#div1").width() + "<br />";
        txt += "height : " + $("#div1").height() + "<br />";
        $("#div1").html(txt)
    });

    $(".div7 .btn4").click(function(event) {
        var txt = "";
        txt += "innerWidth : " + $("#div1").innerWidth() + "<br />";
        txt += "innerHeight : " + $("#div1").innerHeight() + "<br />";
        $("#div1").html(txt)
    });
    $(".div7 .btn5").click(function(event) {
        var txt = "";
        txt += "outerWidth : " + $("#div1").outerWidth() + "<br />";
        txt += "outerHeight : " + $("#div1").outerHeight() + "<br />";
        $("#div1").html(txt)
    });

    $(".div7 .btn6").click(function(event) {
        var txt = "";
        txt += "outerWidth : " + $(document).outerWidth() + "<br />";
        txt += "outerHeight : " + $(document).outerHeight() + "<br />";
        $("#doc").html(txt)
    });

    $(".div7 .btn7").click(function(event) {
        $("#div1").height(300).width(300);
    });

    $(".div7 .btn7").click(function(event) {
        $("span").parents().css({
            "background": 'green',
            "font-size": '50px'
        });
    });
    $(".div7 .btn8").click(function(event) {
        $("span").parentsUntil("div").css({
            "background": 'green',
            "font-size": '50px'
        });
    });

    $(".div7 .btn9").click(function(event) {
        $(".div7").children().css({
            "border": '1px solid black',
            "color": 'green'
        });
    });

    $('.div7 .btn10').click(function(event) {
        $(".div7").find('p').css({
            "border": '1px solid green',
            
        });
    });
    $('.div7 .btn11').click(function(event) {
        $(this).siblings().css({
            "border": '1px solid green',
            
        });
    });
    
    $('.div7 .btn12').click(function(event) {
        $(this).next().css({
            "border": '1px solid green',
            
        });
    });
    $('.div7 .btn13').click(function(event) {
        $(this).nextAll().css({
            "border": '1px solid green',
            
        });
    });

    $('.div7 .btn14').click(function(event) {
        $(this).nextUntil(".btn11").css({
            "border": '1px solid green',
            
        });
    });
    $(".div8 .btn1").click(function(event) {
        $('.div7 p').first().css({
            "border": 'solid 2px blue',
            
        });
    });

    $(".div8 .btn2").click(function(event) {
        $('.div7 p').last().css({
            "border": 'solid 2px blue',
            
        });
    });
    $(".div8 .btn3").click(function(event) {
        $('.div7 p').eq(1).css({
            "border": 'solid 2px blue',
            
        });
    });

    $(".div8 .btn4").click(function(event) {
        $('button').filter(".btn1").css({
            "border": 'solid 2px blue',
            "font-size": "50px"
            
        });
    });

    $(".div8 .btn5").click(function(event) {
        $('button').not(".btn1").css({
            "border": 'solid 2px blue',
            "font-size": "50px"
            
        });
    });

    $(".div9 .btn1").click(function(event) {
        $("#ajax").load('jq_demo.txt', function(responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                alert("ok");
            }
            if (statusTxt == "error") {
                alert("error: " + xhr.status+"  "+ xhr.statusText);
            }
        });
    });


});

function appendText() {
    // html
    var text1 = "<p>this is text</p>";
    // jq
    var text2 = $("<p></p>").text("this is text2");
    // dom
    var text3 = document.createElement("p");
    text3.innerHTML = "text3";

    $(".div5").append(text1, text2, text3);

}

function afterText() {
    var text1 = "<p>after1</p>"
    var text2 = $("<p></p>").text("<b>after2</b>");
    var text3 = document.createElement("p");
    text3.innerHTML = "after3";

    $(".div5 .p2").after(text1, text2, text3); 
}