import React from 'react'
import Video from './Video'

const HomeHero = () => {
  return (
    <div className='flex flex-col pt-3 text-white text-[9.5vw] leading-[8vw] font-[font2] items-center '>
      <div>THE SPARK</div>
      <div className='flex items-center'>WHO <div className='w-[15vw] h-[7vw] rounded-full overflow-hidden'><Video/></div></div>
      <div>GENERATES</div>
      <div>THEIR</div>
      <div>CREATIVITY</div>


    </div>
  )
}

export default HomeHero