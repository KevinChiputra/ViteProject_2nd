import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/home'
import Navbar from './components/navbar'
import Image from './components/image'
import Footer from './components/footer'
import Album from './components/album'
import Aboutus from './components/aboutPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* <Home />
      <Image />
      <Album /> */}
      
      <Aboutus />
      <Footer />
    </>
  )
}

export default App
