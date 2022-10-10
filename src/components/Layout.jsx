import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import TopNav from './TopNav'

const Layout = () => {
  return (
    <div className="wrapper">
     <TopNav />
      <div className="container">
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}
export default Layout
