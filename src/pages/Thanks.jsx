import React from 'react'
import { useNavigate } from 'react-router-dom'

function Thanks() {
    const navigate = useNavigate()
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <h1 className="text-4xl text-center font-extrabold text-black">Thank you for Submitted ...</h1>
            {/* <div className="bg-white text-black absolute px-2 text-sm rounded rotate-12">
                Thank you for Submitted ...
            </div> */}
            <button className="mt-5">
                <a onClick={() => navigate(-1)} className="relative inline-block text-sm font-medium active:text-yellow-500 focus:outline-non">
                    <span className="relative block px-8 py-3 bg-[#1A2238] border border-current text-white">Go back</span>
                </a>
            </button>
        </div>
    )
}

export default Thanks