const nameInput=document.querySelectorAll("#formInput")[0]
const classInput=document.querySelectorAll("#formInput")[1]
const rollNoInput=document.querySelectorAll("#formInput")[2]
const emailInput=document.querySelectorAll("#formInput")[3]
const phoneNoInput=document.querySelectorAll("#formInput")[4]

const submitBtn=document.getElementById("btn")
submitBtn.addEventListener("click",()=>{
    let isValid=true
    if (nameInput.value==="") {
        showError(nameInput,"name is required")
        isValid=false
    }else{
        showSuccess(nameInput)
    }
    if (classInput.value==="") {
        showError(classInput,"class is required")
        isValid=false
    }else{
        showSuccess(classInput)
    }
    if (rollNoInput.value===""|| !rollNoInput===Number) {
        showError(rollNoInput,"roll number must be in digits")
        isValid=false
    }else{
        showSuccess(rollNoInput)
    }
    if (emailInput.value===""|| !emailInput.value.includes("@")&&emailInput.value.includes(".")) {
        showError(emailInput,"invalid Email")
        isValid=false
    }else{
        showSuccess(emailInput)
    }
    if (phoneNoInput.value===""||phoneNoInput.value.length!==10) {
        showError(phoneNoInput,"invalid phone number")
        isValid=false
    }else{
        showSuccess(emailInput)
    }
    // If all fields are correct
    if (isValid) {
        alert("Form submitted successfully! 🎉");

        // Clear fields
        nameInput.value = "";
        classInput.value = "";
        rollNoInput.value = "";
        emailInput.value = "";
        phoneNoInput.value = "";

        // Remove borders after clearing
        document.querySelectorAll("#formInput").forEach(input => {
            input.style.border = "1px solid #ccc";
        });
    }
});

// Show error function
function showError(input, message) {
    // console.dir(input)
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
   console.dir(input)
      if (input.value) {
            console.dir(error)
        }
}

// Show success function
function showSuccess(input) {
    input.style.border = "2px solid green";

    let error = input.nextElementSibling;
    if (error && error.classList.contains("error-msg")) {
        error.remove();
    }
}


function removeErrorMessage(){
    const input=document.getElementById("formInput")
    // console.dir(input.value)
    console.log(input.value)
    
}
removeErrorMessage()