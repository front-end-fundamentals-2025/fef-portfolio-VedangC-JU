document.addEventListener("DOMContentLoaded", function () {
    const spinner = document.querySelector(".spinner");
    const actualContent = document.querySelector(".actual-content");

    if (spinner && actualContent) {
        // Show spinner, hide content initially
        spinner.style.display = "block";
        actualContent.style.display = "none";

        // Simulate loading for 2 seconds
        setTimeout(() => {
            spinner.style.display = "none";
            actualContent.style.display = "block";
        }, 2000);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check if Dark Mode is saved in Local Storage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️ Light Mode"; // Change button text
    }

    // Toggle Dark Mode on button click
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Update button text based on mode
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙 Dark Mode";
        }
    });
});
