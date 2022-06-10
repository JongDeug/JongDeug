const sidenavIcon = document.querySelector('.sidenavIcon');
sidenavIcon.addEventListener('click', openNav);
function openNav() {
    document.querySelector('#mySidenav').style.width = "250px";
}



const closebtn = document.querySelector('.closebtn');
closebtn.addEventListener('click', closeNav);
function closeNav() {
    document.querySelector('#mySidenav').style.width = "0";
}