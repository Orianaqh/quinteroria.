import React from 'react'
import Layout from '../components/Layout'
import Foto1 from '../assets/images/street3.png'
import Foto2 from '../assets/images/street2.png'
import Foto3 from '../assets/images/street4.png'
import Foto4 from '../assets/images/street5.png'


import Back from '../components/Back'

function Fotos() {
  return (
    <Layout>
    <div className='bgBlack flex flex-col lg:flex-row justify-start lg:justify-center items-center pb-5 h-[550px] md:h-[800px] gap-5 lg:gap-[5rem] pt-5'>
      
      {/* LEFTE SEITE */}
      <section className='flex flex-col xl:h-[500px] justify-center items-center'>
         <div
          aria-label='Bitte'
          className='flex flex-col justify-center items-center gap-1 text-beige mb-3 lg:mb-[1rem]'>
          <h2 className='font-black text-4xl'>Vida - Calle</h2>
          <p className='opacity-50 '>Lebendiger denn je</p>
          </div>

        <p className='text-beige leading-[1.2rem] w-[80%] text-[0.80ms] text-center lg:w-[200px] text-opacity-90'>Hobby. Ein Stück des Alltäglichen.weltlich, unvollkommen und perfekt zugleich.</p>
      </section>

      {/* RECHTE SEITE */}
      <section className='w-[90%] lg:w-[36.5%] flex flex-col justify-center items-start gap-5'>
        <div className='flex justify-center items-center'>
          <img className='w-[50%] rounded-tl-3xl' src={Foto1} alt=''/>
          <img className='w-[50%] rounded-tr-3xl' src={Foto2} alt=''/>
        </div>

        <div className='flex justify-center items-center'>
          <img className='w-[50%] hue-rotate-180 hue-opacity-20 rounded-bl-3xl' src={Foto3} alt=''/>
          <img className='w-[50%] hue-rotate-180 hue-opacity-20 rounded-br-3xl' src={Foto4} alt=''/>
        </div>
        <Back/>
      </section>
    </div>
  </Layout>
  )
}

export default Fotos