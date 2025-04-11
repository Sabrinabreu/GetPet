const bolinhas = document.querySelectorAll('.bolinha');
const dropdown = document.getElementById('dropdown');
const dropdownContent = document.getElementById('dropdown-content');

const textos = [
  "Conteúdo da categoria 1",
  "Conteúdo da categoria 2",
  "Conteúdo da categoria 3",
  "Conteúdo da categoria 4",
  "Conteúdo da categoria 5"
];

bolinhas.forEach((bolinha, index) => {
  bolinha.addEventListener('click', () => {
    const isActive = bolinha.classList.contains('active');

    bolinhas.forEach(b => b.classList.remove('active'));

    if (isActive) {
      dropdown.style.display = 'none';
    } else {
      bolinha.classList.add('active');
      dropdown.style.display = 'block';
      dropdownContent.textContent = textos[index];
      dropdown.style.backgroundColor = bolinha.style.backgroundColor;
    }
  });
});
