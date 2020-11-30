

const appid = "c88236d495faadd6ff1e4dd330eea2de"

export const getWeatherUrl = ({ city, countryCode }) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`

export const getForecastUrl = ({ city, countryCode }) =>
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`

