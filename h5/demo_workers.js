/* 
* @Author: anchen
* @Date:   2017-04-25 14:59:03
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-25 14:59:13
*/

// $(document).ready(function(){
    
// });
var i=0;

function timedCount()
{
i=i+1;
postMessage(i);
setTimeout("timedCount()",500);
}

timedCount();