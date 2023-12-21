// ========== menu icon navbar ========== 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// ========== Sticky navbar ========== 
window.onscroll = () => {
    let header = document.querySelector('.header');
    
    header.classList.toggle('sticky', window.scrollY > 90);
};

// ========== Scroll sections active link ========== 
let sections = document.querySelector('section');
let