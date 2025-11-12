import { Outlet } from 'react-router-dom'
import LinkProvider from '../providers/link-provider'
import Header from './Header'

const Layout = () => {
  return (
    <>
      <Header />
      <LinkProvider>
        <main className="layout w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
          <Outlet />  
        </main>
      </LinkProvider>
    </>
  )
}

export default Layout