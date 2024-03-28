import React, { useEffect, useState } from 'react';
import './SideBar.scss';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import Logout from '../../LogoutModal/LogoutModal';

import { MENU } from './menu.data';
import MenuItem from './MenuItem';
import { MdOutlineLogout } from "react-icons/md";
const SideBar = () => {

    const navigate = useNavigate()

    return (
        <div className='sidebar'>
            <div className="sidebar__functionality">
                <div className="sidebar__logo_wrapper"
                    onClick={() => navigate('/category')}
                >
                    <img
                        src='/assets/images/Sidebar/skillet_cooktop.png' alt="logo" />
                    <p className="sidebar__logo-text">CooksCorner</p>

                </div>



                <div className='sidebar__actions'>
                    {
                        MENU.map(item => (
                            <MenuItem
                                item={item}
                            />
                        ))
                    }
                </div>

            </div>


            <NavLink
            to='/'
            className="sidebar__logout">
                <span className='sidebar__logout-icon'>
                    <MdOutlineLogout />
                </span>

            </NavLink>
        </div>
    )
}

export default SideBar
