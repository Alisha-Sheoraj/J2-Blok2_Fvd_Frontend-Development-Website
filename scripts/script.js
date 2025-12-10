console.log("hi");

//For the addtocart section.
let getal = 1;
let amount = document.querySelector("#amount");

//For shopping cart notification
let cartAmount = 0;

//Reviews, show more
let showingAll = false;


// For the nav overlay (hamburger menu)
const nav = document.querySelector(".navOverlay");
const openBTN = document.getElementById("openBtn");
const closeBTN = document.querySelector(".closebtn");

//Testimonials Carrousel
const carrousel = document.querySelector(".partnerReviews ul");
const prevBTN = document.querySelector(".partnerReviews button:first-of-type");
const nextBTN = document.querySelector(".partnerReviews button:last-of-type");

// For the fanfav section
const cerealButton = document.querySelector(".cerealButton");
const granolaButton = document.querySelector(".granolaButton");
const treatsButton = document.querySelector(".treatsButton");

const cerealButtonImg = document.querySelector(".cerealButtonImg");
const granolaButtonImg = document.querySelector(".granolaButtonImg");
const treatsButtonImg = document.querySelector(".treatsButtonImg");

const fanFavesIMG = document.querySelector("#fanFavesIMG");
const fanFavesIcon = document.querySelector(".fanFavesIcon3");
const fanFavesIcon3H3 = document.querySelector(".fanFavesIcon3H3");
const fanFavesIcon3p = document.querySelector(".fanFavesIcon3p");
const fanFavesSection = document.querySelector(".fanFavesSection");

//For the addtocart section.
const plusBTN = document.querySelector("#plusButton");
const minBTN = document.querySelector("#minusButton");
const addToCartSection = document.querySelector(".addToCart");

//For shopping cart notification
const cartIconNumber = document.querySelector("nav ul li:last-child a span");
const addToCartBTN = document.querySelector(".addToCartBTN");

//Reviews, show more
const reviews = document.querySelectorAll('.reviewSection ul li');
const reviewBTN = document.querySelector('.reviewSection button');

//Reviews sorteren
const reviewSelect = document.getElementById('sortingOptions');
const reviewUL = document.querySelector('.reviewSection ul');





// For the nav overlay (hamburger menu)
function openNav() {
  nav.style.width = "100%";
}

function closeNav() {
  nav.style.width = "0%";
}

closeNav();


//Testimonials Carrousel 
function scrollNext() {
  const itemWidth = carrousel.clientWidth;
  carrousel.scrollBy({ left: itemWidth, behavior: "smooth" });
}

function scrollPrev() {
  const itemWidth = carrousel.clientWidth;
  carrousel.scrollBy({ left: -itemWidth, behavior: "smooth" });
}


// For the fanfav section
function cerealButtonActive() {
  if (!fanFavesSection) return;       //ChatGPT, gestelde vraag: M'n javascript werkt niet meer, ik denk omdat die selectoren in een aparte html en css staan voor een andere pagina en ik zit nu op pagina 2, dat ik die fotmelding in de colsole heb.

  cerealButtonImg.classList.remove("is-hidden");
  granolaButtonImg.classList.add("is-hidden");
  treatsButtonImg.classList.add("is-hidden");

  cerealButton.style.backgroundColor = "#5b1bed";
  granolaButton.style.backgroundColor = "#cac4f4";
  treatsButton.style.backgroundColor = "#cac4f4";

  cerealButton.style.color = "#fff";
  granolaButton.style.color = "rgb(63,7,145)";
  treatsButton.style.color = "rgb(63,7,145)";

  fanFavesIMG.src = "images/homepage/cereal-img.png";
  fanFavesIcon.src = "images/homepage/cloud-with-hearts-icon.png";

  fanFavesIcon3H3.textContent = "Sweet & Delicious";
  fanFavesIcon3p.textContent = "Tastes just like you remember, only better.";

  fanFavesSection.style.backgroundImage = "var(--javascript-gradient-1)";
}

// For the fanfav section
function granolaButtonActive() {
  if (!fanFavesSection) return;   //ChatGPT

  cerealButtonImg.classList.add("is-hidden");
  granolaButtonImg.classList.remove("is-hidden");
  treatsButtonImg.classList.add("is-hidden");

  cerealButton.style.backgroundColor = "#cac4f4";
  granolaButton.style.backgroundColor = "#5b1bed";
  treatsButton.style.backgroundColor = "#cac4f4";

  cerealButton.style.color = "rgb(63,7,145)";
  granolaButton.style.color = "#fff";
  treatsButton.style.color = "rgb(63,7,145)";

  fanFavesIMG.src = "images/homepage/granola-img.png";
  fanFavesIcon.src = "images/homepage/hanging-plant-icon.png";

  fanFavesIcon3H3.textContent = "High in Fiber";
  fanFavesIcon3p.textContent = "7-8g of fiber in every serving.";

  fanFavesSection.style.backgroundImage = "var(--javascript-gradient-2)";
}

