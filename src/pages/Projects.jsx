import ProjectCard from '../components/Projects/ProjectCard'

const Projects = () => {
  return (
    <div>
      <div className='pt-[50vh] text-[15vw] font-[font1] uppercase leading-[6vw] mb-10' >Projects</div>
      <div>
        <div className='flex flex-row w-full h-[70vh] p-2 gap-2'>
          <ProjectCard />

        </div>
      </div>
    </div>
  )
}

export default Projects