import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'
import { getCities } from '../utils/servicesCities'

const MainPage = ({ actions, data }) => {
    const history = useHistory();
    const onClickHandler = (city, countryCode) => {
        // history.push nos permites alterar la URL por programación
        // console.log(city, countryCode)

        // city/AR/BuenosAires
        history.push(`/city/${countryCode}/${city}`);
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList
                    data={data}
                    actions={actions}
                    cities={getCities()}
                    onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}

export default MainPage
