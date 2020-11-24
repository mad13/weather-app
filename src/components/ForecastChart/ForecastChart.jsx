import React from 'react'
import PropTypes from 'prop-types'
import {
    CartesianGrid, Line, LineChart, XAxis, YAxis,
    Tooltip, Legend, ResponsiveContainer
} from 'recharts'

const ForecastChart = ({ data }) => {
    return (
        <ResponsiveContainer height={250} width={"95%"}        >
            <LineChart
                margin={{ top: 20, bottom: 20, left: 5, right: 5 }}
                data={data}>
                <XAxis dataKey="dayHour"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <CartesianGrid></CartesianGrid>
                <Line type="monotone" dataKey="min" stroke="#FF0000"></Line>
                <Line type="monotone" dataKey="max" stroke="#0000FF"></Line>
            </LineChart>
        </ResponsiveContainer>
    )
}

ForecastChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        dayHour: PropTypes.string.isRequired,
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
    })).isRequired
}

export default ForecastChart
