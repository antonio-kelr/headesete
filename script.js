const barss = document.querySelector('#barss');
const barsAbri = document.querySelector('#bars-abri');

barss.addEventListener('click', function(e) {
    if (barsAbri.classList.contains('abri')) {
        barsAbri.classList.remove('abri');
    } else {
        barsAbri.classList.add('abri');
    }
});

barsAbri.addEventListener('click', function(e) {
    barsAbri.classList.remove('abri');

    
});

document.addEventListener('click', function(e) {
    if (!barsAbri.contains(e.target) && e.target !== barss) {
        barsAbri.classList.remove('abri');
    }
});

let currentIndex = 1; // Índice inicial

// Adiciona um evento de clique ao botão de incremento
document.querySelector('.clickButton').addEventListener('click', function() {
    // Incrementa o índice
    currentIndex++;

    // Verifica se o índice ultrapassou o número de inputs disponíveis, se sim, volta para 1
    if (currentIndex > 3) {
        currentIndex = 1;
    }

    // Seleciona o input correspondente com base no índice
    const targetInput = document.getElementById(`item-${currentIndex}`);
    
    // Marca o input como selecionado
    targetInput.checked = true;
});

// Adiciona um evento de clique ao botão de decremento
document.querySelector('.decrementButton').addEventListener('click', function() {
    // Decrementa o índice
    currentIndex--;

    // Verifica se o índice é menor que 1, se sim, volta para 3
    if (currentIndex < 1) {
        currentIndex = 3;
    }

    // Seleciona o input correspondente com base no índice
    const targetInput = document.getElementById(`item-${currentIndex}`);
    
    // Marca o input como selecionado
    targetInput.checked = true;
});
