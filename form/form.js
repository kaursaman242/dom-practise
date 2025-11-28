const nameInput = document.querySelectorAll("#formInput")[0];
const classInput = document.querySelectorAll("#formInput")[1];
const rollNoInput = document.querySelectorAll("#formInput")[2];
const emailInput = document.querySelectorAll("#formInput")[3];
const phoneNoInput = document.querySelectorAll("#formInput")[4];

const submitBtn = document.getElementById("btn");

// ------------------ FORM SUBMIT VALIDATION --------------------
submitBtn.addEventListener("click", () => {
    let isValid = true;

    // NAME
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
        isValid = false;
    } else {
        showSuccess(nameInput);
    }

    // CLASS
    if (classInput.value.trim() === "") {
        showError(classInput, "Class is required");
        isValid = false;
    } else {
        showSuccess(classInput);
    }

    // ROLL NO (digits)
    if (rollNoInput.value.trim() === "" || isNaN(rollNoInput.value)) {
        showError(rollNoInput, "Roll number must be digits only");
        isValid = false;
    } else {
        showSuccess(rollNoInput);
    }

    // EMAIL
    if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        showError(emailInput, "Invalid Email");
        isValid = false;
    } else {
        showSuccess(emailInput);
    }

    // PHONE NUMBER
    if (phoneNoInput.value.length !== 10 || isNaN(phoneNoInput.value)) {
        showError(phoneNoInput, "Invalid phone number");
        isValid = false;
    } else {
        showSuccess(phoneNoInput);
    }

    // Final submit
    if (isValid) {
        alert("Form submitted successfully 🎉");

        // Clear all inputs
        document.querySelectorAll("#formInput").forEach(input => {
            input.value = "";
            input.style.border = "1px solid #ccc";
        });
    }
});


// -------------------- SHOW ERROR -----------------------
function showError(input, message) {
    input.style.border = "2px solid red";

    let error = input.nextElementSibling;

    if (!error || !error.classList.contains("error-msg")) {
        error = document.createElement("p");
        error.className = "error-msg";
        error.style.color = "red";
        error.style.margin = "5px 0";
        input.insertAdjacentElement("afterend", error);
    }

    error.innerText = message;
}


// -------------------- SHOW SUCCESS ----------------------
function showSuccess(input) {
    input.style.border = "2px solid green";

    let error = input.nextElementSibling;
    if (error && error.classList.contains("error-msg")) {
        error.remove();
    }
}


// -------------------- EASY REMOVE ERROR WHILE TYPING ----------------------
const allInputs = document.querySelectorAll("#formInput");

allInputs.forEach(input => {
    input.addEventListener("input", () => {
        input.style.border = "2px solid green";

        let error = input.nextElementSibling;
        if (error && error.classList.contains("error-msg")) {
            error.remove();
        }
    });
});
