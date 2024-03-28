import React, { useEffect, useState } from 'react';
import './EmailConfirmation.scss';


import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { userConfirmation } from '../redux/actions/confirmation.API';
import GoBack from '../ui/GoBack/GoBack';
import { ROUTES } from '../../config/pages-url.config';



const EmailConfirmation = () => {


    const [showResentEmailModal, setShowResentEmailModal] = useState(false);
    
    const [params] = useSearchParams()
    const token = params.get('ct')
    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        if(token) {
            dispatch(userConfirmation(token))
            navigate(ROUTES.CONFIRMED)
        }
        
    }, [])

    
    const handleResentEmailNotification = () => {
        setShowResentEmailModal(true)


    }

    const handleCLoseResentEmailModal = () => {
        setShowResentEmailModal(false)
    }



    return (
        <>
            <GoBack />
            
            <div className='emailVerificationMessage'>
                <h1 className="emailVerificationMessage__title">
                    Выслали письмо со ссылкой для <br />завершения регистрации на <br /> example@gmail.com
                </h1>
                <p className="emailVerificationMessage__subtitle">
                    Если письмо не пришло, не <br />спеши ждать совиную почту - <br />лучше

                    <span>
                        проверь ящик “Спам”
                    </span>
                    <br />

                    <span className='emailVerificationMessage__subtitle_decoration'>
                        (´｡• ω •｡`)
                    </span>
                </p>


                <button
                    className='emailVerificationMessage__btn'
                    onClick={handleResentEmailNotification}

                >
                    Письмо не пришло
                </button>
                


            </div>

        </>
    )
}

export default EmailConfirmation
