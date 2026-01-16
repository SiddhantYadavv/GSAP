import React from 'react'

const ProjectCard = () => {
    return (
        <>
            <div className='relative group w-1/2 hover:rounded-4xl transition-all duration-500 overflow-hidden hover:cursor-pointer' >
                <img className='w-full h-full object-cover ' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15' >
                    <div className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full' >
                        View Project
                    </div>
                </div>
            </div>
            <div className='relative group w-1/2 hover:rounded-4xl transition-all duration-500 overflow-hidden hover:cursor-pointer' >
                <img className='w-full h-full object-cover ' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15' >
                    <div className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full' >
                        View Project
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard