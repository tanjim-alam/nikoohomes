import React from 'react';
import image1 from "../assets/gallery1.jpg";
import image2 from "../assets/gallery2.jpg";
import image3 from "../assets/gallery3.jpg";
import image4 from "../assets/gallery4.jpg";
import image5 from "../assets/gallery5.jpg";

function GallerySection() {
    const imageData = [
        {
            id: 1,
            img: image1
        },
        {
            id: 2,
            img: image2
        },
        {
            id: 3,
            img: image3
        },
        {
            id: 4,
            img: image4
        },
        {
            id: 5,
            img: image5
        },
        {
            id: 6,
            img: image4
        },
        {
            id: 7,
            img: image2
        },
        {
            id: 8,
            img: image1
        },
        {
            id: 9,
            img: image4
        },
        {
            id: 10,
            img: image3
        },
        ,
        {
            id: 11,
            img: image2
        },
        {
            id: 12,
            img: image4
        },
        {
            id: 13,
            img: image3
        }
    ]
    return (
        <div className=' w-full bg-slate-100 py-10'>
            <div className=' lg:w-[80%] w-[90%] m-auto'>
                <div>
                    <p className='text-red-500 font-medium text-center'>LUXURY EXPERIENCE</p>
                    <h2 className=' text-center text-3xl font-medium mt-2'>Gallery</h2>
                </div>
                <div>
                    <div className=' mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-1 lg:p-5'>
                        {imageData.map((data, i) => (
                            <img className=' w-[220px] h-[150px] rounded-sm transition-all duration-2000 ease-in-out hover:w-[250px] hover:h-[170px]' key={i} src={data.img} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GallerySection