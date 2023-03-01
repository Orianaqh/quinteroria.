import React from 'react'
import Jobsyl from '../assets/images/Jobsy.png'
import JobsyHome from '../assets/images/jobsyhome.png'
// framer-motion
import Layout from '../components/Layout'

function Jobsy() {
  const JobsyClick = () => {
    window.open('https://jobsy-jobportal.netlify.app/', "_blank")
  }
  return (
    <Layout>
      <div className='flex flex-col-reverse lg:flex-row justify-center items-center h-[800px] lg:gap-[5rem]'>

        {/* LEFTE SEITE */}
        <section className='w-[full] lg:w-[40%] lg:h-[500px] flex flex-col justify-center items-center lg:items-end'>
          <div
            aria-label='Jobsy Logo'
            className='flex justify-center items-center gap-1 mb-3 lg:mb-[1rem] '>
            <img className='w-[20px] lg:w-[50px]' src={Jobsyl} alt="Jobsy logo"/>
            <h2 className='text-jobsy text-white font-black tracking-wide text-xl lg:text-5xl'>Jobsy.</h2>
          </div>

          <p className='text-beige leading-[1.2rem] w-[80%] text-[0.80ms] text-center lg:w-[200px] text-opacity-90'>is a modern, user-friendly <span onClick={JobsyClick} className='font-bold underline cursor-pointer  hover:text-green transition-all 
          ease-in-out duration-900'>job portal</span> that connects job seekers with potential employers. The website is built with the latest technologies, including MERN Stack and is designed to be accessible to all. Whether you're looking for a new job or looking to hire, Jobsy makes the process simple and straightforward.</p>
        </section>

        {/* RECHTE SEITE */}
        <section className='w-[full] lg:w-[60%] flex flex-col justify-center items-start'>
          <img className='w-[770px]' src={JobsyHome} alt='' />
        </section>
        {/* npm i framer-motion --legacy-peer-deps */}
      </div>
      </Layout>
  )
}

export default Jobsy