const container = document.getElementById("lista-produtos");
const inputNome = document.getElementById("filtro-nome");
const selectCategoria = document.getElementById("filtro-categoria");

let produtos = [];

function criarCard(prod) {
  const card = document.createElement("div");
  card.classList.add("prod-card");

  card.innerHTML = `
    <div class="conteudo-prod">
        <h4 class="tit-prod">${prod.titulo}</h4>
        <p class="subtit-prod">${prod.subtitulo}</p>
        <img class="img-prod" src="${prod.imagem}" alt="${prod.titulo}">
        <div class="preco-prod">
          <span class="preco-antigo">${prod.precoAntigo}</span>
          <span class="preco-novo">${prod.precoNovo}</span>
        </div>
        <div class="detalhes-prod">
          <p class="desc-prod">${prod.descricao}</p>
          <div class="tabela-prod">
              <div class="linha">
                  <span class="titulo">Categoria:</span>
                  <span class="valor">${prod.categoria}</span>
              </div>
              <div class="linha">
                  <span class="titulo">Porte:</span>
                  <span class="valor">${prod.porte}</span>
              </div>
          </div>
        </div>
        <button class="btn-prod">Ver detalhes</button>
    </div>
  `;
  return card;
}

function renderizarProdutos(lista) {
    container.innerHTML = "";
  
    lista.forEach(prod => {
      const card = criarCard(prod);
      container.appendChild(card);
  
      const btn = card.querySelector(".btn-prod");
      const detalhes = card.querySelector(".detalhes-prod");
  
      btn.addEventListener("click", () => {
        document.querySelectorAll(".detalhes-prod.aberto").forEach(outro => {
          if (outro !== detalhes) {
            outro.classList.remove("aberto");
          }
        });
  
        // Se um card já tá aberto, fecha. se não, abre
        detalhes.classList.toggle("aberto");
      });
    });
  }
  

function aplicarFiltros() {
  const nomeBuscado = inputNome.value.toLowerCase();
  const categoriaSelecionada = selectCategoria.value;

  const filtrados = produtos.filter(prod => {
    const nomeMatch = prod.titulo.toLowerCase().includes(nomeBuscado) || prod.subtitulo.toLowerCase().includes(nomeBuscado);
    const categoriaMatch = categoriaSelecionada === "" || prod.categoria === categoriaSelecionada;

    return nomeMatch && categoriaMatch;
  });

  renderizarProdutos(filtrados);
}


inputNome.addEventListener("input", aplicarFiltros);
selectCategoria.addEventListener("change", aplicarFiltros);

// buscar os produtos no JSON
fetch("./JS/JSON/produtos.json")
  .then(res => res.json())
  .then(data => {
    produtos = data;
    renderizarProdutos(produtos);
  })
  .catch(err => console.error("Erro ao carregar produtos:", err));
