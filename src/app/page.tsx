
import styles from './page.module.css';
import Link from 'next/link';
import * as React from "react";
import Background from './components/Background';


export default function Home() {

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
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
            id="username" 
            type="text" 
            placeholder="Username"/>
        </div>
        <div className="mb-6">
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
          mb-3 
          leading-tight 
          focus:outline-none 
          focus:shadow-outline" 
          id="password" 
          type="password" 
          placeholder="******************"/>
        </div>
        <div className="flex items-center justify-between">
          <Link href="/dashboard">
            <button className="
              bg-teal-500 
              hover:bg-teal-600 
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
            text-teal-500 
            hover:text-teal-700">
            <Link href="/forgot-password">
              Forgot Password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
