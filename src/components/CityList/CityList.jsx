import React from 'react'
import PropTypes from 'prop-types'
import Alert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import useCityList from './../../hooks/useCityList'
import { getCityCode } from '../../utils/utils'
import CityInfo from '../CityInfo'
import Weather from './../Weather'

// li es un item de una lista
// renderCityAndCountry se va a convertir en una funcion que retorna otra función
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, country, countryCode } = cityAndCountry

    return (
        <ListItem
            button
            key={getCityCode(city, countryCode)}
            onClick={() => eventOnClickCity(city, countryCode)}>
            <Grid container justify="center" alignItems="center" >
                <Grid item
                    md={9}
                    xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item
                    md={3}
                    xs={12}>
                    {
                        <Weather
                            temperature={weather && weather.temperature}
                            state={weather && weather.state} />
                    }
                </Grid>
            </Grid>

        </ListItem>
    )
}

// ul: es el tag html para lista no ordenadas
const CityList = ({ cities, onClickCity, onSetAllWeather, allWeather }) => {
    const { error, setError } = useCityList(cities, allWeather, onSetAllWeather)

    return (
        <div>
            {
                error && <Alert severity="error" onClose={() => { setError(null) }}>{error}</Alert>
            }
            <List>
                {
                    // esto es un SEGUNDO nivel
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry,
                        allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
                }
            </List>
        </div>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList


    /* 
        [Buenos Aires-Argentina]:{}, { temperature:10, state:"sunny" }
        [Bariloche-Argentina]:{}, { temperature:10, state:"sunny" }
        [Lima-Perú]:{}, { temperature:10, state:"sunny" }
        [Madrid-España]:{}, { temperature:10, state:"sunny" }
        [Miami-EEUU]:{}, { temperature:10, state:"sunny" }
        [París-Francia]:{}, { temperature:10, state:"sunny" }
    */
    // los hooks deben ir en el PRIMER nivel



    /// esto es con PROMISES
    /*    
    
    useEffect(() => { 
            const setWeather = (city, countryCode) => {
                const appid = "c88236d495faadd6ff1e4dd330eea2de"
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
    
                axios
                    .get(url)
                    .then(response => {
                        const { data } = response
                        const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
                        const state = data.weather[0].main.toLowerCase()
                        const propName = getCityCode(city, countryCode) // Ej  [Buenos Aires-Argentina]s
                        const propValue = { temperature, state } // Ej { temperature:10, state:"sunny" }
    
                        // ...allWeather: esto lo que hace es desensamblar el objeto que está en este punto 
     //  Es como un diccionario, 
     //     si te viene el propName (key) igual que una que existe, se actualiza el proValue
     // allWeather 1 pasada:
     // {[Buenos Aires-Argentina]:{}, { temperature:10, state:"sunny" }     }
     // allWeather 2 pasada:
     // { [Buenos Aires-Argentina]:{}, { temperature:10, state:"sunny" },
     // [Bariloche-Argentina]:{}, { temperature:10, state:"sunny" }}
 
     // El seteo optimo para el estado es usando una función flecha 
     // que recibe como parámetro el estado actual, y devuelve un estado actualizado
     // de esa forma SIEMPRE partis del estado anterior, 
     // y no necesitas usarlo como dependencia
     // set[VARIABLE_ESTADO](VARIABLE_ESTADO => VARIABLE_ESTADO +1)
     setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue })
     )
 })
                 .catch (error => {
     if (error.response) { // Errores que nos responde el server
         setError("Ha ocurrido un error en el servidor")
     } else if (error.request) {  // Errores que suceden por no llegar al server
         setError("Verifique la conexión a internet")
     } else { // Errores imprevistos
         setError("Errores imprevistos")
     }
 })
         }
 
 cities.forEach(({ city, countryCode }) => {
     setWeather(city, countryCode)
 });
     }, [cities])
 */
