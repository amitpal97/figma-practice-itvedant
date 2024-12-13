
// heade button

document.getElementById("loginBtn").addEventListener("click", function () {
    window.location.href = "./login.html"
})
document.getElementById("signUpBtn").addEventListener("click", function () {
    window.location.href = "./signUp.html"
})


function signup(){
let signupformbtn=  document.getElementById("signupformbtn")
console.log("signupformbtn",signupformbtn);

signupformbtn.addEventListener("click", function (e) {
        
        console.log(e);
        e.preventDefault();
        window.location.href = "./login.html"
    })
}

function login(){
let formloginFormBtn=document.getElementById("formloginFormBtn")
console.log("formloginFormBtn",formloginFormBtn);

formloginFormBtn.addEventListener("click", function (e) {
        console.log("login");
        e.preventDefault();
        window.location.href = "./screen.html"
        
    })
}

try{

    signup()   

}
catch(error){
console.log(error);

}


try{

    login();
}
catch(eror){
console.log(error);

}








// Function to show Signup form and hide others
// function showSignupForm() {
   
// }
// showSignupForm();

// Function to show Login form and hide others
// function showLoginForm() {
    

