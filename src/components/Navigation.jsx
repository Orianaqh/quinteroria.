import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navigation() {
  const navigation = useNavigate()

  return (
    <div className='w-full bg-opacity-70 flex-col flex justify-center items-center lg:pl-[60px]'>
    {/* MEIN NAME */}
      <p
       onClick={()=> navigation('/')}
        aria-label='quinteroria'
        className='text-beige text-xl md:text-2xl lg:text-4xl py-5 cursor-pointer font-body'> quinter<span className='font-bold'>ori</span>a
        <span className='text-orange-500'>.</span>
      </p>
    </div>
  )
}

export default Navigation