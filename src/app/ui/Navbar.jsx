import { NavLink } from 'react-router-dom'
import { logout } from '../../store/slices/auth/authSlice'
import { useDispatch } from 'react-redux'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export const Navbar = () => {
    const dispatch = useDispatch()
    const { setvalue } = useLocalStorage({ key: 'user' })

    const onLogout = async () => {
        await new Promise((resolve) => {
            setvalue(null)
            resolve()
        })
        dispatch(logout())
    }

    return (
        <nav className='flex items-center justify-between py-3 px-2'>
            <ul className='flex gap-x-5 text-indigo-800 text-lg font-semibold '>
                <li>
                    <NavLink to='/javascript' >JavaScript</NavLink>
                </li>
                <li>
                    <NavLink to='/noticias' >Noticias</NavLink>
                </li>
                <li>
                    <NavLink to='/historia' >Historia</NavLink>
                </li>
            </ul>
            <div className='flex items-center gap-x-2 text-indigo-800 text-xl'>
                <div>
                    Roy
                </div>
                <button
                    className='bg-red-700 text-red-100 rounded-md py-2 px-3 hover:bg-red-600'
                    onClick={ onLogout }
                >
                    Loguot
                </button>
            </div>
        </nav>
    )
}
