import React from 'react'
import 'typeface-roboto'
import CityInfo from './CityInfo'

export default {
    title: "CityInfo",
    component: CityInfo,
    argTypes: {
        city: { control: { type: "text" } },
        country: { control: { type: "text" } }
    }
}

export const CityExample = () => {
    return <CityInfo city={"Buenos Aires"} country={"Argentina"} />
}

export const CityExampleV6 = (args) => (<CityInfo {...args} />)

CityExampleV6.args = { city: "Buenos Aires", country: "Argentina" }