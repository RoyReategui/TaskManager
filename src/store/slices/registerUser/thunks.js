import { checkingCredendial, logout } from './registerUserSlice'
import { ManagerLocalStorage } from '../../../helpers/ManagerLocalStorage'

// const OptionLocal = useOptionLocalStorage();

export const registerUser = (user) => {
    return async (dispatch, getstate) => {
        dispatch(checkingCredendial())
        const manager = new ManagerLocalStorage('users')
        const resp = await manager.add(user)
        if (resp.ok) {
            // console.log(resp)
            dispatch(logout({ message: '[ok] - Resgistrado con Exito' }))
        } else {
            dispatch(logout({ message: resp.message }))
        }
    }
}
