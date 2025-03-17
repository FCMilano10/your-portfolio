function login() {
    window.location.href = "home.html";
}

function startAnimation() {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = "1";
    }, 100);
}
