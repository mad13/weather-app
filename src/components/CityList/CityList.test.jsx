import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList' // sut
import { action } from '@storybook/addon-actions'

// arrange
const argentina = "Argentina";
const peru = "Perú";
const espania = "España";
const francia = "Francia";
const eeuu = "EEUU";

const madrid = "Madrid";
const miami = "Miami";
const paris = "París";
const buenosAires = "Buenos Aires";
const bariloche = "Bariloche";
const lima = "Lima";

const cities =
    [
        { city: buenosAires, country: argentina, countryCode: "AR" },
        // { city: bariloche, country: argentina, countryCode: "AR" },
        // { city: lima, country: peru, countryCode: "PE" },
        // { city: madrid, country: espania, countryCode: "ES" },
        { city: miami, country: eeuu, countryCode: "US" },
        { city: paris, country: francia, countryCode: "FR" }
    ]

test("CityList renders", async () => {
    // act - listitem - es el rol asociado a li 
    // const { findAllByRole } = render(<CityList cities={cities} onClickCity={action("Click en city")} />);
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={() => { }} />);
    const items = await findAllByRole("button");

    // assert  
    expect(items[0]).toHaveTextContent(buenosAires); expect(items[1]).toHaveTextContent(bariloche);
    expect(items[2]).toHaveTextContent(lima); expect(items[3]).toHaveTextContent(madrid);
    expect(items[4]).toHaveTextContent(miami); expect(items[5]).toHaveTextContent(paris);
    expect(items[0]).toHaveTextContent(argentina); expect(items[1]).toHaveTextContent(argentina);
    expect(items[2]).toHaveTextContent(peru); expect(items[3]).toHaveTextContent(espania);
    expect(items[4]).toHaveTextContent(eeuu); expect(items[5]).toHaveTextContent(francia);
    expect(items).toHaveLength(6);
})


test("CityList Click on item", async () => {

    const fnClickOnItem = jest.fn()
    const { findAllByRole } = render(<CityList cities={cities}
        onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button");

    // para simular la acción, usar fireevent para testear el on click
    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1);
})