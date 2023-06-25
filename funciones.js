
// PAGINA LOGIN

var eye = document.getElementById('eye');
var password = document.getElementById('pass');

eye.addEventListener("click", function(){
    if (password.type === "password") {
        password.type = "text";
        eye.style.opacity = 0.8;
    } else {
        password.type = "password";
        eye.style.opacity = 0.2;
    }
})


var email = document.getElementById('email');

login.addEventListener("click", function(){
    if(password.value.length == 0 || email.value.length == 0){
        alert("Falta rellenar campos.")
    }
})


