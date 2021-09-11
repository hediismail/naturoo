let menu = document.querySelector('#burger-menu');
let navbar = document.querySelector('.navbar-nav');

menu.onclick = () =>{
  menu.classList.toggle('ClearIcon');
  navbar.classList.toggle('active');
}
