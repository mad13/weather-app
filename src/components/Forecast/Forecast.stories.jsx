import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const foreCastItemList = [
    { weekDay: "Lunes", hour: 10, state: "clear", temperature: 23 }
    , { weekDay: "Martes", hour: 11, state: "clouds", temperature: 24 }
    , { weekDay: "Miércoles", hour: 12, state: "drizzle", temperature: 25 }
    , { weekDay: "Jueves", hour: 13, state: "clouds", temperature: 26 }
    , { weekDay: "Viernes", hour: 14, state: "rain", temperature: 27 }
    , { weekDay: "Sábado", hour: 15, state: "rain", temperature: 28 }
]
export const ForecastExample = () => {
    return <Forecast foreCastItemList={foreCastItemList} />
}


