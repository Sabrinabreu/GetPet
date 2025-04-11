// Seleciona todas as bolinhas
const bolinhas = document.querySelectorAll('.bolinha');

// Adiciona um evento de clique para cada bolinha
bolinhas.forEach(bolinha => {
    bolinha.addEventListener('click', function() {
        // Remove a classe 'active' de todas as bolinhas
        bolinhas.forEach(b => b.classList.remove('active'));
        
        // Adiciona a classe 'active' na bolinha clicada
        this.classList.add('active');
    });
});
