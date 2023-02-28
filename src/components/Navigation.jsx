import React from 'react'

function Navigation() {
  return (
    <div className='w-full bg-black bg-opacity-70 flex-col flex justify-center items-center lg:pl-[60px]'>
    {/* MEIN NAME */}
      <p
        aria-label='quinteroria'
        className='text-beige text-2xl lg:text-4xl py-5'> quinter<span className='font-bold'>ori</span>a
        <span className='text-orange-500'>.</span>
      </p>
    </div>
  )
}

export default Navigation