import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForecastItem from '../ForecastItem'
import { validValues } from '../IconState'

const renderForecastItem = (forecast) => {
    const { weekDay, hour, state, temperature } = forecast

    // se puede poner una marca para buscar en test 
    return <Grid item
        data-testid='forecast-item-container'
        key={`${weekDay}${hour}`}>
        <ForecastItem
            weekDay={weekDay} hour={hour} state={state} temperature={temperature}
        ></ForecastItem>
    </Grid >
}

const Forecast = ({ foreCastItemList }) => {
    return (
        <div>
            <Grid container justify="space-around" alignItems="center">{
                foreCastItemList.map(forecast => renderForecastItem(forecast))
            }
            </Grid>
        </div>
    )
}

Forecast.propTypes = {
    foreCastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValues).isRequired,
        temperature: PropTypes.number.isRequired
    }))
}

export default Forecast
