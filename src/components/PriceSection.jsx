import React from 'react'
import PriceCard from './PriceCard'

function PriceSection({ handleOpenModel }) {

    const priceCardArray = new Array(5).fill(null);
    const priceCardData = [
        {
            id: 1,
            label: "1 BHK Apartment",
            price: "65 Lacs*",
            size: "698-731 Sq.ft."
        },
        {
            id: 2,
            label: "2 BHK Apartment",
            price: "1 Cr*",
            size: "1140-1198 Sq.ft."
        },
        {
            id: 3,
            label: "2 BHK + Study Apartment",
            price: "1.22 Cr*",
            size: "1294-1318 Sq.ft."
        },
        {
            id: 4,
            label: "3 BHK Apartment",
            price: "1.48 Cr*",
            size: "1582-1705 Sq.ft."
        },
        {
            id: 5,
            label: "3.5 BHK Apartment",
            price: "1.72 Cr*",
            size: "1807-1848 Sq.ft."
        },
        {
            id: 6,
            label: "3 BHK Loft Apartment",
            price: "2.14 Cr*",
            size: "2141-2182 Sq.ft."
        },
        {
            id: 7,
            label: "4 BHK Apartment",
            price: "2.50 Cr*",
            size: "2464-2502 Sq.ft."
        },

    ]
    return (
        <div className=' w-full bg-slate-100 py-10 px-4 lg:px-0'>
            <div className=' lg:w-[80%] w-[100%] m-auto pt-11'>
                <div>
                    <p className='text-red-500 font-medium text-center'>PRICE SECTION</p>
                    <h2 className=' text-center text-3xl font-medium mt-2'>Unlock the Door to Affordable Luxury</h2>
                </div>
                <div className=' lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:ml-5 flex flex-col mt-10 gap-y-6 justify-center items-center m-auto'>
                    {priceCardData.map((item, i) => (
                        <PriceCard label={item.label} price={item.price} size={item.size} openFormModel={handleOpenModel} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PriceSection