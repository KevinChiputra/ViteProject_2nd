import { useState } from "react"
import React from 'react'
import Contact from '../assets/photoForContact.jpg'


const contactUs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  
  const checkName = (event) =>{
    setName(event.target.value)
  }
  
  const checkEmail = (event) =>{
    setEmail(event.target.value)
  }
  
  const checkPhone = (event) =>{
    setPhone(event.target.value)
  }


  return (

    <div className='w-full h-[650px] md:h-[700px] lg:h-screen flex items-center justify-center bg-[url("src/assets/contactUs_bg.jpg")] bg-center bg-cover bg-blend-darken px-4 md:px-12 lg:px-20 bg-gray'>
      
      <div className="w-full lg:w-[70%] h-[500px] bg-white rounded-md shadow-xl flex">
        {/* img */}
        <img src={Contact} alt=""  className="hidden md:inline rounded-md"/>

        {/* right section */}
        <div className="w-full flex flex-col item py-4 px-4">
          <div className="flex justify-center">
            <p className='font-[Playfair] text-4xl'>Contact Us</p>
          </div>

          <div className='flex flex-col'>
                <label htmlFor="Name" className='text-xl pb-2'>Name</label>
                <input type="text" id='Name' className='border p-2' placeholder='ex: Excalibur' onChange={checkName}/>
              </div>
                
              <div className='flex flex-col pt-4'>
                <label htmlFor="Email" className='text-xl pb-2'>Email</label>
                <input type="email" id='Email' className='border p-2' placeholder='ex: Excalibur@gmail.com' onChange={checkEmail}/>
              </div>
                
              <div className='flex flex-col pt-4'>
                <label htmlFor="Phone" className='text-xl pb-2'>Phone</label>
                <input type="text" id='Phone' className='border p-2' placeholder='ex: 08*********' onChange={checkPhone}/>
              </div>


              <div className="pt-8 flex justify-center items-end">
                {name && email && phone ? 
                <button className='px-8 py-2 rounded-md text-white bg-black' type="submit">
                  Submit
                </button>:
                <button className='px-8 py-2 rounded-md disabled text-white bg-black opacity-75' type="submit">
                  Submit
                </button>
                }
              </div>
        </div>
      </div>
        
    </div>
  )
}

export default contactUs