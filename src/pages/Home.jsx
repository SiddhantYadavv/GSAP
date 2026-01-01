import React from 'react'
import Video from '../components/Home/Video'
import HomeHero from '../components/Home/HomeHero'
import HomeBottom from '../components/Home/HomeBottom'

const Home = () => {
    return (
        <div>
            <div className='h-screen w-screen fixed'>
                <Video />
            </div>
            <div className='h-screen w-screen relative flex items-center justify-between flex-col'>
                <HomeHero />
                <HomeBottom/>
            </div>
        </div>
    )
}

export default Home