'use client'
import React from 'react'
import { FaBug } from 'react-icons/fa';
import ToggleDark from './ToggleDark';

const Header = () => {
  return (
    <nav className='fixed w-full h-16 shadow-sm dark:shadow-none bg-white dark:bg-slate-800 dark:text-teal-300 mb-4'>
        <div className='flex justify-between items-center h-full w-full px-4'>
            <div className='flex justify-center space-x-2 text-lg font-semibold'>
                <FaBug size="26"/>
                <h1>Bug Tracker</h1>
            </div>
            <div><ToggleDark /></div>
        </div>
    </nav>
  );
}

export default Header