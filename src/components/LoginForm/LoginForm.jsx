import React, { useState } from 'react'
import './LoginForm.scss'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { userLogin } from '../redux/actions/loginAPI';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const LoginForm = () => {
    const [userLoginInput, setUserLoginInput] = useState('')
    const [userPasswordInput, setUserPasswordInput] = useState('')
    const [active, setActive] = useState(true)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleUserLoginInput = (e) => {
        setUserLoginInput(e.target.value)
    }

    const handleUserPasswordInput = (e) => {
        setUserPasswordInput(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newData = {
            email: userLoginInput,
            password: userPasswordInput
        }

        
        try {
            const response = await dispatch(userLogin(newData))
            console.log(response)
            if (response && response.payload?.accessToken) {
                navigate('/category')    
                toast.success('Success!')
    
                return
            }

            throw new Error('Failed!~')
        } catch (error) {
            toast.error('Incorrect login or password!')
            
        }
        




    }


    const handleEyeToggle = () => {
        setActive(!active)


    }

    // const isTokenExpired = (token) => {
    //   const expiry = JSON.parse(atob(token.split('.')[1])).exp;
    //   return Math.floor(new Date().getTime() / 1000) >= expiry;
    // };

    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')

    // useEffect(() => {


    //   const isAuthFn = async () => {
    //     if (accessToken && refreshToken) {  // Проверяем есть ли access  и refresh токены в localStorage (Логинился ли пользователь в прошлом или нет. Если логинился, логика дает вохможность без повторного логина войти в профиль)

    //       const isExpired = isTokenExpired(accessToken) // Првоеряем истек ли access токен


    //       if (isExpired) { // Если true, истек

    //         const response = await dispatch(getAccessToken(refreshToken)) // Делаем запрос на получения нового access токена
    //         localStorage.setItem('accessToken', response.data.access) // Сохраняем в localStorage полученный access токен.

    //         const isExpiredNewToken = isTokenExpired(accessToken)  // Снова проверяем access токен
    //         if (!isExpiredNewToken) { // Если токен действителен (т.е. false), 
    //           dispatch(isAuthUser(true)) // открываем доступ в Профиль (Смотреть App.jsx)
    //           navigate('/homePage')
    //         }

    //       } else { // если false, access token ещщё действителен и мы перенаправляем пользователя в профиль
    //         dispatch(isAuthUser(true))
    //         navigate('/homePage')
    //       }

    //     }
    //   }
    //   isAuthFn()

    // }, [])
    return (
        <div className='loginForm'>
            <div className='loginForm__form_container'>

                <form className='loginForm__form' onSubmit={handleSubmit}>
                    <div className="loginForm__form_wrapper">
                        <div className="loginForm__form_login_content">
                            <div className="loginForm__form_password_container">
                                <label htmlFor="login" className='loginForm__form_login_title'>Gmail</label>
                                <input
                                    id='login'
                                    type="text"
                                    className="loginForm__form_login"
                                    placeholder='Enter your username'
                                    value={userLoginInput}
                                    onChange={handleUserLoginInput}
                                />
                            </div>
                            <span
                                className='loginForm__form_password_input_eyeToggle'

                            >
                                <img src='assets/images/LoginPage/email.png' alt="eyeOn" />


                            </span>
                        </div>
                        <div className="loginForm__form_password_content">
                            <div className="loginForm__form_password_container">
                                <label htmlFor="password" className='loginForm__form_password_title'>Password</label>
                                <input
                                    id='password'
                                    type={active ? 'text' : 'password'}
                                    className="loginForm__form_password"
                                    placeholder='Enter your password'
                                    value={userPasswordInput}
                                    onChange={handleUserPasswordInput}
                                />
                            </div>
                            <span
                                className='loginForm__form_password_input_eyeToggle'
                                onClick={handleEyeToggle}
                            >
                                {active ? <img src='assets/images/LoginPage/visibility.png' alt="eyeOn" /> : <img src='assets/images/LoginPage/visibility_off.png' />}


                            </span>
                        </div>


                    </div>
                    <button
                        type='submit'
                        className="loginForm__form_btn">
                        Sign in
                    </button>



                </form>



            </div>
        </div>
    )
}

export default LoginForm
