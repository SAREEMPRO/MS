let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");
let desert_moon = document.getElementById("desert-moon");
let man = document.getElementById("man");

window.addEventListener("scroll",()=>{
let value = window.scrollY;
moon.style.top = value * .7 + "px";
text.style.top = 80 + value * -0.2 + '%';
train.style.left = value * 1.5 + "px"; 
desert_moon.style.top = value * .2 + "px";
man.style.left = value * .9 + "px"; 


})
  document.addEventListener('DOMContentLoaded', function () {
            const menuToggle = document.querySelector('.menu-toggle');
            const navList = document.querySelector('.navlist');
            const body = document.body;

            menuToggle.addEventListener('click', function () {
                navList.classList.toggle('show');
                body.classList.toggle('menu-active');
            });

            // Close the menu when a navigation link is clicked
            navList.querySelectorAll('a').forEach(function (link) {
                link.addEventListener('click', function () {
                    navList.classList.remove('show');
                    body.classList.remove('menu-active');
                });
            });
        });