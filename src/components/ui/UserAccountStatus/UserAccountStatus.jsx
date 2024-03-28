import React from 'react'
import { Link } from 'react-router-dom'
import './UserAccountStatus.scss'

const UserAccountStatus = ({hasAccountMessage, linkMessage, link }) => {
    return (
        <div className='userAccountStatus'>
            <div className="userAccountStatus_container">
                <p className="userAccountStatus_text">
                    {hasAccountMessage}
                    <Link to={link}
                        className="userAccountStatus_text_span"
                    >
                        {linkMessage}


                    </Link>

                </p>
            </div>
        </div>
    )
}

export default UserAccountStatus
