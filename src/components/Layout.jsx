import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="layout w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
        <Outlet />  
      </main>
    </>
  )
}

export default Layout