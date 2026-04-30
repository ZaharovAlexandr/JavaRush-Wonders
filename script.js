const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const personNumber = document.getElementById('personNumber')
const minusSVG = document.getElementById('minusSVG')
const departureDate = document.getElementById('departureDate')
const departureSpan = document.getElementById('departureSpan')
const returnDate = document.getElementById('returnDate')
const returnSpan = document.getElementById('returnSpan')
const radioTwoWayButton = document.getElementById('radioTwoWayButton')
const radioOneWayButton = document.getElementById('radioOneWayButton')
const returnDateContainer = document.getElementById('returnDateContainer')

radioOneWayButton.addEventListener('click', function(){
    returnDateContainer.classList.add('booking__station-input-date-container_disable');
    returnDate.setAttribute('disabled','disabled')
})

radioTwoWayButton.addEventListener('click', function(){
    returnDateContainer.classList.remove('booking__station-input-date-container_disable');
    returnDate.removeAttribute('disabled')
})


plusButton.addEventListener('click', function() {
    if (personNumber.value == 1 ) {
        minusButton.classList.remove('booking__counter-button_disabled');
        minusButton.removeAttribute('disabled')
        minusSVG.setAttribute('fill', '#0578FF');
        minusSVG.setAttribute('fill-opacity', '1');
    }
    personNumber.value = parseInt(personNumber.value) + 1;
})

minusButton.addEventListener('click', function() {
    if (personNumber.value == 2 ) {
        minusButton.classList.add('booking__counter-button_disabled');
        minusButton.setAttribute('disabled', 'disabled');
        minusSVG.setAttribute('fill', '#20202080');
        minusSVG.setAttribute('fill-opacity', '0.5');
    }
    personNumber.value = parseInt(personNumber.value) - 1;
})

departureDate.addEventListener('change', function() {
    departureSpan.classList.add('booking__input-placeholder-date_active')
    departureSpan.textContent = departureDate.value;

})

returnDate.addEventListener('change', function() {
    returnSpan.classList.add('booking__input-placeholder-date_active')
    returnSpan.textContent = returnDate.value;
})
