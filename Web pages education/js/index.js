function book(){
   swal("Welcome To Our Website")
}

  function toggle_visibility(id,but) {
       var e = document.getElementById(id);
       var a = document.getElementById(but);
       if(e.style.display == 'block')
          e.style.display = 'none';

       else
          e.style.display = 'block';
          a.innerHTML="less Details";
          
          
    }


