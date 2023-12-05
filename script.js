// const header = document.querySelector('header');
// window.addEventListener('scroll', function() {
//     header.classList.toggle('sticky', window.scrollY > 100);
// });
// let menuEl = document.getElementById("menu-icon");
// let navItems = document.getElementById("nav-list");
// console.log(navItems);
// console.log(menuEl);
// menuEl.addEventListener("click", handleToggleMenu);
// function handleToggleMenu() {
//     // alert('Menu clicked');
// }
// //   // console.log('I am writing js');
//   if (navItems.style.display ==="flex") {
//     navItems.style.display = "none";
//   } else {
//     navItems.style.display = "flex";
//   }
// }
// document.querySelectorAll(".li-items");
// let listItems = document.querySelectorAll(".li-items");
// // console.log(listItems);
// listItems.forEach((i) => {
//   console.log(i);
//   i.addEventListener("click", handleToggleMenu);
// });

// let menu = document.getElementById('menu-icon');

function myFunction() {
  var navList = document.getElementById("nav-list");
  navList.classList.toggle('open')
}
// menu.onclick = () => {
//     menu.classList.toggle(<i class="fa-solid fa-xmark fa-xs"></i>);
//     navList.classList.toggle('open');
// };
// window.onscroll = () => {
//   menu.classList.remove(<i class="fa-solid fa-xmark fa-xs"></i>);
//   navList.classList.remove("open");
// };
