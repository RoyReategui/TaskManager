import { NavLink } from 'react-router-dom'
import { logoutUser } from '../../store/slices/auth/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'

export const Navbar = () => {
    const dispatch = useDispatch()
    const closeRef = useRef()
    const { username } = useSelector(state => state.auth)

    const onLogout = async () => {
        dispatch(logoutUser())
    }

    const closeMenu = () => {
        if (closeRef?.current) closeRef.current.click()
    }

    return (
        <header className="bg-white">
            <nav className='flex container items-center justify-between p-2 sm:p-0'>
                <a href="#menu" className='block sm:hidden hover:cursor-pointer hover:scale-105'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 6l16 0"></path>
                        <path d="M4 12l16 0"></path>
                        <path d="M4 18l16 0"></path>
                    </svg>

                </a>
                <div className='fixed transition-all duration-200 z-10 -left-full target:left-0 top-0 h-screen w-[50vw] bg-indigo-800 opacity-90 pt-10
                sm:bg-white sm:static sm:h-full sm:py-5' id="menu">

                    <ul className='flex flex-col pl-2 sm:flex-row sm:pl-0 gap-5 text-indigo-400 text-lg font-semibold'>

                        <a href="#" ref={ closeRef } className='absolute right-2 top-2 text-indigo-50 hover:cursor-pointer sm:hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M18 6l-12 12"></path>
                                <path d="M6 6l12 12"></path>
                            </svg>

                        </a>

                        <li>
                            <NavLink to='/ManagerTask'
                                onClick={ closeMenu }
                                className={ ({ isActive }) => `w-full block text-white sm:text-indigo-400  nav--item ${isActive ? 'after:w-full text-indigo-700' : ''} ` }
                            >Manager Task</NavLink>
                        </li>
                        <li>
                            <NavLink to='/user'
                                onClick={ closeMenu }
                                className={ ({ isActive }) => `w-full block text-white sm:text-indigo-400 nav--item ${isActive ? 'after:w-full text-indigo-700' : ''}` }
                            >User</NavLink>
                        </li>
                    </ul>
                </div>

                <div className='flex items-center gap-x-2 text-indigo-800 text-xl'>
                    <h3>
                        <span className='hidden font-bold sm:inline-block'> { username } </span>
                    </h3>
                    <button
                        className='bg-red-100 text-red-700 rounded-md py-2 px-3 hover:bg-red-200'
                        onClick={ onLogout }
                    >
                        <span className='hidden sm:inline-block'>Logout</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="block sm:hidden" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                            <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
                        </svg>
                    </button>
                </div>
            </nav>
        </header>

    )
}
