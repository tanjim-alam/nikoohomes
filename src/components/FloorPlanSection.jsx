import React from 'react'
import FloorPlanCard from './FloorPlanCard';
import bhk2 from "../assets/2bhk.webp"
import bhk2t from "../assets/2bhk-t.webp"
import bhk3 from "../assets/3bhk.webp"
import bhk3t from "../assets/3bhk-t.webp"

function FloorPlanSection({ handleOpenModel }) {
    const floorplanData = [
        {
            id: 2,
            floorType: "2 BHK",
            image: bhk2t
        },
        {
            id: 3,
            floorType: "3.5 BHK",
            image: bhk3
        },
        {
            id: 4,
            floorType: "3 BHK Loft",
            image: bhk3t
        },
        {
            id: 5,
            floorType: "4 BHK",
            image: bhk3t
        },
    ]
    return (
        <div className=' w-full bg-slate-100 py-10 px-4'>
            <div className=' lg:w-[80%] w-[100%] m-auto'>
                <div>
                    <p className='text-red-500 font-medium text-center'>FLOOR PLANS</p>
                    <h2 className=' text-center text-3xl font-medium mt-2'>Your Vision, Our Floor Plans</h2>
                </div>
                <div className=' mt-10 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:ml-4 flex flex-col justify-center items-center gap-5'>
                    {floorplanData.map((data, i) => (
                        <FloorPlanCard openFormModel={handleOpenModel} key={i} floorType={data.floorType} floorImage={data.image} />
                    ))}
                </div>
                {/* <FloorPlanCard /> */}
            </div>
        </div>
    )
}

export default FloorPlanSection