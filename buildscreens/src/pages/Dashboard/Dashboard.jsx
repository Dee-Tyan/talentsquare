import React from 'react'
import Header from '../../components/Header/Header'
import SideNav from '../../components/SideNav/SideNav'
import VAccount from '../../components/VAccounts/VAccounts'
import AF from '../../components/ActivityFeed/AF'

const Dashboard = () => {
  return (
    <div className='bg-bgcolor h-screen'>
        <Header/>
        <SideNav/>
        <VAccount />
        <AF />
    </div>
  )
}

export default Dashboard