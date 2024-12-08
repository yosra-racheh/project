let username = document.getElementById("name");
let password = document.getElementById("psw");
let login = document.getElementById("btnlogin");
   


let getuser=localStorage.getItem("username")
let getpaswword=localStorage.getItem("password")

login.addEventListener("click",function(o){
    o.preventDefault();
    if(username.value===""||password.value===""){
        alert("remplir les champs vide");
    } else{
    if (getuser && getuser===username.value &&  getpaswword && getpaswword=== password.value) {
        setTimeout(() => {
            window.location="profil.html" ;
            }, 1500);
        
        
    } else {
        console.log("user n'existe pas");
        
    }  }

});