import React from 'react';
import aboutImg from "../assets/aboutimg.png"

function AboutUs() {
    return (
        <div className=' w-full bg-white pt-36 lg:pt-0 md:pt-0'>
            <div className=' lg:w-[80%] p-5 lg:p-0  w-[100%] flex flex-col lg:flex-row justify-center items-center m-auto mt-10'>
                <div className=' lg:w-1/2 w-full'>
                    <p className=' text-red-500 font-medium'>ABOUT US</p>
                    <h3 className=' text-3xl font-medium mt-2'>Makes your self at home and enjoy a unique experience</h3>
                    <h4 className=' mt-3 text-lg font-light'>Kogilu Main Road, Maruthi Nagar, Bangalore</h4>
                    <p className=' mt-3 font-extralight'>
                        Bhartiya city Nikko Homes is a luxury residential apartments project comprising 1, 2, 3, & 4 BHK Bedroom residences and loft Duplex Homes located at Kogil Main Road, Maruthi Nagar, Bangalore. Imagine life in a home that meets all of your everyday needs. At home where every inch has been considered and crafted to the highest level. There's room for you to grow and the scope for change. More than a home, it’s a place to call your own. For those looking to buy a residential property, here comes one of the choicest offerings in Bangalore North, at Thanisandra. Brought to you by Bartiya Group, Bartiya City Nikoo Homes is among the newest addresses for homebuyers.
                    </p>
                </div>
                <div className=' w-full h-1/2 mt-8 lg:mt-0'>
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs