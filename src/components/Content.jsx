import React from 'react'
import Blumen from '../assets/images/blumen2.png'
import Typical from "react-typical";
import { useNavigate } from 'react-router-dom';

function Content() {
  const navigate = useNavigate()

  return (
    <div className='flex-col flex md:flex justify-start items-center'>
      <div className='flex flex-col justify-start items-center w-[80%]'>
        <img className='relative w-[380px] md:w-[400px] lg:w-[600px] drop-shadow-2xl' src={Blumen}/>

        {/* TEXT ANIMATION */}
        <h3 class="w-[250px] mt-[30px] md:mt-0 lg:mt-[50px] md:w-[400px] h-[50px] font-semibold md:text-xl text-beige">
          <Typical
            steps={[
              "Und jetzt, da du schon Blumen hast :) ",
              7000,
              "",
              3000,
              "geht's weiter mit.. ",
              7000,
              "",
              3000
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </h3>
                  
        {/* EINIGE PROJEKTE */}
        <div
          onClick={() => navigate('/projects')}
          aria-label='Projekte'
          className='flex justify-center items-start gap-2 bg-orange md:bg-black shadow-inner2
          p-3 mt-3 lg:mt-[30px] rounded-full transition-all ease-in-out duration-[2000ms] hover:bg-beige'>
          <p>einige <span className='text-beige font-thin underline md:no-underline
          md:text-blackBlack md:font-bold hover:text-orange hover:underline transition-all 
          ease-in-out duration-900'>Projekte.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Content