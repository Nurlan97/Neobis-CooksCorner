import React from 'react'
import './dashboardLayout.scss'
import SideBar from '../ui/SideBar/SideBar'

const DashboardLayout = ({children}) => {
    
    return (
        <div className='dashboardLayout'>
            
            <SideBar/>
            <main>
                {children}
            </main>
        </div>

    )
}

export default DashboardLayout
