// ======================== API ========================

async function getCharacters() {
try {
    let response = await fetch(`https://hp-api.onrender.com/api/characters`);
    let data = await response.json();

    let first12 = data.slice(0, 12);
    
    displayCharacters(first12);
}catch (error) {
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

getCharacters();