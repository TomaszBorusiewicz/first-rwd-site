function openCloseNav() {

    'use strict';
    var x = document.querySelector(".top-nav");
    console.log(x);

    if (x.className === "top-nav") {
        x.className += " responsive";

    } else {
        x.className = "top-nav";
    }

}

var navIcon = document.querySelector(".open-nav");
navIcon.addEventListener("click", openCloseNav, false);
