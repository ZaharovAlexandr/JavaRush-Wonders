export function initBurgerMenu() {
    const burgerbutton = document.querySelector('.header__burger-menu');
    const burgerMenu = document.querySelector('.burgermenu')
    const burgerMenuIcon = document.querySelector('.header__burger-menu-icon')

    burgerbutton.addEventListener('click', function() {
        burgerMenu.classList.toggle('burgermenu_active')
        if (burgerMenuIcon.getAttribute('src') === './assets/icons/Menu.svg') {
            burgerMenuIcon.setAttribute('src', './assets/icons/Close.svg')
        } else {
            burgerMenuIcon.setAttribute('src', './assets/icons/Menu.svg')
        }
        
    })
}