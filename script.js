import { initBooking } from './scripts/booking.js';
import { initStation } from './scripts/station.js';
import { initFaqs } from './scripts/faqs.js';
import { initBurgerMenu } from './scripts/burgerMenu.js';
import { calendar } from "./scripts/calendar.js";
import { submitForm } from './scripts/bookingSubmit.js';

document.addEventListener('DOMContentLoaded', function () {
    initBooking();
    initStation();
    initFaqs();
    initBurgerMenu();
    calendar();
    submitForm();
})