function addToBasket(itemIndex, arrayName) {
  let item = getItemByArrayName(itemIndex, arrayName);
  if (!item) return;

  let found = updateBasketAmount(item);
  if (!found) {
    addNewItemToBasket(item);
  }
  saveToLocalStorage();
  renderBasket();
  triggerBasketGrow();
}

function getItemByArrayName(itemIndex, arrayName) {
  if (arrayName === "dishes") {
    return dishes[itemIndex];
  } else if (arrayName === "tapas") {
    return tapas[itemIndex];
  } else if (arrayName === "postres") {
    return postres[itemIndex];
  } else if (arrayName === "drinks") {
    return drinks[itemIndex];
  }
  return null;
}

function addNewItemToBasket(item) {
  basket.push({
    name: item.name,
    price: item.price,
    description: item.description,
    amount: 1,
  });
}

function updateBasketAmount(item) {
  for (let i = 0; i < basket.length; i++) {
    if (basket[i].name === item.name) {
      basket[i].amount++;
      return true;
    }
  }
  return false;
}

function removeFromBasket(index) {
  basket.splice(index, 1);

  saveToLocalStorage();
  renderBasket();
}

function increaseAmount(index) {
  basket[index].amount++;
  saveToLocalStorage();
  renderBasket();
}

function decreaseAmount(index) {
  if (basket[index].amount > 1) {
    basket[index].amount--;
  }
  saveToLocalStorage();
  renderBasket();
}

function removeFromBasket(index) {
  basket.splice(index, 1);

  saveToLocalStorage();
  renderBasket();
}

function triggerBasketGrow() {
  let basketIcon = document.querySelector('.basketIcon');
  basketIcon.classList.add('grow');

  setTimeout(() => {
    basketIcon.classList.remove('grow');
  }, 400);
}

function calculateDeliveryCosts(totalSum) {
  return totalSum >= 20 ? 0 : 5;
}

function calculateTotalSum() {
  let totalSum = 0;
  for (let i = 0; i < basket.length; i++) {
    totalSum += basket[i].price * basket[i].amount;
  }
  return totalSum;
}

function continueShopping() {
  renderBasket();
}

function toggleBasket() {
  let basketWrapper = document.getElementById("basketSection");
  let body = document.body;

  if (basketWrapper.classList.contains("open")) {
    basketWrapper.classList.remove("open");
    body.classList.remove("overlay-visible");
    body.classList.remove("no-scroll");
  } else {
    basketWrapper.classList.add("open");
    body.classList.add("overlay-visible");
    body.classList.add("no-scroll");
  }
}

function toggleCloseBtn() {
  let closeButton = document.querySelector(".close-basket");
  if (window.innerWidth <= 760) {
    closeButton.classList.remove("d-none");
  } 
}

function getCloseButton() {
  if (window.innerWidth <= 760) {
    return '<span class="close-basket" onclick="toggleBasket()">×</span>';
  }
  return '';
}

function saveToLocalStorage() {
  localStorage.setItem("basket", JSON.stringify(basket));
  localStorage.setItem("dishes", JSON.stringify(dishes));
  localStorage.setItem("tapas", JSON.stringify(tapas));
  localStorage.setItem("postres", JSON.stringify(postres));
  localStorage.setItem("drinks", JSON.stringify(drinks));
}

function loadFromLocalStorage() {
  if (localStorage.getItem("basket")) {
    basket = JSON.parse(localStorage.getItem("basket"));
  }
  if (localStorage.getItem("dishes")) {
    dishes = JSON.parse(localStorage.getItem("dishes"));
  }
  if (localStorage.getItem("tapas")) {
    tapas = JSON.parse(localStorage.getItem("tapas"));
  }
  if (localStorage.getItem("postres")) {
    postres = JSON.parse(localStorage.getItem("postres"));
  }
  if (localStorage.getItem("drinks")) {
    drinks = JSON.parse(localStorage.getItem("drinks"));
  }
  renderBasket();
  renderTapasContent();
  renderDishContent();
  renderPostreContent();
  renderDrinksContent();
}

function toggleProductInfo(category, j) {
  let productOverlay = document.getElementById(`overlay-${category}-${j}`);
  
  if (productOverlay) {
    let isHidden = productOverlay.classList.contains("d_none");
    productOverlay.classList.toggle("d_none", !isHidden);

    document.body.classList.toggle("overlay-visible", isHidden);
  }
}

document.addEventListener("click", function (event) {
  let openOverlays = document.querySelectorAll(".overlay-content:not(.d_none)");

  openOverlays.forEach((overlay) => {
    if (!overlay.contains(event.target) && !event.target.closest("ins")) {
      let overlayId = overlay.id.split("-");
      let category = overlayId[1];
      let index = overlayId[2];
      toggleProductInfo(category, index);
    }
  });
});