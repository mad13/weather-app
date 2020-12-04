import React, { useMemo } from 'react'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import 'moment/locale/es'
import AppFrame from './../components/AppFrame'
import CityInfo from './../components/CityInfo';
import Weather from './../components/Weather';
import WeatherDetails from './../components/WeatherDetails';
import Forecast from './../components/Forecast';
import ForecastChart from './../components/ForecastChart';
import useCityPage from '../hooks/useCityPage'
import useCityList from '../hooks/useCityList'
import { getCityCode } from '../utils/utils'
import { getCountryNameByCountryCode } from '../utils/servicesCities'
import { useWeatherDispatchContext, useWeatherStateContext } from '../WeatherContext'

const CityPage = () => {
    const data = useWeatherStateContext()
    const actions = useWeatherDispatchContext()

    const { allWeather, allChartData, allForeCastItemList } = data
    // const { onSetAllWeather, onSetChartData, onSetForeCastItemList } = actions
    const { city, countryCode } = useCityPage(allChartData, allForeCastItemList, actions)

    /* petiodiones excetivas al aserver */

    // useMemo, es un factory, la segunda parte son las dependencias
    // lo guarda en memomria, en cache
    const cities = useMemo(() =>
        ([{ city, countryCode }]), [city, countryCode]
    )

    useCityList(cities, allWeather, actions)

    const cityCode = getCityCode(city, countryCode)

    const weather = allWeather[cityCode]
    const chartData = allChartData[cityCode]
    const foreCastItemList = allForeCastItemList[cityCode]

    const country = countryCode && getCountryNameByCountryCode(countryCode)
    const state = weather && weather.state
    const temperature = weather && weather.temperature
    const humidity = weather && weather.humidity
    const wind = weather && weather.wind
    /* petiodiones excetivas al aserver */

    // const country = "Argentina"
    // const state = "clear"
    // const temperature = 77
    // const humidity = 80
    // const wind = 70

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

                    {
                        humidity && wind &&
                        <WeatherDetails
                            humidity={humidity}
                            wind={wind} />
                    }
                </Grid>
                <Grid item >
                    {
                        !chartData && !foreCastItemList && <LinearProgress />
                    }
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
