const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Check localStorage for dark mode preference
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "light"; // Use lowercase text
    console.log("Dark mode is enabled by default.");
}

darkModeToggle.addEventListener("click", function() {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        darkModeToggle.textContent = "light";
        console.log("Dark mode enabled.");
    } else {
        localStorage.setItem("darkMode", "disabled");
        darkModeToggle.textContent = "dark";
        console.log("Dark mode disabled.");
    }
});
