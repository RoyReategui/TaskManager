import { NavLink } from 'react-router-dom'
import { logoutUser } from '../../store/slices/auth/thunks'
import { useDispatch, useSelector } from 'react-redux'

export const Navbar = () => {
    const dispatch = useDispatch()
    const { username } = useSelector(state => state.auth)

    const onLogout = async () => {
        dispatch(logoutUser())
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
                    { username }
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
