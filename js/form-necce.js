/* 
* @Author: anchen
* @Date:   2017-04-11 17:18:25
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-11 19:49:04
*/

// $(document).ready(function(){
    
// });
//***********************
// 必须填写的表单，前面的不行，后面的可以
// **********************

// function validate_required(filed, alerttxt) {
//     with (field) {
//         if (value == null || value == '') {
//             alert(alerttxt);
//             return false
//         }
//         else return true
//     }
// }


// function validate_form(thisform) {
//     with (thisform)
//     {
//         if (validate_required(email, "email must be fiilled out") == false) {
//             email.focus();
//             return false 
//         }
//     }
// }



function validate_required(field,alerttxt)
{
with (field)
  {
  if (value==null||value=="")
    {alert(alerttxt);return false}
  else {return true}
  }
}

function validate_form(thisform)
{
with (thisform)
  {
  if (validate_required(email,"Email must be filled out!")==false)
    {email.focus();return false}
  }
}