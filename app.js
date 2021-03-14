let hamburguer = document.getElementById ('hamburguer'),
    menu = document.getElementById('main-nav'),
    elementosMenu = document.querySelectorAll('.main-nav .menu-item'),
    cover = document.getElementById('cover'),
    header = document.getElementById('main-header');
// Menú desplegable para móviles 
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
for (const elemento of elementosMenu) {
    elemento.addEventListener('click', (e) => {
        elemento.children[1].classList.toggle('hidden-nav');
        elemento.children[0].classList.toggle('active-arrow');
    });
}
// Cambiar color del header despues del cover
window.addEventListener('scroll', () => {
    let height = cover.offsetHeight;
    let scrollWindow = window.scrollY;
    if (scrollWindow > height) {
        header.classList.add('not-in-cover');
    } else {
        header.classList.remove('not-in-cover');
    }
})
// Desplegables del menu para desktop
let elementosMenuDesktop = document.querySelectorAll('#menu-desktop .menu-item');
for (const elemento of elementosMenuDesktop) {
    elemento.addEventListener('click', () => {
        elemento.children[1].classList.toggle('active');
        elemento.children[0].classList.toggle('active-arrow');
    })
}