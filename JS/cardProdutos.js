const container = document.getElementById("lista-produtos");

produtos.forEach(prod => {
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
        <button class="btn-prod">Comprar</button>
    </div>
    `;

    container.appendChild(card);
});