document.addEventListener("DOMContentLoaded", function() {
    const submitForm = document.getElementById("submitForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const errorParagraph = document.getElementById("error");
    const successParagraph = document.getElementById("success");

    submitForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (name === "" || email === "") {
            errorParagraph.textContent ="Please fill in all required fields.";
            successParagraph.textContent = "";
        } else {
            errorParagraph.textContent = "";
            successParagraph.textContent = "Form submitted successfully!";
        }
    });
});