// For the fanfav section
function treatsButtonActive() {
  if (!fanFavesSection) return;   //ChatGPT

  cerealButtonImg.classList.add("is-hidden");
  granolaButtonImg.classList.add("is-hidden");
  treatsButtonImg.classList.remove("is-hidden");

  cerealButton.style.backgroundColor = "#cac4f4";
  granolaButton.style.backgroundColor = "#cac4f4";
  treatsButton.style.backgroundColor = "#5b1bed";

  cerealButton.style.color = "rgb(63,7,145)";
  granolaButton.style.color = "rgb(63,7,145)";
  treatsButton.style.color = "#fff";

  fanFavesIMG.src = "images/homepage/treats-img.png";
  fanFavesIcon.src = "images/homepage/on-the-go-icon.png";

  fanFavesIcon3H3.textContent = "On The Go";
  fanFavesIcon3p.textContent = "Easy to take with you on the move.";

  fanFavesSection.style.backgroundImage = "var(--javascript-gradient-3)";
}

cerealButtonActive()


//For the addtocart section.
function plus(){
    getal = getal + 1;
    updateGetal ()
};

function minus() {
    if (getal <= 1) {
        getal = 1;
    } else {
        getal = getal - 1;
    }
    updateGetal();
}

function updateGetal (){
    amount.textContent = getal;
};


//For shopping cart notification
//bron: Sanne, JS 3-stap - Oefening 3 - uitwerking met alles.
function addToCart (){
    let gekozenAantal = getal;

    cartAmount = cartAmount + gekozenAantal;

    cartIconNumber.textContent = cartAmount;
    cartIconNumber.classList.remove("empty");
}


/*bron 1: ChatGPT (.forEach)
bron 2: https://www.w3schools.com/jsref/jsref_foreach.asp
bron 3: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach*/
if (reviews && reviewBTN) {
    // Standaard tonen we alleen de eerste 3 reviews
    reviews.forEach((review, index) => {
        if(index > 2) review.classList.add('hidden');
    });

    // Klik-event voor de knop
    reviewBTN.addEventListener('click', () => {
        if(!showingAll){
            // Alles tonen
            reviews.forEach(review => review.classList.remove('hidden'));
            reviewBTN.textContent = 'Show less';
            showingAll = true;
        } else {
            // Alleen de eerste 3 tonen, rest verbergen
            reviews.forEach((review, index) => {
                if(index > 2) review.classList.add('hidden');
            });
            reviewBTN.textContent = 'Show more';
            showingAll = false;
        }
    });
}


//Reviews sorteren
if (reviewSelect && reviewUL) {
    reviewSelect.addEventListener('click', () =>  {
        if(reviewSelect.value === 'option3'){ 
            reviewUL.classList.add('reverse');
        } else {
            reviewUL.classList.remove('reverse');
        }
    });
}


//ChatGPT, Al die if statements heb ik er zelf ingezet en ik begrijp ook wrm het nodig is. De rest van di eventListeners heb ik wel zelf geschreven.
// For the nav overlay (hamburger menu)
if (openBTN && closeBTN) {
  openBTN.addEventListener("click", openNav);
}
if (openBTN && closeBTN) {
  closeBTN.addEventListener("click", closeNav);
}

//Testemonials Carrousel
if (carrousel) {
  nextBTN.addEventListener("click", scrollNext);
}
if (carrousel) {
  prevBTN.addEventListener("click", scrollPrev);
}

// For the fanfav section
if (fanFavesSection && cerealButton) {
    cerealButton.addEventListener("click", cerealButtonActive);
}
if (fanFavesSection && cerealButton) {
    granolaButton.addEventListener("click", granolaButtonActive);
}
if (fanFavesSection && cerealButton) {
    treatsButton.addEventListener("click", treatsButtonActive);
}

//For the addtocart section.
if (addToCartSection) {
    plusBTN.addEventListener('click', plus);
}

if (addToCartSection) {
    minBTN.addEventListener('click', minus);
}

//For shopping cart notification
if (addToCartBTN) {
  addToCartBTN.addEventListener("click", addToCart);
}
