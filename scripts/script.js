function validateEmail(email) {
    var re  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return re.test(email);
  }
  
function validate() {
    var email = document.getElementById('emailAddress');
    var submit = document.getElementById("submitButton");

    if (validateEmail(email.value)) {
        email.removeAttribute("class");
        submit.removeAttribute("disabled");
        return true;
    }
    submit.setAttribute("disabled", "disabled");
    email.setAttribute("class", "invalidOutput");
    return false;
}
  