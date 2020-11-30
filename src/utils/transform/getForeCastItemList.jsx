import moment from 'moment'
import 'moment/locale/es'
import { toCelcius } from '../utils'

const getForeCastItemList = (data) => {
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

    return foreCastItemListAux
}

export default getForeCastItemList