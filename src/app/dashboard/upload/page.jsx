'use client'
import { NavTemplate, Template } from '@/app/components/Template/Template'
import React, { useContext, useState } from 'react';
import '../../components/Template/template.css'
import './product.css';
import Burger from '@/app/components/Burger/Burger';
import StatusForm from '@/app/components/StatusForm/StatusForm';
import { GlobalContext } from '../../../../context/GlobalContext';

export default function page() {

  const [active, setActive] = useState(true)
  const { setActionPath, setUpdateValue } = useContext(GlobalContext)

  return (
    <div className={`relative template-p overflow-hidden`}>
      <section className={`fixed top-0 left-0 h-[100vh] w-[100vw] z-[5] ${!active ? 'dashboard-close' : "dashboard-open"}`}>
        <div className='relative bg-[#bdb8b893] w-full h-full'>
          <Burger state={setActive} />
          <div className='flex justify-center items-center h-full'>
            <StatusForm />
          </div>
        </div>
      </section>
      <section className=''>
        <Template />
      </section>
      <section className='flex flex-col gap-[20px]'>
        <NavTemplate path={'Dashboard/Products'} />
        <div className='flex justify-between gap-[1.5%]'>
          <section className='flex flex-col w-[80%] product-list'>
            <table>
              <thead className='font-[500]'>
                <tr>
                  <th>Title</th>
                  <th>Quantity</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='' >
                  <td>T-shirt</td>
                  <td>10</td>
                  <td>Lorem, ipsum dolor sit amet</td>
                  <td>$20</td>
                  <td>
                    <select className='flex justify-center items-center action' name="" defaultValue={''} id="" onChange={(e) => { e.target.value == 'update' && setActive(true); setActionPath(e.target.value); setUpdateValue(); }}>
                      <option value="">Select</option>
                      <option value="delete">Delete</option>
                      <option value="update">Update</option>
                    </select>
                  </td>
                </tr>
                <tr className='' >
                  <td>T-shirt</td>
                  <td>10</td>
                  <td>Lorem, ipsum dolor sit amet</td>
                  <td>$20</td>
                  <td>
                    <select className='flex justify-center items-center action' name="" defaultValue={''} id="" onChange={(e) => { e.target.value == 'update' && setActive(true); setActionPath(e.target.value); setUpdateValue(); }}>
                      <option value="">Select</option>
                      <option value="delete">Delete</option>
                      <option value="update">Update</option>
                    </select>
                  </td>
                </tr>
                <tr className='' >
                  <td>T-shirt</td>
                  <td>10</td>
                  <td>Lorem, ipsum dolor sit amet</td>
                  <td>$20</td>
                  <td>
                    <select className='flex justify-center items-center action' name="" defaultValue={''} id="" onChange={(e) => { e.target.value == 'update' && setActive(true); setActionPath(e.target.value); setUpdateValue(); }}>
                      <option value="">Select</option>
                      <option value="delete">Delete</option>
                      <option value="update">Update</option>
                    </select>
                  </td>
                </tr>
                <tr className='' >
                  <td>T-shirt</td>
                  <td>10</td>
                  <td>Lorem, ipsum dolor sit amet</td>
                  <td>$20</td>
                  <td>
                    <select className='flex justify-center items-center action' name="" defaultValue={''} id="" onChange={(e) => { e.target.value == 'update' && setActive(true); setActionPath(e.target.value); setUpdateValue(); }}>
                      <option value="">Select</option>
                      <option value="delete">Delete</option>
                      <option value="update">Update</option>
                    </select>
                  </td>
                </tr>
                <tr className='' >
                  <td>T-shirt</td>
                  <td>10</td>
                  <td>Lorem, ipsum dolor sit amet</td>
                  <td>$20</td>
                  <td>
                    <select className='flex justify-center items-center action' name="" defaultValue={''} id="" onChange={(e) => { e.target.value == 'update' && setActive(true); setActionPath(e.target.value); setUpdateValue(); }}>
                      <option value="">Select</option>
                      <option value="delete">Delete</option>
                      <option value="update">Update</option>
                    </select>
                  </td>
                </tr>
                <tr className='' >
                  <td>T-shirt</td>
                  <td>10</td>
                  <td>Lorem, ipsum dolor sit amet</td>
                  <td>$20</td>
                  <td>
                    <select className='flex justify-center items-center action' name="" defaultValue={''} id="" onChange={(e) => { e.target.value == 'update' && setActive(true); setActionPath(e.target.value); setUpdateValue(); }}>
                      <option value="">Select</option>
                      <option value="delete">Delete</option>
                      <option value="update">Update</option>
                    </select>
                  </td>
                </tr>
                <tr className='' >
                  <td>T-shirt</td>
                  <td>10</td>
                  <td>Lorem, ipsum dolor sit amet</td>
                  <td>$20</td>
                  <td>
                    <select className='flex justify-center items-center action' name="" defaultValue={''} id="" onChange={(e) => { e.target.value == 'update' && setActive(true); setActionPath(e.target.value); setUpdateValue(); }}>
                      <option value="">Select</option>
                      <option value="delete">Delete</option>
                      <option value="update">Update</option>
                    </select>
                  </td>
                </tr>
                <tr className='' >
                  <td>T-shirt</td>
                  <td>10</td>
                  <td>Lorem, ipsum dolor sit amet</td>
                  <td>$20</td>
                  <td>
                    <select className='flex justify-center items-center action' name="" defaultValue={''} id="" onChange={(e) => { e.target.value == 'update' && setActive(true); setActionPath(e.target.value); setUpdateValue(); }}>
                      <option value="">Select</option>
                      <option value="delete">Delete</option>
                      <option value="update">Update</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className='flex flex-col gap-[15px] w-[20%]'>
            <section className='category-bar'>
              <h1 className='font-[500]'>Category list</h1>
              <ul className='category-list'>
                <li><input type="checkbox" name="" id="" /><span>Valies</span></li>
                <li><input type="checkbox" name="" id="" /><span>Cloths</span></li>
                <li><input type="checkbox" name="" id="" /><span>Shoes</span></li>
                <li><input type="checkbox" name="" id="" /><span>Bath</span></li>
                <li> <input type="checkbox" name="" id="" /><span>Under wear</span></li>
              </ul>
            </section>
            <button className='cate-bar-btn' onClick={() => setActive(true)}>
              Add New Product
            </button>
          </section>
        </div>
      </section>
    </div>
  )
}
