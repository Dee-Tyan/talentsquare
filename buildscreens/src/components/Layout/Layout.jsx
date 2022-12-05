import React from 'react'
import Header from '../Header/Header'
import SideNav from '../SideNav/SideNav'

const Layout = ({pageTitle, children}) => {
  return (
    <div className="w-full min-h-screen h-full bg-bgcolor flex relative overflow-y-auto overflow-x-hidden">
      <SideNav />

      <div className="w-full p-5 lg:p-8 lg:pb-4 relative ml-sidebar-sm lg:ml-sidebar-lg overflow-x-hidden">
        <Header pageTitle={pageTitle} />

        {children}
      </div>
    </div>
  )
}

export default Layout