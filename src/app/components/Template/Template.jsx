import React, { useContext } from 'react'
import Theme from '../Theme/Theme';
import './template.css';
import { GoSearch } from "react-icons/go";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";
import { FcSurvey } from "react-icons/fc";
import { IoIosHome } from "react-icons/io";
import { DiGhostSmall } from "react-icons/di";
import { MdMessage } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { MdRequestQuote } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { FaBell } from "react-icons/fa6";
import { MdLiveHelp } from "react-icons/md";
import { GlobalContext } from '../../../../context/GlobalContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function Template() {

    const navigation = useRouter()
    
    return (

        <section className='top-0 sticky'>
            <div className='box-border flex flex-col justify-between items-start h-[100vh] side-bar'>
                <section className='box-border flex flex-col gap-[60px] pt-[30px] w-full'>
                    <h1 className='font-[500]'>Dashboard</h1>
                    <ul className='template-nav'>
                        <li >
                            <Link href='#'>
                                <IoIosHome className='text-[20px]' />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href='/dashboard/upload'>
                                <DiGhostSmall className='text-[20px]' />
                                <span>Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link href='/dashboard/message'>
                                <MdMessage className='text-[18px]' />
                                <span>Messages</span>
                            </Link>
                        </li>
                        <li>
                            <Link href='/dashboard/client'>
                                <HiUsers className='text-[18px]' />
                                <span>Clients</span>
                            </Link>
                        </li>
                        <li>
                            <Link href='/dashboard/command'>
                                <MdRequestQuote className='text-[18px]' />
                                <span>Orders</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/help">
                                <MdLiveHelp className='text-[18px]' />
                                <span>Help</span>
                            </Link>
                        </li>
                    </ul>
                </section>
                <button className='btn-logout'
                onClick={()=>{ localStorage.removeItem('adminData'); navigation.push('/')}} 
                >
                    <AiOutlineLogout  className='text-[18px]' />
                    <span>Logout</span>
                </button>
            </div>
        </section>

    )
}

export function NavTemplate({path}) {
 

    return (
        <section className='box-border flex flex-col gap-[20px] w-[100%]'>
            <div className='relative box-border flex justify-between pr-[7%] h-[40px]'>
                <Theme />
                <div className='relative w-[40%]'>
                    <GoSearch className='top-[11px] left-[8px] absolute' />
                    <input className='px-[30px] py-[7px] rounded-[6px] w-[100%] dash-search' type="search" name="search" placeholder='Tap to search' id="" />
                </div>
                <div className='flex justify-center items-center gap-[20px]'>
                    <section>
                        <h1 className='font-[500] text-[15px]'>{path}</h1>
                    </section>
                    <section className='flex justify-center items-center rounded-full w-[30px] h-[30px]'>
                        <FaBell className='text-[#91abafbb] text-[24px]' />
                    </section>
                    <section className='flex justify-center items-center gap-[10px]'>
                        <div className='rounded-full w-[30px] h-[30px]'>
                            <FaUser className='w-[25px] h-[25px] text-[#91abafbb] text-[24px]' size={20} />
                        </div>
                        <div>
                            <h1 className='font-[500] text-[13px]'>David Spade</h1>
                            <p className='font-[400] text-[11px]'>Salse Admin</p>
                        </div>
                    </section>
                </div>
            </div>
            <div className='invoice-header'>
                <section className='flex justify-center gap-[16px]'>
                    <div className='flex justify-center items-center rounded-full w-[20px] h-[20px] overflow-hidden'>
                        <FcCurrencyExchange className='w-[25px] h-[25px] text-[30px]' size={20} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h3 className='font-[500] text-[13px]'>Total Revenue</h3>
                        <p className='font-[500] text-[20px]'>216K</p>
                    </div>
                </section>
                <section className='flex justify-center gap-[16px]'>
                    <div className='flex justify-center items-center rounded-full w-[20px] h-[20px] overflow-hidden'>
                        <FcPositiveDynamic className='w-[25px] h-[25px] text-[30px]' size={20} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h3 className='font-[500] text-[13px]'>Orders</h3>
                        <p className='font-[500] text-[20px]'>1,234K</p>
                    </div>
                </section>
                <section className='flex justify-center gap-[16px]'>
                    <div className='flex justify-center items-center rounded-full w-[20px] h-[20px] overflow-hidden'>
                        <FcManager className='w-[25px] h-[25px] text-[30px]' size={20} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h3 className='font-[500] text-[13px]'>Clinets</h3>
                        <p className='font-[500] text-[20px]'>5,000K</p>
                    </div>
                </section>
                <section className='flex justify-center gap-[10px]'>
                    <div className='flex justify-center items-center rounded-full w-[20px] h-[20px] overflow-hidden'>
                        <FcSurvey className='w-[25px] h-[25px] text-[30px]' size={20} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h3 className='font-[500] text-[13px]'>Products</h3>
                        <p className='font-[500] text-[20px]'>3,500K</p>
                    </div>
                </section>
            </div>
        </section>
    )
}
