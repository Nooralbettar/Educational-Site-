         function validateForm()  {
             var u = document.getElementById("username").value;
             var p = document.getElementById("password").value;

             if(u== "") {
                 alert("Please enter your Username");
                 return false;
             }else if (u.length <= 5) {
                alert("Username must be more than 5 characters");
                 return false;
             }
             if(p == "") {
                 alert("Please enter you Password");
                 return false;
             }else if (u.length <= 5) {
                alert("Password must be more than 5 characters");
                 return false;
             }

             alert("All datas are valid!, send it to the server!")

         }




  // validate number
  var pattern = /^[\d\-+\.\s]+$/;
  var el = document.getElementById("tel");
  if (!pattern.test(el.value))  msg += "Telephone number can only have digits and separators. ";
  
  if (msg != "") {
    alert(msg);
    return false;
  } else return true;
 