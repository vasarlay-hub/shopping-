let total = 0;
let loggedIn = false;

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user !== "" && pass !== "") {
        loggedIn = true;
        document.getElementById("loginStatus").innerText =
            "Login successful ✔️";
    } else {
        document.getElementById("loginStatus").innerText =
            "Please enter username and password ❌";
    }
}

function addToCart(price) {
    if (!loggedIn) {
        alert("Please login first");
        return;
    }
    total += price;
    document.getElementById("total").innerText = total;
}

function pay() {
    if (!loggedIn) {
        alert("Please login first");
        return;
    }

    if (total === 0) {
        alert("Cart is empty");
        return;
    }

    alert("Payment successful 🎉 (Fake Payment)");
    total = 0;
    document.getElementById("total").innerText = total;
}