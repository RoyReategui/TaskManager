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
            console.log(data)
            console.log(newItem)
            const flag = data.find(ele => ele.username === newItem.username)
            if (!flag) {
                newValue = [...data, newValue]
                setvalue(newValue)
                return { ok: true }
            }
            return { ok: false, message: 'usuario Rpetido' }
        }
    }

    const search = (user) => {
        const userFlag = data.find(ele => ele.username.toUpperCase() === user.username.toUpperCase())
        if (!userFlag) {
            return {
                ok: false,
                message: 'Upps, Asegurese que estar registrado'
            }
        }
        if (user.password !== userFlag.password) {
            return {
                ok: false,
                message: 'Upps, Asegurese que estar registrado'
            }
        }
        return {
            ok: true
        }
    }

    return { add, search }
}
