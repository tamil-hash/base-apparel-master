var form=document.querySelector(".mail");
var text=document.querySelector(".text");
var errormsg=document.querySelector(".error-msg");
var erroricon=document.querySelector(".error-icon");
clearFields();
function clearFields(){
  text.value='';
}
form.addEventListener('click',function (event){
  event.preventDefault();
  var emailvalue=text.value.trim();
  if((event.target && event.target.nodeName === "BUTTON") || (event.target && event.target.nodeName === "IMG")){
    if(emailvalue === ""||(!validEmail(emailvalue))){
      text.className = "text error-box";
      errormsg.style.opacity = "1";
      erroricon.style.opacity = "1";
    }
    else {
      text.className = "text success-box";
      erroricon.style.opacity = "0";
      errormsg.style.opacity = "0";
    }
  }

}
);
function validEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}
