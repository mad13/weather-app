import React, { useState, useCallback, useMemo } from 'react'
import Grid from '@material-ui/core/Grid'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CityPage from './pages/CityPage'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'

const App = props => {
    const [allWeather, setAllWeather] = useState({})
    const [allChartData, setAllChartData] = useState({})
    const [allForeCastItemList, setAllForeCastItemList] = useState({})

    // la papa esta en saber controlar las renderizaciones por la cantidad de dependencias
    // setAllWeather es administrado por react, por lo que no se actualiza a cada rato
    const onSetAllWeather = useCallback((weatherCity) => {
        setAllWeather(allWeather => {
            return ({ ...allWeather, ...weatherCity })
        })
    }, [setAllWeather])

    const onSetChartData = useCallback((charDataCiy) => {
        setAllChartData(chartData => ({ ...chartData, ...charDataCiy }))
    }, [setAllChartData])

    const onSetForeCastItemList = useCallback((foreCastItemListCiy) => {
        setAllForeCastItemList(foreCastItemList => ({ ...foreCastItemList, ...foreCastItemListCiy }))
    }, [setAllForeCastItemList])

    const actions = useMemo(
        () => ({
            onSetAllWeather,
            onSetChartData,
            onSetForeCastItemList
        }),
        [onSetAllWeather, onSetChartData, onSetForeCastItemList]
    )

    const data = useMemo(
        () => ({
            allWeather,
            allChartData,
            allForeCastItemList
        }),
        [allWeather, allChartData, allForeCastItemList]
    )


    return (
        <Grid container justify="center" direction="row">
            <Grid item
                xs={12}
                sm={11}
                md={10}
                lg={8}
            >
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <WelcomePage />
                        </Route>
                        <Route path="/main">
                            <MainPage data={data} actions={actions} />
                        </Route>
                        {/* <Route path="/city"> */}
                        <Route path="/city/:countryCode/:city">
                            <CityPage data={data} actions={actions} />
                        </Route>
                        <Route>
                            <NotFoundPage />
                        </Route>
                    </Switch>
                </Router>
            </Grid>
        </Grid>
    )
}

export default App
