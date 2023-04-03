/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {},
        container: {
            center: true,
            padding: {
                DEFAULT: '0',
                sm: '1rem',
                lg: '2rem',
                xl: '3rem',
                '2xl': '4rem'
            }
        }
    },
    plugins: []
}
