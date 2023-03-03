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
      <div className='bgBlack flex flex-col lg:flex-row justify-start lg:justify-center items-center pb-5 md:h-[800px] gap-5 lg:gap-[5rem] pt-5'>
        
        {/* LEFTE SEITE */}
        <section className='flex flex-col xl:h-[500px] justify-center items-center lg:items-end'>
          <div
            aria-label='Chor'
            className='flex flex-col justify-center items-center gap-1 mb-3 lg:mb-[1rem] '>
            <img className='w-[50%] lg:w-[200px]' src={ChorL} alt="Cantares Chor"/>
          </div>

          <p className='text-beige leading-[1.2rem] w-[80%] text-[0.80ms] text-center lg:w-[200px] text-opacity-90'>Eines meiner Hobbies ist singen und das mache ich mega gerne. Der Chor "Cantares" ist ein interkultureller (deutsch-spanischer) Chor, der 2022 gegründet wurde. Für mich es ist ein perfekter Ort, um frei zu sein und Stress abzubauen (mit ebenfalls sehr netter Gesellschaft!). Dieser Text ist keine Einladung <strong className='opacity-60'>aber</strong> das Poster wurde mit musikalischen Kurven und freundlichen Farben entworfen, um allen zu sagen.. kommt, und <br></br><i className='font-bold'>Singt mit!</i></p>
        </section>

        {/* RECHTE SEITE */}
        <div className='w-[90%] lg:w-[46.5%] xl:w-[44.5%] flex flex-col justify-center items-center'>
        <section className='flex flex-col lg:flex-row justify-center items-start gap-5 mb-2 md:mb-5'>
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