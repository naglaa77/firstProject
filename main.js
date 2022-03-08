const navToggler = document.querySelector('.nav-toggler');

navToggler.addEventListener("click", navToggle);

function navToggle () {
    navToggler.classList.toggle("active");
    const nav =document.querySelector(".nav");
    nav.classList.toggle('open');
    if (nav.classList.contains('open')) {
        nav.style.maxHeight = nav.scrollHeight + "px";

    }else {
        nav.removeAttribute("style");
    }
}

let ulMega = document.querySelector('.mega-menu');
console.log(ulMega);

let ulMega = document.querySelector('.mega-menu');
ulMega.addEventListener('click',function () {
    
})
/*start slider images */
var slides = document.querySelector('.slider-items').children;
var  nextSlide = document.querySelector('.right-slide');
var prevSlide = document.querySelector('.left-slide');
var totalSlides = slides.length;
var index = 0;

function next(direction) {

    if (direction == "next") {
        index++;
        if (index == totalSlides) {
            index = 0;
        }
    } else {
        if(index==0) {
            index = totalSlides-1;
        } else {
            index--;
        }
    }
    for (i = 0;i<slides.length;i++) {
        slides[i].classList.remove('active');
    }
    slides[index].classList.add("active");
}
nextSlide.onclick = function () {
    next("next");
}
prevSlide.onclick = function () {
    next("prev");
}


/*End  slider images */