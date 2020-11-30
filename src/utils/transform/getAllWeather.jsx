import { validValues } from '../../components/IconState'
import { getCityCode, toCelcius } from './../utils'

const getAllWeather = (response, city, countryCode) => {
    const { data } = response
    const temperature = toCelcius(data.main.temp)
    const humidity = data.main.humidity
    const wind = data.wind.speed

    const stateFromServer = data.weather[0].main.toLowerCase()

    const state = validValues.includes(stateFromServer) ? stateFromServer : null

    const propName = getCityCode(city, countryCode) // Ej  [Buenos Aires-Argentina]s
    const propValue = { temperature, state, humidity, wind } // Ej { temperature:10, state:"sunny" }
    // return ({ [propName]: propValue })

    return ({ [propName]: propValue })
}

export default getAllWeather