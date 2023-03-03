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
    <footer className='w-full mx-auto
    absolute
    flex justify-center flex-row items-center
    bottom-3 gap-[20px] font-body'>

    {/* COPYRIGHT IMG */}
      <img className='w-[5rem]' src={CopyR}/>

    {/* LOGOS SOCIAL MEDIA */}
    <div className='flex gap-2 cursor-pointer hover:bg-orange transition-all duration-1000 rounded-lg p-1'>
      <img onClick={toBehance} className='h-[1rem]' src={Logo1} alt='behance logo'/>
      <img onClick={toGithub} className='w-[1rem] cursor-pointer' src={Logo2} alt='github logo'/> 
    </div>

    {/* DATUM ORT */}
      <p className='text-beige text-opacity-80 text-[0.90rem]'>202<span className='font-bold'>3</span> Leipzig.</p>
    </footer>
  )
}

export default Footer