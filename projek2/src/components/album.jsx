import React from 'react'
import AlbumCard from './albumCard'
import Img from '../assets/img3.jpg'
import Img2 from '../assets/img4.jpg'
import { motion, useScroll } from "framer-motion"

const album = () => {
  return (
    <div className='flex flex-col items-center bg-gray p-4 md:p-12 lg:px-20 w-full'>
        
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}>
          <p className='text-4xl md:text-6xl font-[Playfair]'>Album</p>
        </motion.div>

        
        <div className='grid w-full grid-cols-1 gap-4 pt-8 '>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
              <AlbumCard image={Img} title="Nephal" total="12 Photos"/>
            </motion.div>

            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
              <AlbumCard image={Img2} title="Road" total="10 Photos"/>
            </motion.div>
        </div>

    </div>
  )
}

export default album