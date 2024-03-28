import React, { useState } from 'react'
import './Registration.scss'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
// import { SignupSchema, initialValues, validate } from './helpers.js'
import { SignupSchema, initialValues } from './helpers.js';

import { userRegister } from '../redux/actions/registerAPI';
import { useDispatch } from 'react-redux';


const Registration = () => {
  const [active, setActive] = useState(false)
  const [passwordConfirmActive, setPasswordConfirmActive] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleEyeToggle = () => {
    setActive(!active)
  }

  const handlePasswordConfirmationEyeToggle = () => {
    setPasswordConfirmActive(!passwordConfirmActive)
  }


  const onSubmit = async (values) => {
    const newData = {
      ...values, 
      url: 'http://localhost:3000/confirmation'
    }

    try {
      const response = await dispatch(userRegister(newData))
      console.log(response)
      navigate('/confirmation')
    } catch (error) {
      console.log(error)
    }

  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema:SignupSchema,
    
  })

  return (
    <div className='registration'>
      <form className='registration__form' onSubmit={formik.handleSubmit}>
        <div className="registration__form_wrapper">
          <div className="registration__form_username_content">
            <div className="registration__form_username_container">
              <label htmlFor="name" className='registration__form_username_title'>Name</label>
              <input
                id='name'
                type="text"
                className="registration__form_username"
                placeholder='Enter your username'
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name ? <div className='registration__form_error_message'>{formik.errors.name}</div> : null}
              
            </div>
            <span
              className='registration__form_username_img'

            >
              <img src='assets/images/LoginPage/person.png' alt="eyeOn" />


            </span>
          </div>
          <div className="registration__form_email_content">
            <div className="registration__form_email_container">
              <label htmlFor="email" className='registration__form_email_title'>Gmail</label>
              <input
                id='email'
                type='email'
                className="registration__form_email"
                placeholder='Enter your password'
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email ? <div className='registration__form_error_message'>{formik.errors.email}</div> : null}
            </div>
            <span
              className='registration__form_email_img'

            >
              {<img src='assets/images/LoginPage/email.png' alt="eyeOn" />}


            </span>
          </div>
          <div className="registration__form_password_content">
            <div className="registration__form_password_container">
              <label htmlFor="password" className='registration__form_password_title'>Password</label>
              <input
                id='password'
                type={active ? 'text' : 'password'}
                className="registration__form_password"
                placeholder='Enter your password'
                value={formik.values.password}
                onChange={formik.handleChange}

              />
               {formik.errors.password ? <div className='registration__form_error_message'>{formik.errors.password}</div> : null}

            </div>
            <span
              className='registration__form_password_input_eyeToggle'
              onClick={handleEyeToggle}
            >
              {active ? <img src='assets/images/LoginPage/visibility.png' alt="eyeOn" /> : <img src='assets/images/LoginPage/visibility_off.png' />}


            </span>
          </div>
          <div className="registration__form_re-password_content">
            <div className="registration__form_re-password_container">
              <label htmlFor="password_confirm" className='registration__form_re-password_title'>Re-Password</label>
              <input
                id='password_confirm'
                type={passwordConfirmActive ? 'text' : 'password'}
                className="registration__form_re-password"
                placeholder='Enter your password'
                value={formik.values.password_confirm}
                onChange={formik.handleChange}

              />
              {formik.errors.password_confirm ? <div className='registration__form_error_message'>
                {formik.errors.password_confirm}
              </div> : null}
            </div>
            <span
              className='registration__form_re-password_input_eyeToggle'
              onClick={handlePasswordConfirmationEyeToggle}
            >
              {passwordConfirmActive ? <img src='assets/images/LoginPage/visibility.png' alt="eyeOn" /> : <img src='assets/images/LoginPage/visibility_off.png' />}


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
  )
}

export default Registration
