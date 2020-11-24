import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const foreCastItemList = [
    { weekDay: "Lunes", hour: 10, state: "clear", temperature: 23 }
    , { weekDay: "Martes", hour: 11, state: "drizzle", temperature: 24 }
    , { weekDay: "Miércoles", hour: 12, state: "clouds", temperature: 25 }
    , { weekDay: "Jueves", hour: 13, state: "clouds", temperature: 26 }
    , { weekDay: "Viernes", hour: 14, state: "rain", temperature: 27 }
    , { weekDay: "Sábado", hour: 15, state: "clouds", temperature: 28 }
]

test("Forecast render", async () => {
    // aaa
    const { findAllByTestId } = render(
        <Forecast
            foreCastItemList={foreCastItemList} />)

    const foreCastItems = await findAllByTestId('forecast-item-container');

    expect(foreCastItems).toHaveLength(6)
})