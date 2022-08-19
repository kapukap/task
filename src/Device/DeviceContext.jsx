import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';

export const DeviceContext = createContext()

export const useDevice = () => {
    const device = useContext(DeviceContext)

    if (!device) {
        throw new Error(`useDevice must be used with a DeviceProvider`)
    }
    return device
}

export const DeviceProvider = (props) => {
    const [dimensionWidth, setDimensionWidth] = useState(window.innerWidth)
    const [device, setDevice] = useState('')

    useEffect(() => {
        function handleResize() {
            setDimensionWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    const value = useMemo(() => {
        if (window.matchMedia("(max-width: 425px)").matches) {
            setDevice('mobile')
        } else if (window.matchMedia("(min-width: 426px) and (max-width: 768px)").matches) {
            setDevice('tablet')
        } else if (window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches) {
            setDevice('laptop')
        } else {
            setDevice('desktop')
        }
        return [device]
    }, [device, dimensionWidth]);

    window.addEventListener('resize', () => value)

    return <DeviceContext.Provider value={value} {...props}/>
}
