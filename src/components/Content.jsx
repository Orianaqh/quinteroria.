import React from 'react'
import Blumen from '../assets/images/blumenGerade2.png'
import Typical from "react-typical";
import { useNavigate } from 'react-router-dom';

function Content() {
  const navigate = useNavigate()

  return (
    <div className='flex-col flex md:flex justify-start items-center'>
      <div className='flex flex-col justify-start items-center w-[80%]'>
        <img className='relative w-[400px] md:w-[400px] lg:w-[600px] drop-shadow-2xl' src={Blumen}/>

        {/* TEXT ANIMATION */}
        <h3 class="w-[250px] h-[50px] mt-[30px] font-semibold text-xs
          md:mt-[50px] md:w-[300px] xl:w-[500px] md:text-[0.90rem] md:text-opacity-60
          xl:text-xl text-beige font-body">
          <Typical
            steps={[
              "Und jetzt, da du schon Blumen hast :) geht's weiter",
              70000,
              "",
              10000
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </h3>
                  
        {/* EINIGE PROJEKTE */}
        <div
          onClick={() => navigate('/projects')}
          aria-label='Projekte'
          className='w-[200px] h-[40px] lg:w-[280px] lg:h-[50px] lg:mt-[30px] text-xs lg:text-lg flex justify-center items-start gap-2 bg-black bg-opacity-80 shadow-inner2 cursor-pointer
          p-3 transition-all ease-in-out duration-[2000ms] hover:bg-beige hover:bg-opacity-50 hover:text-beige font-body'>
          <p className=''>einige <span className='text-beige font-thin underline
          md:font-bold hover:text-orange transition-all 
          ease-in-out duration-900'>Projekte.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Content