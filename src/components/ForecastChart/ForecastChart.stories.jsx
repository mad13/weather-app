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
        dayHour: "Jue 18",
        min: 14,
        max: 22,
        hasTemps: true
    },
    {
        dayHour: "Vie 06",
        min: 18,
        max: 27,
        hasTemps: true
    },
    {
        dayHour: "Vie 12",
        min: 18,
        max: 28,
        hasTemps: true
    },
    {
        dayHour: "Vie 18",
        min: 18,
        max: 25,
        hasTemps: true
    },
    {
        dayHour: "Sab 06",
        min: 15,
        max: 22,
        hasTemps: true
    },
    {
        dayHour: "Sab 12",
        min: 12,
        max: 19,
        hasTemps: true
    }
]

export const ForecastChartExample = () => {
    return <ForecastChart data={data} />
} 
