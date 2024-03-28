import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './SideBar.scss'

const MenuItem = ({ item }) => {

    return (
        <NavLink to={item.link} className='sidebar__link'>
            
            <span>
                {
                    <item.icon/>

                }
            </span>
            


        </NavLink >
    )
}

export default MenuItem
