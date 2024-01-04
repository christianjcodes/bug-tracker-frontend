import React from 'react';
import { cn } from '../lib/utils';
import { MdOutlineDashboard } from "react-icons/md";
import { RiArrowLeftDoubleFill } from "react-icons/ri";


type Props = {}

export default function SideBar({}: Props) {
  return (
    <nav className={cn(
      'min-h-screen max-h-screen mt-[4rem] overflow-y-auto w-fit md:pr-8 pr-3 pt-2 flex flex-col gap-3 border-r-[1px] dark:border-r-slate-700 pl-[50px] dark:bg-slate-800 dark:text-white'
      )}
    >
      <HoverContainer>
        <SideNavItem />
      </HoverContainer>

      {/* toggle button */}
      <RiArrowLeftDoubleFill />

    </nav>
  )
}

function SideNavItem() {
  return <div className='flex gap-2 items-center cursor-pointer'>

    {/* icon */}
    <div className='w-[35px] h-[35px] text-3xl flex items-center'>
      <MdOutlineDashboard />
    </div>
    {/* label */}
    <p className='text-xl hidden md:block transition-all'>Dashboard</p>
  </div>
}

function HoverContainer({
  children, className
}: {
  children: React.ReactNode; 
  className?: string;
}) {
  return ( 
    <div className='p-3 transition-all rounded-full cursor-pointer
    hover:bg-gray-200 w-fit dark:hover:bg-zinc-900 group-hover:dark:bg-zinc-900
    group-hover:bg-gray-200'>
      {children}
    </div>
  );
}