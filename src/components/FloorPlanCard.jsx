import React from 'react'

function FloorPlanCard({ floorType, floorImage, openFormModel }) {
    return (
        <div className=' w-[330px] flex items-center justify-center relative h-[350px] border border-black shadow-sm rounded-xl cursor-pointer'>
            <img className=' blur-sm w-full h-full rounded-xl' src={floorImage} alt="" />
            <h3 onClick={openFormModel} className=' w-fit border font-medium rounded-md border-black bg-white py-2 px-20 m-auto absolute top-1/2 text-center z-50'>{floorType}</h3>
        </div>
    )
}

export default FloorPlanCard