import React from 'react'
import SideBar from '../../components/ui/SideBar/SideBar'
import DishDetails from '../../components/DishDetails/DishDetails'
// import DashboardLayout from '@/components/layout/DashboardLayout'
import DashboardLayout from '../../components/layout/DashboardLayout'

const DishDetailsPage = () => {
    return (
        <div>
            {/* <SideBar/>
            <DishDetails/> */}
            <DashboardLayout>
                <DishDetails/>
            </DashboardLayout>
        </div>
    )
}

export default DishDetailsPage
