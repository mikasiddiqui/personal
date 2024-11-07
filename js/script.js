// Dark mode switch logic
function darkModeSwitch1() {
    var body = document.body;
    var check = document.getElementById("switch-image");
    var box = document.getElementsByClassName("box")[0]; // Get the first box element
    if (check.classList.contains("darkActive")) {
        check.classList.remove("darkActive");
        body.classList.remove("body-dark");
        box.classList.remove("dark"); // Remove dark class from box
        box.classList.add("light"); // Add light class to box
    } else {
        check.classList.add("darkActive");
        body.classList.add("body-dark");
        box.classList.remove("light"); // Remove light class from box
        box.classList.add("dark"); // Add dark class to box
    }
}

// Function to approximate sunset time based on local time
function autoDarkModeBasedOnTimezone() {
    const now = new Date();
    const localHours = now.getHours(); // Local time (already adjusted for timezone)

    // Approximate sunset time (6 PM) and sunrise time (6 AM)
    const sunsetHour = 18; // 6 PM
    const sunriseHour = 6; // 6 AM

    // Check if current time is between sunset and sunrise
    if (localHours >= sunsetHour || localHours < sunriseHour) {
        const switchImage = document.getElementById("switch-image");
        if (!switchImage.classList.contains("darkActive")) {
            darkModeSwitch1(); // Automatically switch to dark mode
        }
    }
}

// Execute the auto dark mode function on page load
document.addEventListener("DOMContentLoaded", () => {
    autoDarkModeBasedOnTimezone();
});

// Dark mode switch button handler
document.getElementById("switch").addEventListener("click", darkModeSwitch1);
