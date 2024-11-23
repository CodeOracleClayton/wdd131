document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuToggle = document.getElementById('menu-toggle');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        menuToggle.classList.remove('open');
    } else {
        menu.style.display = 'flex';
        menuToggle.classList.add('open');
    }
});