import { useState, useEffect } from 'react'
import axios from 'axios';
import { getWeatherUrl } from './../utils/urls'
import getAllWeather from './../utils/transform/getAllWeather'
import { getCityCode } from '../utils/utils'

const useCityList = (cities, allWeather, onSetAllWeather) => {
    // const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    // esto es con async await
    useEffect(() => {
        const setWeather = async (city, countryCode) => {

            const url = getWeatherUrl({ city, countryCode })

            console.log(url)

            try {
                const propName = [getCityCode(city, countryCode)]
                onSetAllWeather({ [propName]: {} })

                const response = await axios.get(url)

                const allWeatherAux = getAllWeather(response, city, countryCode)
                // setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux }))

                onSetAllWeather(allWeatherAux)
            } catch (error) {
                console.log("HUBO UN ERRRRROOOR")
                if (error.response) { // Errores que nos responde el server
                    setError("Ha ocurrido un error en el servidor")
                } else if (error.request) {  // Errores que suceden por no llegar al server
                    setError("Verifique la conexión a internet")
                } else { // Errores imprevistos
                    setError("Errores imprevistos")
                }
            }
        }

        cities.forEach(({ city, countryCode }) => {
            if (!allWeather[getCityCode(city, countryCode)]) {
                setWeather(city, countryCode)
            }
        });
    }, [cities, onSetAllWeather, allWeather])

    // const [allWeather, setAllWeather] = useState({})

    return { error, setError }
}

export default useCityList