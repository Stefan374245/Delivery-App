function aotTemplate() {
  return `
    <img src="./assets/img/gambas2.jpg" alt="gamba-img" />
    <div class="evaluationSection">
          <h1>Best Tapas
          <img class="restaurant-logo" src="./assets/Logo/restaurantLogo.png" alt="restaurantLogo">
          </h1>

      <div class="stars">Bewertung :
        ${stars}
      </div>
    </div>
        <hr>
        <hr>
    <div class="aotImgSection">
        <a href="#tapasSection">
          <img class="aot-images-salad" src="./assets/Favicon/tapasIcon.png" alt="tapasIcon">
          <p>Vorspeise</p>
        </a>
        <a href="#dishesSection">
          <img class="aot-images" src="./assets/Favicon/mainFood-Icon.png" alt="mainFoodIcon">
          <p>Hauptspeise</p>
        </a>
        <a href="#postreSection">
          <img class="aot-images" src="./assets/Favicon/postre-icon.png" alt="postreIcon">
          <p>Nachspeise</p>
        </a>
        <a href="#drinksSection">
          <img class="aot-images" src="./assets/Favicon/drinks.png" alt="drinkIcon">
          <p>Getränke</p>
        </a>
    </div>
          <hr>
          <hr>
  `;
}

function getItemsByType(type) {
  switch(type) {
    case 'dishes':
      return dishes;
    case 'tapas':
      return tapas;
    case 'postres':
      return postres;
    case 'drinks':
      return drinks;
    default:
      return [];
  }
}

function generateTemplate(type, j) {
  const items = getItemsByType(type);

  if (items.length === 0) {
    return '';
  }
  return `
    <div class="dishCard">
      <div class="dish-info">
        <h2>${items[j].name} </h2>
        <ins onclick="toggleProductInfo('${type}', ${j})">Produktinfo</ins>
        <p>${items[j].description}</p>
        <p class="price">${items[j].price.toFixed(2).replace('.', ',')}<span>€</span></p>
      </div>
      <div class="dish-img">
        <img src="${items[j].images}" alt="image ${items[j].name}" class="dish-image">
      </div>
      <div class="add-to-basket">
        <img class="order-btn" onclick="addToBasket(${j}, '${type}')" src="./assets/Favicon/addCard.png" alt="addImg">
      </div>
    </div>    
    <div id="overlay-${type}-${j}" class="overlay-content d_none">
      <span class="close" onclick="toggleProductInfo('${type}', ${j})">&times;</span>
      <h3>Zutaten</h3>
      <p> ${items[j].ingredients}</p>
    </div>
  `;
}
/*
function dishTemplate(j) {
  return `
      <div class="dishCard">
      <div class="dish-info">
        <h2>${dishes[j].name} </h2>
        <ins onclick="toggleProductInfo('dishes', ${j})">Produktinfo</ins>
        <p>${dishes[j].description}</p>
        <p class="price">${dishes[j].price.toFixed(2).replace('.', ',')}<span>€</span></p>
      </div>
      <div class="dish-img">
      <img src="${dishes[j].images}" alt="image ${dishes[j].name}" class="dish-image">
      </div>
      <div class="add-to-basket">
       <img class="order-btn" onclick="addToBasket(${j}, 'dishes')" src="./assets/Favicon/addCard.png" alt="addImg">
      </div>
    </div>    
          <div id="overlay-dishes-${j}" class="overlay-content d_none">
            <span class="close" onclick="toggleProductInfo('dishes', ${j})">&times;</span>
            <h3>Zutaten</h3>
            <p> ${dishes[j].ingredients}</p>
        </div>
`;
}

function tapasTemplate(j) {
  return `
   <div class="dishCard">
      <div class="dish-info">
        <h2>${tapas[j].name} </h2>
        <ins onclick="toggleProductInfo('tapas', ${j})">Produktinfo</ins>
        <p>${tapas[j].description}</p>
        <p class="price">${tapas[j].price.toFixed(2).replace('.', ',')}<span>€</span></p>
      </div>
      <div class="dish-img">
      <img src="${tapas[j].images}" alt="image ${tapas[j].name}" class="dish-image">
      </div>
      <div class="add-to-basket">
       <img class="order-btn" onclick="addToBasket(${j}, 'tapas')" src="./assets/Favicon/addCard.png" alt="addImg">
      </div>
    </div>   
          <div id="overlay-tapas-${j}" class="overlay-content d_none">
            <span class="close" onclick="toggleProductInfo('tapas', ${j})">&times;</span>
            <h3>Zutaten</h3>
            <p> ${tapas[j].ingredients}</p>
        </div>
  `;
}

function postreTemplate(j) {
  return `
   <div class="dishCard">
      <div class="dish-info">
        <h2>${postres[j].name} </h2>
        <ins onclick="toggleProductInfo('postres', ${j})">Produktinfo</ins>
        <p>${postres[j].description}</p>
        <p class="price">${postres[j].price.toFixed(2).replace('.', ',')}<span>€</span></p>
      </div>
      <div class="dish-img">
      <img src="${postres[j].images}" alt="image ${postres[j].name}" class="dish-image">
      </div>
      <div class="add-to-basket">
       <img class="order-btn" onclick="addToBasket(${j}, 'postres')" src="./assets/Favicon/addCard.png" alt="addImg">
      </div>
    </div>   
          <div id="overlay-postres-${j}" class="overlay-content d_none">
            <span class="close" onclick="toggleProductInfo('postres', ${j})">&times;</span>
            <h3>Zutaten</h3>
            <p> ${postres[j].ingredients}</p>
        </div>
  `;
}

function drinksTemplate(j) {
  return `
   <div class="dishCard">
      <div class="dish-info">
        <h2>${drinks[j].name} </h2>
        <ins onclick="toggleProductInfo('drinks', ${j})">Produktinfo</ins>
        <p>${drinks[j].description}</p>
        <p class="price">${drinks[j].price.toFixed(2).replace('.', ',')}<span>€</span></p>
      </div>
      <div class="dish-img">
      <img src="${drinks[j].images}" alt="image ${drinks[j].name}" class="dish-image">
      </div>
      <div class="add-to-basket">
       <img class="order-btn" onclick="addToBasket(${j}, 'drinks')" src="./assets/Favicon/addCard.png" alt="addImg">
      </div>
    </div>    
          <div id="overlay-drinks-${j}" class="overlay-content d_none">
            <span class="close" onclick="toggleProductInfo('drinks', ${j})">&times;</span>
            <h3>Zutaten</h3>
            <p> ${drinks[j].ingredients}</p>
        </div>
  `;
}*/

