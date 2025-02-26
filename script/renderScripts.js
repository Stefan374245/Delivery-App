/**
 * @namespace Render-functions
 * @description This module contains all functions that are related to rendering the content of the website.
 * 
 * @author Stefan
 * @version 1.0
 */
/**
 * This file contains all the helper functions to render the content of the website. window.addEventListener is used to render the basket when the window is resized.
 */
function init() {
  loadFromLocalStorage();
  renderAot();
  renderDishContent();
  renderTapasContent();
  renderPostreContent();
  renderDrinksContent();
  window.addEventListener("resize", function () {
    renderBasket();
  });
}
/**
 * * renderAot - Renders the stars for the rating of the restaurant.
 */
function renderAot() {
  let aotSection = document.getElementById("aotSection");
  aotSection.innerHTML = ``;
  for (let i = 0; i < rating; i++) {
    stars +=
      '<img src="./assets/Favicon/star-filled.png" alt="Full Star" class="star">';
  }
  for (let i = rating; i < maxRating; i++) {
    stars +=
      '<img src="./assets/Favicon/star-empty.png" alt="Full Star" class="star">';
  }

  aotSection.innerHTML += aotTemplate(rating, maxRating);
}
/**
 * This function renders the content of the website based on the type of the item and the section where the content should be rendered.
 * 
 * @param {string} type - The type of the item which should be rendered.
 * @param {string} sectionId - The id of the section where the content should be rendered.
 * @param {string} title - The title of the section where the content should be rendered.
 */
function renderContent(type, sectionId, title) {
  let wrapper = document.getElementById(sectionId);
  wrapper.innerHTML = ``;
  wrapper.innerHTML = `<h2 class="subtitle">${title}</h2>`;

  const items = getItemsByType(type);
  for (let i = 0; i < items.length; i++) {
    wrapper.innerHTML += generateTemplate(type, i);
  }
}
/**
 * This function renders the content of the dishes section.
 */
function renderDishContent() {
  renderContent('dishes', 'dishesSection', 'Hauptspeisen');
}
/**
 * This function renders the content of the tapas section.
 */
function renderTapasContent() {
  renderContent('tapas', 'tapasSection', 'Vorspeisen');
}
/**
 * This function renders the content of the postres section.
 */
function renderPostreContent() {
  renderContent('postres', 'postreSection', 'Nachspeisen');
}
/**
 * This function renders the content of the drinks section
 */
function renderDrinksContent() {
  renderContent('drinks', 'drinksSection', 'Getränke');
}

/*function renderDishContent() {
  let dishWrapper = document.getElementById("dishesSection");
  dishWrapper.innerHTML = ``;
  dishWrapper.innerHTML = `<h2 class="subtitle">Hauptspeisen</h2>`;

  for (let j = 0; j < dishes.length; j++) {
    dishWrapper.innerHTML += generateTemplate(dishes, j);
  }
}

function renderTapasContent() {
  let tapasWrapper = document.getElementById("tapasSection");
  tapasWrapper.innerHTML = ``;
  tapasWrapper.innerHTML = `<h2 class="subtitle">Vorspeisen</h2>`;

  for (let k = 0; k < tapas.length; k++) {
    tapasWrapper.innerHTML += tapasTemplate(k);
  }
}

function renderPostreContent() {
  let postresWrapper = document.getElementById("postreSection");
  postresWrapper.innerHTML = ``;
  postresWrapper.innerHTML = `<h2 class="subtitle">Nachspeisen</h2>`;

  for (let i = 0; i < postres.length; i++) {
    postresWrapper.innerHTML += postreTemplate(i);
  }
}

function renderDrinksContent() {
  let drinksWrapper = document.getElementById("drinksSection");
  drinksWrapper.innerHTML = ``;
  drinksWrapper.innerHTML = `<h2 class="subtitle">Getränke</h2>`;

  for (let i = 0; i < drinks.length; i++) {
    drinksWrapper.innerHTML += drinksTemplate(i);
  }
}*/

/**
 * This function renders the basket section of the website and calculates the total sum of the items with helper functions calculateTotalSum and calculateDeliveryCosts.
 * RenderBasket calls the helper functions renderBasketItems and renderTotal to render the items in the basket and the total sum of the items.
 */
function renderBasket() {
  let basketWrapper = document.getElementById("basketSection");
  basketWrapper.innerHTML = `<h2 class="subtitle">Warenkorb</h2>`;

  if (basket.length === 0) {
    basketWrapper.innerHTML += emptyBasketTemplate();
  } else {
    let totalSum = calculateTotalSum();
    let deliveryCosts = calculateDeliveryCosts(totalSum);
    let totalWithDelivery = totalSum + deliveryCosts;

    renderBasketItems(basketWrapper);
    renderTotal(basketWrapper, totalSum, deliveryCosts, totalWithDelivery);
  }
}
/**
 * This function renders the items in the basket with the help of the basketTemplate.
 * 
 * @param {string} basketWrapper - The wrapper where the basket items should be rendered.
 */
function renderBasketItems(basketWrapper) {
  for (let i = 0; i < basket.length; i++) {
    basketWrapper.innerHTML += basketTemplate(i);
  }
}
/**
 * This function renders the total sum of the items in the basket with the help of the totalTemplate.
 * 
 * @param {string} basketWrapper - The wrapper where the total sum should be rendered.
 * @param {string} totalSum - The total sum of the items in the basket
 * @param {string} deliveryCosts - The delivery costs
 * @param {string} totalWithDelivery - The total sum of the items in the basket with the delivery costs
 */
function renderTotal(
  basketWrapper,
  totalSum,
  deliveryCosts,
  totalWithDelivery
) {
  basketWrapper.innerHTML += renderTotalTemplate(totalSum, deliveryCosts, totalWithDelivery);
}
/**
 * This function saves the items in the basket to the local storage and retrieves them when the website is reloaded.
 * With placeOrder the basket is emptied and the order is placed and the placeOrderTemplate is rendered.
 */
function placeOrder() {
  basket = [];
  saveToLocalStorage();

  let basketWrapper = document.getElementById("basketSection");
  basketWrapper.innerHTML = placeOrderTemplate();
}
/**
 * This function toggles the basket section of the website if the user clicks on the basket icon or beside the basket section.
 * which eventListener is added to the document to check if the user clicks on the basket icon or beside the basket section.
 */
document.addEventListener("click", function (event) {
  let basketWrapper = document.getElementById("basketSection");
  let basketIcon = document.querySelector(".basketIcon");

  if (checkEvent(event.target)) {
    return;
  }
  if (
    basketWrapper.classList.contains("open") && 
    !basketWrapper.contains(event.target) &&
    !basketIcon.contains(event.target)
  ) {
    toggleBasket();
  }
});
/**
 * This function checks if the event target is the increase-amount, decrease-amount, deleteImg or orderBtn. It sets the event target to the event target of the event listener.
 * 
 * @param {eventTarget} eventTarget - The target of the event like increase-amount, decrease-amount, deleteImg or orderBtn.
 * @returns {boolean} - Returns true if the event target matches any of the specified classes, otherwise false.
 */
function checkEvent(eventTarget) {
  return eventTarget.classList.contains("increase-amount") ||
         eventTarget.classList.contains("decrease-amount") ||
         eventTarget.classList.contains("deleteImg") ||
         eventTarget.classList.contains("orderBtn");
}