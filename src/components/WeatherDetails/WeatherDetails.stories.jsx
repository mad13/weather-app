import React from 'react'
import WeatherDetails from './WeatherDetails'

export default {
    title: "WeatherDetails",
    component: WeatherDetails
}

export const WeatherDetailsExpample = () => {
    return <WeatherDetails humidity={10} wind={9} />
}