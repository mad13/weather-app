import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: "AppFrame",
    componet: AppFrame
}

export const AppFrameExample = () => {
    return (
        <Router>
            <AppFrame>
                loren ipsun lalala
            </AppFrame>
        </Router>
    )
}