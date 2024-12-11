'use client'
import { NavTemplate, Template } from '@/app/components/Template/Template'
import React, { useContext, useEffect, useState } from 'react';
import '../../components/Template/template.css'
import './product.css';
import Burger from '@/app/components/Burger/Burger';
import StatusForm from '@/app/components/StatusForm/StatusForm';
import { GlobalContext } from '../../../../context/GlobalContext';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; 

export default function Page() {

  const [active, setActive] = useState(false)
  const { setActionPath, setUpdateValue, updateValue } = useContext(GlobalContext)
  const [productId, setProductId] = useState('')
  const [data, setData] = useState([])

  const fetchData = async () => {
    const notyf = new Notyf({
      duration: 4000,
      position: {
          x: 'right',
          y: 'top'
      }
  })

    try { 
      
    const response = await fetch('https://geni-backend.onrender.com/api/category')
    const req = await response.json()
    if(!response.ok){
      notyf.error(req.message)
      return
    }
    setData(req)
    } catch (error) { 
      notyf.error('Error: ',error.message)
    }
  }

  console.log("Data: ",data);
  

  useEffect(() => {
 
    fetchData()
    const style = document.createElement('style');
    style.textContent = `
        .notyf__toast {
            border-radius: 12px !important;
        }
    `;
    document.head.append(style);
    return () => style.remove(); // Clean up on component unmount
}, [ ]);

  const handleDelete = async(id)=>{
    const notyf = new Notyf({
      duration: 4000,
      position: {
          x: 'right',
          y: 'top'
      }
  })
   try {
    const response = await fetch('https://geni-backend.onrender.com/api/category/' + id,{
      method: 'DELETE'
    })
    const req = await response.json()
    if (!response.ok) {
      notyf.error(req.message)
    } 
    notyf.success(req.message)  
    fetchData()
   } catch (error) { 
    console.error(error)
    notyf.error('Error: ', error.message)
   }
  }

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
                  <th>Rate</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  data?.data?.map((item, index) => (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.rate}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td>
                        <select className='flex justify-center items-center action' name="" defaultValue={''} id="" onChange={(e) => { e.target.value == 'update' ? setActive(true) : handleDelete(item._id+'/'+item.model); setActionPath(e.target.value == 'update' && `update/${item._id}` ); setUpdateValue(item); }}>
                          <option value="">Select</option>
                          <option value="delete">Delete</option>
                          <option value="update">Update</option>
                        </select>
                      </td>
                    </tr>
                  ))
                } 
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
