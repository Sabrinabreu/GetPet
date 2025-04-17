const bolinhas = document.querySelectorAll('.bolinha');
const dropdown = document.getElementById('dropdown');
const dropdownContent = document.getElementById('dropdown-content');

const categorias = [
  { nome: "Cachorro", valor: "cachorro" },
  { nome: "Gato", valor: "gato" },
  { nome: "Pássaro", valor: "passaro" },
  { nome: "Peixe", valor: "peixe" },
  { nome: "Roedor", valor: "roedor" }
];

bolinhas.forEach((bolinha, index) => {
  bolinha.addEventListener('click', () => {
    const isActive = bolinha.classList.contains('active');

    bolinhas.forEach(b => b.classList.remove('active'));

    if (isActive) {
      dropdown.style.display = 'none';
    } else {
      bolinha.classList.add('active');
      const categoria = categorias[index];

      dropdown.style.display = 'block';
      dropdown.style.backgroundColor = bolinha.style.backgroundColor;
      dropdown.style.setProperty('--triangulo-color', bolinha.style.backgroundColor);

      dropdownContent.innerHTML = `
        <span>${categoria.nome}</span><br>
        <a href="produtos.html?categoria=${encodeURIComponent(categoria.valor)}" style="color: white; text-decoration: underline;">Ver produtos de ${categoria.nome}</a>
      `;

      // TRIÂNGULO
      const bolinhaRect = bolinha.getBoundingClientRect();
      const dropdownRect = dropdown.getBoundingClientRect();
      const trianguloLeft = bolinhaRect.left + bolinhaRect.width / 2 - dropdownRect.left - 15;

      dropdown.style.setProperty('--triangulo-left', `${trianguloLeft}px`);
    }
  });
});
