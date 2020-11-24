import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'

const cities =
    [
        { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
        // { city: "Bariloche", country: "Argentina", countryCode: "AR" },
        // { city: "Lima", country: "Perú", countryCode: "PE" },
        // { city: "Madrid", country: "España" , countryCode: "ES"},
        { city: "Miami", country: "EEUU", countryCode: "US" },
        { city: "París", country: "Francia", countryCode: "FR" }
    ]

const MainPage = ({ props }) => {
    const history = useHistory();
    const onClickHandler = () => {
        // history.push nos permites alterar la URL por programación
        history.push("/city");
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList cities={cities} onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}

export default MainPage
