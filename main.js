document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('.dropdown-menu').style.display = 'block';
}, false);

// Para fechar o menu dropdown ao clicar fora dele
window.addEventListener('click', function(e) {
    if (!document.querySelector('.navbar').contains(e.target)) {
        document.querySelector('.dropdown-menu').style.display = 'none';
    }
});
