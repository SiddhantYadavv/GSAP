
import React, { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'


const Stairs = (props) => {

  const location = useLocation().pathname
  const parentDivRef = useRef(null)
  const childRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useGSAP(() => {

    const tl = gsap.timeline()
    tl.to(parentDivRef.current, {
      display: "flex"
    })
    tl.from(".div1", {
      height: 0,
      duration: 0.5,
      stagger: {
        amount: -0.3
      }
    })
    tl.to(".div1", {
      y: "100%",
      stagger: {
        amount: -0.3
      }
    })
    tl.to(parentDivRef.current, {
      display: "none"
    })
    tl.to(".div1", {
      y: "0%"
    })

    gsap.from(childRef.current, {
      opacity: 0,
      delay: 1.5,
    })

  }, [location])

  return (
    <div>
      <div ref={parentDivRef} className='h-screen w-full flex fixed z-100 top-0'>
        <div className='div1 h-full w-1/6 bg-black'></div>
        <div className='div1 h-full w-1/6 bg-black'></div>
        <div className='div1 h-full w-1/6 bg-black'></div>
        <div className='div1 h-full w-1/6 bg-black'></div>
        <div className='div1 h-full w-1/6 bg-black'></div>
        <div className='div1 h-full w-1/6 bg-black'></div>
      </div>
      <div ref={childRef}>
        {props.children}
      </div>

    </div>
  )
}

export default Stairs
