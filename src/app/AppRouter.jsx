import { Navigate, Route, Routes } from 'react-router-dom'
import { User } from './pages/User'
import { Navbar } from './ui/Navbar'
import { ManagerTask } from './pages/ManagerTask'

export const AppRouter = () => {
    return (
        <div className='bg-indigo-50'>
            <div className='w-screen min-h-screen'>
                <Navbar />
                <Routes>
                    <Route path='/managerTask' element={ <ManagerTask /> } />
                    <Route path='/user' element={ <User /> } />
                    <Route path='/*' element={ <Navigate to='/managerTask' /> } />
                </Routes>

            </div>
        </div>
    )
}
