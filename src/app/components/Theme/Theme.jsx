'use client'
import React, { useContext } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { ThemeContext } from '../../../../context/ThemeContext';

export default function Theme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className='right-[4px] absolute'>

      <ul className='absolute flex flex-col gap-[5px] rounded-[8px] w-[140px] text-[#fff] cursor-pointer theme-panel'>
        {
          theme == 'dark' ?
            <li className='flex justify-center items-center gap-[8px]' onClick={() => {
              toggleTheme();
              typeof window !== 'undefined' && window.localStorage.setItem('theme', 'light');
            }}>
              <IoMdMoon className='font-[600]' color='gold' />
            </li>
            :
            <li className='flex justify-center items-center gap-[8px]' onClick={() => {
              toggleTheme();
              typeof window !== 'undefined' && window.localStorage.setItem('theme', 'dark');
            }}>
              <IoSunnyOutline className='font-[600]' color='gold' />
            </li>
        }
      </ul>
    </div>
  )
}
