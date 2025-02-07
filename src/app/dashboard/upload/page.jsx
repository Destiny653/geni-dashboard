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
import { useRouter } from 'next/navigation';
import { basicUrl } from '@/app/components/Url';

export default function Page() {

  const [active, setActive] = useState(false)
  const { setActionPath, setUpdateValue, updateValue } = useContext(GlobalContext)
  const [filter, setFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10;
  const [data, setData] = useState([])
  const navigation = useRouter()
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("adminData"))
    token = token?.token;
    token ?? navigation.push('/')
    console.log("token: ", token);
  },[])

  const fetchData = async () => {
    const notyf = new Notyf({
      duration: 4000,
      position: {
        x: 'right',
        y: 'top'
      }
    })

    try {

      const response = await fetch(basicUrl+'/api/category')
      const req = await response.json()
      if (!response.ok) {
        notyf.error(req.message)
        return
      }
      setData(req)
    } catch (error) {
      notyf.error('Error: ', error.message)
    }
  }

  console.log("Data: ", data);


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
  }, []);

  const handleDelete = async (id) => {
    const notyf = new Notyf({
      duration: 4000,
      position: {
        x: 'right',
        y: 'top'
      }
    })
    try {
      const response = await fetch(basicUrl+'/api/category/' + id, {
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

  const filterdData = filter == 'all' ? data.data : data?.data?.filter((item) => item.model == filter)
  const totalPages = Math.ceil(filterdData?.length / itemsPerPage)
  const displayedData = filterdData?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

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
          <section className='flex flex-col w-[80%]'>
            <section className='flex flex-col w-[100%] product-list'>
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
                    displayedData?.map((item, index) => (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.rate}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>
                          <select className='flex justify-center items-center action' name="group" defaultValue={''} id="" onChange={(e) => { e.target.value == 'update' ? setActive(true) : handleDelete(item._id + '/' + item.model); setActionPath(e.target.value == 'update' && `${item._id}/${item.model}`); setUpdateValue(item); }}>
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
            <div className={'flex justify-between'}>
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className={'paginate-btn'}
              >
                Prev
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className={'paginate-btn'}
              >
                Next
              </button>
            </div>
          </section>
          <section className='flex flex-col gap-[15px] w-[20%]'>
            <section className='category-bar'>
              <h1 className='font-[500]'>Category list</h1>
              <ul className='category-list'>
                <li><input type='radio' name="group" id="" value={"all"} onChange={(e) => setFilter(e.target.value)} /><span>All</span></li>
                <li><input type='radio' name="group" id="" value={'Valies'} onChange={(e) => setFilter(e.target.value)} /><span>Valies</span></li>
                <li><input type='radio' name="group" id="" value={'Clothing'} onChange={(e) => setFilter(e.target.value)} /><span>Cloths</span></li>
                <li><input type='radio' name="group" id="" value={'Shoes'} onChange={(e) => setFilter(e.target.value)} /><span>Shoes</span></li>
                <li><input type='radio' name="group" id="" value={'Bath'} onChange={(e) => setFilter(e.target.value)} /><span>Bath</span></li>
                <li><input type='radio' name="group" id="" value={'Underwear'} onChange={(e) => setFilter(e.target.value)} /><span>Under wear</span></li>
              </ul>
            </section>
            <button className='w-full cate-bar-btn' onClick={() =>{setActive(true); setActionPath('create')}}>
              Add New Product
            </button>
          </section>
        </div>
      </section>
    </div>
  )
}