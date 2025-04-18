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
    const tipoMatch = tipoSelecionado === "todos" || animal.animal === tipoSelecionado;

    return (nomeMatch) && tipoMatch;
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


// animais para adoção
const animaisAdocao = [
  {
    nome: "Bart",
    imagem: "./Img/gatoFrajola.png",
    descricao: "Gato brincalhão e curioso, adora se esconder em caixas e perseguir luzes.",
    animal: "gato"
  },
  {
    nome: "Mauro",
    imagem: "./Img/Papagaio.png",
    descricao: "Papagaio extrovertido, adora interagir com humanos e imitar sons divertidos.",
    animal: "passaro"
  },
  {
    nome: "Zaya",
    imagem: "./Img/pitbull.png",
    descricao: "Pitbull leal e carinhoso, ótimo com crianças e muito protetor.",
    animal: "cachorro"
  },
  {
    nome: "Killua",
    imagem: "./Img/gatoBranco.png",
    descricao: "Gatinho tranquilo e observador, ideal para ambientes calmos.",
    animal: "gato"
  },
  {
    nome: "Amanda",
    imagem: "./Img/hamster.png",
    descricao: "Hamster fofinha e ativa, adora correr na rodinha e explorar túneis.",
    animal: "roedor"
  },
  {
    nome: "Ravier",
    imagem: "./Img/pincher.png",
    descricao: "Pincher cheio de energia, sempre alerta e muito companheiro.",
    animal: "cachorro"
  },
  {
    nome: "Denis",
    imagem: "./Img/coelhoBranco.png",
    descricao: "Coelhinho dócil e sociável, ama receber carinho e é super limpo.",
    animal: "lagomorfo"
  },
  {
    nome: "Remi",
    imagem: "./Img/gatoSiames.png",
    descricao: "Gato siamês elegante e falante, adora conversar e estar perto das pessoas.",
    animal: "gato"
  },
  {
    nome: "Thor",
    imagem: "./Img/bulldog.png",
    descricao: "Bulldog calmo e amigável, adora cochilar no sofá e passeios tranquilos.",
    animal: "cachorro"
  },
  {
    nome: "Jessica",
    imagem: "./Img/CobraMarrom.png",
    descricao: "Cobra marrom serena, perfeita para quem já tem alguma experiência com répteis.",
    animal: "réptil"
  },
  {
    nome: "Garfield",
    imagem: "./Img/gatoLaranja.png",
    descricao: "Gato laranja preguiçoso e muito carismático, ama comida e bons cochilos.",
    animal: "gato"
  },
  {
    nome: "Fernando",
    imagem: "./Img/Dalmata.png",
    descricao: "Dálmata super ativo, ama correr e brincar ao ar livre. Muito sociável!",
    animal: "cachorro"
  },
  {
    nome: "Pompom",
    imagem: "./Img/coelhoMesclado.png",
    descricao: "Coelhinho fofo e curioso, ótimo para lares com crianças e outros pets.",
    animal: "lagomorfo"
  },
  {
    nome: "Chico",
    imagem: "./Img/pug.png",
    descricao: "Pug carismático e engraçado, sempre pronto pra uma soneca ou um petisco.",
    animal: "cachorro"
  },
  {
    nome: "Pilha",
    imagem: "./Img/calopsita.png",
    descricao: "Calopsita simpática que ama cantar e interagir com o ambiente.",
    animal: "passaro"
  },
  {
    nome: "Caramelo",
    imagem: "./Img/caramelo.png",
    descricao: "Vira-lata carinhoso e companheiro, ama passear e brincar com bola.",
    animal: "cachorro"
  },
  {
    nome: "Haru",
    imagem: "./Img/coelhoCinza.png",
    descricao: "Coelho cinza inteligente, aprende comandos e ama carinho atrás das orelhas.",
    animal: "lagomorfo"
  },
  {
    nome: "Ronaldo",
    imagem: "./Img/rolinhaPassaro.png",
    descricao: "Rolinha mansa e delicada, gosta de voar em ambientes seguros e tranquilos.",
    animal: "passaro"
  },
  {
    nome: "Mia",
    imagem: "./Img/saoBernardo.png",
    descricao: "São Bernardo gigante e gentil, ótimo cão de companhia e muito protetor.",
    animal: "cachorro"
  },
  {
    nome: "Natasha",
    imagem: "./Img/CobraBranca.png",
    descricao: "Cobra albina dócil e exótica, ideal para quem aprecia animais únicos.",
    animal: "réptil"
  }
];

renderAnimais(animaisAdocao);