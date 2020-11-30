import { validValues } from '../../components/IconState'
import { getCityCode, toCelcius } from './../utils'

const getAllWeather = (response, city, countryCode) => {
    const { data } = response
    const temperature = toCelcius(data.main.temp)
    const stateFromServer = data.weather[0].main.toLowerCase()

    console.log("ESTADO DEL SERVIDOOOOR", stateFromServer)

    const state = validValues.includes(stateFromServer) ? stateFromServer : null

    const propName = getCityCode(city, countryCode) // Ej  [Buenos Aires-Argentina]s
    const propValue = { temperature, state } // Ej { temperature:10, state:"sunny" }
    // return ({ [propName]: propValue })

    return ({ [propName]: propValue })
}

export default getAllWeather