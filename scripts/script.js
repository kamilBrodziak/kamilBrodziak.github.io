
function changeActivePageInMenu(actualElement) {
    if("actual_page" === actualElement.getAttribute("id")) {
        return;
    }
    if(document.getElementById("actual_page") !== null) {
        document.getElementById("actual_page").removeAttribute("id");
    }
    actualElement.setAttribute("id", "actual_page");
}

function validateEmail(email) {
    var re  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return re.test(email);
  }
  
function validate() {
    var email = document.getElementById('emailAddress');

    if (validateEmail(email.value)) {
        return true;
    }
    document.getElementById("emailAddress").focus();
    alert("Invalid email! Try schemat example@example.exam");
    return false;
}
  