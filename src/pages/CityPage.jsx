import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import 'moment/locale/es'
import AppFrame from './../components/AppFrame'
import CityInfo from './../components/CityInfo';
import Weather from './../components/Weather';
import WeatherDetails from './../components/WeatherDetails';
import Forecast from './../components/Forecast';
import ForecastChart from './../components/ForecastChart';
import useCityPage from '../hooks/useCityPage'

const CityPage = ({ props }) => {
    const { city, chartData, foreCastItemList } = useCityPage()

    const country = "Argentina"
    const state = "clouds"
    const temperature = 20
    const humidity = 80
    const wind = 70

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
                    <WeatherDetails humidity={humidity} wind={wind} />
                </Grid>
                <Grid item >
                    {chartData && <ForecastChart data={chartData} />}
                </Grid>
                <Grid item >
                    {foreCastItemList && <Forecast foreCastItemList={foreCastItemList} />}
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default CityPage
