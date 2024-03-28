import React, { useState } from 'react'
import './LogoutModal.scss'
import { useNavigate } from 'react-router-dom'

const LogoutModal = ({ logoutModal, setLogoutModal }) => {
    const [confirm, setConfirm] = useState(false)
    const [cancel, setCancel] = useState(false)


    const navigate = useNavigate()
    const handleConfirm = () => {
        setConfirm(!confirm)
        setCancel(false)
        navigate('/login')
        
    }

    const handleCancel = () => {
        setCancel(!cancel)
        setConfirm(false)
        setLogoutModal(false)
    }
    
    
    return (
        logoutModal && (
            <div className='logout'>
                <div className="logout__popup">
                    <div className="logout__popup_title-container">
                        <h1 className="logout__title">Are you sure you wanna leave?</h1>

                    </div>

                    <div className="logout__popup_buttons">
                        <button
                            className={`logout__popup_confirm_button ${confirm ? 'active' : ''}`}
                            onClick={handleConfirm}
                        >
                            Yes
                        </button>
                        <button
                            className={`logout__popup_confirm_button ${cancel ? 'active' : ''}`}
                            onClick={handleCancel}
                        >
                            No
                        </button>
                       
                    </div>

                </div>
            </div>
        )
    )
}

export default LogoutModal
