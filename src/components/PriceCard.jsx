import React from 'react'

function PriceCard({ openFormModel, label, price, size }) {
    return (
        <div className=' bg-white w-fit flex flex-col items-center py-16 px-12 rounded-xl shadow-lg'>
            <h3 className=' border border-black  py-1 lg:py-2 md:px-16 px-10 rounded-full'>{label}</h3>
            <h3 className=' mt-4 text-xl font-medium'>₹ {price}</h3>
            <div className=' flex mt-4 gap-6 border-b px-6 pb-1 border-black'>
                <p>Size</p>
                <p>{size}</p>
            </div>
            <button onClick={openFormModel} className=' bg-red-500 mt-6 text-white py-2 px-6 rounded-full'>Enquiry Now</button>
        </div>
    )
}

export default PriceCard