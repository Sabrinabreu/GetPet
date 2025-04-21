// Perguntas do quiz
const perguntas = [
    {
      texto: "Qual o tamanho da sua casa?",
      opcoes: ["Apartamento", "Casa com quintal pequeno", "Casa com quintal grande", "Chácara ou fazenda"],
      pontuacao: {
        "Apartamento": ["gato", "passaro", "roedor", "lagomorfo"],
        "Casa com quintal pequeno": ["gato", "lagomorfo", "cachorro", "passaro"],
        "Casa com quintal grande": ["cachorro", "lagomorfo", "reptil"],
        "Chácara ou fazenda": ["cachorro", "lagomorfo", "reptil", "passaro"]
      }
    },
    {
      texto: "Você gostaria de um animal:",
      opcoes: ["Normal (doméstico)", "Exótico"],
      pontuacao: {
        "Normal (doméstico)": ["cachorro", "gato", "lagomorfo"],
        "Exótico": ["reptil", "passaro", "roedor"]
      }
    },
    {
      texto: "Você tem crianças em casa?",
      opcoes: ["Sim, e elas são pequenas", "Sim, são adolescentes", "Não, mas tenho jovens adultos", "Não, não tenho crianças"],
      pontuacao: {
        "Sim, e elas são pequenas": ["cachorro", "lagomorfo"],
        "Sim, são adolescentes": ["gato", "cachorro"],
        "Não, mas tenho jovens adultos": ["gato", "passaro", "reptil"],
        "Não, não tenho crianças": ["reptil", "roedor"]
      }
    },
    {
      texto: "Qual o seu nível de experiência com animais de estimação?",
      opcoes: ["Nenhuma experiência", "Tenho experiência com animais pequenos (coelhos, hamsters)", "Tenho experiência com cães e gatos", "Tenho experiência com animais exóticos (répteis, aves)"],
      pontuacao: {
        "Nenhuma experiência": ["lagomorfo", "roedor"],
        "Tenho experiência com animais pequenos (coelhos, hamsters)": ["lagomorfo", "roedor"],
        "Tenho experiência com cães e gatos": ["cachorro", "gato"],
        "Tenho experiência com animais exóticos (répteis, aves)": ["reptil", "passaro"]
      }
    },
    {
      texto: "Qual tipo de personalidade você busca em um animal?",
      opcoes: ["Calmo e tranquilo", "Brincalhão e ativo", "Protetor e leal", "Curioso e explorador"],
      pontuacao: {
        "Calmo e tranquilo": ["gato", "lagomorfo", "reptil"],
        "Brincalhão e ativo": ["cachorro", "lagomorfo", "passaro"],
        "Protetor e leal": ["cachorro"],
        "Curioso e explorador": ["reptil", "roedor", "passaro"]
      }
    },
    {
      texto: "Como é a sua rotina de alimentação?",
      opcoes: ["Horários fixos", "Horários flexíveis"],
      pontuacao: {
        "Horários fixos": ["cachorro", "lagomorfo", "passaro"],
        "Horários flexíveis": ["gato", "reptil", "roedor"]
      }
    },
    {
      texto: "Você tem algum problema de alergia?",
      opcoes: ["Não", "Sim, sou alérgico a pelos de animais", "Sim, tenho alergia a penas"],
      pontuacao: {
        "Não": ["reptil", "roedor", "passaro", "gato", "cachorro", "lagomorfo"],
        "Sim, sou alérgico a pelos de animais": ["reptil", "passaro"],
        "Sim, tenho alergia a penas": ["gato", "cachorro", "lagomorfo", "roedor"]
      }
    },
    {
      texto: "Você tem outros animais em casa?",
      opcoes: ["Sim, cães", "Sim, gatos", "Sim, outros animais", "Não"],
      pontuacao: {
        "Sim, cães": ["gato", "reptil"],
        "Sim, gatos": ["cachorro", "reptil", "passaro"],
        "Sim, outros animais": ["roedor", "reptil"],
        "Não": ["reptil", "roedor", "passaro", "gato", "cachorro", "lagomorfo"]
      }
    },
    {
      texto: "Você gostaria de um animal que se dê bem com outros pets?",
      opcoes: ["Sim, importante que se dê bem com outros animais", "Não, prefiro que ele seja o único animal"],
      pontuacao: {
        "Sim, importante que se dê bem com outros animais": ["cachorro", "lagomorfo", "passaro"],
        "Não, prefiro que ele seja o único animal": ["gato", "reptil", "roedor"]
      }
    },
    {
      texto: "Qual o clima da sua cidade?",
      opcoes: ["Quente", "Frio", "Temperado"],
      pontuacao: {
        "Quente": ["reptil", "passaro", "roedor"],
        "Frio": ["gato", "lagomorfo", "cachorro"],
        "Temperado": ["reptil", "roedor", "passaro", "gato", "cachorro", "lagomorfo"]
      }
    },
    {
      texto: "Qual a sua preferência de tamanho do animal?",
      opcoes: ["Pequeno", "Médio", "Grande"],
      pontuacao: {
        "Pequeno": ["roedor", "lagomorfo", "gato", "passaro"],
        "Médio": ["cachorro"],
        "Grande": ["cachorro", "reptil"]
      }
    },
    {
      texto: "Qual o nível de envolvimento você espera ter com o seu animal?",
      opcoes: ["Preciso de um animal que não precise de muito envolvimento diário", "Quero um animal que me acompanhe em várias atividades", "Prefiro que o animal seja mais independente e não precise de tanta atenção"],
      pontuacao: {
        "Preciso de um animal que não precise de muito envolvimento diário": ["reptil", "roedor", "gato"],
        "Quero um animal que me acompanhe em várias atividades": ["cachorro", "lagomorfo"],
        "Prefiro que o animal seja mais independente e não precise de tanta atenção": ["gato", "reptil"]
      }
    }
  ];
  
  const resultados = {
    cachorro: { nome: "Cachorro", descricao: "Amigável, leal e carinhoso." },
    gato: { nome: "Gato", descricao: "Independente, tranquilo e elegante." },
    passaro: { nome: "Pássaro", descricao: "Vibrante, livre e social." },
    roedor: { nome: "Roedor", descricao: "Pequeno, ágil e cheio de energia." },
    lagomorfo: { nome: "Coelho", descricao: "Fofo, dócil e sociável." },
    reptil: { nome: "Réptil", descricao: "Silencioso, exótico e de baixa manutenção." }
  };

  let perguntaAtual = 0;
  let pontuacoes = { cachorro: 0, gato: 0, passaro: 0, roedor: 0, lagomorfo: 0, reptil: 0 };

  
  // Função para mostrar a próxima pergunta
  function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    const container = document.getElementById("question-container");
  
    container.innerHTML = `
      <h3>${pergunta.texto}</h3>
      ${pergunta.opcoes.map(opcao => `
        <button onclick="responder('${opcao}')">${opcao}</button>
      `).join('')}
    `;
  }
  
  function responder(resposta) {
    const pergunta = perguntas[perguntaAtual];  
    perguntaAtual++;
  
    if (perguntaAtual < perguntas.length) {
      mostrarPergunta();
    } else {
      mostrarResultado();
    }
  }
  
  
  // resultado
  function mostrarResultado() {
    const resultadoContainer = document.getElementById("result-container");
    const tipoVencedor = Object.keys(pontuacoes).reduce((a, b) => pontuacoes[a] > pontuacoes[b] ? a : b);
    
    resultadoContainer.innerHTML = `
      <h2>Seu pet ideal é: ${resultados[tipoVencedor].nome}</h2>
      <p>${resultados[tipoVencedor].descricao}</p>
    `;
    resultadoContainer.style.display = "block";
    document.getElementById("question-container").style.display = "none";
  }
  
  mostrarPergunta();  