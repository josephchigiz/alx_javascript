document.addEventListener("DOMContentLoaded", function() {
    const emailForm = document.getElementById("emailForm");
    const emailInput = document.getElementById("element");
    const errorParagraph = document.getElementById("error");

    emailForm.addEventListener("submit", function(event) {
        if (!validateEmail(emailInput.value)) {
            errorParagraph.textContent = "Please enter a valid email address.";
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
});