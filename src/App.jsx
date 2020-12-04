import React, { useReducer, useCallback } from 'react'
import Grid from '@material-ui/core/Grid'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CityPage from './pages/CityPage'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import { WeatherContext } from './WeatherContext'

const App = props => {
    return (
        <WeatherContext>
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
        </WeatherContext>
    )
}

export default App
