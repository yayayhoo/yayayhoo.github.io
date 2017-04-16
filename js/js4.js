/* 
* @Author: anchen
* @Date:   2017-04-12 17:43:44
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-12 22:14:58
*/

// $(document).ready(function(){
    
// });
// 浏览器名称和版本
var browser = navigator.appName
var b_version = navigator.appVersion
var version = parseFloat(b_version)

document.write("浏览器名称：" + browser + "<br>")
document.write("浏览器版本：" + version + "<hr />");

// 浏览器 更多信息
document.write("<p>浏览器：");
document.write(navigator.appName + "</p>");
document.write("<p>浏览器版本");
document.write(navigator.appVersion + "</p>");
document.write("<p>代码");
document.write(navigator.appCodeName + "</p>");
document.write("<p>平台");
document.write(navigator.platform + "</p>");
document.write("<p>cookie 启用");
document.write(navigator.cookieEnabled + "</p>");
document.write("<p>浏览器用户代理报头");
document.write(navigator.userAgent + "</p> <hr />");

// 浏览器全部信息
var x = navigator;
document.write("CodeName=" + x.appCodeName);
document.write("<br />");
document.write("MinorVersion=" + x.appMinorVersion);
document.write("<br />");
document.write("Name=" + x.appName);
document.write("<br />");
document.write("Version=" + x.appVersion);
document.write("<br />");
document.write("CookieEnabled=" + x.cookieEnabled);
document.write("<br />");
document.write("CPUClass=" + x.cpuClass);
document.write("<br />");
document.write("OnLine=" + x.onLine);
document.write("<br />");
document.write("Platform=" + x.platform);
document.write("<br />");
document.write("UA=" + x.userAgent);
document.write("<br />");
document.write("BrowserLanguage=" + x.browserLanguage);
document.write("<br />");
document.write("SystemLanguage=" + x.systemLanguage);
document.write("<br />");
document.write("UserLanguage=" + x.userLanguage + "<hr />");

// 检测浏览器版本，给予提示
// 在body加  onload="detectBrowser()"
function detectBrowser () {
    var browser = navigator.appName;
    var b_version = navigator.appVersion;
    var version = parseFloat(b_version);

    if ((browser == "Netscape" || browser == "Microsoft Internet Explorer") && (version >= 4)) {
        // alert("your browser is advanced.")
    }
    else {
        // alert("it's time to update.");
    }
}


// 创建欢迎cookie

// k



function getCookie(c_name)
{
if (document.cookie.length>0)
{ 
c_start=document.cookie.indexOf(c_name + "=")
if (c_start!=-1)
{ 
c_start=c_start + c_name.length+1 
c_end=document.cookie.indexOf(";",c_start)
if (c_end==-1) c_end=document.cookie.length
return unescape(document.cookie.substring(c_start,c_end))
} 
}
return ""
}

function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : "; expires="+exdate.toGMTString())
}

function checkCookie()
{
username=getCookie('username')
if (username!=null && username!="")
  {alert('Welcome again '+username+'!')}
else 
  {
  username=prompt('Please enter your name:',"")
  if (username!=null && username!="")
    {
    setCookie('username',username,365)
    }
  }
}