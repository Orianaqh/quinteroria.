import React from 'react'
import Blumen from '../assets/images/blumen2.png'
import { useNavigate } from 'react-router-dom';
import TypeIt from "typeit-react";
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';

function Content() {
  const navigate = useNavigate()

  return (
    <div className='flex-col flex md:flex justify-start items-center'>
      <div className='flex flex-col justify-start items-center w-[80%] md:mt-10'>
        <img className='relative w-[400px] md:w-[400px] lg:w-[600px] drop-shadow-2xl' src={Blumen}/>

        {/* TEXT ANIMATION */}
        <h3 className="w-[250px] h-[50px] mt-[30px] font-semibold text-xs
          md:mt-[50px] md:w-[300px] xl:w-[530px] md:text-[0.90rem] md:text-opacity-60
          xl:text-xl text-beige font-body">
          <TypeIt>Und jetzt, da du schon Blumen hast:) geht's weiter mit <span className='text-orange font-black'>	&darr;</span></TypeIt>
            
        </h3>
                  
        {/* EINIGE PROJEKTE */}
        <div
          onClick={() => navigate('/projects')}
          aria-label='Projekte'
          className='w-[200px] h-[40px] lg:w-[280px] lg:h-[50px] lg:mt-[30px] text-xs lg:text-lg flex justify-center items-start gap-2 bg-black bg-opacity-50 shadow-inner2 cursor-pointer
          p-3 transition-all ease-in-out duration-[2000ms] hover:bg-beige hover:bg-opacity-50 hover:text-beige font-body hover:rounded-xl'>
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