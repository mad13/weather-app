import React from 'react'
import ForecastItem from './ForecastItem'

export default {
    title: "ForecastItem",
    component: ForecastItem
}

export const LunesSoleado = () => {
    return <ForecastItem
        weekDay="lunes"
        hour={10}
        state="clear"
        temperature={23}
    />
}