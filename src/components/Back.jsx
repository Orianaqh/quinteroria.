import React from 'react'
import { useNavigate } from 'react-router-dom'
import TypeIt from "typeit-react";



function Back() {
  const navigation = useNavigate()

  return (
    <div className='w-full relative flex justify-end items-center '>
      {/* TEXT ANIMATION */}
      <h3
      onClick={() => navigation('/projects')}
      className="font-semibold text-xs
      xl:text-[15px] font-body text-orange cursor-pointer transition-all 
      ease-in-out duration-[1500ms]">
        
      <TypeIt>
      &lt;Projekte/&gt;
      </TypeIt>
        </h3>
    </div>
  )
}

export default Back