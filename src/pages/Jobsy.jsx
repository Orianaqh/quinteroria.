import React from 'react'
import Jobsyl from '../assets/images/Jobsy.png'
// import JobsyHome from '../assets/images/jobsyhome.png'
import Back from '../components/Back'
import ReactPlayer from 'react-player'
// framer-motion
import Layout from '../components/Layout'
//video
import video from '../assets/videos/jobsy_video.mp4'

function Jobsy() {
  const JobsyClick = () => {
    window.open('https://jobsy-jobportal.netlify.app/', "_blank")

  }
  return (
    <Layout>
        <div className='bgBlack flex flex-col lg:flex-row justify-start lg:justify-center items-center pb-5 h-[550px] md:h-[800px] gap-5 lg:gap-[5rem] pt-5'>
          
          {/* LEFTE SEITE */}
          <section className='flex flex-col xl:h-[500px] justify-center items-center lg:items-end'>
            <div
              aria-label='Jobsy Logo'
              className='flex justify-center items-center gap-1 mb-3 lg:mb-[1rem] '>
              <img className='w-[30px] lg:w-[50px]' src={Jobsyl} alt="Jobsy logo"/>
              <h2 className='text-jobsy text-white font-black tracking-wide text-2xl lg:text-5xl'>Jobsy.</h2>
            </div>

            <p className='text-beige leading-[1.2rem] w-[80%] text-[0.80ms] text-center lg:w-[200px] text-opacity-90'>
              Ein
              <span onClick={JobsyClick} className='font-bold underline cursor-pointer text-green hover:text-rosa transition-all 
              ease-in-out duration-900'> Jobportal </span>
              auf dem Arbeitnehmer:innen und Arbeitgeber:innen sich finden können. Das war die Idee für das Abschlussprojekt von meiner Web Development Weiterbildung.Schau gerne mal rein, entweder in das kurze Vorschauvideo oder direkt in die Seite über den Link oben.</p>
          </section>

          {/* RECHTE SEITE */}
          <section className='w-[90%] lg:w-[50%] flex flex-col justify-center items-start mb-2 md:mb-5'>
            {/* <img className='' src={JobsyHome} alt=''/> */}
            <ReactPlayer url={video} width='100%' height='100%' controls loop/>
            <Back/>
          </section>
        </div>
      </Layout>
  )
}

export default Jobsy