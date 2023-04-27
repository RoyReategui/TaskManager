import PropTypes from 'prop-types'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../store/slices/auth/thunks'
import { resetState } from '../../store/slices/auth/authSlice'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
// import { useOptionLocalStorage } from '../../hooks/useOptionLocalStorage'
import { TYPE_ALERTS, myAlert, generaId } from '../../helpers'
import { useEffect } from 'react'

export const RegisterForm = ({ title }) => {
    // const { add } = useOptionLocalStorage({ key: 'users', defaultData: [] })

    const { status, message } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const onRegisterUser = (user) => {
        user.uid = generaId('user')
        dispatch(registerUser(user))
    }

    useEffect(() => {
        if (message) {
            let title = ''
            let typeAlert = TYPE_ALERTS.SUCCESS
            if (message.includes('[ok]')) {
                title = '!!EXITO!!'
            } else {
                title = '¡¡ Hubo un problema !! '
                typeAlert = TYPE_ALERTS.ERROR
            }
            myAlert(title, message, typeAlert)
                .finally(ele => { dispatch(resetState()) })
        }
    }, [message])

    return (
        <div className='w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] rounded-md space-y-6 p-5 py-6 md:p-7 lg:p-8 lg:py-8 bg-white flex flex-col items-center shadow-md'>
            <h2 className='font-semibold text-xl lg:text-2xl text-purple-800 '> { title } </h2>

            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    confirm: '',
                    description: ''
                }}
                onSubmit = { async ({ username, password, description }, helpers) => {
                    onRegisterUser({ username, password, description })
                    // const resp = await new Promise((resolve) => {
                    //     resolve(add({ uid: generaId('user'), username, password, description }))
                    // })
                    // console.log(resp)
                    // if (!resp.ok) {
                    //     myAlert('¡¡ Hubo un Problema !!', resp.message, TYPE_ALERTS.ERROR)
                    // } else {
                    //     myAlert(' ¡¡ EXITO !!', 'El usuario se registro con exito', TYPE_ALERTS.SUCCESS)
                    // }
                    helpers.resetForm({
                        username: '',
                        password: '',
                        confirm: ''
                    })
                }}
                validationSchema = {
                    Yup.object().shape({
                        username: Yup.string()
                            .max(15, 'Debe de Tener maximo 15 carateres')
                            .required('UserName Requerido'),
                        password: Yup.string()
                            .min(4, 'El password tiene que tener minimo 4 carateres')
                            .matches(/[0-9]/, 'El password tiene que contener minimo un numero')
                            .required('Password Requerido'),
                        confirm: Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Los password no coinciden')
                    })
                }
                // onReset={handleReset}
            >
                {
                    formik => (
                        <Form className='flex flex-col w-full'>

                            <div className="relative block">
                                <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-check text-purple-400" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                                        <path d="M15 19l2 2l4 -4"></path>
                                    </svg>
                                </span>
                                <Field
                                    className='inputText'
                                    placeholder= 'User Name'
                                    name='username'
                                    id='username'
                                    type='text'
                                />
                            </div>
                            <ErrorMessage
                                className='text-[0.8rem] text-red-600 italic text-right mb-2'
                                name='username'
                                component='span'
                            />

                            <div className="relative block mt-2">
                                <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-key text-purple-400" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z"></path>
                                        <path d="M15 9h.01"></path>
                                    </svg>
                                </span>
                                <Field
                                    className = 'inputText'
                                    name='password'
                                    type='password'
                                    id='password'
                                    placeholder='password'
                                />

                            </div>
                            <ErrorMessage
                                className='text-[0.8rem] text-red-600 italic text-right mb-2'
                                name='password'
                                component='span'
                            />

                            <div className="relative block mt-2">
                                <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-key text-purple-400" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z"></path>
                                        <path d="M15 9h.01"></path>
                                    </svg>
                                </span>
                                <Field
                                    className = 'inputText'
                                    name='confirm'
                                    type='password'
                                    id='confirm'
                                    placeholder='repeat confirm'
                                />
                            </div>
                            <ErrorMessage
                                className='text-[0.8rem] text-red-600 italic text-right'
                                name='confirm'
                                component='span'
                            />

                            <Link
                                className='text-sky-500 text-sm mt-5 text-right self-end'
                                to='/auth/login'
                            >
                             Ya tiene cuenta? - Ingrese ya!
                            </Link>
                            <button
                                type='submit'
                                // disabled = { registerUser }
                                className='border rounded-md transition hover:duration-150 hover:scale-105 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-500 text-purple-100 py-2 text-lg mt-6 font-bold'
                            > { status === 'checking' ? 'Registreando' : 'Registrarse' } </button>
                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}

RegisterForm.propTypes = {
    title: PropTypes.string.isRequired
}
