const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');
const programs = document.querySelector('.nav-hover');
const animal = document.querySelector('.animal');
const dropCont = document.querySelector('.dropdown-content');

closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
    programs.classList.remove('non-active');
    animal.classList.remove('non-active');
    dropCont.classList.remove('show');
});

openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
    programs.classList.add('non-active');
    animal.classList.add('non-active');
    dropCont.classList.add('show');
});




let icons = document.getElementsByClassName("icon-container");
icons[0].addEventListener("click", () => {
    window.scroll({
        top: 1000, 
        left: 0, 
        behavior: 'smooth'
      });
})
icons[1].addEventListener("click", () => {
    window.scroll({
        top: 1750, 
        left: 0, 
        behavior: 'smooth'
      });
})
icons[2].addEventListener("click", () => {
    window.scroll({
        top: 2600, 
        left: 0, 
        behavior: 'smooth'
      });
})


let slidePosition = 1;
SlideShow(slidePosition);

function plusSlides(n) {
    SlideShow(slidePosition += n);
}

function currentSlide(n) {
    SlideShow(slidePosition = n);
}

function SlideShow(n) {
    let images = document.getElementsByClassName("img");
    let circles = document.getElementsByClassName("circ");
    if (n > images.length) slidePosition = 1;
    if (n < 1) slidePosition = images.length;
    for (let i=0; i < images.length; i++) {
        images[i].style.transition = "1s";
        images[i].style.opacity = "0";
        images[i].style.display = "none";
    }
    for (let i=0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace("fas");
    }
    images[slidePosition-1].style.transition = "1s";
    images[slidePosition-1].style.opacity = "100";
    images[slidePosition-1].style.display = "block";
    circles[slidePosition-1].classList.toggle("fas");
}

const contents = document.getElementsByClassName("sub-content");
const titles = document.getElementsByClassName("second-title");

let show = function(x,y,num) {
    x.addEventListener("click", () => {
        if(num % 2== 0) y.style.display = "block";
        else y.style.display = "none";
        num++;
  });
}

show(titles[0],contents[0],0);
show(titles[1],contents[1],0);
show(titles[2],contents[2],0);