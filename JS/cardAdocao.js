const container = document.getElementById("adocao-container");
const inputFiltro = document.getElementById("filtro-adocao");
const botoesFiltro = document.querySelectorAll(".filtro-btn");

let tipoSelecionado = "todos";

function renderAnimais(lista) {
  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = "<p style='text-align: center;'>Nenhum animal encontrado.</p>";
    return;
  }

  lista.forEach(animal => {
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
}

// Aplica os filtros
function aplicarFiltros() {
  const termo = inputFiltro.value.toLowerCase();

  const filtrados = animaisAdocao.filter(animal => {
    const nomeMatch = animal.nome.toLowerCase().includes(termo);
    const descMatch = animal.descricao.toLowerCase().includes(termo);
    const tipoMatch = tipoSelecionado === "todos" || animal.animal === tipoSelecionado;

    return (nomeMatch || descMatch) && tipoMatch;
  });

  renderAnimais(filtrados);
}

inputFiltro.addEventListener("input", aplicarFiltros);

botoesFiltro.forEach(btn => {
  btn.addEventListener("click", () => {
    tipoSelecionado = btn.dataset.tipo;

    botoesFiltro.forEach(b => b.classList.remove("ativo"));
    btn.classList.add("ativo");

    aplicarFiltros();
  });
});

renderAnimais(animaisAdocao);
