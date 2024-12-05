'use client'
import { NavTemplate, Template } from '@/app/components/Template/Template'
import React, { useContext, useState } from 'react';
import '../../components/Template/template.css'
import './client.css';
import Burger from '@/app/components/Burger/Burger';
import StatusForm from '@/app/components/StatusForm/StatusForm';
import { GlobalContext } from '../../../../context/GlobalContext';
import { FaUser } from "react-icons/fa6";
import OrderDetail from '@/app/components/OrderDetail/orderdetail';
export default function Page() {

  const [active, setActive] = useState(true)
  const { setActionPath, setUpdateValue } = useContext(GlobalContext)

  return (
    <div className={`relative template-p overflow-hidden`}>
      <section className={`fixed top-0 left-0 h-[100vh] w-[100vw] z-[5] ${!active ? 'dashboard-close' : "dashboard-open"}`}>
        <div className='relative bg-[#bdb8b893] w-full h-full'>
          <Burger state={setActive} />
          <div className='flex justify-center items-center h-full'>
            <OrderDetail />
          </div>
        </div>
      </section>
      <section className=''>
        <Template />
      </section>
      <section className='flex flex-col gap-[20px]'>
        <NavTemplate path={'Dashboard/Clients'} />
        <div className='flex justify-between gap-[1.5%]'>
          <section className='flex flex-col w-[100%] client-list'>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Phone</th>
                  <th>Date added</th>
                  <th>Comment</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='flex items-center gap-[7px] jc'>
                    <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                      <FaUser className='text-[#91abafbb] text-[24px]' />
                    </div>
                    <div>
                      <h1>Megalone Mata</h1>
                      <p>megalone@gamil.com</p>
                    </div>
                  </td>
                  <td>0789876543</td>
                  <td>2022-03-20</td>
                  <td>This is a sample comment</td>
                  <td className='client-btn' onClick={() => setActive(true)}>Detail</td>
                </tr>
                <tr>
                  <td className='flex items-center gap-[7px] jc'>
                    <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                      <FaUser className='text-[#91abafbb] text-[24px]' />
                    </div>
                    <div>
                      <h1>Megalone Mata</h1>
                      <p>megalone@gamil.com</p>
                    </div>
                  </td>
                  <td>0789876543</td>
                  <td>2022-03-20</td>
                  <td>This is a sample comment</td>
                  <td className='client-btn' onClick={() => setActive(true)}>Detail</td>
                </tr>
                <tr>
                  <td className='flex items-center gap-[7px] jc'>
                    <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                      <FaUser className='text-[#91abafbb] text-[24px]' />
                    </div>
                    <div>
                      <h1>Megalone Mata</h1>
                      <p>megalone@gamil.com</p>
                    </div>
                  </td>
                  <td>0789876543</td>
                  <td>2022-03-20</td>
                  <td>This is a sample comment</td>
                  <td className='client-btn' onClick={() => setActive(true)}>Detail</td>
                </tr>
                <tr>
                  <td className='flex items-center gap-[7px] jc'>
                    <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                      <FaUser className='text-[#91abafbb] text-[24px]' />
                    </div>
                    <div>
                      <h1>Megalone Mata</h1>
                      <p>megalone@gamil.com</p>
                    </div>
                  </td>
                  <td>0789876543</td>
                  <td>2022-03-20</td>
                  <td>This is a sample comment</td>
                  <td className='client-btn' onClick={() => setActive(true)}>Detail</td>
                </tr>
                <tr>
                  <td className='flex items-center gap-[7px] jc'>
                    <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                      <FaUser className='text-[#91abafbb] text-[24px]' />
                    </div>
                    <div>
                      <h1>Megalone Mata</h1>
                      <p>megalone@gamil.com</p>
                    </div>
                  </td>
                  <td>0789876543</td>
                  <td>2022-03-20</td>
                  <td>This is a sample comment</td>
                  <td className='client-btn' onClick={() => setActive(true)}>Detail</td>
                </tr>
                <tr>
                  <td className='flex items-center gap-[7px] jc'>
                    <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                      <FaUser className='text-[#91abafbb] text-[24px]' />
                    </div>
                    <div>
                      <h1>Megalone Mata</h1>
                      <p>megalone@gamil.com</p>
                    </div>
                  </td>
                  <td>0789876543</td>
                  <td>2022-03-20</td>
                  <td>This is a sample comment</td>
                  <td className='client-btn' onClick={() => setActive(true)}>Detail</td>
                </tr>
                <tr>
                  <td className='flex items-center gap-[7px] jc'>
                    <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                      <FaUser className='text-[#91abafbb] text-[24px]' />
                    </div>
                    <div>
                      <h1>Megalone Mata</h1>
                      <p>megalone@gamil.com</p>
                    </div>
                  </td>
                  <td>0789876543</td>
                  <td>2022-03-20</td>
                  <td>This is a sample comment</td>
                  <td className='client-btn' onClick={() => setActive(true)}>Detail</td>
                </tr>
                <tr>
                  <td className='flex items-center gap-[7px] jc'>
                    <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                      <FaUser className='text-[#91abafbb] text-[24px]' />
                    </div>
                    <div>
                      <h1>Megalone Mata</h1>
                      <p>megalone@gamil.com</p>
                    </div>
                  </td>
                  <td>0789876543</td>
                  <td>2022-03-20</td>
                  <td>This is a sample comment</td>
                  <td className='client-btn' onClick={() => setActive(true)}>Detail</td>
                </tr>
                <tr>
                  <td className='flex items-center gap-[7px] jc'>
                    <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                      <FaUser className='text-[#91abafbb] text-[24px]' />
                    </div>
                    <div>
                      <h1>Megalone Mata</h1>
                      <p>megalone@gamil.com</p>
                    </div>
                  </td>
                  <td>0789876543</td>
                  <td>2022-03-20</td>
                  <td>This is a sample comment</td>
                  <td className='client-btn' onClick={() => setActive(true)}>Detail</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </section>
    </div>
  )
}
