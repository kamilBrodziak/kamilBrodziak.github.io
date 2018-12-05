function activateSecondPage() {
    var secondPage = document.getElementById("secondPage");
    if(secondPage.getAttribute("class") === "deactivateSecondPage" ||
        secondPage.getAttribute("class") === null) {
        var firstPage = document.getElementById("firstPage");
        firstPage.removeAttribute("class");
        secondPage.removeAttribute("class");
        firstPage.setAttribute("class", "deactivateFirstPage");
        secondPage.setAttribute("class", "activateSecondPage");
    }
}


const first = document.getElementById('firstPage');
const second = document.getElementById('secondPage');
var isFirstActive = true;

first.onclick = function() {
    if(!isFirstActive) {
        first.style.animation = 'none';
        second.style.animation = 'none';
        first.offsetHeight;
        second.offsetHeight;
        first.style.setProperty("--m", "-45deg");
        second.style.setProperty("--n", "45deg");
        first.style.animation = 'firstPageActivate 2s ease forwards';
        second.style.animation = 'secondPageActivate 2s ease-in reverse forwards';
        first.style.zIndex = 16;
        isFirstActive = true;
    }
};

second.onclick = function() {
    if(isFirstActive) {
        first.style.animation = 'none';
        second.style.animation = 'none';
        first.offsetHeight;
        second.offsetHeight;
        first.style.setProperty("--m", "45deg");
        second.style.setProperty("--n", "-45deg");
        first.style.animation = 'firstPageActivate 2s ease-in reverse forwards';
        second.style.animation = 'secondPageActivate 2s ease forwards';
        second.style.zIndex = 16;
        isFirstActive = false;
    }
};