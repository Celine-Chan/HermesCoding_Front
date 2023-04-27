const toggleMenuBtn = document.querySelector("#menu-btn");
const toggleMenuImg = document.querySelector("#menu-btn img");
const toggledMenu = document.querySelector("#toggled-menu");
const menuLinks = document.querySelector("#main-nav ul a");

toggleMenuBtn.addEventListener("click", toggleNav);

function toggleNav(){
    toggledMenu.classList.toggle("-translate-y-full")

    if(toggledMenu.classList.contains("-translate-y-full")) {
        // toggleMenuImg.setAttribute("src", "C:\Users\celin\Desktop\hermes_coding\assets\img\menu.png")
        toggleMenuImg.setAttribute("src", "assets/img/menu.png")
        toggleMenuBtn.setAttribute("aria-expanded", "false")
    } else {
        toggleMenuImg.setAttribute("src", "assets/img/cross.png")
        toggleMenuBtn.setAttribute("aria-expanded", "true")
    }

}
