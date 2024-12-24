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
                </section>
                <section className='order-detail-sec2'>
                    <div>
                        <img src="https://via.placeholder.com/200" alt="product img" />
                    </div>
                </section>
            </div>
        </>
    )
}

