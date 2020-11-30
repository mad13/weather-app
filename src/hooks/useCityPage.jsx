import { useEffect, useState, useDebugValue } from 'react'
import axios from 'axios';
import 'moment/locale/es'
import { useParams } from 'react-router-dom';
import { getForecastUrl } from './../utils/urls'
import getChartData from './../utils/transform/getChartData'
import getForeCastItemList from './../utils/transform/getForeCastItemList'

const useCityPage = () => {

    const [chartData, setChartData] = useState(null)
    const [foreCastItemList, setForeCastItemList] = useState(null)

    const { city, countryCode } = useParams()

    useDebugValue(`Ciudad: ${city}`)


    // const data = dataExample
    // const foreCastItemList = foreCastItemListExample

    useEffect(() => {
        const getForecast = async () => {
            const url = getForecastUrl({ city, countryCode })

            try {

                const { data } = await axios.get(url)
                const dataAux = getChartData(data)
                setChartData(dataAux)

                const foreCastItemListAux = getForeCastItemList(data)
                setForeCastItemList(foreCastItemListAux)
            } catch (error) {
                console.log(error)
            }
        }
        getForecast()

    }, [city, countryCode])

    return { city, chartData, foreCastItemList }
}

export default useCityPage