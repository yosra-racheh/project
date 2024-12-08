let username = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password")
let btnregister = document.getElementById("register");


btnregister.addEventListener("click",function(o){
    
  o.preventDefault();  

if(username.value===""||email.value===""||password.value===""){
    alert("remplir les champs vide");
  }else{
    localStorage.setItem("username",username.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);
    setTimeout (function () {
        window.location.href = "login.html";
   }, 1000);
      
  }

});