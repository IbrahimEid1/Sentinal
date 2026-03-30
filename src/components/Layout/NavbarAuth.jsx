import React from 'react'
import { useNavigate } from 'react-router'

const NavbarAuth = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full h-10  flex justify-between items-center mt-5'> 
    <h1 className='font-medium text-2xl'> Sentinal</h1>
    <button className='text-[#0056D2] underline font-medium cursor-pointer' onClick={()=>{
      navigate("/")
    }}> Back To website </button>
    </div>
  )
}

export default NavbarAuth