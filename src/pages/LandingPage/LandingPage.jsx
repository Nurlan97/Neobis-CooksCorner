import React from 'react'
// import logo from '../../../public/assets/images/LandingPage/skillet_cooktop.png'
import './LandingPage.scss'

const LandingPage = () => {
    return (
        <div className='landingPage'>
            <div className="landingPage__container">
                <img src='/assets/images/LandingPage/skillet_cooktop.png' alt="LOGO" className='landingPage__img' />
                <p className='landingPage__text'>CooksCorner</p>
            </div>


            <p className="landingPage__version">
                Version 0.0.1
            </p>

        </div>
    )
}

export default LandingPage
