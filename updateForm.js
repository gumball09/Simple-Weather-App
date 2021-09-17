const formError = (value) => {
    console.log(value)
    const error = document.querySelector('.errorMsg')
    error.textContent = value

    const card = document.querySelector('.cardContainer')
    if(card.style.display === 'flex') {
        card.style.display = 'none'
    }

    setTimeout(() => {
        error.textContent = ''
    }, 3000)
}

const updateForm = (data, units) => {
    const { main, name, weather, sys } = data
    console.log(main, name, weather, sys, units)
    
    const card = document.querySelector('.cardContainer')
    card.style.display = 'flex'  

    const deg = units === 'metric' ? '&deg;C' : '&deg;F'

    const imgCond = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

    const cardHeader = document.querySelector('.card-top')
    cardHeader.innerHTML = `
        <div class="city">
            <div class="city-name my-3">
                <span id="city-name" class="city-name">${name}</span>
                <div id="country" class="country">${(sys.country)}</div>
                <div>
                    <img src="${imgCond}" alt="condition"/>
                </div>
            </div>
        </div>
    `

    const cardBody = document.querySelector('.card-body')    

    cardBody.innerHTML = `
        <div class="card-mid row">
            <div class="col-8 text-center">
                <span class="avg-temp" id="avg-temp">${main.temp + deg}</span>
            </div>
            <div class="col-4 condition-temp">
                <p class="condition" id="condition">${
                  weather[0].description
                }</p>
                <p class="max-temp" id="max-temp">
                    <i class="fas fa-caret-up"></i>&emsp; 
                    ${main.temp_max + deg}
                </p>
                <p class="min-temp" id="min-temp">
                    <i class="fas fa-caret-down"></i>&emsp;     
                    ${main.temp_min + deg}
                </p>
            </div>
        </div>

        <div class="card-bottom px-5 py-4 row">
            <div class="col text-center">
                <p>${main.feels_like + deg}</p>
                <span id="feels-like">Feels Like</span>
            </div>
            <div class="col text-center">
                <p id="humidity">${main.humidity} %</p>
                <span>Humidity</span>
            </div>
        </div>
    `
}