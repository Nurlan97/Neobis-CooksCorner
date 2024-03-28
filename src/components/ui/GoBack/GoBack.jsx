import React from 'react'
import './GoBack.scss'

const GoBack = () => {
    const handleGoBack = () => {
        window.history.back()
    }

    return (
        <div className='goBack' onClick={handleGoBack}>
            <div className="goBack__wrapper">
                <img src="/assets/images/ui/goBack.png" alt="" />
            </div>
        </div>
    )
}

export default GoBack
