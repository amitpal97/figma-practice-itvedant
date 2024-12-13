
// heade button

document.getElementById("loginBtn").addEventListener("click", function () {
    window.location.href = "./login.html"
})
document.getElementById("signUpBtn").addEventListener("click", function () {
    window.location.href = "./signUp.html"
})


function signup(){

    document.getElementById("signupformbtn").addEventListener("click", function (e) {

        e.preventDefault();
        // window.location.href = "./login.html"
    })
}
signup()


function login(){

    document.getElementById("formloginFormBtn").addEventListener("click", function (e) {
        e.preventDefault();
        // window.location.href = "./screen.html"
    })
}

login();



// Function to show Signup form and hide others
// function showSignupForm() {
   
// }
// showSignupForm();

// Function to show Login form and hide others
// function showLoginForm() {
    

