const container = document.getElementById("adocao-container");

animaisAdocao.forEach(animal => {
  const card = document.createElement("div");
  card.className = "adocao-card";

  card.innerHTML = `
    <img src="${animal.imagem}" class="adocao-image">
    <div class="adocao-info">
      <h2>${animal.nome}</h2>
      <p>${animal.descricao}</p>
      <button class="adocao-button">Adotar</button>
    </div>
  `;

  container.appendChild(card);
});
