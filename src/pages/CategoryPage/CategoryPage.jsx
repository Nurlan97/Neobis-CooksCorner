import React from 'react'
import SideBar from '../../components/ui/SideBar/SideBar'
import Category from '../../components/Category/Category'
import DashboardLayout from '../../components/layout/DashboardLayout'

const CategoryPage = () => {
  return (
    <div>
      <DashboardLayout>
        <Category/>
      </DashboardLayout>
    </div>
  )
}

export default CategoryPage
