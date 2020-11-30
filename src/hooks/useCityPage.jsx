import { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment'
import 'moment/locale/es'
import { useParams } from 'react-router-dom';
import { getForecastUrl } from './../utils/urls'
import { toCelcius } from './../utils/utils'
import getChartData from './../utils/transform/getChartData'

const useCityPage = () => {
    const [chartData, setChartData] = useState(null)
    const [foreCastItemList, setForeCastItemList] = useState(null)

    const { city, countryCode } = useParams()

    // const data = dataExample
    // const foreCastItemList = foreCastItemListExample

    useEffect(() => {
        const getForecast = async () => {
            const url = getForecastUrl({ city, countryCode })

            try {

                const { data } = await axios.get(url)
                const dataAux = getChartData(data)
                setChartData(dataAux)

                // , { weekDay: "Sábado", hour: 15, state: "clouds", temperature: 28 }
                const interval = [4, 8, 12, 16, 20, 24]
                const foreCastItemListAux = data.list
                    .filter((item, index) => interval.includes(index))
                    .map(item => {
                        return ({
                            hour: moment.unix(item.dt).hour(),
                            weekDay: moment.unix(item.dt).format('dddd'),
                            state: item.weather[0].main.toLowerCase(),
                            temperature: Number(toCelcius(item.main.temp))
                        })
                    })

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