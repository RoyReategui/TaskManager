import PropTypes from 'prop-types'

export const Wrapper = ({ children }) => {
    return (
        <div className='flex items-center justify-center min-h-screen max-w-[100vw] bg-gradient-to-r from-violet-500 to-indigo-500 '>
            { children }
        </div>
    )
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired
}
