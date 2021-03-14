// Menú desplegable para móviles 
let hamburguer = document.getElementById ('hamburguer'),
menu = document.getElementById('main-nav');

hamburguer.addEventListener('click', desplegarMenu);

function desplegarMenu(){
    menu.classList.toggle('hidden-nav');
    
    if (hamburguer.src == 'http://127.0.0.1:5500/images/icon-hamburger.svg'){
        hamburguer.src = '../images/icon-close.svg';
    } else {
        hamburguer.src = '../images/icon-hamburger.svg';
    }
}

// Desplegables internos del menú
let elementosMenu = document.querySelectorAll('.main-nav .menu-item');

for (const elemento of elementosMenu) {
    elemento.addEventListener('click', (e) => {
        elemento.children[1].classList.toggle('hidden-nav');
        elemento.children[0].classList.toggle('active-arrow');
    });
}

// Cambiar color del header despues del cover
let cover = document.getElementById('cover');
let header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    let height = cover.offsetHeight;
    let scrollWindow = window.scrollY;
    if (scrollWindow > height) {
        header.classList.add('not-in-cover');
    } else {
        header.classList.remove('not-in-cover');
    }
})