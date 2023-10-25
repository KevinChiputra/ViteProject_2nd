import React from 'react'

const footer = () => {
  return (



    <div className='h-[80px] bg-white flex flex-col items-center justify-center md:h-[100px] '>
        
        <div className='flex items-center justify-center'>
          <box-icon name='instagram-alt' type='logo' color='#0f0f0f' size='sm'></box-icon>
          <box-icon type='logo' name='twitter' color='#0f0f0f' size='sm'></box-icon>
          <box-icon name='facebook' type='logo' color='#0f0f0f' size='sm'></box-icon>
          <box-icon name='youtube' type='logo' color='#0f0f0f' size='sm'></box-icon>
        </div>
      
        <div className='pt-2'>
          <p className='opacity-75 pl-2 text-sm font-medium md:text-lg md:opacity-50'>©️ Copyright</p>
        </div>

    </div>
  )
}

export default footer