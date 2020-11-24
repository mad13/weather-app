import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' // SUT (subject under testing) objeto bajo testeo

// descripcion del test , cuerpo del test con funcion 
test("CityInfo render", async () => {
    //AAA 
    //- Arrange - preparar las cosas para que el test funcione
    //- Act  - ejectar algo 
    const city = "Buenos Aires";
    const country = "Argentina";

    // tenderiza el componente y retorna una serie de funciones,
    // de las cuales vamos a usar findAllByRole
    const { findAllByRole } = render(<CityInfo city={city} country={country} />);

    //- Assert  - (evaluar si lo que esperaba estaba bien)

    // Te renderiza el componente y retorna una serie de funciones,
    // De las cuales vamos a usar findAllByRole 
    // - nos va a devolver todos los "heading" => H1, H2, H3, etc
    const cityAndCountryComponent = await findAllByRole("heading");

    // Definir ¿Cuando el test va a ser correcto?
    // cuando en el primer elemento sea Ciudad bs as y el segundo elemento, sea pais Argentina
    // va a ser correcto
    expect(cityAndCountryComponent[0]).toHaveTextContent(city);
    expect(cityAndCountryComponent[1]).toHaveTextContent(country);

    // en caso de que ambas condiciones se cumplan, entonces será correcto
})