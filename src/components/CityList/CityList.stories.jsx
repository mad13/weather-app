import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    componet: CityList
}

const cities =
    [
        { city: "Buenos Aires", country: "Argentina" },
        // { city: "Bariloche", country: "Argentina" },
        // { city: "Lima", country: "Perú" },
        // { city: "Madrid", country: "España" },
        { city: "Miami", country: "EEUU" },
        { city: "París", country: "Francia" }
    ]

export const CityListExample = () => {
    return <CityList cities={cities} onClickCity={action("Click en city")} />
}

