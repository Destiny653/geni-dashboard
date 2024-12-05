import { Notyf } from 'notyf';
import React, { useContext, useState } from 'react';
import './orderdetail.css'
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
                <section className='order-detail-sec1'>
                    <h1 className=''>Orders</h1>
                    <div className='flex gap-[10px]'>
                        <div>
                            <img src="https://via.placeholder.com/200" alt="product img" />
                        </div>
                        <ul>
                            <li>Title: Geni-I Diaper</li>
                            <li>Description: A lightweight, breathable diaper for your bab</li>
                            <li>Quantity: 3</li>
                            <li>Price: $100</li>
                            <li>Total: $300</li>
                            <li>Status: Processin</li>
                            <li>Order Date: 202-09-2</li>
                            <li>Order Time: 12:00:0</li>
                        </ul>
                    </div>
                </section>
                <section className='order-detail-sec2'>
                    <div>
                        <h1 className=''>User</h1>
                        <ul>
                            <div className='flex items-center gap-[6px]'>
                                <div className='bg-[gray] rounded-full w-[40px] h-[40px]'></div>
                                <div>
                                    <li>Megalone Met</li>
                                    <li>megalone@gmail.com</li>
                                </div>
                            </div>
                            <li>Phone: +254 721 123 45</li>
                            <li>Date: 2022-01-1</li>
                            <li>Registration date: 2024-03-1</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Order summary</h1>
                        <div className='order-detail-sum'>
                            <ul>
                                <li>Title</li>
                                <li>Subtotal</li>
                            </ul>
                            <ul>
                                <li>Diaper</li>
                                <li>$500</li>
                            </ul>
                            <ul>
                                <li>Total</li>
                                <li>$500</li>
                            </ul>
                            <ul>
                                <li>Tax</li>
                                <li>$50</li>
                            </ul>
                            <ul>
                                <li>Subtotal</li>
                                <li>$550</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

