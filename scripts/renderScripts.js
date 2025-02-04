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

function renderContent(type, sectionId, title) {
  let wrapper = document.getElementById(sectionId);
  wrapper.innerHTML = ``;
  wrapper.innerHTML = `<h2 class="subtitle">${title}</h2>`;

  const items = getItemsByType(type);
  for (let i = 0; i < items.length; i++) {
    wrapper.innerHTML += generateTemplate(type, i);
  }
}

function renderDishContent() {
  renderContent('dishes', 'dishesSection', 'Hauptspeisen');
}

function renderTapasContent() {
  renderContent('tapas', 'tapasSection', 'Vorspeisen');
}

function renderPostreContent() {
  renderContent('postres', 'postreSection', 'Nachspeisen');
}

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

function renderBasketItems(basketWrapper) {
  for (let i = 0; i < basket.length; i++) {
    basketWrapper.innerHTML += basketTemplate(i);
  }
}

function renderTotal(
  basketWrapper,
  totalSum,
  deliveryCosts,
  totalWithDelivery
) {
  basketWrapper.innerHTML += renderTotalTemplate(totalSum, deliveryCosts, totalWithDelivery);
}

function placeOrder() {
  basket = [];
  saveToLocalStorage();

  let basketWrapper = document.getElementById("basketSection");
  basketWrapper.innerHTML = placeOrderTemplate();
}

document.addEventListener("click", function (event) {
  let basketWrapper = document.getElementById("basketSection");
  let basketIcon = document.querySelector(".basketIcon");

  if (
    basketWrapper.classList.contains("open") && 
    !basketWrapper.contains(event.target) &&
    !basketIcon.contains(event.target)
  ) {
    toggleBasket();
  }
});

