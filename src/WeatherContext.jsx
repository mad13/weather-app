import React, { useReducer } from 'react';

const WeatherStateContext = React.createContext()
const WeatherDispatchContext = React.createContext()

const initialValue = {
    allWeather: {},
    allChartData: {},
    allForeCastItemList: {}
}

// action { type:"XXX", payload: "XXX"}
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALL_WEATHER':
            const weatherCity = action.payload
            const newAllWeather = { ...state.allWeather, ...weatherCity }
            return { ...state, allWeather: newAllWeather }
        case 'SET_CHAR_DATA':
            const charDataCiy = action.payload
            const newAllChartData = { ...state.allChartData, ...charDataCiy }
            return { ...state, allChartData: newAllChartData }
        case 'SET_FORECAST_ITEM_LIST':
            const foreCastItemListCity = action.payload
            const newAllForeCastItemList = { ...state.allForeCastItemList, ...foreCastItemListCity }
            return { ...state, allForeCastItemList: newAllForeCastItemList }
        default:
            return state
    }
}


const WeatherContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <WeatherDispatchContext.Provider value={dispatch}>
            <WeatherStateContext.Provider value={state}>
                {children}
            </WeatherStateContext.Provider>
        </WeatherDispatchContext.Provider>
    )
}

export { WeatherContext, WeatherDispatchContext, WeatherStateContext }
