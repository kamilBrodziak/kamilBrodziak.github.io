container.addEventListener("scroll", myFunction)

function myFunction() {
    const container = document.getElementById("container");
    const navbar = document.getElementById("navbar");
    if (container.scrollTop >= navbar.offsetTop) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

