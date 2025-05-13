const burgerBtn = document.querySelector(".hamburger");
const burgerMenu = document.querySelector(".burger-menu");
const BurgerExitBtn = document.querySelector(".exit-click");

const searchIcon = document.querySelector(".search")
const searchModal = document.querySelector(".search-modal")
const SearchExitBtn = document.querySelector(".search-exit")

const rollNum = document.querySelector(".roll-numbers");

let i = 1;
const interval = setInterval(() => {
  rollNum.textContent = i;
  i++;
  if (i > 2400) {
    clearInterval(interval);
  }
}, 0.2);

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
});

BurgerExitBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
});

searchIcon.addEventListener("click", () =>{
    searchModal.style.display = "flex"
})

SearchExitBtn.addEventListener("click", () => {
    searchModal.style.display = "none"
})

