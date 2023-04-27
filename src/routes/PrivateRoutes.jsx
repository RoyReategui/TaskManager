import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PrivateRoutes = ({ children }) => {
    const { username } = useSelector(state => state.auth)

    return username
        ? children
        : <Navigate to='/auth/login' />
}

PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired
}
