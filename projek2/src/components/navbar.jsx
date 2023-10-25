import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const navbar = () => {    

    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }
    
    const navigate = useNavigate()

  return (
    <div className='flex w-full p-4 justify-between lg:py-8 lg:px-20 md:px-12 bg-white sticky top-0'>

            <div className='flex items-center'>
                <box-icon name='search-alt-2' size='md'></box-icon>
            </div>

            <ul className='hidden md:flex items-center'>
                <li className='pr-8 text-xl text-black cursor-pointer' onClick={() => navigate('/')}>Home</li>
                <li className='pr-8 text-xl text-black cursor-pointer' onClick={() => navigate('/AboutPage')}>About</li>
                <li className='text-xl text-black cursor-pointer' onClick={() => navigate('/ContactPage')}>Contact</li>
            </ul>
            

            {/* Mobile nav */}
            <div  onClick={handleNav} className='md:hidden'>
                {!nav ? <box-icon name='menu' size='md'></box-icon> : <box-icon name='x' size='md'></box-icon>}
                
            </div>

            <div className={!nav ? 'fixed left-0 top-0 p-4 bg-white h-full w-[60%] ml-[-600px] transition-all duration-[300ms] md:hidden' : 'fixed left-0 top-0 p-4 bg-white h-full w-[60%] transition-all duration-[400ms] md:hidden'}>
                <div>
                    <p className='text-2xl font-bold text-black font-[Playfair]'>Photorophy</p>
                </div>

                <ul className='pt-20'>
                    <li className='pt-4 pb-4 text-2xl text-black border-b-2 border-black' onClick={() => navigate('/')}>Home</li>
                    <li className='pt-4 pb-4 text-2xl text-black border-b-2 border-black' onClick={() => navigate('/AboutPage')}>About</li>
                    <li className='pt-4 pb-4 text-2xl text-black border-b-2 border-black' onClick={() => navigate('/ContactPage')}>Contact</li>
                </ul>
            </div>
    </div>
  )
}

export default navbar