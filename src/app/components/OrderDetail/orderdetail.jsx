import { Notyf } from 'notyf';
import React, { useContext, useState } from 'react';
import './orderdetail.css'
import { FaUser } from "react-icons/fa6";
import { GlobalContext } from '../../../../context/GlobalContext';

export default function OrderDetail() {

    const { actionPath, updateValue } = useContext(GlobalContext)

    const SelectedImg = () => {
        return (
            <div className='flex justify-center items-center w-[full]'>
                <img className='w-[100%] h-[]' src={'https://via.placeholder.com/200'} alt={'holder'} />
            </div>
        )
    }

    return (
        <>
            <div className='order-detail-p'>
                <ul className='box-border flex flex-col items-center gap-[20px] bg-[#05050542] py-[20px]'>
                    <li className='flex justify-center items-center bg-[#bbbaba] hover:bg-[#3a3a3a48] rounded-[100%] w-[20px] h-[20px] text-[10px] cursor-pointer'>A</li>
                    <li className='flex justify-center items-center bg-[#bbbaba] hover:bg-[#3a3a3a48] rounded-[100%] w-[20px] h-[20px] text-[10px] cursor-pointer'>P</li>
                    <li className='flex justify-center items-center bg-[#bbbaba] hover:bg-[#3a3a3a48] rounded-[100%] w-[20px] h-[20px] text-[10px] cursor-pointer'>Pro</li>
                    <li className='flex justify-center items-center bg-[#bbbaba] hover:bg-[#3a3a3a48] rounded-[100%] w-[20px] h-[20px] text-[10px] cursor-pointer'>C</li>
                </ul>
                <ul className='box-border flex flex-col order-detail-sec'>
                    <section className='flex items-center gap-[5px] hover:bg-[#9ca8a2a9] px-[10px] py-[4px] rounded-[8px] cursor-pointer'>
                        <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                            <FaUser className='text-[#91abafbb] text-[24px]' />
                        </div>
                        <div>
                            <h1>Megalone Mata</h1>
                            <p>megalone@gamil.com</p>
                        </div>
                    </section>
                    <section className='flex items-center gap-[5px] hover:bg-[#9ca8a2a9] px-[10px] py-[4px] rounded-[8px] cursor-pointer'>
                        <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                            <FaUser className='text-[#91abafbb] text-[24px]' />
                        </div>
                        <div>
                            <h1>Megalone Mata</h1>
                            <p>megalone@gamil.com</p>
                        </div>
                    </section>
                    <section className='flex items-center gap-[5px] hover:bg-[#9ca8a2a9] px-[10px] py-[4px] rounded-[8px] cursor-pointer'>
                        <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                            <FaUser className='text-[#91abafbb] text-[24px]' />
                        </div>
                        <div>
                            <h1>Megalone Mata</h1>
                            <p>megalone@gamil.com</p>
                        </div>
                    </section>
                    <section className='flex items-center gap-[5px] hover:bg-[#9ca8a2a9] px-[10px] py-[4px] rounded-[8px] cursor-pointer'>
                        <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                            <FaUser className='text-[#91abafbb] text-[24px]' />
                        </div>
                        <div>
                            <h1>Megalone Mata</h1>
                            <p>megalone@gamil.com</p>
                        </div>
                    </section>
                    <section className='flex items-center gap-[5px] hover:bg-[#9ca8a2a9] px-[10px] py-[4px] rounded-[8px] cursor-pointer'>
                        <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                            <FaUser className='text-[#91abafbb] text-[24px]' />
                        </div>
                        <div>
                            <h1>Megalone Mata</h1>
                            <p>megalone@gamil.com</p>
                        </div>
                    </section>
                    <section className='flex items-center gap-[5px] hover:bg-[#9ca8a2a9] px-[10px] py-[4px] rounded-[8px] cursor-pointer'>
                        <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                            <FaUser className='text-[#91abafbb] text-[24px]' />
                        </div>
                        <div>
                            <h1>Megalone Mata</h1>
                            <p>megalone@gamil.com</p>
                        </div>
                    </section>
                    <section className='flex items-center gap-[5px] hover:bg-[#9ca8a2a9] px-[10px] py-[4px] rounded-[8px] cursor-pointer'>
                        <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                            <FaUser className='text-[#91abafbb] text-[24px]' />
                        </div>
                        <div>
                            <h1>Megalone Mata</h1>
                            <p>megalone@gamil.com</p>
                        </div>
                    </section>
                    <section className='flex items-center gap-[5px] hover:bg-[#9ca8a2a9] px-[10px] py-[4px] rounded-[8px] cursor-pointer'>
                        <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                            <FaUser className='text-[#91abafbb] text-[24px]' />
                        </div>
                        <div>
                            <h1>Megalone Mata</h1>
                            <p>megalone@gamil.com</p>
                        </div>
                    </section>
                    <section className='flex items-center gap-[5px] hover:bg-[#9ca8a2a9] px-[10px] py-[4px] rounded-[8px] cursor-pointer'>
                        <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                            <FaUser className='text-[#91abafbb] text-[24px]' />
                        </div>
                        <div>
                            <h1>Megalone Mata</h1>
                            <p>megalone@gamil.com</p>
                        </div>
                    </section>
                    <section className='flex items-center gap-[5px hover:bg-[#9ca8a2a9] px-[10px] py-[4px] rounded-[8px] cursor-pointer'>
                        <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                            <FaUser className='text-[#91abafbb] text-[24px]' />
                        </div>
                        <div>
                            <h1>Megalone Mata</h1>
                            <p>megalone@gamil.com</p>
                        </div>
                    </section>
                    <section className='flex items-center gap-[5px hover:bg-[#9ca8a2a9] px-[10px] py-[4px] rounded-[8px] cursor-pointer'>
                        <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                            <FaUser className='text-[#91abafbb] text-[24px]' />
                        </div>
                        <div>
                            <h1>Megalone Mata</h1>
                            <p>megalone@gamil.com</p>
                        </div>
                    </section>
                </ul>
                <ul className='box-border order-detail-sec2 px-[0%] overflow-y-scroll'>
                    <li className='relative box-border flex justify-between hover:bg-[#9ca8a2a9] p-[3px] w-full text-[13px]'>
                        <span className='right-[20%] absolute text-[#34ce34] text-[13px]'><strong>Status: </strong>Pending</span>
                        <ul className='cursor-pointer'>
                            <li><strong>Title: </strong>Cotton wear</li>
                            <li><strong>Prcie: </strong>$800</li>
                            <li><strong>Quantity: </strong>5</li>
                            <li><strong>Order date: </strong>27/09/12</li>
                        </ul>
                        <div className='h-[100px]'>
                            <img className='h-full' src="https://via.placeholder.com/200" alt="product img" />
                        </div>
                    </li>
                    <li className='relative box-border flex justify-between hover:bg-[#9ca8a2a9] p-[3px] w-full text-[13px]'>
                        <span className='right-[20%] absolute text-[#34ce34] text-[13px]'><strong>Status: </strong>Pending</span>
                        <ul className='cursor-pointer'>
                            <li><strong>Title: </strong>Cotton wear</li>
                            <li><strong>Prcie: </strong>$800</li>
                            <li><strong>Quantity: </strong>5</li>
                            <li><strong>Order date: </strong>27/09/12</li>
                        </ul>
                        <div className='h-[100px]'>
                            <img className='h-full' src="https://via.placeholder.com/200" alt="product img" />
                        </div>
                    </li>
                    <li className='relative box-border flex justify-between hover:bg-[#9ca8a2a9] p-[3px] w-full text-[13px]'>
                        <span className='right-[20%] absolute text-[#34ce34] text-[13px]'><strong>Status: </strong>Pending</span>
                        <ul className='cursor-pointer'>
                            <li><strong>Title: </strong>Cotton wear</li>
                            <li><strong>Prcie: </strong>$800</li>
                            <li><strong>Quantity: </strong>5</li>
                            <li><strong>Order date: </strong>27/09/12</li>
                        </ul>
                        <div className='h-[100px]'>
                            <img className='h-full' src="https://via.placeholder.com/200" alt="product img" />
                        </div>
                    </li>
                    <li className='relative box-border flex justify-between hover:bg-[#9ca8a2a9] p-[3px] w-full text-[13px]'>
                        <span className='right-[20%] absolute text-[#34ce34] text-[13px]'><strong>Status: </strong>Pending</span>
                        <ul className='cursor-pointer'>
                            <li><strong>Title: </strong>Cotton wear</li>
                            <li><strong>Prcie: </strong>$800</li>
                            <li><strong>Quantity: </strong>5</li>
                            <li><strong>Order date: </strong>27/09/12</li>
                        </ul>
                        <div className='h-[100px]'>
                            <img className='h-full' src="https://via.placeholder.com/200" alt="product img" />
                        </div>
                    </li>
                    <li className='relative box-border flex justify-between hover:bg-[#9ca8a2a9] p-32px w-full text-[13px]]'>
                        <span className='right-[20%] absolute text-[#34ce34] text-[13px]'><strong>Status: </strong>Pending</span>
                        <ul className='cursor-pointer'>
                            <li><strong>Title: </strong>Cotton wear</li>
                            <li><strong>Prcie: </strong>$800</li>
                            <li><strong>Quantity: </strong>5</li>
                            <li><strong>Order date: </strong>27/09/12</li>
                        </ul>
                        <div className='h-[100px]'>
                            <img className='h-full' src="https://via.placeholder.com/200" alt="product img" />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

