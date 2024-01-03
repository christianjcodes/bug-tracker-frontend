import React from 'react';
import { cn } from '../lib/utils';

type Props = {}

export default function SideBar({}: Props) {
  return (
    <nav className={cn(
      'min-h-screen max-h-screen mt-[4rem] overflow-y-auto w-fit md:pr-8 pr-3 pt-2 flex flex-col gap-3 border-r-[1px] dark:border-r-slate-700 pl-[50px] dark:bg-slate-800 dark:text-white'
      )}
    >
      <HoverContainer>
        SideBar
      </HoverContainer>
    </nav>
  )
}

function HoverContainer({
  children, className
}: {
  children: React.ReactNode; 
  className?: string;
}) {
  return ( 
    <div className='p-3 transition-all rounded-full cursor-pointer
    hover:bg-gray-200 w-fit dark:hover:bg-zinc-900'>
      {children}
    </div>
  );
}