function basketTemplate(i) {
  let closeButton = getCloseButton();
  
  return `
   ${closeButton}
  <div class="basketItem">
        <h2>${basket[i].name}</h2>
        <div class="amounts">
          <button class="decrease-amount" onclick="decreaseAmount(${i})">-</button>
         <p>${basket[i].amount}x</p>
          <button class="increase-amount" onclick="increaseAmount(${i})">+</button>
        </div>
        <div class="priceDelete">
          <p class="price">${(basket[i].price * basket[i].amount).toFixed(2).replace('.', ',')}<span>€</span> </p>
          <img class="deleteImg" onclick="removeFromBasket(${i})" src="./assets/Favicon/delete.png" alt="deleteImg">
        </div>
      </div>
      <hr>
  `;
}

function emptyBasketTemplate() {
  let closeButton = getCloseButton();
  return `
    <h3 class="subtitle">Fülle deinen Warenkorb  ${closeButton}</h3>
    <p>Füge einige leckere Gerichte aus der Speisekarte hinzu.</p>
    `
}

function placeOrderTemplate() {
  return `
    <h3>Wir haben ihre Bestellung erhalten und wird bearbeitet.</h3>
     <button class="orderBtn" id="continueShoppingButton" onclick="continueShopping()">Weiter einkaufen</button>
  `;
}

function renderTotalTemplate(totalSum, deliveryCosts, totalWithDelivery) {
  return `<div class="totalPrice">
      <h4>Zwischensumme: ${totalSum.toFixed(2).replace('.', ',')} €</h4>
      <p>Lieferkosten: ${deliveryCosts.toFixed(2).replace('.', ',')} €</p>
      <h3>Gesamtkosten: ${totalWithDelivery.toFixed(2).replace('.', ',')} €</h3>
    </div>
    <hr>
    <hr>
    <button class="orderBtn" onclick="placeOrder()" id="orderButton">Bestellen</button>
  `
}