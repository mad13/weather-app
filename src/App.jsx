import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CityPage from './pages/CityPage'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'

const App = props => {
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
                            <MainPage />
                        </Route>
                        <Route path="/city">
                            <CityPage />
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
