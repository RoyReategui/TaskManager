import { useEffect, useState } from 'react'

export const useLocalStorage = ({ key, defaultData = null }) => {
    const [data, setvalue] = useState(() => {
        try {
            const item = JSON.parse(localStorage.getItem(key))
            if (item !== null) {
                return item
            }
            return defaultData
        } catch (error) {
            return defaultData
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data))
    }, [key, data])

    return { data, setvalue }
}
