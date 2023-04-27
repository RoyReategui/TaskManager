// import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

export const PublicRoutes = ({ children }) => {
    const { username } = useSelector(state => state.auth)

    return username
        ? <Navigate to='/home' />
        : children
}

PublicRoutes.propTypes = {
    children: PropTypes.node.isRequired
}
