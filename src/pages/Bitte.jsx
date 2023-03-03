import React from 'react'
import Bitte1 from '../assets/images/Bitte.jpg'
import Bitte2 from '../assets/images/Bitte1.jpg'
import Bitte3 from '../assets/images/Bitte2.jpg'
import Bitte4 from '../assets/images/Bitte3.jpg'
import Bitte5 from '../assets/images/Bitte4.jpg'
import Bitte6 from '../assets/images/Bitte5.jpg'
import Back from '../components/Back'

// framer-motion
import Layout from '../components/Layout'

function Bitte() {
  return (
    <Layout>
    <div className='bgBlack flex flex-col lg:flex-row justify-start lg:justify-center items-center h-[800px] gap-5 lg:gap-[5rem]'>
      
      {/* LEFTE SEITE */}
      <section className='flex flex-col xl:h-[500px] justify-center items-center'>
        <div
          aria-label='Bitte'
          className='flex flex-col justify-center items-center gap-1 text-beige mb-3 lg:mb-[1rem]'>
          <h2 className='font-black text-4xl'>Bitte</h2>
          <p className='opacity-50 '>Der Anfang</p>
          </div>
        <p className='text-beige leading-[1.2rem] w-[80%] text-[0.80ms] text-center lg:w-[200px] text-opacity-90'>Genau! der Anfang..<strong >Bitte</strong> ist ein neues Wortschatzprojekt. Die Deutsche Sprache ist sehr charmant <span className='opacity-7s0'>(obwohl ich vor ein Paar Jahre das Wort/Gefühl 'Hass' in diesem gleichen zusammenhang benutzt/gefühl habe. Der Spruch "Del amor al odio hay un solo paso" (wörtlich übersetzt "Von der Liebe zum Hass ist nur ein Schritt") habe ich viele Male gehört und den Schritt habe ich jetzt gemacht.)</span> und das möchte ich die Welt zeigen. </p>
      </section>

      {/* RECHTE SEITE */}
      <div className='w-[90%] lg:w-[46.5%] xl:w-[45%] flex flex-col justify-center items-center'>
        <section className='flex flex-col lg:flex-row justify-center items-start gap-5 mb-5'>
          <img className='w-[700px]' src={Bitte1} alt=''/>

          <div className='hidden lg:flex flex-col'>
            <img className='w-[140px]' src={Bitte5} alt='Bitte process'/>
            <img className='w-[140px]' src={Bitte2} alt='Bitte process'/>
            <img className='w-[140px]' src={Bitte3} alt='Bitte process'/>
            <img className='w-[140px]' src={Bitte4} alt='Bitte process'/>
            <img className='w-[140px]' src={Bitte6} alt='Bitte process'/>
          </div>
        </section>
          <Back/>
        </div>
    </div>
    </Layout>
  )
}

export default Bitte
