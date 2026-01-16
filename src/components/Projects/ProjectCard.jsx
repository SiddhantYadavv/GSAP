import React from 'react'

const ProjectCard = ({ image1, image2 }) => {
    return (
        <div className='flex flex-row w-full h-[70vh] p-2 gap-2'>
            <div className='relative group w-1/2 hover:rounded-4xl transition-all duration-500 overflow-hidden hover:cursor-pointer' >
                <img className='w-full h-full object-cover ' src={image1} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15' >
                    <div className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full' >
                        View Project
                    </div>
                </div>
            </div>
            <div className='relative group w-1/2 hover:rounded-4xl transition-all duration-500 overflow-hidden hover:cursor-pointer' >
                <img className='w-full h-full object-cover ' src={image2} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15' >
                    <div className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full' >
                        View Project
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard