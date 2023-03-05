import React from 'react'
import Street3 from '../assets/images/street3.png'
import SingMit from '../assets/images/singMit.jpg'
import Jobsy from '../assets/images/Jobsy.png'
import { useNavigate } from 'react-router-dom'
import Bitte from '../assets/images/Bitte2.jpg'

// framer-motion
import Layout from '../components/Layout'

function Projects() {
  const navigate = useNavigate()
  return (
    <Layout>
      <div className='bgBlack w-full flex flex-col md:flex-row justify-center items-center'>

      {/* COL 1 */}
        <div className='w-[40%] md:w-[55.4%] xl:w-[21.28%] flex flex-col justify-center items-center'>
          <div 
            aria-label='1 fotos'
            className='saturate-0 hover:saturate-100 transition-all 
            ease-in-out duration-1000'
            onClick={() => navigate('fotos')}>
            <img className='lg:w-[500px] object-cover xl:h-[400px] 2xl:h-[534px]' src={Street3} alt='' />
          </div>

          <div 
            aria-label='5 Bitte'
            className='saturate-0 hover:saturate-100 transition-all 
            ease-in-out duration-1000'>
            <img
              className='w-[500px]'
              onClick={() => navigate('bitte')}
              src={Bitte} alt='Bitte poster' />
          </div>
        </div>

        {/* COL 2 */}
        <div className='w-[40%] lg:w-[35.3%] xl:w-[21.28%] flex flex-col justify-center items-center'>
        <div 
            aria-label='4 Jobsy'
            className='bg-black saturate-0 hover:saturate-100 transition-all 
            ease-in-out duration-1000 flex justify-center items-center'>
            <img
              className='w-[410px]'
              onClick={() => navigate('jobsy')}
              src={Jobsy} alt='Jobsy website'/>
          </div>

          <div 
            aria-label='2 Chor'
            className='saturate-0 hover:saturate-100 transition-all 
            ease-in-out duration-1000'>
            <img
              className='w-[410px]'
              onClick={() => navigate('chor')}
              src={SingMit} alt='' />
            <p></p>
          </div>
        </div>

{/* ----------------------------------------------------------------------------------------- */}
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