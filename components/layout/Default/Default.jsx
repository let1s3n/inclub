// components/layout.js

import Navbar from '../../modules/NavBar/NavBar'
import Footer from '../../modules/Footer/Footer'

export default function Layout({ children }) {

  
  return (
    <>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}