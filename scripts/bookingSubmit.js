export function submitForm () {
    const personNumber = document.getElementById('personNumber')
    const departureDate = document.getElementById('departureDate')
    const returnDate = document.getElementById('returnDate')
    const submitButton = document.getElementById('submitButton')
    const departureStation = document.querySelector('.booking__station-input_departure')
    const arrivalStation = document.querySelector('.booking__station-input_arrival')

    submitButton.addEventListener('click', (e)=> {
        e.preventDefault()
        const data = {}
        data.personCount = personNumber.value
        data.departureDate = departureDate.value
        if (returnDate.value != '') {
            data.returnDate = returnDate.value
        }
        data.departureStation = departureStation.value
        data.arrivalStation = arrivalStation.value
        console.log(data)
    })
}