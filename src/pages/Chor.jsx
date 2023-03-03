import React from 'react'
import ChorElemente from '../assets/images/Coro-Chor_elemente.jpg'
import ChorPoster from '../assets/images/Cantares-Chor.png'
import ChorL from '../assets/images/logoChor.png'
// framer-motion
import Layout from '../components/Layout'
import Back from '../components/Back'

function Chor() {
  
  return (
    <Layout>
      <div className='flex flex-col lg:flex-row justify-start lg:justify-center items-center h-[800px] gap-5 lg:gap-[5rem] lg:mx-[30px]'>
        
        {/* LEFTE SEITE */}
        <section className='flex flex-col xl:h-[500px] justify-center items-center lg:items-end'>
          <div
            aria-label='Chor'
            className='flex flex-col justify-center items-center gap-1 mb-3 lg:mb-[1rem] '>
            <img className='w-[50%] lg:w-[200px]' src={ChorL} alt="Cantares Chor"/>
          </div>

          <p className='text-beige leading-[1.2rem] w-[80%] text-[0.80ms] text-center lg:w-[200px] text-opacity-90'>is a modern, user-friendly that connects job seekers with potential employers. The website is built with the latest technologies, including MERN Stack and is designed to be accessible to all. Whether you're looking for a new job or looking to hire, Jobsy makes the process simple and straightforward.</p>
        </section>

        {/* RECHTE SEITE */}
        <div className='w-[90%] lg:w-[60%] flex flex-col justify-center items-center'>
        <section className='flex flex-col lg:flex-row justify-center items-start gap-5 mb-5'>
          <img className='w-[600px]' src={ChorPoster} alt=''/>
          <img className='h-[478.8px] xl:h-[600px] hidden lg:flex' src={ChorElemente} alt='Chor Elemente'/>
        </section>
          <Back/>
        </div>
      </div>
    </Layout>
  )
}

export default Chor