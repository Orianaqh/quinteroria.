import React from 'react'
import CopyR from '../assets/images/copyright.svg'
import Logo1 from '../assets/images/logoSM1.svg'
import Logo2 from '../assets/images/logoSM2.svg'

function Footer() {
  const toBehance = () => {
    window.open('https://www.behance.net/orianaqh', "_blank")
  };

  const toGithub = () => {
    window.open('https://github.com/Orianaqh', "_blank")
  };
  return (
    <div className='absolute
    bottom-3 w-full flex justify-center items-start gap-[20px] font-body'>

    {/* COPYRIGHT IMG */}
      <img className='w-[5rem] pb-3' src={CopyR}/>

    {/* LOGOS SOCIAL MEDIA */}
    <div className='flex gap-2'>
      <img onClick={toBehance} className='h-[1rem] cursor-pointer' src={Logo1} alt='behance logo'/>
      <img onClick={toGithub} className='w-[1rem] cursor-pointer' src={Logo2} alt='github logo'/> 
    </div>

    {/* DATUM ORT */}
      <p className='text-beige text-opacity-80 text-[0.90rem]'>202<span className='font-bold'>3</span> Leipzig.</p>
    </div>
  )
}

export default Footer