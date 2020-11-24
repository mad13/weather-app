import { React } from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails'

// findByText: Permite encontrar un componente por el texto que muestra
test("WeatherDetails render", async () => {
    // arrange act assert

    const { findByText } = render(<WeatherDetails humidity={80} wind={10} />);

    // se le pasa una REGEX
    const wind = await findByText(/10/)
    const humidity = await findByText(/80/)

    expect(wind).toHaveTextContent("Viento: 10 km/h");
    expect(humidity).toHaveTextContent("Húmedad: 80%");
})