import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './Pages/home'
import AboutPage from './Pages/about'
import ContactPage from './Pages/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/AboutPage' element={<AboutPage/>} />
          <Route path='/ContactPage' element={<ContactPage/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
