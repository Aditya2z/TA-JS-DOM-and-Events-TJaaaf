// #### Practice Form Validation

// Rules for form validation:

// 1. Username can't be less than 4 characters
// 2. Name can't be numbers
// 3. Email must contain the symbol `@`
// 4. Email must be at least 6 characters
// 5. Phone numbers can only be a number
// 6. Length of phone number can't be less than 7
// 8. Password and confirm password must be same.

// Messages for error:

// 1. `__` can't be less than `__` characters (replace `__` with field name)
// 2. You can't use number in the name field
// 3. Not a valid email
// 4. Phone number can only contain numbers

// Once the form is valid it should alert `User Added Successfully!`


let form = document.querySelector("form");

let userInfo = {};

let errorMessage = "";

function doesContainNumber(xyz) {
    return xyz.split("").some(ele => Number(ele));
}

function handleSubmit(event) {

    event.preventDefault();

    userInfo.username = event.target.elements.username.value;
    userInfo.name = event.target.elements.name.value;
    userInfo.email = event.target.elements.email.value;
    userInfo.phone = event.target.elements.phone.value;
    userInfo.password = event.target.elements.password.value;
    userInfo.confirmPassword = event.target.elements.confirmPassword.value;

    let username = event.target.elements.username;
    let name = event.target.elements.name;
    let email = event.target.elements.email;
    let phone = event.target.elements.phone;
    let password = event.target.elements.password;
    let confirmPassword = event.target.elements.confirmPassword;

    if(userInfo.username.length < 4) {
        errorMessage =  `Username can't be less than 4 characters`;
        username.classList.add("error");
        username.nextElementSibling.innerText = errorMessage;
    } else {
        username.classList.remove("error");
        username.classList.add("success");
        errorMessage = "";
        username.nextElementSibling.innerText = errorMessage;
    }
    if(doesContainNumber(userInfo.name) ) {
        errorMessage =  `You can't use number in the name field`;
        name.classList.add("error");
        name.nextElementSibling.innerText = errorMessage;
    } else {
        name.classList.remove("error");
        name.classList.add("success");
        errorMessage = "";
        name.nextElementSibling.innerText = errorMessage;
    }
    
    if(userInfo.email.length < 6) {
        errorMessage =  `Not a valid email`;
        email.classList.add("error");
        email.nextElementSibling.innerText = errorMessage;
    } else {
        email.classList.remove("error");
        email.classList.add("success");
        errorMessage = "";
        email.nextElementSibling.innerText = errorMessage;
    }
    
    if(userInfo.phone.length < 7) {
        errorMessage =  `Phone Number can't be less than 7 characters`;
        phone.classList.add("error");
        phone.nextElementSibling.innerText = errorMessage;
    } else {
        phone.classList.remove("error");
        phone.classList.add("success");
        errorMessage = "";
        phone.nextElementSibling.innerText = errorMessage;
    }
    
    if(userInfo.password !== userInfo.confirmPassword) {
        errorMessage =  `Passwords don't match`;
        confirmPassword.classList.add("error");
        confirmPassword.nextElementSibling.innerText = errorMessage;
    } else {
        password.classList.add("success");
        confirmPassword.classList.remove("error");
        confirmPassword.classList.add("success");
        errorMessage = "";
        confirmPassword.nextElementSibling.innerText = errorMessage;
    };

    if( username.classList.contains("success") &&
        name.classList.contains("success") &&
        email.classList.contains("success") &&
        phone.classList.contains("success") &&
        confirmPassword.classList.contains("success") ) {

        alert("User added successfully");
    };
}

form.addEventListener("submit", handleSubmit);