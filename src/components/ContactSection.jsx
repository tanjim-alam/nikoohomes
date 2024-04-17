import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ContactSection() {
    const navigate = useNavigate()
    const api = "https://newsmtp-production.up.railway.app/";
    const [isError, setIsError] = useState(false)
    const [LeadData, setLeadData] = useState({
        name: "",
        email: "",
        number: "",
        projectName: "Nikoo Homes"
    });


    function handleOnChange(e) {
        setIsError(false)
        const { name, value } = e.target;
        setLeadData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            if (!LeadData.name || !LeadData.email || !LeadData.number) {
                setIsError(true)
                return
            }
            const res = await axios.post(api, LeadData)
            setIsError(false)
            if (res?.data?.success) {
                setLeadData({
                    name: "",
                    email: "",
                    number: ""
                })
                navigate("/thank")
            }
        } catch (error) {
            setIsError(true)
            throw error
        }
    }
    return (
        <div className=' w-full bg-slate-100'>
            <div className=' lg:w-[80%] w-[100%] flex flex-col justify-center items-center m-auto mt-10 py-10 p-5 lg:p-5'>
                <div>
                    <p className=' text-red-500 font-medium text-center'>CONTACT US</p>
                    <h2 className=' text-3xl font-medium mt-2'>Discover Your Perfect Place in the Perfect Location</h2>
                </div>
                <div className=' flex flex-col gap-9 lg:gap-0 lg:flex-row mt-10'>
                    <div className='lg:w-1/2 w-[100%]'>
                        <h2 className=' text-2xl font-medium'>About Developer</h2>
                        <p className=' mt-3'>
                            We believe that good design makes people happy. This simple, yet humble truth wasn’t something we learnt overnight. Rewind back to 1987. Bhartiya Group had just started designing leather apparel and accessories for the fashion conscious. A tough market to crack, it wasn’t long before the chicest designs from our studios in Milan were being adapted by brands like Hugo Boss, Armani, Zara and Mango. From designer bags to well-cut jackets, our team had an eye for detail and a talent for beautiful design.
                            <br />
                            <br />
                            With a newly found fashion-tycoon status, Bhartiya’s founder, Snehdeep Aggarwal was fortunate enough to travel to the world’s finest cities. It’s what caught his eye on the streets of Munich, Florence and London that became the inspiration behind the Bhartiya vision. Cities where people cycled to work safely and even the common man could afford a home.
                        </p>
                    </div>
                    <div className=' lg:w-1/2 w-[100%] flex justify-center items-center'>
                        <form onSubmit={handleSubmit} action="" className=' flex flex-col gap-5 p-8 bg-slate-600 lg:w-[450px] w-[100%] rounded-md shadow-md'>
                            <h4 className=' text-center text-xl font-medium text-white mb-2'>Book A Site Visit</h4>
                            <input type="text" placeholder='Name' className=' p-2 rounded outline-none' required name='name' value={LeadData.name} onChange={handleOnChange} />
                            <input type="text" name="number" id="" placeholder='Contact No.' className=' p-2 rounded outline-none' required value={LeadData.number} onChange={handleOnChange} />
                            <input type="text" placeholder='Email' className=' p-2 rounded outline-none' required name='email' value={LeadData.email} onChange={handleOnChange} />
                            <input type="text" name="message" id="" placeholder='Message' className=' p-2 rounded outline-none' />
                            <button className=' p-2 border-2 border-white rounded text-white'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection