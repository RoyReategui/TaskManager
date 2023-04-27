import { checkingCredendial, logout, login } from './authSlice'
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

export const loginUser = (user) => {
    return async (dispatch, getstate) => {
        dispatch(checkingCredendial())
        const manager = new ManagerLocalStorage('users')
        const resp = await manager.search(user)
        if (resp.ok) {
            ManagerLocalStorage.updateItem('user', resp.userFound)
            dispatch(login(user))
        } else {
            dispatch(logout({ message: resp.message }))
        }
    }
}

export const logoutUser = () => {
    return async (dispatch, getstate) => {
        dispatch(checkingCredendial())
        ManagerLocalStorage.updateItem('user', null)
        dispatch(logout())
    }
}
