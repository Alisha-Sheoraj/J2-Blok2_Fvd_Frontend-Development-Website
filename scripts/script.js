// JavaScript Document
console.log("hi");

const nav = document.querySelector("nav");
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