export function initStation() {
    
    //Массив станций
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


//Универсальная функция
function stationListner(inputButtonClass, helperCaseClass, helperTextCaseClass) {
    //Нахождение переменных
    const inputButton = document.querySelector(inputButtonClass);
    const helperCase = document.querySelector(helperCaseClass);
    const helperTextCase = document.querySelectorAll(helperTextCaseClass);

    //Слушатели показа и снятия окна с подсказками
    inputButton.addEventListener('focus', function () {
        helperCase.classList.add('booking__station-help_active');
    })
    inputButton.addEventListener('blur', function () {
        helperCase.classList.remove('booking__station-help_active');
    })

    //Цикл для замены значений в поле подсказок
    for (let i = 0; i < helperTextCase.length; i++) {
        helperTextCase[i].addEventListener('mousedown', (e) => e.preventDefault())  //Снятие стандандарта, чтобы срабатывало нажатие
        
        //Слушатель на кнопки в подсказках
        helperTextCase[i].addEventListener('click', function () {
            inputButton.value = helperTextCase[i].textContent;
            inputButton.blur(); //Снятие фокуса после выбора текста
        })
    }

    //Слушатель проверки значений из массива
    inputButton.addEventListener('input', function () {
        let b = Stations.filter(item => {
            if ((item.toLowerCase()).includes(inputButton.value.toLowerCase())) {
                return true;
            }
        })
        //Приписывание новых значений подсказок
        for (let i = 0; i < helperTextCase.length; i++) {
            helperTextCase[i].textContent = b[i];
        }
    })

}

//Вызов функций
stationListner(".booking__station-input_departure", ".booking__station-help_departure", ".booking__station-help-button_departure")
stationListner(".booking__station-input_arrival", ".booking__station-help_arrival", ".booking__station-help-button_arrival")
}