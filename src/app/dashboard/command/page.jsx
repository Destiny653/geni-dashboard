'use client'
import { NavTemplate, Template } from '@/app/components/Template/Template'
import React, { useContext, useEffect, useState } from 'react';
import '../../components/Template/template.css'
import './command.css';
import { GlobalContext } from '../../../../context/GlobalContext';
import { FaUser } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
export default function Page() {

  const [active, setActive] = useState(true)
  const { setActionPath, setUpdateValue } = useContext(GlobalContext)
  const navigation = useRouter()
   useEffect(()=>{ 
    let token = JSON.parse(localStorage.getItem("adminData"))
    token = token?.token;
    token ?? navigation.push('/')
    console.log("token: ",token);
    },[])

  return (
    <div className={`relative template-p overflow-hidden`}>
      <section className='h-full'>
        <Template />
      </section>
      <section className='flex flex-col gap-[20px]'>
        <NavTemplate path={'Dashboard/Orders'} />
        <div className='order-main'>
          <section className='flex flex-col order-list'>
            <ul className='order-list-item'>
              <li>User</li>
              <li>Total amount</li>
              <li>Order date</li>
              <li>Time</li>
              <li>Status</li>
            </ul>
            <details className=''>
              <summary className='flex justify-center items-center'>
                <ul className='order-list-item'>
                  <li className='flex items-center gap-[7px] jc'>
                    <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                      <FaUser className='text-[#91abafbb] text-[24px]' />
                    </div>
                    <div>
                      <h1>Megalone Mata</h1>
                      <p>megalone@gamil.com</p>
                    </div>
                  </li>
                  <li className='special-color'>$360.00</li>
                  <li>2022-03-20</li>
                  <li>12:00:00</li>
                  <li className='special-color2'>Pending</li>
                </ul>
              </summary>
              <section className='order-item-p'>
                <ul className='order-item'>
                  <li className='order-item-details'>
                    <div className='order-item-img'>
                      <img src="https://via.placeholder.com/200" alt="product image" />
                    </div>
                    <ul className='order-details-sec'>
                      <li><strong>Title</strong>: Geni product</li>
                      <li><strong>Description</strong>: A product for your bab</li>
                      <li><strong>Product type</strong>: Diaper</li>
                    </ul>
                    <ul className='order-details-sec'>
                      <li><strong>Qty</strong>: 1 item</li>
                      <li><strong>Price</strong>: $500</li>
                      <li><strong>Total</strong>: $500</li>
                    </ul>
                  </li>
                </ul>
                <ul className='order-item'>
                  <li className='order-item-details'>
                    <div className='order-item-img'>
                      <img src="https://via.placeholder.com/200" alt="product image" />
                    </div>
                    <ul className='order-details-sec'>
                      <li><strong>Title</strong>: Geni product</li>
                      <li><strong>Description</strong>: A product for your bab</li>
                      <li><strong>Product type</strong>: Diaper</li>
                    </ul>
                    <ul className='order-details-sec'>
                      <li><strong>Qty</strong>: 1 item</li>
                      <li><strong>Price</strong>: $500</li>
                      <li><strong>Total</strong>: $500</li>
                    </ul>
                  </li>
                </ul>
              </section>
            </details>
            <details className=''>
              <summary className='flex justify-center items-center'>
                <ul className='order-list-item'>
                  <li className='flex items-center gap-[7px] jc'>
                    <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                      <FaUser className='text-[#91abafbb] text-[24px]' />
                    </div>
                    <div>
                      <h1>Megalone Mata</h1>
                      <p>megalone@gamil.com</p>
                    </div>
                  </li>
                  <li className='special-color'>$360.00</li>
                  <li>2022-03-20</li>
                  <li>12:00:00</li>
                  <li className='special-color2'>Pending</li>
                </ul>
              </summary>
              <section className='order-item-p'>
                <ul className='order-item'>
                  <li className='order-item-details'>
                    <div className='order-item-img'>
                      <img src="https://via.placeholder.com/200" alt="product image" />
                    </div>
                    <ul className='order-details-sec'>
                      <li><strong>Title</strong>: Geni product</li>
                      <li><strong>Description</strong>: A product for your bab</li>
                      <li><strong>Product type</strong>: Diaper</li>
                    </ul>
                    <ul className='order-details-sec'>
                      <li><strong>Qty</strong>: 1 item</li>
                      <li><strong>Price</strong>: $500</li>
                      <li><strong>Total</strong>: $500</li>
                    </ul>
                  </li>
                </ul>
                <ul className='order-item'>
                  <li className='order-item-details'>
                    <div className='order-item-img'>
                      <img src="https://via.placeholder.com/200" alt="product image" />
                    </div>
                    <ul className='order-details-sec'>
                      <li><strong>Title</strong>: Geni product</li>
                      <li><strong>Description</strong>: A product for your bab</li>
                      <li><strong>Product type</strong>: Diaper</li>
                    </ul>
                    <ul className='order-details-sec'>
                      <li><strong>Qty</strong>: 1 item</li>
                      <li><strong>Price</strong>: $500</li>
                      <li><strong>Total</strong>: $500</li>
                    </ul>
                  </li>
                </ul>
              </section>
            </details>
            <details className=''>
              <summary className='flex justify-center items-center'>
                <ul className='order-list-item'>
                  <li className='flex items-center gap-[7px] jc'>
                    <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                      <FaUser className='text-[#91abafbb] text-[24px]' />
                    </div>
                    <div>
                      <h1>Megalone Mata</h1>
                      <p>megalone@gamil.com</p>
                    </div>
                  </li>
                  <li className='special-color'>$360.00</li>
                  <li>2022-03-20</li>
                  <li>12:00:00</li>
                  <li className='special-color2'>Pending</li>
                </ul>
              </summary>
              <section className='order-item-p'>
                <ul className='order-item'>
                  <li className='order-item-details'>
                    <div className='order-item-img'>
                      <img src="https://via.placeholder.com/200" alt="product image" />
                    </div>
                    <ul className='order-details-sec'>
                      <li><strong>Title</strong>: Geni product</li>
                      <li><strong>Description</strong>: A product for your bab</li>
                      <li><strong>Product type</strong>: Diaper</li>
                    </ul>
                    <ul className='order-details-sec'>
                      <li><strong>Qty</strong>: 1 item</li>
                      <li><strong>Price</strong>: $500</li>
                      <li><strong>Total</strong>: $500</li>
                    </ul>
                  </li>
                </ul>
                <ul className='order-item'>
                  <li className='order-item-details'>
                    <div className='order-item-img'>
                      <img src="https://via.placeholder.com/200" alt="product image" />
                    </div>
                    <ul className='order-details-sec'>
                      <li><strong>Title</strong>: Geni product</li>
                      <li><strong>Description</strong>: A product for your bab</li>
                      <li><strong>Product type</strong>: Diaper</li>
                    </ul>
                    <ul className='order-details-sec'>
                      <li><strong>Qty</strong>: 1 item</li>
                      <li><strong>Price</strong>: $500</li>
                      <li><strong>Total</strong>: $500</li>
                    </ul>
                  </li>
                </ul>
              </section>
            </details>
            <details className=''>
              <summary className='flex justify-center items-center'>
                <ul className='order-list-item'>
                  <li className='flex items-center gap-[7px] jc'>
                    <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                      <FaUser className='text-[#91abafbb] text-[24px]' />
                    </div>
                    <div>
                      <h1>Megalone Mata</h1>
                      <p>megalone@gamil.com</p>
                    </div>
                  </li>
                  <li className='special-color'>$360.00</li>
                  <li>2022-03-20</li>
                  <li>12:00:00</li>
                  <li className='special-color2'>Pending</li>
                </ul>
              </summary>
              <section className='order-item-p'>
                <ul className='order-item'>
                  <li className='order-item-details'>
                    <div className='order-item-img'>
                      <img src="https://via.placeholder.com/200" alt="product image" />
                    </div>
                    <ul className='order-details-sec'>
                      <li><strong>Title</strong>: Geni product</li>
                      <li><strong>Description</strong>: A product for your bab</li>
                      <li><strong>Product type</strong>: Diaper</li>
                    </ul>
                    <ul className='order-details-sec'>
                      <li><strong>Qty</strong>: 1 item</li>
                      <li><strong>Price</strong>: $500</li>
                      <li><strong>Total</strong>: $500</li>
                    </ul>
                  </li>
                </ul>
                <ul className='order-item'>
                  <li className='order-item-details'>
                    <div className='order-item-img'>
                      <img src="https://via.placeholder.com/200" alt="product image" />
                    </div>
                    <ul className='order-details-sec'>
                      <li><strong>Title</strong>: Geni product</li>
                      <li><strong>Description</strong>: A product for your bab</li>
                      <li><strong>Product type</strong>: Diaper</li>
                    </ul>
                    <ul className='order-details-sec'>
                      <li><strong>Qty</strong>: 1 item</li>
                      <li><strong>Price</strong>: $500</li>
                      <li><strong>Total</strong>: $500</li>
                    </ul>
                  </li>
                </ul>
              </section>
            </details>
            <details className=''>
              <summary className='flex justify-center items-center'>
                <ul className='order-list-item'>
                  <li className='flex items-center gap-[7px] jc'>
                    <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                      <FaUser className='text-[#91abafbb] text-[24px]' />
                    </div>
                    <div>
                      <h1>Megalone Mata</h1>
                      <p>megalone@gamil.com</p>
                    </div>
                  </li>
                  <li className='special-color'>$360.00</li>
                  <li>2022-03-20</li>
                  <li>12:00:00</li>
                  <li className='special-color2'>Pending</li>
                </ul>
              </summary>
              <section className='order-item-p'>
                <ul className='order-item'>
                  <li className='order-item-details'>
                    <div className='order-item-img'>
                      <img src="https://via.placeholder.com/200" alt="product image" />
                    </div>
                    <ul className='order-details-sec'>
                      <li><strong>Title</strong>: Geni product</li>
                      <li><strong>Description</strong>: A product for your bab</li>
                      <li><strong>Product type</strong>: Diaper</li>
                    </ul>
                    <ul className='order-details-sec'>
                      <li><strong>Qty</strong>: 1 item</li>
                      <li><strong>Price</strong>: $500</li>
                      <li><strong>Total</strong>: $500</li>
                    </ul>
                  </li>
                </ul>
                <ul className='order-item'>
                  <li className='order-item-details'>
                    <div className='order-item-img'>
                      <img src="https://via.placeholder.com/200" alt="product image" />
                    </div>
                    <ul className='order-details-sec'>
                      <li><strong>Title</strong>: Geni product</li>
                      <li><strong>Description</strong>: A product for your bab</li>
                      <li><strong>Product type</strong>: Diaper</li>
                    </ul>
                    <ul className='order-details-sec'>
                      <li><strong>Qty</strong>: 1 item</li>
                      <li><strong>Price</strong>: $500</li>
                      <li><strong>Total</strong>: $500</li>
                    </ul>
                  </li>
                </ul>
              </section>
            </details>
            <details className=''>
              <summary className='flex justify-center items-center'>
                <ul className='order-list-item'>
                  <li className='flex items-center gap-[7px] jc'>
                    <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                      <FaUser className='text-[#91abafbb] text-[24px]' />
                    </div>
                    <div>
                      <h1>Megalone Mata</h1>
                      <p>megalone@gamil.com</p>
                    </div>
                  </li>
                  <li className='special-color'>$360.00</li>
                  <li>2022-03-20</li>
                  <li>12:00:00</li>
                  <li className='special-color2'>Pending</li>
                </ul>
              </summary>
              <section className='order-item-p'>
                <ul className='order-item'>
                  <li className='order-item-details'>
                    <div className='order-item-img'>
                      <img src="https://via.placeholder.com/200" alt="product image" />
                    </div>
                    <ul className='order-details-sec'>
                      <li><strong>Title</strong>: Geni product</li>
                      <li><strong>Description</strong>: A product for your bab</li>
                      <li><strong>Product type</strong>: Diaper</li>
                    </ul>
                    <ul className='order-details-sec'>
                      <li><strong>Qty</strong>: 1 item</li>
                      <li><strong>Price</strong>: $500</li>
                      <li><strong>Total</strong>: $500</li>
                    </ul>
                  </li>
                </ul>
                <ul className='order-item'>
                  <li className='order-item-details'>
                    <div className='order-item-img'>
                      <img src="https://via.placeholder.com/200" alt="product image" />
                    </div>
                    <ul className='order-details-sec'>
                      <li><strong>Title</strong>: Geni product</li>
                      <li><strong>Description</strong>: A product for your bab</li>
                      <li><strong>Product type</strong>: Diaper</li>
                    </ul>
                    <ul className='order-details-sec'>
                      <li><strong>Qty</strong>: 1 item</li>
                      <li><strong>Price</strong>: $500</li>
                      <li><strong>Total</strong>: $500</li>
                    </ul>
                  </li>
                </ul>
              </section>
            </details>
          </section>
          <section className='top-0 sticky order-detail-sum'>
            <h1>Order summary</h1>
            <div className='order-detail-sum-child'>
              <ul>
                <li>Category</li>
                <li>Subtotal</li>
              </ul>
              <ul>
                <li>Valies</li>
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
              <select className='w-full filter-drop'>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="canceled">Canceled</option>
              </select>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}




