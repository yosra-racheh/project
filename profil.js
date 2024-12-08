let old = document.querySelector(".oldprofil")
let div2 =document.querySelector(".newprofil");
let user =document.getElementById ("user");

let username=localStorage.getItem("username");
console.log(old)

 if(username){
    console.log("yes")
    old.remove();
    div2.style.display="block";
    user.innerHTML=username;
         } 