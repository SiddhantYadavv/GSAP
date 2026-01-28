import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/Projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const projectData = [
  {
    image1: "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b",
    image2: "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e"
  },
  {
    image1: "https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022",
    image2: "https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93"
  },
  {
    image1: "https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479",
    image2: "https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c"
  }
]

const Projects = () => {

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function () {
    gsap.from('.projectCards', {
      height: "100px",
      stagger: {
        amount: 0.5
      },
      scrollTrigger: {
        trigger: '.cardsContainer',
        start: "top 60%",
        end: "top -150%",
        scrub: true,
        // markers: true
      }
    })
  }, [])

  return (
    <div>
      <div className='pt-[50vh] text-[15vw] font-[font1] uppercase leading-[6vw] mb-10' >Projects</div>
      <div>
        <div className=' cardsContainer'>
          {projectData.map((item, index) => {
            return <div key={index} className='projectCards flex gap-2 px-2 mb-4 w-full h-[80vh]'>
              <ProjectCard image1={item.image1} image2={item.image2} />
            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default Projects