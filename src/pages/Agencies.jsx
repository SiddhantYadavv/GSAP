import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agencies = () => {

  const imagesArray = [
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
  ]

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: "top 10%",
        end: "top -220%",
        pin: true,
        onUpdate: (element) => {

          let index = Math.round(element.progress * imagesArray.length)
          if (index < 0 || index > imagesArray.length - 1) {
            return
          }
          imageRef.current.src = imagesArray[index]
        }
      }

    })
  })

  return (
    <div>
      <div className='section1'>
        <div ref={imageDivRef} className='h-[20vw] w-[15vw] absolute top-[10vh] left-[32vw] rounded-2xl overflow-hidden -z-10' >
          <img
            ref={imageRef}
            src='https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7'
          />
        </div>
        <div className='font-[font2] relative'>
          <div className='mt-[50vh]'>
            <h1 className=' text-center font-bold font-[font2] text-[18vw] leading-[15vw] uppercase'>Sixty- <br />seventh<br />
              Twelve</h1>
            <div className='flex justify-end px-3'>
              <div className='w-[60%] text-[4vw] font-bold leading-[4vw] text-left'>
                &emsp;&emsp;&emsp;Our curiosity fuels our creativity. We remain humble and say no to big egos, even yours. A brand is alive. It has values, a personality, a history. If we forget that, we might achieve good short-term results, but we'll kill it in the long run. That's why we're committed to providing perspective, to building influential brands.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  )
}

export default Agencies
