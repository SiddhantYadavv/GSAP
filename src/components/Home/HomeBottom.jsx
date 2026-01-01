import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <>
      <div className='flex flex-row justify-between py-10 px-7'>
        <div></div>
        <div className='w-1/5 font-[font2] text-white text-[1.2vw]'> &emsp;&emsp;&emsp;K72 is an agency that carefully considers every action to nurture the brand. Tomorrow, in 5 months, and in 5 years. We seek out the friction that creates the spark to generate emotion. To ensure an honest relationship, we are unfiltered; we say what needs to be said, we do what needs to be done.</div>
      </div>
      <div className='flex flex-row gap-4'>
        <Link
          to={"/projects"}
          className='font-[font2] font-extrabold text-white text-[5.5vw]
       border-2 border-white rounded-full px-6 pt-5 leading-[4vw]
        flex justify-center hover:border-[#D3FD50] hover:text-[#D3FD50]'>
          PROJECTS
        </Link>
        <Link
          to={"/agencies"}
          className='font-[font2] font-extrabold text-white text-[5.5vw] 
      border-2 border-white rounded-full px-6 pt-5 leading-[4vw] 
      flex justify-center hover:border-[#D3FD50] hover:text-[#D3FD50]'>
          AGENCY
        </Link>
      </div>
    </>
  )
}

export default HomeBottom