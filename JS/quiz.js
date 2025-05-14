const raças = {
  "Boa Constritora": 0,
  "Píton bola": 0,
  "Coelho branco": 0,
  "Coelho cinza": 0,
  "Coelho misturado": 0,
  "Porquinho-da-índia": 0,
  "Calopsita": 0,
  "Papagaio": 0,
  "Rolinha": 0,
  "Dálmata": 0,
  "Bulldog": 0,
  "Pitbull": 0,
  "Caramelo": 0,
  "São Bernardo": 0,
  "Pincher": 0,
  "Pug": 0,
  "Gato laranja": 0,
  "Gato frajola": 0,
  "Gato branco": 0,
  "Gato siamês": 0
};

const imagens = {
  "Boa Constritora": "./Img/CobraMarrom.png",
  "Píton bola": "./Img/CobraBranca.png",
  "Coelho branco": "./Img/coelhoBranco.png",
  "Coelho cinza": "./Img/coelhoCinza.png",
  "Coelho misturado": "./Img/coelhoMesclado.png",
  "Porquinho-da-índia": "./Img/hamster.png",
  "Calopsita": "./Img/calopsita.png",
  "Papagaio": "./Img/Papagaio.png",
  "Rolinha": "./Img/rolinhaPassaro.png",
  "Dálmata": "./Img/dalmata.png",
  "Bulldog": "./Img/bulldog.png",
  "Pitbull": "./Img/pitbull.png",
  "Caramelo": "./Img/caramelo.png",
  "São Bernardo": "./Img/saoBernardo.png",
  "Pincher": "./Img/pincher.png",
  "Pug": "./Img/pug.png",
  "Gato laranja": "./Img/gatoLaranja.png",
  "Gato frajola": "./Img/Frajola.png",
  "Gato branco": "./Img/gatoBranco.png",
  "Gato siamês": "./Img/gatoSiames.png"
};

const descrições = {
  "Boa Constritora": "Uma cobra grande, ideal para quem tem espaço e curiosidade por animais exóticos.",
  "Píton bola": "Uma cobra de médio porte, tranquila, ótima para iniciantes em répteis.",
  "Coelho branco": "Afetuoso, silencioso e ótimo para crianças.",
  "Coelho cinza": "Mais ativo e brincalhão, gosta de interação.",
  "Coelho misturado": "Equilibrado, bom para quem tem espaço médio.",
  "Porquinho-da-índia": "Animal pequeno, silencioso e de fácil manutenção.",
  "Calopsita": "Ave alegre e sociável, gosta de interagir.",
  "Papagaio": "Muito inteligente, brincalhão e vocal.",
  "Rolinha": "Ave tranquila, ótima para ambientes silenciosos.",
  "Dálmata": "Ativo, precisa de espaço e brincadeiras.",
  "Bulldog": "Tranquilo, afetuoso e ótimo para ambientes médios.",
  "Pitbull": "Forte e protetor, ideal para quem tem tempo e energia.",
  "Caramelo": "O clássico vira-lata amigo de todos, adaptável.",
  "São Bernardo": "Grande, carinhoso e precisa de espaço.",
  "Pincher": "Pequeno, valente e cheio de energia.",
  "Pug": "Ideal para apartamentos e crianças, calmo e adorável.",
  "Gato laranja": "Brincalhão e curioso.",
  "Gato frajola": "Equilibrado, afetuoso e independente.",
  "Gato branco": "Tranquilo e observador.",
  "Gato siamês": "Muito carinhoso e apegado ao tutor."
};

const perguntas = [
  {
    texto: "Qual o tamanho do espaço disponível?",
    opcoes: [
      { texto: "Pequeno (ex: apartamento pequeno)", pontos: ["Pincher", "Pug", "Coelho branco", "Porquinho-da-índia", "Calopsita", "Gato branco", "Gato siamês", "Píton bola"] },
      { texto: "Médio (ex: apartamento com varanda ou casa pequena)", pontos: ["Bulldog", "Gato frajola", "Gato laranja", "Papagaio", "Coelho misturado", "Píton bola", "Caramelo"] },
      { texto: "Grande (quintal ou sítio)", pontos: ["São Bernardo", "Pitbull", "Dálmata", "Boa Constritora", "Papagaio", "Rolinha", "Gato laranja", "Caramelo"] }
    ]
  },
  {
    texto: "Quanto tempo você tem para dedicar diariamente ao animal?",
    opcoes: [
      { texto: "Muito tempo", pontos: ["Pitbull", "Caramelo", "Papagaio", "Dálmata", "Gato laranja", "Coelho cinza"] },
      { texto: "Algum tempo", pontos: ["Bulldog", "Pug", "Gato siamês", "Calopsita", "Coelho branco", "Pincher"] },
      { texto: "Pouco tempo", pontos: ["Porquinho-da-índia", "Boa Constritora", "Píton bola", "Rolinha", "Gato branco"] }
    ]
  },
  {
    texto: "Você tem alergia a pelos ou penas?",
    opcoes: [
      { texto: "Sim", pontos: ["Boa Constritora", "Píton bola", "Porquinho-da-índia"] },
      { texto: "Não", pontos: ["Pug", "Pincher", "Gato siamês", "Caramelo", "Papagaio", "Coelho branco", "Gato laranja"] }
    ]
  },
  {
    texto: "Você busca um animal que seja:",
    opcoes: [
      { texto: "Carinhoso e próximo", pontos: ["Pug", "Caramelo", "Papagaio", "Gato siamês", "Coelho branco"] },
      { texto: "Independente", pontos: ["Gato branco", "Boa Constritora", "Píton bola", "Rolinha"] },
      { texto: "Exótico e silencioso", pontos: ["Boa Constritora", "Píton bola", "Porquinho-da-índia", "Calopsita"] },
      { texto: "Alegre e brincalhão", pontos: ["Pitbull", "Dálmata", "Pincher", "Gato laranja"] }
    ]
  },
  {
    texto: "Você convive com crianças ou idosos?",
    opcoes: [
      { texto: "Sim", pontos: ["Pug", "Caramelo", "Gato branco", "Coelho branco", "Calopsita"] },
      { texto: "Não", pontos: ["Pitbull", "Boa Constritora", "Papagaio", "Píton bola"] }
    ]
  }
];

let indicePergunta = 0;
const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const imgEl = document.getElementById("animal-img");
const textEl = document.getElementById("result-text");

function mostrarPergunta() {
  const atual = perguntas[indicePergunta];
  quizEl.innerHTML = `<p>${atual.texto}</p>`;
  atual.opcoes.forEach(opcao => {
    const btn = document.createElement("button");
    btn.textContent = opcao.texto;
    btn.onclick = () => {
      opcao.pontos.forEach(r => raças[r]++);
      indicePergunta++;
      if (indicePergunta < perguntas.length) {
        mostrarPergunta();
      } else {
        mostrarResultado();
      }
    };
    quizEl.appendChild(btn);
  });
}

function mostrarResultado() {
  quizEl.style.display = "none";
  resultEl.style.display = "block";

  const vencedor = Object.entries(raças).sort((a, b) => b[1] - a[1])[0][0];

  imgEl.src = imagens[vencedor];
  textEl.innerHTML = `<h2>${vencedor}</h2><p>${descrições[vencedor]}</p>`;
}

mostrarPergunta();
