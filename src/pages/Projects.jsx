import React from 'react'
import Street3 from '../assets/images/street3.png'
import SingMit from '../assets/images/singMit.jpg'
import Alt from '../assets/images/altt.jpg'
import Jobsy from '../assets/images/Jobsy.png'
import { useNavigate } from 'react-router-dom'
import Bitte from '../assets/images/Bitte2.jpg'

// framer-motion
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

function Projects() {
  const navigate = useNavigate()
  return (
    <Layout>
      <div className='grid grid-flow-col auto-cols-max mx-5 lg:mx-12 bgWhite p-5'>
        <div 
          aria-label='1 fotos'
          className='row-span-1 col-span-1 saturate-0 hover:saturate-100 transition-all 
          ease-in-out duration-1000'>
          <img className='lg:w-[500px] object-cover h-[610px] ' src={Street3} alt='' />
          <p></p>
        </div>

        <div 
          aria-label='2 Chor'
          className='row-span-1 col-span-1 w-[250px] saturate-0 hover:saturate-100 transition-all 
          ease-in-out duration-1000'>
          <img
            onClick={() => navigate('chor')}
            src={SingMit} alt='' />
          <p></p>
        </div>

        <div 
          aria-label='5 Bitte'
          className='row-span-3 col-span-3 w-[400px] saturate-0 hover:saturate-100 transition-all 
          ease-in-out duration-1000'>
          <img
            className=''
            onClick={() => navigate('bitte')}
            src={Bitte} alt='Bitte poster' />
        </div>

            <div 
              aria-label='3 fotos'
              className='row-span-3 col-span-4 w-[700px] saturate-0 hover:saturate-100 transition-all 
              ease-in-out duration-1000'>
              <img src={Alt} alt='' />
              <p></p>
            </div>

        <div 
          aria-label='4 Jobsy'
          className='row-span-3 col-span-1 hover:brightness-50 transition-all 
          ease-in-out duration-1000'>
          <img
            onClick={() => navigate('jobsy')}
            src={Jobsy} alt='Jobsy website'/>
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
      </Layout>
  )
}

export default Projects