import React from 'react'
import Jobsyl from '../assets/images/Jobsy.png'
import JobsyHome from '../assets/images/jobsyhome.png'
import Back from '../components/Back'
// framer-motion
import Layout from '../components/Layout'

function Jobsy() {
  const JobsyClick = () => {
    window.open('https://jobsy-jobportal.netlify.app/', "_blank")

  }
  return (
    <Layout>
        <div className='flex flex-col lg:flex-row justify-start lg:justify-center items-center h-[800px] gap-5 lg:gap-[5rem]'>
          
          {/* LEFTE SEITE */}
          <section className='flex flex-col xl:h-[500px] justify-center items-center lg:items-end'>
            <div
              aria-label='Jobsy Logo'
              className='flex justify-center items-center gap-1 mb-3 lg:mb-[1rem] '>
              <img className='w-[30px] lg:w-[50px]' src={Jobsyl} alt="Jobsy logo"/>
              <h2 className='text-jobsy text-white font-black tracking-wide text-2xl lg:text-5xl'>Jobsy.</h2>
            </div>

            <p className='text-beige leading-[1.2rem] w-[80%] text-[0.80ms] text-center lg:w-[200px] text-opacity-90'>is a modern, user-friendly <span onClick={JobsyClick} className='font-bold underline cursor-pointer text-green hover:text-rosa transition-all 
            ease-in-out duration-900'>job portal</span> that connects job seekers with potential employers. The website is built with the latest technologies, including MERN Stack and is designed to be accessible to all. Whether you're looking for a new job or looking to hire, Jobsy makes the process simple and straightforward.</p>
          </section>

          {/* RECHTE SEITE */}
          <section className='w-[90%] lg:w-[50%] flex flex-col justify-center items-start gap-5'>
            {/* <div className='flex flex-col justify-center items-starts'>
              <img className='xl:w-[239px]' src={Bitte2} alt='Chor Elemente'/>
              <img className='xl:w-[239px]' src={Bitte3} alt=''/>
              <img className='xl:w-[239px]' src={Bitte4} alt='Chor Elemente'/>
            </div> */}
            <img className='' src={JobsyHome} alt=''/>
            <Back/>
          </section>
        </div>
      </Layout>
  )
}

export default Jobsy