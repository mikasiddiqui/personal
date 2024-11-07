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

// Function to auto-trigger dark mode after sunset
function autoDarkModeBasedOnSunset() {
    // Step 1: Get user's location
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;

            // Step 2: Calculate sunset time
            const now = new Date();
            const times = SunCalc.getTimes(now, latitude, longitude);
            const sunset = times.sunset; // Get sunset time

            // Step 3: Compare current time with sunset
            if (now >= sunset) {
                // It's after sunset: Trigger the dark mode switch
                const switchImage = document.getElementById("switch-image");
                if (!switchImage.classList.contains("darkActive")) {
                    darkModeSwitch1(); // Automatically switch to dark mode
                }
            }
        },
        (error) => {
            console.error("Error getting location", error);

            // Step 4: Fallback logic if geolocation fails
            const now = new Date();
            const hours = now.getHours();

            // Assume sunset is at 6 PM if geolocation is not allowed
            if (hours >= 18 || hours < 6) {
                const switchImage = document.getElementById("switch-image");
                if (!switchImage.classList.contains("darkActive")) {
                    darkModeSwitch1(); // Automatically switch to dark mode
                }
            }
        }
    );
}

// Execute the auto dark mode function on page load
document.addEventListener("DOMContentLoaded", () => {
    autoDarkModeBasedOnSunset();
});

// Dark mode switch button handler
document.getElementById("switch").addEventListener("click", darkModeSwitch1);
