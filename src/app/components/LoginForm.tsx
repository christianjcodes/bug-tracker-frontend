import React from 'react'
import { FaBug } from 'react-icons/fa';
import Link from 'next/link';

const LoginForm = () => {
  return (
    <> 
        <div className="w-full max-w-xs mt-4">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className='mb-4 flex text-teal-500 font-bold text-xl justify-center space-x-1.5'>
                    <FaBug size="26"/>
                    <h1>
                        Bug Tracker
                    </h1>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="
                        shadow 
                        appearance-none 
                        border rounded 
                        w-full 
                        py-2 
                        px-3 
                        text-gray-700 
                        leading-tight 
                        focus:outline-none 
                        focus:shadow-outline" 
                        id="email" 
                        type="text"
                        autoComplete="email"
                        placeholder="Email"/>
                </div>
                <div className="mb-[1px]">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="
                    shadow 
                    appearance-none 
                    border 
                    rounded 
                    w-full 
                    py-2 
                    px-3 
                    text-gray-700 
                    mb-2 
                    leading-tight 
                    focus:outline-none 
                    focus:shadow-outline" 
                    id="password" 
                    type="password" 
                    autoComplete="current-password"
                    placeholder="**********"/>
                </div>
                <div className='
                    mb-6
                    inline-block
                    font-bold
                    text-sm
                    text-gray-500
                    hover:text-gray-700'>
                    <Link href="/forgot-password">
                        Forgot Password?
                    </Link>
                </div>
                <div className="flex items-center justify-between">
                    <Link href="/dashboard">
                        <button className="
                        bg-sky-500 
                        hover:bg-sky-600 
                        text-white 
                        font-semibold 
                        py-2 
                        px-4 
                        rounded 
                        focus:outline-none 
                        focus:shadow-outline" type="button">
                        Sign In
                        </button>
                    </Link>
                    <div className="
                        inline-block 
                        align-baseline 
                        font-bold 
                        text-sm 
                        text-sky-500 
                        hover:text-sky-700">
                        <Link href="/new-user">
                        New User?
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default LoginForm