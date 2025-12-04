// JavaScript Document
console.log("hi");

const nav = document.querySelector(".navOverlay");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.querySelector(".closebtn");

function openNav() {
  nav.style.width = "100%";
}

function closeNav() {
  nav.style.width = "0%";
}

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

const carousel = document.querySelector(".partnerReviews ul");
const prevBtn = document.querySelector(".partnerReviews button:first-of-type");
const nextBtn = document.querySelector(".partnerReviews button:last-of-type");

const itemWidth = carousel.clientWidth;

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: itemWidth, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -itemWidth, behavior: "smooth" });
});