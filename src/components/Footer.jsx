import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className=' bg-black w-full'>
            <div className=' w-[80%] m-auto pt-8'>
                <div>
                    <p className=' text-white text-sm'>
                        <span className=' font-bold'>Disclaimer</span> - The content provided on this website is for information purposes only and does not constitute an offer to avail any service.
                        The prices mentioned are subject to change without prior notice, and the availability of properties mentioned is not guaranteed.
                    </p>
                </div>
                <div className=' border-t border-white mt-8 py-4'>
                    <p className=' text-center text-white'>Disclaimer & Privacy Policy | Digital Media Planned By <NavLink to="https://mndigitalagency.com/">MNDigitalagency</NavLink></p>
                </div>
            </div>
        </div>
    )
}

export default Footer