import axios from 'axios';
import React, { useState } from 'react'

function Form() {
    const api = "https://newsmtp-production.up.railway.app/";
    const [isError, setIsError] = useState(false)
    const [LeadData, setLeadData] = useState({
        name: "",
        email: "",
        number: "",
        projectName: "Goyal"
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
                alert("Submitted Successfully")
            }
        } catch (error) {
            setIsError(true)
            throw error
        }
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit} className=' flex flex-col gap-5 p-4 bg-slate-600 lg:w-[350px] md:w-[350px] w-full rounded-lg'>
                <h4 className=' text-center text-xl font-medium text-white mb-2'>Book A Site Visit</h4>
                <input type="text" placeholder='Name' name="name" className=' p-2 rounded outline-none' value={LeadData.name} onChange={handleOnChange} required />
                <input type="text" id="" placeholder='Contact No.' name="number" className=' p-2 rounded outline-none' value={LeadData.number} onChange={handleOnChange} required />
                <input type="text" placeholder='Email' name='email' className=' p-2 rounded outline-none' value={LeadData.email} onChange={handleOnChange} required />
                <input type="text" name="" id="message" placeholder='Message' className=' p-2 rounded outline-none' />
                <span className=' text-red-600'>{isError ? "all fields are required" : null}</span>
                <button className=' p-2 border-2 border-white rounded text-white'>Submit</button>
            </form>
        </div>
    )
}

export default Form