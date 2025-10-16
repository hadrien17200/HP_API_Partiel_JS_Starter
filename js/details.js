let params = new URLSearchParams(window.location.search);
let characterName = params.get("name");

let container = document.querySelector(".perso");


fetch("https://hp-api.onrender.com/api/characters")
  .then(res => res.json())
  .then(data => {

    let char = data.find(c => c.name === characterName);
    if (!char) {
      container.innerHTML = "<p>Personnage introuvable !</p>";
      return;
    }

 
    container.innerHTML = `
      <figure class="perso__left">
        <img src="${char.image || './images/placeholder.png'}" alt="${char.name}" />
        <figcaption>${char.name}</figcaption>
      </figure>
      <div class="perso__right">
        <div>
          <p>Gender</p>
          <p class="attr">${char.gender}</p>
        </div>
        <div>
          <p>Eye</p>
          <p class="attr">${char.eyeColour}</p>
        </div>
        <div>
          <p>Hair</p>
          <p class="attr">${char.hairColour}</p>
        </div>
        <div>
          <p>Date of birth</p>
          <p class="attr">${char.dateOfBirth}</p>
        </div>
        <div>
          <p>Patronus</p>
          <p class="attr">${char.patronus}</p>
        </div>
      </div>
    `;

    let houseContainer = document.querySelector(".house__perso");
    if (char.house) {
    
      houseContainer.innerHTML = `
        <img src="./images/logo/${char.house}.png" alt="${char.house}" />
      `;
    } else {
      houseContainer.innerHTML = "";
    }
  })
  .catch(err => {
    console.error("Erreur lors de la récupération du personnage :");
  });
