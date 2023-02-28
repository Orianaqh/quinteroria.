import React from 'react'
import Jobsyl from '../assets/images/Jobsy.png'
import JobsyHome from '../assets/images/jobsyhome.png'
// framer-motion
import { motion } from 'framer-motion'

function Jobsy() {
  const JobsyClick = () => {
    window.open('https://jobsy-jobportal.netlify.app/', "_blank")
  }
  return (
    <motion.div
    // initial={{ width: '100%' }}
    animate={{ width: '100%' }}
    exit={{ x: window.innerWidth }}>
      <div className='flex flex-row justify-center items-center mt-[150px] gap-[5rem]'>

        {/* LEFTE SEITE */}
        <section className='w-[40%] h-[500px] flex flex-col justify-center items-end'>
          <div
            aria-label='Jobsy Logo'
            className='flex justify-center items-center gap-1 mb-[3rem] '>
            <img className='w-[50px]' src={Jobsyl} alt="Jobsy logo"/>
            <h2 className='text-jobsy text-white font-black tracking-wide text-5xl'>Jobsy.</h2>
          </div>

          <p className='text-beige w-[200px] text-opacity-90'>is a modern, user-friendly <span onClick={JobsyClick} className='font-bold underline cursor-pointer'>job portal</span> that connects job seekers with potential employers. The website is built with the latest technologies, including MERN Stack and is designed to be accessible to all. Whether you're looking for a new job or looking to hire, Jobsy makes the process simple and straightforward.</p>
        </section>

        {/* RECHTE SEITE */}
        <section className='w-[60%] flex flex-col justify-center items-start'>
          <img className='w-[770px]' src={JobsyHome} alt='' />
        </section>
        {/* npm i framer-motion --legacy-peer-deps */}
      </div>
    </motion.div>
  )
}

export default Jobsy