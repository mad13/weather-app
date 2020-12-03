import React, { useReducer } from 'react'
import Grid from '@material-ui/core/Grid'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CityPage from './pages/CityPage'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'

const App = props => {

    const initialValue = {
        allWeather: {},
        allChartData: {},
        allForeCastItemList: {}
    }

    // action { type:"XXX", payload: "XXX"}
    const reducer = (state, action) => {
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

    }

    const [state, dispatch] = useReducer(reducer, initialValue)

    /*
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
*/

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
                            <MainPage data={state} actions={dispatch} />
                        </Route>
                        {/* <Route path="/city"> */}
                        <Route path="/city/:countryCode/:city">
                            <CityPage data={state} actions={dispatch} />
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
