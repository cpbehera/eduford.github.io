var navLinks = document.getElementById('navLinks');
var cross = document.getElementById('cross');
var show = document.getElementById('show');


cross.addEventListener('click',hideMenu)

show.addEventListener('click',showMenu);


function showMenu(){
     navLinks.style.right = "0";
};
function hideMenu(){
     navLinks.style.right = "-200px";
};