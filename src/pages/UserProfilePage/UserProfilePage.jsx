import React, { useState } from 'react'
import './UserProfilePage.scss'
import UserProfile from '../../components/UserProfile/UserProfile'
import SideBar from '../../components/ui/SideBar/SideBar'
import DashboardLayout from '../../components/layout/DashboardLayout'


const UserProfilePage = () => {

  return (
    <DashboardLayout>
      <UserProfile/>
    </DashboardLayout>
  )
}

export default UserProfilePage
