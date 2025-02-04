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
