//Fügt ein Gericht zum Warenkorb hinzu oder erhöht die Menge, wenn es bereits vorhanden ist.
function addToBasket(dishIndex) {
  let dish = dishes[dishIndex]; // Holt das Gericht aus dem dishes Array anhand des Index
  let found = false; // Flag, um zu prüfen, ob das Gericht bereits im Warenkorb ist

  // Durchläuft den Warenkorb, um zu prüfen, ob das Gericht bereits hinzugefügt wurde
  for (let i = 0; i < basket.length; i++) {
    if (basket[i].name === dish.name) {
      // Durchläuft den Warenkorb, um zu prüfen, ob das Gericht bereits hinzugefügt wurde
      basket[i].amount++;
      found = true; // Markiert das Gericht als gefunden
      break; // Bricht die Schleife ab, da das Gericht gefunden wurde
    }
  }
  // Wenn das Gericht noch nicht im Warenkorb ist, füge es hinzu
  if (!found) {
    basket.push({
      name: dish.name,
      price: dish.price,
      description: dish.description,
      amount: 1, // Setzt die Menge des neuen Gerichts auf 1
    });
  }
  saveToLocalStorage();
  renderBasket();
}

function addTapasToBasket(tapasIndex) {
  let tapa = tapas[tapasIndex];
  let found = false;

  for (let i = 0; i < basket.length; i++) {
    if (basket[i].name === tapa.name) {
      basket[i].amount++;
      found = true;
      break;
    }
  }
  if (!found) {
    basket.push({
      name: tapa.name,
      price: tapa.price,
      description: tapa.description,
      amount: 1,
    });
  }
  saveToLocalStorage();
  renderBasket();
}

function addPostresToBasket(postreIndex) {
  let postre = postres[postreIndex];
  let found = false;

  for (let i = 0; i < basket.length; i++) {
    if (basket[i].name === postre.name) {
      basket[i].amount++;
      found = true;
      break;
    }
  }
  if (!found) {
    basket.push({
      name: postre.name,
      price: postre.price,
      description: postre.description,
      amount: 1,
    });
  }
  saveToLocalStorage();
  renderBasket();
}

//Das jeweilige Gericht wird aus dem Array Basket entfernt
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
  basket.splice(index, 1); // Entfernt das Gericht anhand des Indexes

  saveToLocalStorage();
  renderBasket();
}

function saveToLocalStorage() {
  localStorage.setItem("basket", JSON.stringify(basket)); // Speichert den Warenkorb
  localStorage.setItem("dishes", JSON.stringify(dishes)); // Speichert das Gericht-Array (falls erforderlich)
  localStorage.setItem("tapas", JSON.stringify(tapas)); // Speichert das Gericht-Array (falls erforderlich)
  localStorage.setItem("postres", JSON.stringify(postres)); // Speichert das Gericht-Array (falls erforderlich)

}

function loadFromLocalStorage() {
  if (localStorage.getItem("basket")) {
    basket = JSON.parse(localStorage.getItem("basket"));
  }
  if (localStorage.getItem("dishes")) {
    dishes = JSON.parse(localStorage.getItem("dishes"));
  }
  if (localStorage.getItem("tapas")) {
    dishes = JSON.parse(localStorage.getItem("tapas"));
  }
  if (localStorage.getItem("postres")) {
    dishes = JSON.parse(localStorage.getItem("postres"));
  }

  renderBasket();
  renderDishContent();
}

function totalSum() {
  let sum = 0;
  for (let i = 0; i < basket.length; i++) {
    sum += basket[i].price * basket[i].amount;
  }
  return sum;
}
