import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem'

test("ForecastItem render", async () => {

    // arrange weekday hour y temperature que se rendericen correctamente.
    const { findAllByText } = render(<ForecastItem weekDay="lunes"
        hour={10} state="clear" temperature={23} />);

    // act
    const weekDay = await findAllByText(/lunes/)
    const hour = await findAllByText(/10/)
    const temperature = await findAllByText(/23/)

    // assert
    expect(weekDay[0]).toHaveTextContent("lunes")
    expect(hour[0]).toHaveTextContent("10")
    expect(temperature[0]).toHaveTextContent("23")
})