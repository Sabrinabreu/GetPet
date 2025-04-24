const container = document.getElementById("adestramento-container");

function renderServicos(servicos) {
  container.innerHTML = "";

  if (servicos.length === 0) {
    container.innerHTML = "<p style='text-align: center;'>Nenhum serviço de adestramento encontrado.</p>";
    return;
  }

  servicos.forEach(servico => {
    const card = document.createElement("div");
    card.className = "adestramento-card";

    card.innerHTML = `
      <img src="${servico.imagem}" class="adestramento-image">
      <div class="adestramento-info">
        <h2>${servico.nome}</h2>
        <p>${servico.descricao}</p>
        <button class="adestramento-button">Contratar</button>
      </div>
    `;

    container.appendChild(card);
  });
}


// Serviços de adestramento
const servicosAdestramento = [
  {
    nome: "Adestramento Básico",
    imagem: "./Img/adestramentoBasico.jpg",
    descricao: "Ensina comandos básicos como sentar, ficar, deitar e vir quando chamado.",
  },
  {
    nome: "Adestramento Avançado",
    imagem: "./Img/adestramentoAvancado.jfif",
    descricao: "Treinamento para controle de comportamento, obediência avançada e habilidades especiais.",
  },
  {
    nome: "Adestramento de Filhotes",
    imagem: "./Img/adestramentoFilhote.avif",
    descricao: "Programa especial para filhotes, focando em socialização e hábitos saudáveis.",
  },
  {
    nome: "Adestramento de Comportamento",
    imagem: "./Img/adestramentoComportamento.jpg",
    descricao: "Foca em corrigir comportamentos indesejados como latidos excessivos e agressividade.",
  },
  {
    nome: "Adestramento Personalizado",
    imagem: "./Img/adestramentoPersonalizado.jpeg",
    descricao: "Treinamento sob medida, adaptado às necessidades do seu pet e estilo de vida.",
  }
];

renderServicos(servicosAdestramento);
