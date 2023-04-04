import { useLocalStorage } from './useLocalStorage'

export const useOptionLocalStorage = ({ key = '', defaultData = null }) => {
    const { data, setvalue } = useLocalStorage({ key, defaultData })

    const add = (newItem) => {
        let newValue = { ...newItem }
        if (!data) {
            newValue = [newValue]
            setvalue(newValue)
            return { ok: true }
        } else {
            const flag = data.find(ele => ele.username.trim().toUpperCase() === newItem.username.trim().toUpperCase())
            if (!flag) {
                newValue = [...data, newValue]
                setvalue(newValue)
                return { ok: true }
            }
            return { ok: false, message: 'El usuario ya existe' }
        }
    }

    const search = (user) => {
        const userFlag = data.find(ele => ele.username.toUpperCase() === user.username.toUpperCase())
        if (!userFlag) {
            return {
                ok: false,
                message: 'Upps, Asegurese de estar registrado'
            }
        }
        if (user.password !== userFlag.password) {
            return {
                ok: false,
                message: 'Upps, Asegurese de estar registrado'
            }
        }
        return {
            ok: true
        }
    }

    return { add, search }
}
