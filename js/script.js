let allCharacters = [];
// ======================== API ========================

async function getCharacters() {
  try {
    let response = await fetch(`https://hp-api.onrender.com/api/characters`);
    let data = await response.json();

    allCharacters = data.slice(0, 12);
    displayCharacters(allCharacters);
  } catch (error) {
    console.error("Erreur lors de la récupération des personnages :");
  }
}

// ======================== Affichage ========================

function displayCharacters(characters) {
  const container = document.querySelector(".characters");
  container.innerHTML = "";

  characters.forEach(char => {
    const charHTML = `
      <div class="character ${char.house.toLowerCase()}">
        <a href="./index.html">
          <img src="${char.image || './images/placeholder.png'}" alt="${char.name}" />
          <p>${char.name}</p>
        </a>
      </div>
    `;
    container.innerHTML += charHTML;
  });
}

// ==================== Filtrer par maison ====================

const houses = document.querySelectorAll(".house");

houses.forEach(button => {
  button.addEventListener("click", () => {
    let house = button.dataset.house;

    let filtered = allCharacters
      .filter(char => char.house === house)
      .sort((a, b) => a.name.localeCompare(b.name));

    displayCharacters(filtered);
  });
});

getCharacters();