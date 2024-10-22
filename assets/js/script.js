// Clique na área da top-bar para redirecionar a uma URL
document.querySelector('.top-bar').addEventListener('click', function() {
    window.open('https://pt.wix.com/', '_blank'); 
});

// Adiciona o efeito hover ao botão quando o mouse entra na top-bar
document.querySelector('.top-bar').addEventListener('mouseenter', function() {
    document.querySelector('.hover-btn').classList.add('hover');
});

// Remove o efeito hover quando o mouse sai da top-bar
document.querySelector('.top-bar').addEventListener('mouseleave', function() {
    document.querySelector('.hover-btn').classList.remove('hover');
});
