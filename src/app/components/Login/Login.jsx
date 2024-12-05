import React from 'react'
import Theme from '../Theme/Theme';
import './login.css'

export default function Login() {
    return (
        <div className='relative'>
            <section className='z-10 fixed flex justify-center items-center gap-[20px] bg-[#a7bbd128] form-nav w-full h-[50px]'>
                <h1 className=''>Welcome To Geni-I Dashboard</h1>
                <Theme />
            </section>
            <section className={`h-[100vh] flex justify-center items-center form-p`}>
                <form className=''>
                    <label htmlFor="email" className='flex flex-col w-[100%]'>
                        <span>
                            Email
                        </span>
                        <input className='border-[#fff] px-[20px] py-[8px] w-[100%] text-[#000] outline-none' type="email" id="email" name="email" required />
                    </label>
                    <label htmlFor="password" className='flex flex-col w-[100%]'>
                        <span>
                            Password
                        </span>
                        <input className='border-[#fff] px-[20px] py-[8px] w-[100%] text-[#000] outline-none' type="password" id="password" name="password" required />
                    </label>
                    <button type="submit" className='border-[#fff] bg-[#007bff] px-[20px] py-[8px] w-[100%] text-[#fff]'>
                        Login
                    </button>
                </form>
            </section>
        </div>
    )
}
