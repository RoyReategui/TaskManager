import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PublicRoutes = ({ children }) => {
    const { user } = useSelector(state => state.auth)

    return user
        ? <Navigate to='/home' />
        : children
}

PublicRoutes.propTypes = {
    children: PropTypes.node.isRequired
}
