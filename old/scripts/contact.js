function validateEmail(email) {
    var re  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return re.test(email);
  }
  
const email = document.getElementById("emailAddress");
const name = document.getElementById("name");
const message = document.getElementById("message");

email.addEventListener("keyup", validateInput);
name.addEventListener("keyup", validateInput);
message.addEventListener("keyup", validateInput);


function validateInput() {
    var submit = document.getElementById("submitButton");
    var isProperEmail = validateEmailForm();
    var isEmptyName = isEmpty(name);
    var isEmptyMessage = isEmpty(message);

    if(isProperEmail && !isEmptyName && !isEmptyMessage) {
        submit.removeAttribute("disabled");
        return true;
    }
    submit.setAttribute("disabled", "disabled");
    return false;
}

function isEmpty(input) {
    return input.value === "";
}

function validateEmailForm()  {
    if (validateEmail(email.value)) {
        email.removeAttribute("class");
        return true;
    }
    email.setAttribute("class", "invalidOutput");
    return false;
}
  