import { Route, Routes } from 'react-router-dom'
import { AppRouter } from '../app/AppRouter'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const IndexRoute = () => {
    return (
        <Routes>
            <Route path='/auth/*' element={
                <PublicRoutes>
                    <AuthRoutes />
                </PublicRoutes>
            }/>
            <Route path='/*' element={
                <PrivateRoutes>
                    <AppRouter />
                </PrivateRoutes>
            } />
        </Routes>
    )
}
