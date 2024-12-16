'use client';
import React, { useState } from 'react'
import Theme from '../Theme/Theme';
import './login.css';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; 
import { useRouter } from 'next/navigation';

export default function Login() {

    const data = {
        email: '',
        password: ''
    }

    const [formData, SetFormData] = useState(data)
    const navigation = useRouter()

    const handleChange = (e) => {
        SetFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const notyf = new Notyf({
            duration: 4000,
            position: {
                x: 'right',
                y: 'top'
            }
        })
        try {
            const response = await fetch('https://geni-backend.onrender.com/api/client/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const request = await response.json()
            if (!response.ok) {
                notyf.error(request.message)
            }
            if(request?.data?.role == "admin"){
                localStorage.setItem('adminData',JSON.stringify({role:request.data.role, token:request.token}))
                notyf.success(request.message)
                navigation.push('/dashboard/client')
            }
        } catch (error) {
            notyf.error("Error:" + error.message)
        }
    }


    return (
        <div className='relative'>
            <section className='z-10 fixed flex justify-center items-center gap-[20px] bg-[#a7bbd128] form-nav w-full h-[50px]'>
                <h1 className=''>Welcome To Geni-I Dashboard</h1>
                <Theme />
            </section>
            <section className={`h-[100vh] flex justify-center items-center form-p`}>
                <form onSubmit={handleSubmit} className=''>
                    <label htmlFor="email" className='flex flex-col w-[100%]'>
                        <span>
                            Email
                        </span>
                        <input className='border-[#fff] px-[20px] py-[8px] w-[100%] text-[#000] outline-none' type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <label htmlFor="password" className='flex flex-col w-[100%]'>
                        <span>
                            Password
                        </span>
                        <input className='border-[#fff] px-[20px] py-[8px] w-[100%] text-[#000] outline-none' type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                    </label>
                    <button type="submit" className='border-[#fff] bg-[#007bff] px-[20px] py-[8px] w-[100%] text-[#fff]'>
                        Login
                    </button>
                </form>
            </section>
        </div>
    )
}
