let form = document.getElementById("submit");
form.addEventListener("click", newElement);

function newElement(event) {
  event.preventDefault();

  let User = document.getElementById("User").value;
  let p = document.createElement("p");
  p.textContent = `${User}, Bienvenue`;

  let section = document.getElementByIdk("section");
  section.appendChild(p); // Ajoute le paragraphe dans la section.

  document.getElementById("User").value = "";
}
