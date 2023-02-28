import React from 'react'
import Street3 from '../assets/images/street3.png'
import Chor from '../assets/images/Cantares-Chor.png'
import Alt from '../assets/images/altt.jpg'
import Jobsy from '../assets/images/Jobsy.png'
import { useNavigate } from 'react-router-dom'
// framer-motion
import { motion } from 'framer-motion'

function Projects() {
  const navigate = useNavigate()
  return (
    <motion.div
    // initial={{ width: '100%' }}
    animate={{ width: '100%' }}
    exit={{ x: window.innerWidth }}>
      <div className='grid grid-flow-col auto-cols-max gap-5 mx-5 lg:mx-12'>
        <div 
          aria-label='1 fotos'
          className='row-span-1 col-span-1 saturate-0 hover:saturate-100 transition-all 
          ease-in-out duration-1000'>
          <img className='w-[500px] object-cover h-[610px] ' src={Street3} alt='' />
          <p></p>
        </div>

        <div 
          aria-label='2 Chor'
          className='row-span-1 col-span-1 w-[250px] hover:saturate-100 transition-all 
          ease-in-out duration-1000'>
          <img src={Chor} alt='' />
          <p></p>
        </div>

        <div 
          aria-label='3 fotos'
          className='row-span-3 col-span-3 w-[700px]  hover:saturate-100 transition-all 
          ease-in-out duration-1000'>
          <img src={Alt} alt='' />
          <p></p>
        </div>

        <div 
          aria-label='4 Jobsy'
          className='row-span-1 col-span-1 hover:brightness-50 transition-all 
          ease-in-out duration-1000'>
          <img
            onClick={() => navigate('jobsy')}
            src={Jobsy} alt='Jobsy website' />
          <p></p>
        </div>

        <div 
          aria-label='5'
          className=''>
          <img src='' alt='' />
          <p></p>
        </div>

        <div 
          aria-label='6'
          className=''>
          <img src='' alt='' />
          <p></p>
        </div>

        <div 
          aria-label='7'
          className=''>
          <img src='' alt='' />
          <p></p>
        </div>

        <div 
          aria-label='8'
          className=''>
          <img src='' alt='' />
          <p></p>
        </div>

        <div 
          aria-label='9'
          className=''>
          <img src='' alt='' />
          <p></p>
        </div>

        <div 
          aria-label='10'
          className=''>
          <img src='' alt='' />
          <p></p>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects