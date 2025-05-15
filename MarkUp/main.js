const burgerBtn = document.querySelector(".hamburger");
const burgerMenu = document.querySelector(".burger-menu");
const BurgerExitBtn = document.querySelector(".exit-click");

const searchIcon = document.querySelector(".search");
const searchModal = document.querySelector(".search-modal");
const SearchExitBtn = document.querySelector(".search-exit");

const rollNum = document.querySelector(".roll-numbers");

const navigationMenu = document.querySelectorAll(".item");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");

const selectorParent = document.querySelector(".hero-page_content");
const selector1 = document.querySelector(".btn-1");
const selectedModal1 = document.querySelector(".selector-modal-1");

const selector2 = document.querySelector(".btn-2");
const selectedModal2 = document.querySelector(".selector-modal-2");

const selector3 = document.querySelector(".btn-3");
const selectedModal3 = document.querySelector(".selector-modal-3");

// const itemModal = document.querySelector(".item-modal");
const itemCards  = document.querySelectorAll(".item-card");

let i = 1;

const interval = setInterval(() => {
  rollNum.textContent = i;
  i++;
  if (i > 2400) {
    clearInterval(interval);
  }
}, 0.1);

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
});

BurgerExitBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
});

searchIcon.addEventListener("click", () => {
  searchModal.style.display = "flex";
});

SearchExitBtn.addEventListener("click", () => {
  searchModal.style.display = "none";
});

navigationMenu.forEach((item) => {
  const menu = item.querySelector(".chairs-menu");

  item.addEventListener("mouseenter", () => {
    menu.style.display = "flex";
    overlay.style.display = "block";
  });
  item.addEventListener("mouseleave", () => {
    menu.style.display = "none";
    overlay.style.display = "none";
  });
});

itemCards.forEach(item => {
  const modal = item.querySelector(".item-modal");

 item.addEventListener("mouseenter", () => {
  modal.style.display = "flex";
})
item.addEventListener("mouseleave", () => {
  modal.style.display = "none";
})
})

// itemCard.addEventListener("mouseenter", () => {
//   itemModal.style.display = "flex";
// })
// itemCard.addEventListener("mouseleave", () => {
//   itemModal.style.display = "none";
// })



selectorParent.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-1")) {
    selectedModal1.style.display = "flex";
  }
  if (!e.target.classList.contains("btn-1")) {
    selectedModal1.style.display = "none";
  }

  if (e.target.classList.contains("btn-2")) {
    selectedModal2.style.display = "flex";
  }
  if (!e.target.classList.contains("btn-2")) {
    selectedModal2.style.display = "none";
  }

  if (e.target.classList.contains("btn-3")) {
    selectedModal3.style.display = "flex";
  }
  if (!e.target.classList.contains("btn-3")) {
    selectedModal3.style.display = "none";
  }
});
