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


let btn = document.getElementById('btn-read');
let title = document.getElementById("main-title").offsetTop;
btn.addEventListener("click", () => {
  window.scrollTo({ top: title, behavior: 'smooth'});
})


const circ1 = document.querySelector('circle1');
const circ2 = document.querySelector('circle2');
const circ3 = document.querySelector('circle3');
const circ4 = document.querySelector('circle4');


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("team-card");
  var dots = document.getElementsByClassName("circle");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    x[i].style.opacity = "0"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" fas", "");
  }
  x[slideIndex-1].style.display = "block";  
  x[slideIndex-1].style.opacity = "100%";  
  dots[slideIndex-1].className += " fas";
}