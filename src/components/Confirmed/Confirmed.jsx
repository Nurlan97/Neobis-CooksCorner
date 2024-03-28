import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userConfirmation } from '../redux/actions/confirmation.API'

const Confirmed = () => {
  
  return (
    <div>
       <h1>Success!!! Your email has been confirmed!</h1>

    </div>
  )
}

export default Confirmed
