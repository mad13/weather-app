import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    componet: CityList
}


const cities =
    [
        { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
        // { city: "Bariloche", country: "Argentina", countryCode: "AR" },
        // { city: "Lima", country: "Perú", countryCode: "PE" },
        // { city: "Madrid", country: "España", countryCode: "ES" },
        { city: "Miami", country: "EEUU", countryCode: "US" },
        { city: "París", country: "Francia", countryCode: "FR" }
    ]

export const CityListExample = () => {
    return <CityList cities={cities} onClickCity={action("Click en city")} />
}

