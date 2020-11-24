import React from 'react';
import ForecastChart from './ForecastChart';

export default {
    title: "ForecastChart",
    component: ForecastChart
}

// dia y hora: "DDD HH"
// Tres posiciones para el día y dos para la hora
// min: Temperatura mínima
// max: Temperatura máxima
const data = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]

export const ForecastChartExample = () => {
    return <ForecastChart data={data} />
} 
