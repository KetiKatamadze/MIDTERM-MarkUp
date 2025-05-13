const burgerBtn = document.querySelector(".hamburger");
const burgerMenu = document.querySelector(".burger-menu");
const BurgerExitBtn = document.querySelector(".exit-click");

const searchIcon = document.querySelector(".search")
const searchModal = document.querySelector(".search-modal")

const SearchExitBtn = document.querySelector(".search-exit")

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
