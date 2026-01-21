 function login() {
    // correct login details
    const correctUsername = "admin";
    const correctPassword = "1234";

    // user input
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (username === correctUsername && password === correctPassword) {
        message.style.color = "lightgreen";
        message.innerHTML = "Login successful ✅";

        // redirect after login
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000);
    } else {
        message.style.color = "red";
        message.innerHTML = "Wrong username or password ❌";
    }
}
