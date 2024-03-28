import React from 'react'
import SideBar from '../../components/ui/SideBar/SideBar'
import Chefs from '../../components/Chefs/Chefs'
import DashboardLayout from '../../components/layout/DashboardLayout'


const ChefsPage = () => {
    return (
        <div className='chefsPage'>
            {/* <SideBar/>
            <Chefs/> */}
            <DashboardLayout>
                <Chefs/>
            </DashboardLayout>
        </div>
    )
}

export default ChefsPage
