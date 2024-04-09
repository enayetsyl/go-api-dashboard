import {Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout