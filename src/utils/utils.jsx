import convertUnits from 'convert-units'

export const getCityCode = (city, countryCode) => `${city}-${countryCode}`

export const toCelcius = (temp) => convertUnits(temp).from('K').to('C').toFixed()

