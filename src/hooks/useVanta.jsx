import { useRef, useEffect, useState } from 'react'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const useVanta = () => {
    const myRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0)

    // en la primer renderización la constante es nula
    // en la segunda renderización se asocia al div, en la primera NO,
    // console.log("myRefDiv.current", myRefDiv.current)

    useEffect(() => {
        // console.log("myRefDiv.current (en useEffect)", myRefDiv.current)

        if (!vanta) {
            setVanta(Clouds({
                THREE,
                el: myRefDiv.current
            }))
            // console.log("vanta inicalizado")
        }
        // Al salir de la pantalla queremos detener el effecto 
        //- desasignar los recursos del vanta - esto es el componente will unmount
        return () => {
            if (vanta) {
                vanta.destroy();
                // console.log("libero los recursos")
            }
        }
        //con esto me aseguro que siga funcionando bien
    }, [vanta])

    return myRefDiv
}

export default useVanta