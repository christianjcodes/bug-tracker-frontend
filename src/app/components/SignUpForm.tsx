import React from 'react'
import { FaBug } from 'react-icons/fa'
import Link from 'next/link'

const SignUpForm = () => {
  return (
    <>
        <div className="w-full max-w-xs mt-[19vh]">
            <form className="bg-white dark:bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className='mb-4 flex text-black dark:text-teal-300 font-semibold text-xl justify-center space-x-1.5'>
                <FaBug size="26"/>
                <h1>
                  Bug Tracker
                </h1>
              </div>
              <div className="mb-4 flex text-sky-500 font-semibold text-xl justify-center">
                <h1>Create New Account</h1>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input className="
                  shadow
                  dark:bg-slate-800
                  appearance-none
                  border rounded
                  dark:border-black
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  dark:text-white
                  leading-tight
                  focus:outline-none
                  focus:shadow-outline"
                  id="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="First Name"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input className="
                  shadow
                  dark:bg-slate-800
                  appearance-none
                  border rounded
                  dark:border-black
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  dark:text-white
                  leading-tight
                  focus:outline-none
                  focus:shadow-outline"
                  id="lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Last Name"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input className="
                  shadow
                  dark:bg-slate-800 
                  appearance-none 
                  border rounded
                  dark:border-black 
                  w-full 
                  py-2 
                  px-3 
                  text-gray-700
                  dark:text-white 
                  leading-tight 
                  focus:outline-none 
                  focus:shadow-outline" 
                  id="newEmail" 
                  type="text" 
                  placeholder="Email"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input className="
                    shadow
                    dark:bg-slate-800 
                    appearance-none 
                    border rounded
                    dark:border-black 
                    w-full 
                    py-2 
                    px-3 
                    text-gray-700
                    dark:text-white 
                    mb-2 
                    leading-tight 
                    focus:outline-none 
                    focus:shadow-outline" 
                    id="newPassword" 
                    type="password" 
                    autoComplete="new-password"
                    placeholder="**********"/>
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
                    Sign Up
                  </button>
                </Link>
                <div className="
                  inline-block 
                  align-baseline 
                  font-bold 
                  text-sm 
                  text-sky-500 
                  hover:text-sky-700">
                  <Link href="/">
                    Existing User?
                  </Link>
                </div>
              </div>
            </form>
          </div>
    </>
  )
}

export default SignUpForm