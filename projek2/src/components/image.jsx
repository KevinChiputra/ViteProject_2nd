import React from 'react'
import ImageCard from './imageCard'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'

const image = () => {
  return (
    <div className='flex flex-col items-center bg-gray p-4 md:p-12 lg:px-20 w-full'>
        <p className='text-4xl md:text-6xl font-[Playfair]'>Fav Photo</p>

        <div className='grid grid-row-2 w-full lg:grid-cols-2 gap-4 pt-8 '>
          <div>
            <ImageCard image={img1} title="Blue Beach"/>
          </div>
          <div>
            <ImageCard image={img2} title="Prabu Mountain"/>
          </div>
        </div>
        



    </div>
  )
}

export default image