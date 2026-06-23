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
        const inputButton = document.querySelector(inputButtonClass)
        const helperCase = document.querySelector(helperCaseClass)

        //Функция добавления элемента на страницу
        function addElement(number, stationMas) {
            const newItem = document.createElement('button');
                    newItem.setAttribute('type', 'button')
                    newItem.classList.add('booking__station-help-button')
                    newItem.textContent = stationMas[number]
                    newItem.addEventListener('mousedown', (e) => e.preventDefault())
                    newItem.addEventListener('click', () => {
                        inputButton.value = newItem.textContent;
                        helperCase.classList.remove('booking__station-help_active')
                    })
                    helperCase.append(newItem)
        }

        //Обработчик фокуса на ввод данных
        inputButton.addEventListener('focus', () => {
            helperCase.classList.add('booking__station-help_active')
            //Заполенения списка
            if (helperCase.children.length === 0) {
                for (let i = 0; i < 5; i++) {
                    addElement(i, Stations)
                }
            }
        })

        //Закрытие списка
        inputButton.addEventListener('blur', () => {
            helperCase.classList.remove('booking__station-help_active')
        })
        
        //Слушатель ввода данных
        inputButton.addEventListener('input', () => {
            helperCase.textContent = ''
            //Поиск совпадений по вводу данных
            const stationMas = Stations.filter(item => {
                if ((item.toLowerCase()).includes(inputButton.value.toLowerCase())) {
                    return true;
                }
            })
            //Проверка сколько есть совпадений и добавление элементов в поиск
            if (stationMas.length > 5) {
                for (let i = 0; i < 5; i++) {
                    addElement(i, stationMas);
                }
            } else if (stationMas.length <= 5 && stationMas.length != 0) {
                for (let i = 0; i < stationMas.length; i++) {
                    addElement(i, stationMas);
                }
            } else { 
                const newItem = document.createElement('span');
                newItem.classList.add('booking__station-help-button')
                newItem.textContent = 'Станция не найдена'
                helperCase.append(newItem)
            }
        })
    }

    //Вызов функций
    stationListner(".booking__station-input_departure", ".booking__station-help_departure", ".booking__station-help-button_departure")
    stationListner(".booking__station-input_arrival", ".booking__station-help_arrival", ".booking__station-help-button_arrival")
}