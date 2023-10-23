import React from 'react'
import AlbumCard from './albumCard'
import Img from '../assets/img3.jpg'
import Img2 from '../assets/img4.jpg'

const album = () => {
  return (
    <div className='flex flex-col items-center bg-gray p-4 md:p-12 lg:px-20 w-full'>
        
        <p className='text-4xl md:text-6xl font-[Playfair]'>Album</p>

        
        <div className='grid w-full grid-cols-1 gap-4 pt-8 '>
            <AlbumCard image={Img} title="Nephal" total="12 Photos"/>
            <AlbumCard image={Img2} title="Road" total="10 Photos"/>
        </div>

    </div>
  )
}

export default album