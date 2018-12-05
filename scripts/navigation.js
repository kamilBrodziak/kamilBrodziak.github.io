function changeActivePageInMenu(actualElement) {
    if("actual_page" === actualElement.getAttribute("id")) {
        return;
    }
    if(document.getElementById("actual_page") !== null) {
        document.getElementById("actual_page").removeAttribute("id");
    }
    actualElement.setAttribute("id", "actual_page");
}