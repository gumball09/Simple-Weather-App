const API_KEY = 'YOUR_API_KEY';

const fetchWeather = async (city, units) => {
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
    const query=`?q=${city}&lang=en&units=${units}&appid=${API_KEY}`

    const response = await fetch(baseUrl + query)
    const data = await response.json()

    return data.cod === '404' ? null : data 
}