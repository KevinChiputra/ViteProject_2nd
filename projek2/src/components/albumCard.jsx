import React from 'react'

const albumCard = ({image, title, total}) => {
  return (
    <div className='w-full h-[250px] bg-white rounded-md shadow-lg md:h-[400px]             lg:w-full lg:h-[500px] lg:flex lg:items-end'>
        <img src={image} alt="test foto" className='w-full h-[200px] object-fill md:h-[300px] md:object-cover          lg:w-[50%] lg:h-full rounded-t-md'/>

        <div className='p-2 flex justify-start items-center md:pt-8 md:px-4 lg:py-8 lg:px-8'>
            <p className='font-[Playfair] text-lg pr-2 border-r border-opacity-50 md:text-4xl'>{title}</p>
            <p className='opacity-75 pl-2 text-sm font-medium md:text-2xl md:opacity-50'>{total}</p>
        </div>
    </div>
  )
}

export default albumCard