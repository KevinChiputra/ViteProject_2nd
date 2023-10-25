import React from 'react'
import { motion, useScroll } from "framer-motion"

const home = () => {
  return (
    <div className='flex justify-center items-center h-[600px] bg-gray'>
      <motion.div  animate={{ y: 0, opacity: 100}}
      transition={{ ease: "easeOut", duration: 2 }}
      initial={{y: 200, opacity: 0}}>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-6xl md:text-8xl font-[Playfair]'>Photorophy.</p>
          <p className='text-xl pt-4 opacity-75 font-medium'>Visual storyteller</p>
        </div>
      </motion.div>
      
    </div>
  )
}

export default home