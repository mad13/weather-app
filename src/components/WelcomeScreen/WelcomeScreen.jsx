import React from 'react'
import PropTypes from 'prop-types'
import useVanta from '../../hooks/useVanta'

const WelcomeScreen = ({ children }) => {

    const myRefDiv = useVanta()

    // asociar al div el ref con el use ref
    return (
        <div ref={myRefDiv} className="full">
            {children}
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node
}

export default WelcomeScreen
