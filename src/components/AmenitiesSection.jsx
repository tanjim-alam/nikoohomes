import React from 'react'
import cctv from "../assets/cctv.svg";
import chess from "../assets/chess.svg";
import discoball from "../assets/disco-ball.svg";
import gym from "../assets/gym.svg";
import dance from "../assets/dance.svg";
import jog from "../assets/jog.svg";
import kids from "../assets/kids.svg";
import mine from "../assets/mine.svg";
import cricket from "../assets/cricket.svg";
import yoga from "../assets/yoga.svg";
import supermarket from "../assets/supermarket.svg";
import aerobicsroom from "../assets/aerobicsroom.png";
import creche from "../assets/creche.svg";
import healthclub from "../assets/health-club.svg";

function AmenitiesSection() {
    const amenitiesData = [
        {
            name: "Aerobics Room",
            image: aerobicsroom
        },
        {
            name: "CCTV",
            image: cctv
        },
        {
            name: "Chess",
            image: chess
        },
        {
            name: "Disco Ball",
            image: discoball
        },
        {
            name: "GYM",
            image: gym
        },
        {
            name: "Dance",
            image: dance
        },
        {
            name: "Jog",
            image: jog
        },
        {
            name: "Football Field",
            image: kids
        },
        {
            name: "Aerobics Room",
            image: mine
        },

        {
            name: "Yoga",
            image: yoga
        },

        {
            name: "Cricket Net",
            image: cricket
        },
        {
            name: "Grocery Store",
            image: supermarket
        },
        {
            name: "Creche",
            image: creche
        },
        {
            name: "Health Club",
            image: healthclub
        },
    ]
    return (
        <div className=' w-full bg-white'>
            <div className=' w-[80%] m-auto py-10'>
                <div>
                    <p className='text-red-500 font-medium text-center'>OUR AMENITIES</p>
                    <h2 className=' text-center text-3xl font-medium mt-2'>Amenities that Define Excellence</h2>
                </div>
                <div className=' mt-6'>
                    <div className='grid-cols-2 sm:grid-cols-3 px-2 py-8 grid md:grid-cols-4 lg:grid-cols-7 lg:p-5 gap-3'>
                        {amenitiesData.map((data, i) => (
                            <div key={i} className=' w-[150px] h-[150px] shadow-md p-2 hover:border-2 border-black hover:transition-all  hover:duration-300'>
                                <div className='w-full h-[85%] p-4'>
                                    <img className=' w-full h-[100%]' src={data.image} alt="" />
                                </div>
                                <p className=' text-center'>{data.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmenitiesSection