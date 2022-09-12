import React from 'react'
import LeftMenu from '../components/Layout/LeftMenu'
import TopBar from '../components/Layout/TopBar'

const Layout = ({ children }: any) => {
  return (
    <div>
      <TopBar />
      <div className="flex flex-row gap-4">
        <LeftMenu className="" />
        <div className="flex-1 p-4">{children}</div>
      </div>
    </div>
  )
}

export default Layout
