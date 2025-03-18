document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector("buttondocument.addEventListener("DOMContentLoaded", function () {
    // Fake Login Functionality
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission
            window.location.href = "home.html"; // Redirect to Home Page
        });
    }

    // Page Load Animation
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        section.style.opacity = "0"; // Initially hidden
        section.style.transform = "translateY(20px)";
    });

    window.addEventListener("load", function () {
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }, index * 200);
        });
    });

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").replace(".html", "");
            const targetSection = document.querySelector(`.${targetId}`);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth",
                });
            } else {
                window.location.href = this.getAttribute("href"); // For different pages
            }
        });
    });
});
