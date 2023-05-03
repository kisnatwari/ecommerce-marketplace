import React from 'react'
import VideoBackground from './VideoBackground'
import Categories from './Categories'
import Vendors from './Vendors'
import Products from './Products'

const Homepage = () => {
    return (
        <div className="relative bg-white flex justify-center items-center w-full">
            <div className='bg-purple-100 w-full' >
                <VideoBackground />
                <Categories />
                <Vendors />
                <Products />
            </div >
        </div>
    )
}

export default Homepage