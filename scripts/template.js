function aotTemplate() {
  return `
    <img src="./assets/img/gambas2.jpg" alt="gamba-img" />
    <div class="evaluationSection">
          <h1>Best Tapas</h1>
          <p>Bewertung ( 4.4 von 5 Sternen )</p>
        </div>
        <hr>
        <hr>
    <div class="aotImgSection">
      <a href="#tapasSection">
        <img class="aot-images" src="./assets/Favicon/tapasIcon.svg" alt="tapasIcon">
        <p>Vorspeisen</p>
      </a>
      <a href="#dishesSection">
        <img class="aot-images" src="./assets/Favicon/mainFood-Icon.svg" alt="mainFoodIcon">
        <p>Hauptspeisen</p>
      </a>
      <a href="#postreSection">
       <img class="aot-images" src="./assets/Favicon/postre-icon.svg" alt="postreIcon">
        <p>Nachspeisen</p>
      </a>
    </div>
    <hr>
        <hr>
  `;
};

function dishTemplate(j) {
  return `
        <div class="dishCard">
            <h2>${dishes[j].name}
              <img src="./assets/Favicon/addCard.png" onclick="addToBasket(${j})" alt="">
            </h2>

            <ins onclick="toggleProductInfo('dishes', ${j})">Produktinfo</ins>
            <p>${dishes[j].description}</p>
            <p class="price">${dishes[j].price.toFixed(2)}<span>€</span></p>
        </div>
        <div id="overlay-dishes-${j}" class="overlay d_none">      
    <div class="overlay-content">
      <span class="close" onclick="toggleProductInfo('dishes', ${j})">&times;</span>
      <h3>Zutaten</h3>
      <p> ${dishes[j].ingredients}</p>
    </div>
  </div>
`;
};

function tapasTemplate(j) {
  return `
   <div class="dishCard">
      <h2>${tapas[j].name}
        <img src="./assets/Favicon/addCard.png" onclick="addTapasToBasket(${j})" alt="">
      </h2>
      <ins onclick="toggleProductInfo('tapas', ${j})">Produktinfo</ins>
      <p>${tapas[j].description}</p>
      <p class="price">${tapas[j].price.toFixed(2)}<span>€</span></p>
  </div>
  <div id="overlay-tapas-${j}" class="overlay d_none">
    <div class="overlay-content">
      <span class="close" onclick="toggleProductInfo('tapas', ${j})">&times;</span>
      <h3>Zutaten</h3>
      <p> ${tapas[j].ingredients}</p>
    </div>
  </div>
  `
};

function postreTemplate(j) {
  return `
  <div class="dishCard">
    <h2>${postres[j].name}
     <img src="./assets/Favicon/addCard.png" onclick="addPostresToBasket(${j})" alt="">
    </h2>
    <ins onclick="toggleProductInfo('postre', ${j})">Produktinfo</ins>
    <p>${postres[j].description}</p>
    <p class="price">${postres[j].price.toFixed(2)}<span>€</span></p>
  </div>
  <div id="overlay-postre-${j}" class="overlay d_none">
    <div class="overlay-content">
      <span class="close" onclick="toggleProductInfo('postre', ${j})">&times;</span>
      <h3>Zutaten</h3>
      <p> ${postres[j].ingredients}</p>
    </div>
  </div>
  `
};

function basketTemplate(i) {
  return `
  <div class="basketItem">
        <h2>${basket[i].name}</h2>
        <div class="amounts">
          <button onclick="decreaseAmount(${i})">-</button>
         <p>${basket[i].amount}x</p>
          <button onclick="increaseAmount(${i})">+</button>
        </div>
        <div class="priceDelete">
          <p class="price">${(basket[i].price * basket[i].amount).toFixed(2)}<span>€</span> </p>
          <img class="deleteImg" onclick="removeFromBasket(${i})" src="./assets/Favicon/delete.png" alt="deleteImg">
        </div>
      </div>
      <hr>
  `;
};

