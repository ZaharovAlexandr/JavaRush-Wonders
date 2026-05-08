export function initBurgerMenu() {
    const burgerbutton = document.querySelector('.header__burger-menu');
    const burgerMenu = document.querySelector('.burgermenu')

    burgerbutton.addEventListener('click', function() {
        burgerMenu.classList.toggle('burgermenu_active')
    })
}