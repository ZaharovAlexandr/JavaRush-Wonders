const Stations = [
    "Zermatt Bus Terminal",
    "Interlaken Ost Bus Station",
    "Grindelwald Bus Terminal",
    "Lauterbrunnen Bahnhof",
    "Lucerne Bahnhofquai",
    "Chamonix-Mont-Blanc Sud (France, near Swiss border)",
    "Geneva Bus Station",
    "Bern PostAuto Terminal",
    "Gstaad Bus Station",
    "St. Moritz Bahnhof PostAuto",
    "Verbier Village",
    "Davos Platz Postautohaltestelle",
    "Andermatt Gotthardpass",
    "Täsch Bahnhof (Shuttle to Zermatt)",
    "Flims Dorf Post",
    "Chamonix Sud Bus Station",
    "Annecy Gare Routière",
    "Grenoble Gare Routière",
    "Nice Airport (Bus to Alps)",
    "Bourg-Saint-Maurice Gare Routière",
    "Morzine Gare Routière",
    "Les Gets Gare Routière",
    "Val d'Isère Centre",
    "Courchevel 1850",
    "Megève Place du Village",
    "Aosta Autostazione",
    "Bolzano Autostazione",
    "Trento Autostazione",
    "Cortina d'Ampezzo Autostazione",
    "Bormio Bus Station",
    "Livigno Centro",
    "Merano Autostazione",
    "Sestriere Bus Stop",
    "Ortisei (St. Ulrich) Autostazione",
    "Canazei Piazza Marconi",
    "Innsbruck Hauptbahnhof Bus Terminal",
    "Salzburg Süd Busbahnhof",
    "Mayrhofen Bahnhof",
    "Lech am Arlberg Postamt",
    "Kitzbühel Hahnenkammbahn",
    "Ischgl Seilbahn",
    "Zell am See Postplatz",
    "Bad Gastein Bahnhof",
    "St. Anton am Arlberg Bahnhof",
    "Sölden Postamt",
    "Garmisch-Partenkirchen Bahnhof (Bus Station)",
    "Berchtesgaden Busbahnhof",
    "Oberstdorf Busbahnhof",
    "Füssen Bahnhof (Bus Station)",
    "Mittenwald Bahnhof (Bus Station)",
    "Bled Bus Station",
    "Bohinj Jezero",
    "Kranjska Gora Avtobusna Postaja"
];

const departureButton = document.querySelector('.booking__station-input_departure')
const buttonDepartureHelper = document.querySelectorAll('.booking__station-help-button_departure');
const arrivalButton = document.querySelector('.booking__station-input_arrival') 
const buttonArrivalHelper = document.querySelectorAll('.booking__station-help-button_arrival');

buttonArrivalHelper.forEach(element => {
    element.addEventListener('mousedown', (e) => {
        e.preventDefault();
    })
})

buttonArrivalHelper.forEach(element => {
    element.addEventListener('click', function(){
        arrivalButton.value = element.textContent;
        document.querySelector('.booking__station-help_arrival').classList.toggle('booking__station-help_active')
    })
});

arrivalButton.addEventListener('input', function() {
    let b = Stations.filter(item => {
        if ((item.toLowerCase()).includes(arrivalButton.value.toLowerCase())) {
            return true;
        } 
    })
    for (let i = 0; i < buttonArrivalHelper.length; i++) {
        buttonArrivalHelper[i].textContent = b[i];
    }
})

arrivalButton.addEventListener('focus', function() {
    document.querySelector('.booking__station-help_arrival').classList.toggle('booking__station-help_active')
})

buttonDepartureHelper.forEach(element => {
    element.addEventListener('mousedown', (e) => {
        e.preventDefault();
    })
})

buttonDepartureHelper.forEach(element => {
    element.addEventListener('click', function(){
        departureButton.value = element.textContent;
        document.querySelector('.booking__station-help_departure').classList.toggle('booking__station-help_active')
    })
});

departureButton.addEventListener('input', function() {
    let b = Stations.filter(item => {
        if ((item.toLowerCase()).includes(departureButton.value.toLowerCase())) {
            return true;
        } 
    })
    for (let i = 0; i < buttonDepartureHelper.length; i++) {
        buttonDepartureHelper[i].textContent = b[i];
    }
})

departureButton.addEventListener('focus', function() {
    document.querySelector('.booking__station-help_departure').classList.toggle('booking__station-help_active')
})

