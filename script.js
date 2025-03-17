document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector("button");

    if (loginButton) {
        loginButton.addEventListener("click", function () {
            // Get email and password values (not validated, as it's a fake login)
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Simulate login (redirect regardless of input)
            if (email !== "" && password !== "") {
                localStorage.setItem("loggedIn", "true"); // Store login state
                window.location.href = "home.html"; // Redirect to home page
            } else {
                alert("Enter email and password!"); // Prevent empty login
            }
        });
    }

    // Check if the user is logged in when loading home.html
    if (window.location.pathname.includes("home.html")) {
        if (localStorage.getItem("loggedIn") !== "true") {
            window.location.href = "index.html"; // Redirect back to login if not logged in
        }
    }
});

// Page animations
function startAnimation() {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = "1";
    }, 100);
}
