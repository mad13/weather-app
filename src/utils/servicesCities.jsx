
const cities =
    [
        { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
        { city: "Pinamar", country: "Argentina", countryCode: "AR" },
        // { city: "Bariloche", country: "Argentina", countryCode: "AR" },
        // { city: "Lima", country: "Perú", countryCode: "PE" },
        // { city: "Madrid", country: "España" , countryCode: "ES"},
        { city: "Miami", country: "EEUU", countryCode: "US" },
        { city: "París", country: "Francia", countryCode: "FR" }
    ]

export const getCities = () => (cities)


export const getCountryNameByCountryCode = (countryCode) =>
    (
        cities.filter(c => c.countryCode === countryCode)[0].country
    )
