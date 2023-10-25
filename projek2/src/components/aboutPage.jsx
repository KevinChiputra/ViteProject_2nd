import React from 'react'
import Siluet from '../assets/siluet.jpg'
import { motion, useScroll } from "framer-motion"

const aboutPage = () => {
  return (
    <div className='flex flex-col w-full h-screen md:h-[700px] lg:h-screen items-center justify-center bg-gray'>
        <motion.div animate={{ y: 0, opacity: 100}}
        transition={{ ease: "easeOut", duration: 2 }}
        initial={{y: 200, opacity: 0}} className='flex flex-col items-center justify-center'>
          <p className='text-4xl md:text-6xl font-[Playfair]'>About</p>

          <div className='flex flex-col justify-center items-center py-6 px-4 md:flex-row md:px-12 lg:px-20'>

              <div className='flex flex-col justify-center items-center rounded-md md:items-start lg:w-[50%]'>
                  <img src={Siluet} alt="Siluet img" className='w-[65%] rounded-md shadow-xl md:w-full lg:h-[500px] object-fill'/>
              </div>

              <div className='pt-4 md:pt-0 md:pl-6 lg:w-[50%]'>
                  <p className='text-md md:text-lg lg:text-2xl'>
                  In the world of photography, I am dedicated to the art of storytelling through the lens. From capturing fleeting emotions in a candid portrait to composing breathtaking landscapes, my work is a reflection of my unwavering commitment to the visual arts. I believe that each photograph should tell a story, evoke emotion, and leave a lasting impression. Explore my portfolio and discover the world as seen through my lens, where every image is a testament to my dedication as a professional photographer.
                  </p>
              </div>
          </div>
        </motion.div>
    </div>
  )
}

export default aboutPage