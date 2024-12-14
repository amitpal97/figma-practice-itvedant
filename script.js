
document.getElementById("loginBtn").addEventListener("click", function () {
    window.location.href = "./login.html"
})
document.getElementById("signUpBtn").addEventListener("click", function () {
    window.location.href = "./signUp.html"
})


document.querySelector(".left-navbar").addEventListener("click", function () {
    window.location.href = "./index.html"

})

function signup() {
    let signupformbtn = document.getElementById("signupformbtn")
    // console.log("signupformbtn", signupformbtn);
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    let isValid = true;
    document.getElementById("signupUsernameError").textContent = "";
    document.getElementById("signupEmailError").textContent = "";
    document.getElementById("signupPasswordError").textContent = "";

    if (username === "") {
        document.getElementById("signupUsernameError").textContent =
            "Username is required";
        isValid = false;
    }

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("signupEmailError").textContent =
            "Valid email is required";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        document.getElementById("signupPasswordError").textContent =
            "Password must be at least 6 characters long";
        isValid = false;
    }

    if (isValid) {
        const newUser = { username, email, password };

        let users = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = users.some(user => user?.email === email);
        if (userExists) {
            alert('Username already exists. Please choose another.');
            document.getElementById("signupUsername").value = "";
            document.getElementById("signupEmail").value = "";
            document.getElementById("signupPassword").value = "";
            return;
        }

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById("signupMessage").textContent =
            "Signup successful!";

        setTimeout(() => {
            window.location.href = "./login.html"
        }, 1000)

    }

}

function login() {
    let formloginFormBtn = document.getElementById("formloginFormBtn")
    console.log("formloginFormBtn", formloginFormBtn);
    const storedUser = JSON.parse(localStorage.getItem("users")) || [];
    // const storedArray = []
    // storedArray.push(storedUser)
    console.log("storedUser", storedUser);
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const validUser = storedUser.find(user => user?.email === email && user?.password === password);

    if (validUser) {
        document.getElementById("loginMessage").textContent =
            "Login successful!";
        setTimeout(() => {

            window.location.href = "./screen.html"
        }, 1000)

    } else {
        document.getElementById("loginMessage").textContent =
            "Invalid email or password";
        document.getElementById("loginEmail").value = "";
        document.getElementById("loginPassword").value = ""
    }
}

try {
    signupformbtn.addEventListener("click", function (e) {

        signup()

    })


}
catch (error) {
    console.log(error);

}


try {

    formloginFormBtn.addEventListener("click", function (e) {
        e.preventDefault()
        console.log("login");
        login();


    })

}
catch (error) {
    console.log(error);

}



