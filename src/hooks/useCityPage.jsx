import { useEffect, useDebugValue } from 'react'
import axios from 'axios';
import 'moment/locale/es'
import { useParams } from 'react-router-dom';
import { getForecastUrl } from './../utils/urls'
import getChartData from './../utils/transform/getChartData'
import getForeCastItemList from './../utils/transform/getForeCastItemList'
import { getCityCode } from '../utils/utils'

const useCityPage = (allChartData, allForeCastItemList, onSetChartData, onSetForeCastItemList) => {

    // const [chartData, setChartData] = useState(null)
    // const [foreCastItemList, setForeCastItemList] = useState(null)

    const { city, countryCode } = useParams()

    useDebugValue(`Ciudad: ${city}`)


    // const data = dataExample
    // const foreCastItemList = foreCastItemListExample

    useEffect(() => {
        const getForecast = async () => {
            const url = getForecastUrl({ city, countryCode })
            const cityCode = getCityCode(city, countryCode)
            try {

                const { data } = await axios.get(url)
                const dataAux = getChartData(data)
                onSetChartData({ [cityCode]: dataAux })

                const foreCastItemListAux = getForeCastItemList(data)
                onSetForeCastItemList({ [cityCode]: foreCastItemListAux })
            } catch (error) {
                console.log(error)
            }
        }

        const cityCode = [getCityCode(city, countryCode)]
        if (allChartData && allForeCastItemList &&
            !allChartData[cityCode] && !allForeCastItemList[cityCode]) {
            getForecast()
        }

    }, [city, countryCode, onSetChartData, onSetForeCastItemList])

    return { city, countryCode }
}

export default useCityPage