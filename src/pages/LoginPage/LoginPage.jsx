import React, { useState } from 'react'
import './LoginPage.scss'
import TitleDisplay from '../../components/ui/TitleDisplay/TitleDisplay'


// import visibility_on from '../../../public/assets/images/loginPage/eyeOn.png'
// import visibility_off from '../../../public/assets/images/loginPage/eyeOff.png'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoginForm from '../../components/LoginForm/LoginForm';
import UserAccountStatus from '../../components/ui/UserAccountStatus/UserAccountStatus';
// import { useDispatch } from 'react-redux';
// import { userLogin } from '../../api/userAPI';
// import { isAuthUser } from '../../api/userAPI';
// import { getAccessToken } from '../../api/userAPI';

const LoginPage = () => {
  const title = 'Welcome Back'
  const title_lineBreak = 'To'
  const span = 'CooksCorner'

  const hasAccountMessage = 'I don’t have an account?'
  const SignUpMessage = 'Sign Up Now'
  const link = '/registration'


  return (
    <div className='loginPage'>
      <TitleDisplay
        title={title}
        lineBreak={title_lineBreak}
        span={span}
      />
      <LoginForm/>
      <UserAccountStatus
        hasAccountMessage={hasAccountMessage}
        linkMessage={SignUpMessage}
        link={link}
      />
    </div>
  )
}

export default LoginPage
