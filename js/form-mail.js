/* 
* @Author: anchen
* @Date:   2017-04-11 17:22:21
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-11 19:54:47
*/

// $(document).ready(function(){
    
// });
function validate_email(field, alerttxt){
    with (field) {
        apos = value.indexOf("@")
        dotpos = value.lastIndexOf(".")
        if (apos < 1 || dotpos - apos < 2) {
            alert(alerttxt);
            return false
        }
        else {
            return true
        }
    }
}
// ***************************
// 邮箱地址检查
// ***************************

function validate_form(thisform) {
    with (thisform) {
        if (validate_email(email, 'not a valid email address!') == false) {
            email.focus();
            return false;
        }
    }
}

// <script type="text/javascript">
// function validate_email(field,alerttxt)
// {
// with (field)
// {
// apos=value.indexOf("@")
// dotpos=value.lastIndexOf(".")
// if (apos<1||dotpos-apos<2) 
//   {alert(alerttxt);return false}
// else {return true}
// }
// }

// function validate_form(thisform)
// {
// with (thisform)
// {
// if (validate_email(email,"Not a valid e-mail address!")==false)
//   {email.focus();return false}
// }
// }
// </script>