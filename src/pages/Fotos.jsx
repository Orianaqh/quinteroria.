import React from 'react'
import Layout from '../components/Layout'
import Foto1 from '../assets/images/street3.png'
import Foto2 from '../assets/images/street2.png'
import Foto from '../assets/images/street1.png'
import Foto3 from '../assets/images/street4.png'

import Back from '../components/Back'

function Fotos() {
  return (
    <Layout>
    <div className='flex flex-col lg:flex-row justify-start lg:justify-center items-center h-[800px] gap-5 lg:gap-[5rem]'>
      
      {/* LEFTE SEITE */}
      <section className='flex flex-col xl:h-[500px] justify-center items-center lg:items-end'>
        <div
          aria-label='Jobsy Logo'
          className='flex justify-center items-center gap-1 mb-3 lg:mb-[1rem] '>
          <h2 className='text-jobsy text-white font-black tracking-wide text-2xl lg:text-5xl'>Vida</h2>
        </div>

        <p className='text-beige leading-[1.2rem] w-[80%] text-[0.80ms] text-center lg:w-[200px] text-opacity-90'>is a modern, user-friendly that connects job seekers with potential employers. The website is built with the latest technologies, including MERN Stack and is designed to be accessible to all. Whether you're looking for a new job or looking to hire, Jobsy makes the process simple and straightforward.</p>
      </section>

      {/* RECHTE SEITE */}
      <section className='w-[90%] lg:w-[36.5%] flex flex-col justify-center items-start'>
        <div className='flex justify-center items-center'>
          <img className='w-[350px]' src={Foto} alt=''/>
          <img className='w-[350px]' src={Foto2} alt=''/>
        </div>

        <div className='flex justify-center items-center'>
          <img className='w-[350px]' src={Foto1} alt=''/>
          <img className='w-[350px]' src={Foto3} alt=''/>
        </div>
        <Back/>
      </section>
    </div>
  </Layout>
  )
}

export default Fotos