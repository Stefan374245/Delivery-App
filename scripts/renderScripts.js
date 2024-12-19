function init() {
  loadFromLocalStorage();
  renderAot();
  renderDishContent();
  renderTapasContent();
  renderPostreContent();
  renderBasket();
}

function renderAot() {
  let aotSection = document.getElementById("aotSection");
  aotSection.innerHTML = ``;

  aotSection.innerHTML += aotTemplate();
}

function renderDishContent() {
  let dishWrapper = document.getElementById("dishesSection");
  dishWrapper.innerHTML = ``;
  dishWrapper.innerHTML = `<h2 class="subtitle">Hauptspeisen</h2>`;

  for (let j = 0; j < dishes.length; j++) {
    dishWrapper.innerHTML += dishTemplate(j);
  }
}

function renderTapasContent() {
  let tapasWrapper = document.getElementById("tapasSection");
  tapasWrapper.innerHTML = ``;
  tapasWrapper.innerHTML = `<h2 class="subtitle">Tapas</h2>`;

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

function renderBasket() {
  let basketWrapper = document.getElementById("basketSection");
  basketWrapper.innerHTML = ``;
  basketWrapper.innerHTML = `<h2 class="subtitle">Warenkorb</h2>`;

  if (basket.length === 0) {
    basketWrapper.innerHTML = "<p>Noch nichts im Warenkorb.</p>";
  } else {
    let totalSum = 0;

    // Generiere das HTML für jedes Element im Warenkorb und berechne die Gesamtsumme
    for (let i = 0; i < basket.length; i++) {
      totalSum += basket[i].price * basket[i].amount;
      basketWrapper.innerHTML += basketTemplate(i);
    }

    // Berechne die Lieferkosten
    let deliveryCosts = 5;
    if (totalSum >= 20) {
      deliveryCosts = 0;
    } else {
      deliveryCosts;
    }

    // Berechne die Gesamtsumme (mit Lieferkosten)
    let totalWithDelivery = totalSum + deliveryCosts;

    // Füge die Gesamtsumme und die Lieferkosten am Ende hinzu
    basketWrapper.innerHTML += `
          <div class="totalPrice">
            <h4>Zwischensumme: ${totalSum.toFixed(2)} €</h4>
            <p>Lieferkosten: ${deliveryCosts.toFixed(2)} €</p>
            <h3>Gesamtkosten: ${totalWithDelivery.toFixed(2)} €</h3>
          </div>
          <hr>
          <hr>
        `;
  }
}

function toggleProductInfo(category, j) {
  let productOverlay = document.getElementById(`overlay-${category}-${j}`);

  if (productOverlay) {
    productOverlay.classList.toggle("d_none");
  }
}
