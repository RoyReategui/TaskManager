import { Navigate, Route, Routes } from 'react-router-dom'
import { HistoriaPage, JavaScriptPage } from './pages'
import { NoticiasPage } from './pages/NoticiasPage'
import { Navbar } from './ui/Navbar'

export const AppRouter = () => {
    return (
        <div className='bg-indigo-50'>
            <div className='container  w-screen min-h-screen'>
                <Navbar />
                <Routes>
                    <Route path='/javascript' element={ <JavaScriptPage /> } />
                    <Route path='/noticias' element={ <NoticiasPage /> } />
                    <Route path='/historia' element={ <HistoriaPage /> } />
                    <Route path='/*' element={ <Navigate to='/javascript' /> } />
                </Routes>

            </div>
        </div>
    )
}
