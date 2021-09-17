const form = document.querySelector('#search-location')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const city = form.querySelector('#search-location input')
    
    let units = "metric"
    if(document.querySelector('#unitImperial').checked) {
        units = "imperial"
    }

    const data = await fetchWeather(city.value.trim(), units)
    if(!data) {
        formError("City not found!")
    } else {
        updateForm(data, units.value)
    }

    form.reset() // clears the form value
})