import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Form from './Form';
import "../styles/home.css"
import FormModel from './FormModel';
import { MdMenu } from "react-icons/md";

function HeroSection({ handleOpenModel }) {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    function handleOpenMenu() {
        setIsOpenMenu(!isOpenMenu)
    }

    return (
        <div className=' w-full lg:h-[100vh] md:h-auto h-[100vh] heroSection' >
            <div className='  lg:w-[80%] w-[100%] lg:p-5 px-5 py-2 flex justify-between items-center m-auto text-white'>
                <div className=''>
                    <h4 className=' font-medium text-xl border-b-2'>BHARTIYA CITY</h4>
                    {/* <span className=' border-b-2'>---------------</span> */}
                    <h4 className=' font-medium text-center'>Nikoo Homes</h4>

                </div>
                <div className=' hidden lg:block'>
                    <ul className=' flex justify-between items-center gap-5'>
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>Overview</NavLink></li>
                        <li><NavLink>Price</NavLink></li>
                        <li><NavLink>Amenties</NavLink></li>
                        <li><NavLink>Master & Floor Plans</NavLink></li>
                        <li><NavLink>Gallery</NavLink></li>
                        <li><NavLink>Location</NavLink></li>
                        <li className=' bg-red-500 p-2 rounded-3xl'><NavLink to="tel:+918808077653">+91 8150049883</NavLink></li>
                    </ul>
                </div>
                <div className=' lg:hidden block'>

                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className=" text-2xl  drawer-button"><MdMenu /></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className=" text-black flex flex-col gap-4 p-4 w-80 min-h-full bg-base-200 ">
                                <li className='bg-transparent'><NavLink className=' bg-none'>Home</NavLink></li>
                                <li><NavLink>Overview</NavLink></li>
                                <li><NavLink>Price</NavLink></li>
                                <li><NavLink>Amenties</NavLink></li>
                                <li><NavLink>Master & Floor Plans</NavLink></li>
                                <li><NavLink>Gallery</NavLink></li>
                                <li><NavLink>Location</NavLink></li>
                                <li className=' bg-red-500 text-white p-2 rounded-3xl'><NavLink to="tel:+918808077653">+91 8150049883</NavLink></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className=' hidden'>
                    <ul className=' w-[90%] bg-white h-[100vh] sticky top-0 flex flex-col justify-between  items-center gap-5'>
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>Overview</NavLink></li>
                        <li><NavLink>Price</NavLink></li>
                        <li><NavLink>Amenties</NavLink></li>
                        <li><NavLink>Master & Floor Plans</NavLink></li>
                        <li><NavLink>Gallery</NavLink></li>
                        <li><NavLink>Location</NavLink></li>
                        <li className=' bg-red-500  p-2 rounded-3xl'><NavLink to="tel:+918808077653">+91 8150049883</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className='w-full lg:h-[88vh] flex justify-center items-center pt-10 lg:pt-0 md:pt-0'>
                <div className=' lg:w-[80%] md:w-[90%] w-full p-4 lg:p-0 m-auto flex flex-col md:flex-row lg:flex-row justify-between '>
                    <div className=' flex flex-col gap-2 lg:pt-16 md:pt-16'>
                        <p className=' text-yellow-600 text-sm font-medium' >KOGILU MAIN ROAD, MARUTHI NAGAR, BANGALORE</p>
                        <h2 className=' lg:text-4xl text-2xl font-semibold text-white'>NIKOO HOME 5 & 6</h2>
                        <div className=' mt-2 flex-col gap-2 flex text-white '>
                            <p className='bg-gray-800 w-fit p-1 text-md'>Land Area : 8 Acres</p>
                            <p className='bg-gray-800 w-fit p-1 text-md'>Towers : 5</p>
                            <p className='bg-gray-800 w-fit p-1 text-md'>Possession : December 2028</p>
                        </div>
                        <h3 className=' border-2 border-white text-white lg:py-2 py-1 px-8 rounded-full w-fit '>2, 3 & 4 BHK Apartment</h3>
                        <h3 className=' border-2 border-white text-white lg:py-2 py-1 px-8 rounded-full w-fit '>
                            Starting Price : ₹ 65 Lacs* </h3>
                        <button onClick={handleOpenModel} className=' bg-red-500 w-fit py-2 px-4 mt-3 text-white rounded-full'>Download Brochure</button>
                    </div>
                    <div className=' mt-16'>
                        <Form />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection