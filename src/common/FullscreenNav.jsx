import React, { useState, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const FullscreenNav = ({ setIsFullscreenNav }) => {
  const [stroke, setStroke] = useState("#ffffff")
  const navRef = useRef(null)
  const mainDivRef = useRef(null)

  useGSAP(() => {
    gsap.from(".stair", {
      y: "-100%",
      duration: 0.5,
      stagger: {
        amount: -0.3
      }
    })
    gsap.to(navRef.current, {
      display: "none",
      delay: 0.3
    })
    gsap.to(mainDivRef.current, {
      backgroundColor: "black",
      delay: 0.4
    })
  })

  return (
    <div ref={mainDivRef} className="h-screen w-full bg-transparent z-50 fixed">

      <div ref={navRef} className="h-full w-full flex">
        <div className="stair h-full w-1/5 bg-black" ></div>
        <div className="stair h-full w-1/5 bg-black" ></div>
        <div className="stair h-full w-1/5 bg-black" ></div>
        <div className="stair h-full w-1/5 bg-black" ></div>
        <div className="stair h-full w-1/5 bg-black" ></div>
      </div>

      <div id="fsnDiv" className="flex flex-row justify-between absolute top-0 w-full">
        <div className="pt-3 pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
            <path fill="white" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
          </svg>
        </div>
        <div onClick={() => setIsFullscreenNav(false)} className="pr-3 hover:cursor-pointer" onMouseEnter={() => setStroke("#D3FD50")} onMouseLeave={() => setStroke("#ffffff")} >
          <svg width="150px" height="150px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.1"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M3 21.32L21 3.32001" stroke={stroke} stroke-width="0.5" stroke-linecap="round" ></path>
              <path d="M3 3.32001L21 21.32" stroke={stroke} stroke-width="0.5" stroke-linecap="round" ></path>
            </g>
          </svg>
        </div>
      </div>

      <div id="navList" className="w-full text-white pt-24">
        <div>
          <div className="relative link border-y-[0.2px] border-gray-500">
            <div className="text-center text-[7vw] font-[font1] uppercase leading-[6vw] pt-2">Project</div>
            <div className="moveLink movingDiv flex items-center flex-row bg-[#D3FD50] absolute top-0 pt-2 hover:cursor-pointer">
              <img className="w-48 h-16 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
              <div className="text-[7vw] font-[font1] uppercase leading-[6vw] whitespace-nowrap text-black">TO SEE EVERYTHING</div>
              <img className="w-48 h-16 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" />
              <div className="text-[7vw] font-[font1] uppercase leading-[6vw] whitespace-nowrap text-black">TO SEE EVERYTHING</div>
              <img className="w-48 h-16 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
              <div className="text-[7vw] font-[font1] uppercase leading-[6vw] whitespace-nowrap text-black">TO SEE EVERYTHING</div>
              <img className="w-48 h-16 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" />
              <div className="text-[7vw] font-[font1] uppercase leading-[6vw] whitespace-nowrap text-black">TO SEE EVERYTHING</div>
            </div>
          </div>
          <div className="relative link border-y-[0.2px] border-gray-500">
            <div className="text-center text-[7vw] font-[font1] uppercase leading-[6vw] pt-2">Agencies</div>
            <div className="moveLink movingDiv flex items-center flex-row bg-[#D3FD50] absolute top-0 pt-2 hover:cursor-pointer">
              <img className="w-48 h-16 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
              <div className="text-[7vw] font-[font1] uppercase leading-[6vw] whitespace-nowrap text-black">TO SEE EVERYTHING</div>
              <img className="w-48 h-16 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" />
              <div className="text-[7vw] font-[font1] uppercase leading-[6vw] whitespace-nowrap text-black">TO SEE EVERYTHING</div>
              <img className="w-48 h-16 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
              <div className="text-[7vw] font-[font1] uppercase leading-[6vw] whitespace-nowrap text-black">TO SEE EVERYTHING</div>
              <img className="w-48 h-16 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" />
              <div className="text-[7vw] font-[font1] uppercase leading-[6vw] whitespace-nowrap text-black">TO SEE EVERYTHING</div>
            </div>
          </div>
          <div className="relative link border-y-[0.2px] border-gray-500">
            <div className="text-center text-[7vw] font-[font1] uppercase leading-[6vw] pt-2">Contact</div>
            <div className="moveLink movingDiv flex items-center flex-row bg-[#D3FD50] absolute top-0 pt-2 hover:cursor-pointer">
              <img className="w-48 h-16 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
              <div className="text-[7vw] font-[font1] uppercase leading-[6vw] whitespace-nowrap text-black">TO SEE EVERYTHING</div>
              <img className="w-48 h-16 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" />
              <div className="text-[7vw] font-[font1] uppercase leading-[6vw] whitespace-nowrap text-black">TO SEE EVERYTHING</div>
              <img className="w-48 h-16 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
              <div className="text-[7vw] font-[font1] uppercase leading-[6vw] whitespace-nowrap text-black">TO SEE EVERYTHING</div>
              <img className="w-48 h-16 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" />
              <div className="text-[7vw] font-[font1] uppercase leading-[6vw] whitespace-nowrap text-black">TO SEE EVERYTHING</div>
            </div>
          </div>
          <div className="relative link border-y-[0.2px] border-gray-500">
            <div className="text-center text-[7vw] font-[font1] uppercase leading-[6vw] pt-2">Blog</div>
            <div className="moveLink movingDiv flex items-center flex-row bg-[#D3FD50] absolute top-0 pt-2 hover:cursor-pointer">
              <img className="w-48 h-16 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
              <div className="text-[7vw] font-[font1] uppercase leading-[6vw] whitespace-nowrap text-black">TO SEE EVERYTHING</div>
              <img className="w-48 h-16 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" />
              <div className="text-[7vw] font-[font1] uppercase leading-[6vw] whitespace-nowrap text-black">TO SEE EVERYTHING</div>
              <img className="w-48 h-16 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
              <div className="text-[7vw] font-[font1] uppercase leading-[6vw] whitespace-nowrap text-black">TO SEE EVERYTHING</div>
              <img className="w-48 h-16 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" />
              <div className="text-[7vw] font-[font1] uppercase leading-[6vw] whitespace-nowrap text-black">TO SEE EVERYTHING</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullscreenNav
