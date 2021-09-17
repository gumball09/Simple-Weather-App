const API_KEY = '292fbdae77df1994e81632df4ddcda01'

const fetchWeather = async (city, units) => {
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
    const query=`?q=${city}&lang=en&units=${units}&appid=${API_KEY}`

    const response = await fetch(baseUrl + query)
    const data = await response.json()

    return data.cod === '404' ? null : data 
}