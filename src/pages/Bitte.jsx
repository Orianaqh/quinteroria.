import React from 'react'
import Bitte1 from '../assets/images/Bitte.jpg'
import Bitte2 from '../assets/images/Bitte1.jpg'
import Bitte3 from '../assets/images/Bitte2.jpg'
import Bitte4 from '../assets/images/Bitte3.jpg'

// framer-motion
import Layout from '../components/Layout'

function Bitte() {
  return (
    <Layout>
    <div className='flex flex-col-reverse lg:flex-row justify-center items-center h-[800px] lg:gap-[5rem]'>

      {/* LEFTE SEITE */}
      <section className='w-[full] lg:w-[40%] lg:h-[500px] flex flex-col justify-center items-center lg:items-end'>
        <div
          aria-label='Jobsy Logo'
          className='flex flex-col justify-center items-center gap-1 mb-3 lg:mb-[1rem] '>
          <img className='w-[20px] lg:w-[200px]' src='{ChorL}' alt="Jobsy logo"/>
        </div>

        <p className='text-beige leading-[1.2rem] w-[80%] text-[0.80ms] text-center lg:w-[200px] text-opacity-90'>is a modern, user-friendly that connects job seekers with potential employers. The website is built with the latest technologies, including MERN Stack and is designed to be accessible to all. Whether you're looking for a new job or looking to hire, Jobsy makes the process simple and straightforward.</p>
      </section>

      {/* RECHTE SEITE */}
      <section className='w-[full] lg:w-[60%] flex flex-row justify-start items-start gap-2'>
        <div className='flex flex-col justify-center items-starts'>
          <img className='w-[208px]' src={Bitte2} alt='Chor Elemente'/>
          <img className='w-[208px]' src={Bitte3} alt=''/>
          <img className='w-[208px]' src={Bitte4} alt='Chor Elemente'/>
        </div>
        <img className='w-[625px]' src={Bitte1} alt=''/>
      </section>
    </div>
    </Layout>
  )
}

export default Bitte