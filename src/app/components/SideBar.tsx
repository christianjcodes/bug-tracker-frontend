import React from 'react'

type Props = {}

export default function SideBar({}: Props) {
  return (
    <nav className='min-h-screen max-h-screen mt-[4rem] overflow-y-auto w-fit md:pr-8
        pr-3 pt-2 flex flex-col gap-3 border-r-[1px] dark:border-r-slate-700 pl-[50px] dark:bg-slate-800'>
        SideBar
    </nav>
  )
}