document.addEventListener("DOMContentLoaded", function() {
    const dynamicForm = document.getElementById("dynamicForm");
    const numFieldsSelect = document.getElementById("numFields");
    const inputContainer = document.getElementById("inputContainer");

    numFieldsSelect.addEventListener("change", function() {
        const numFields = parseInt(numFieldsSelect.value);
        generateInputFields(numFields);
    });

    dynamicForm.addEventListener("submit", function(event) {
        if (!validateForm()) {
            event.preventDefault();
            alert("Pease fill in all fields.");
        }
    });

    function generateInputFields(numFields) {
        inputContainer.innerHTML = "";
        for (let i=1; i<=numFields; i++) {
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.name = "field" + i;
            inputContainer.appendChild(inputField);
        }
    }

    function validateForm() {
        const inputFields = inputContainer.querySelectorAll("input");
        for (const inputField of inputFields) {
            if (inputField.value.trim() === "") {
                return false;
            }
        }
        return true;
    }
});