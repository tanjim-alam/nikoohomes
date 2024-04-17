import React from 'react';
import { MdOutlineHomeWork } from "react-icons/md";
import orchodHighlghts from "../assets/orchod-highlghts1.webp"

function HighLightSection() {
    return (
        <div className=' w-full bg-white'>
            <div className=' w-[100%] flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row lg:w-[80%] justify-center items-center m-auto my-10 border-t border-black pt-20'>
                <div className=' lg:w-1/2 w-[100%] p-7 lg:p-0'>
                    <img className=' w-full h-[400px] rounded-md shadow-xl' src={orchodHighlghts} alt="" />
                </div>
                <div className=' lg:w-1/2 w-[90%] md:w-[100%] m-auto lg:pl-20 pl-0'>
                    <p className=' text-red-500 font-medium'>HIGHLIGHTS</p>
                    <h2 className=' text-3xl font-medium mt-2'>Discover the Finest Features and Finishes</h2>
                    <div className='flex  flex-col gap-4 mt-4'>
                        <div className=' flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>The Bhartiya Mall of Bengaluru</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>Bharatiya Centre of Information Technology</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>The Lush Central Park</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>Chaman Bhartiya School: Among the Top 5 Emerging Schools in Bengaluru</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>The Leela Hotel, Residences & Convention Centre</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>A Development Spanning Over 100+ Acres</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>A Community Of 4000+ Happy Families</p>
                        </div>







                    </div>
                </div>
            </div>
        </div>
    )
}

export default HighLightSection