document.addEventListener("DOMContentLoaded", () => {
    const password = document.querySelector("#txtPass");
    const eyeIcon = document.querySelector(".eye");
    const gender = document.querySelector(".gentheme");
    const container = document.body;

    // Initial theme setup
    container.classList.add("normal-theme");

    // Function to update the eye icon based on the theme and password visibility
    const updateEyeIcon = () => {
        const isPasswordVisible = password.getAttribute("type") === "text";
        const isGirlTheme = container.classList.contains("girl-theme");

        if (isGirlTheme) {
            eyeIcon.style.backgroundImage = isPasswordVisible ? "url('Images/eye-off-girl.svg')" : "url('Images/eye-girl.svg')";
        } else {
            eyeIcon.style.backgroundImage = isPasswordVisible ? "url('Images/eye-off.svg')" : "url('Images/eye.svg')";
        }
    };

    // Gender theme toggling
    gender.addEventListener("click", function() {
        container.classList.toggle("girl-theme");
        container.classList.toggle("normal-theme");

        let currentSrc = gender.getAttribute("src");
        if (currentSrc === "Images/Female.svg") {
            gender.setAttribute("src", "Images/Male.svg");
        } else if (currentSrc === "Images/Male.svg") {
            gender.setAttribute("src", "Images/Female.svg");
        }

        updateEyeIcon();
    });

    // Password visibility toggling
    eyeIcon.addEventListener("click", function() {
        let type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);

        // Toggle eye icon class for password visibility
        eyeIcon.classList.toggle("password-visible");

        updateEyeIcon();

        // Log password visibility state for debugging
        console.log("Password visibility:", type);
    });

    // Initial eye icon setup
    updateEyeIcon();
});
