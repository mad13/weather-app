import React, { useReducer, useCallback } from 'react'
import Grid from '@material-ui/core/Grid'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CityPage from './pages/CityPage'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import {
    WeatherStateContext,
    WeatherDispatchContext
} from './WeatherContext'

const initialValue = {
    allWeather: {},
    allChartData: {},
    allForeCastItemList: {}
}

const App = props => {
    // action { type:"XXX", payload: "XXX"}
    const reducer = useCallback((state, action) => {
        switch (action.type) {
            case 'SET_ALL_WEATHER':
                const weatherCity = action.payload
                const newAllWeather = { ...state.allWeather, ...weatherCity }
                return { ...state, allWeather: newAllWeather }
            case 'SET_CHAR_DATA':
                const charDataCiy = action.payload
                const newAllChartData = { ...state.allChartData, ...charDataCiy }
                return { ...state, allChartData: newAllChartData }
            case 'SET_FORECAST_ITEM_LIST':
                const foreCastItemListCity = action.payload
                const newAllForeCastItemList = { ...state.allForeCastItemList, ...foreCastItemListCity }
                return { ...state, allForeCastItemList: newAllForeCastItemList }
            default:
                return state
        }
    }, [])

    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <WeatherDispatchContext.Provider value={dispatch}>
            <WeatherStateContext.Provider value={state}>
                <Grid container justify="center" direction="row">
                    <Grid item xs={12} sm={11} md={10} lg={8}>
                        <Router>
                            <Switch>
                                <Route exact path="/">
                                    <WelcomePage />
                                </Route>
                                <Route path="/main">
                                    <MainPage />
                                </Route>
                                {/* <Route path="/city"> */}
                                <Route path="/city/:countryCode/:city">
                                    <CityPage />
                                </Route>
                                <Route>
                                    <NotFoundPage />
                                </Route>
                            </Switch>
                        </Router>
                    </Grid>
                </Grid>
            </WeatherStateContext.Provider>
        </WeatherDispatchContext.Provider>
    )
}

export default App
