// Quel est le titre de la boutique
const h1 = document.querySelector("h1");
console.log(h1.textContent);

// Des informations manquent !

const description_boutique = document.querySelector("#description_boutique");
const new_p = document.createElement("p");
new_p.textContent =
  "Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.";

description_boutique.appendChild(new_p);

// Roger, enfoiré !
document.querySelector("#blague_de_roger_le_sorcier").remove();

// Archibald n'est pas là, appelons le !

function callback_Archibald() {
  alert("🧙‍♂️ J'arrive, j'arrive Aventurier !.");
}

document
  .querySelector("#call_archibald")
  .addEventListener("click", callback_Archibald);
