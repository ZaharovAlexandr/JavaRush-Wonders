import { initBooking } from './scripts/booking.js';
import { initStation } from './scripts/station.js';
import { initFaqs } from './scripts/faqs.js';
import { initBurgerMenu } from './scripts/burgerMenu.js';

document.addEventListener('DOMContentLoaded', function() {
    initBooking();
    initStation();
    initFaqs();
    initBurgerMenu();
})