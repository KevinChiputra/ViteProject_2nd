import React from 'react'
import Home from '../components/home'
import Navbar from '../components/navbar'
import Image from '../components/image'
import Footer from '../components/footer'
import Album from '../components/album'


const home = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <Image />
        <Album />
        <Footer />

    </div>
  )
}

export default home