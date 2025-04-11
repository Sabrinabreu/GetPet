const bolinhas = document.querySelectorAll('.bolinha');

// Adiciona um evento de clique para cada bolinha
bolinhas.forEach(bolinha => {
    bolinha.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            bolinhas.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        }
    });
});
