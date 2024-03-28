import React from 'react'
import Registration from '../../components/Registration/Registration'
import TitleDisplay from '../../components/ui/TitleDisplay/TitleDisplay'
import UserAccountStatus from '../../components/ui/UserAccountStatus/UserAccountStatus'

const RegistrationPage = () => {
  const title = 'Sign up for delicious'
  const span = 'Discoveries!'

  const hasAccountMessage = 'Already have an account?'
  const signInMessage = 'Sign In Now'
  const link = '/'

  return (
    <div>
      <TitleDisplay
        title={title}
        span={span}
      />
      <Registration/>
      <UserAccountStatus
        hasAccountMessage={hasAccountMessage}
        linkMessage={signInMessage}
        link={link}
      />
    </div>
  )
}

export default RegistrationPage
