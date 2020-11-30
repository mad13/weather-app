import React, { Component } from 'react'

class ErrorBoundary extends Component {

    // el contructor se ejecuta previo a la renderización
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    // this setState({hasError :true}) -- llama internamente al setState
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log("ErrorInfo", errorInfo)
    }

    // al tratar errores, no utilizar componentes de tercero para evitar más errores
    render() {
        return (
            this.state.hasError ?
                // asegurarse que esto que voy a mostrar este libre de errores
                (<h1>Hubo error</h1>)
                :
                (this.props.children)
        )
    }
}

export default ErrorBoundary
