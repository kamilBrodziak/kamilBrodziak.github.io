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

first.onclick = function() {
    first.style.animation = 'none';
    second.style.animation = 'none';
    first.offsetHeight;
    second.offsetHeight;
    first.style.animation = 'firstPageActivate 2.5s ease-in forwards';
    first.style.cursor = "default";
    first.style.pointerEvents = "none";
    second.style.animation = 'secondPageActivate 2s ease-out reverse forwards';
    second.style.cursor = "pointer";
    second.style.pointerEvents = "all";
};

second.onclick = function() {
    first.style.animation = 'none';
    second.style.animation = 'none';
    first.offsetHeight;
    second.offsetHeight;
    first.style.animation = 'firstPageActivate 2s ease-in reverse forwards';
    first.style.cursor = "pointer";
    first.style.pointerEvents = "all";
    second.style.animation = 'secondPageActivate 2.5s ease-out forwards';
    second.style.cursor = "default";
    second.style.pointerEvents = "none";
};