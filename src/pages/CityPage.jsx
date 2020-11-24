import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppFrame from './../components/AppFrame'
import CityInfo from './../components/CityInfo';
import Weather from './../components/Weather';
import WeatherDetails from './../components/WeatherDetails';
import Forecast from './../components/Forecast';
import ForecastChart from './../components/ForecastChart';

const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]

const foreCastItemListExample = [
    { weekDay: "Lunes", hour: 10, state: "clear", temperature: 23 }
    , { weekDay: "Martes", hour: 11, state: "drizzle", temperature: 24 }
    , { weekDay: "Miércoles", hour: 12, state: "clouds", temperature: 25 }
    , { weekDay: "Jueves", hour: 13, state: "clouds", temperature: 26 }
    , { weekDay: "Viernes", hour: 14, state: "rain", temperature: 27 }
    , { weekDay: "Sábado", hour: 15, state: "clouds", temperature: 28 }
]
const CityPage = ({ props }) => {
    const city = "Buenos Aires"
    const country = "Argentina"
    const state = "clouds"
    const temperature = 20
    const humidity = 80
    const data = dataExample
    const foreCastItemList = foreCastItemListExample

    return (
        <AppFrame>
            <Grid container
                justify="center"
                direction="column"
                spacing={2}>
                <Grid item container
                    xs={12}
                    justify="center"
                    alignItems="flex-end" >
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container item xs={12} justify="center">
                    <Weather state={state} temperature={temperature} />
                    <WeatherDetails humidity={humidity} />
                </Grid>
                <Grid item >
                    <ForecastChart data={data} />
                </Grid>
                <Grid item >
                    <Forecast foreCastItemList={foreCastItemList} />
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default CityPage
