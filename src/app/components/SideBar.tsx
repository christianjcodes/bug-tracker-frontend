'use client'
import React, { useState } from 'react';
import { cn } from '../lib/utils';

import { MdOutlineDashboard, MdDashboard } from "react-icons/md";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { IoTicketOutline, IoTicket } from "react-icons/io5";
import { RiAdminLine, RiAdminFill } from "react-icons/ri";
import { IoIosPower } from "react-icons/io";
import { IoMdPower } from "react-icons/io";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAutoAnimate } from '@formkit/auto-animate/react';


type Props = {}

interface SideNavItemType {
  icon?: {
    icon:React.ReactNode;
    fillIcon: React.ReactNode;
  };
  label: string;
  href: string;
}

const sidebarItems: SideNavItemType[] = [
  {
    href: "/dashboard",
    label: "Dashboard", 
    icon:{
      icon:<MdOutlineDashboard />,
      fillIcon:<MdDashboard />
    }
  },
  {
    href: "/dashboard/tickets",
    label: "Tickets", 
    icon:{
      icon:<IoTicketOutline />,
      fillIcon:<IoTicket />
    }
  },
  {
    href: "/dashboard/admin",
    label: "Administration", 
    icon:{
      icon:<RiAdminLine />,
      fillIcon:<RiAdminFill />
    }
  },
  {
    href: "/",
    label: "Sign Out", 
    icon:{
      icon:<IoIosPower />,
      fillIcon:<IoMdPower />
    }
  }
]

export default function SideBar({}: Props) {

  const [isSidebarOpen, setSideBarOpen] = useState(true);

  return (
    <nav className={cn(
      'min-h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] mt-[4rem] overflow-y-auto w-fit md:pr-8 pr-3 ' + 
      'pt-2 flex flex-col gap-3 border-r-[1px] pl-[35px] ' +
      'dark:bg-slate-900 dark:border-r-slate-700 dark:text-sky-400 shadow-md dark:shadow-none' ,
      isSidebarOpen && 'md:w-[300px]'
      )}
    >

      {/* sidenavitems */}

      {sidebarItems.map((d, i) => (
        <HoverContainer key={i}>
          <SideNavItem 
            icon={d.icon}
            href={d.href}
            isSideBarOpen={isSidebarOpen}
            label={d.label}
          />
        </HoverContainer>
      ))}

      {/* toggle button */}
      <section className={cn('flex w-full justify-end',
        !isSidebarOpen && 'justify-start')}>
        <HoverContainer>
          <RiArrowLeftDoubleFill 
            onClick={() =>setSideBarOpen(!isSidebarOpen)}
            className={cn("text-gray-400 transition-all text-3xl dark:text-gray-600",
            !isSidebarOpen && "rotate-180" )}/>
        </HoverContainer>
      </section>

    </nav>
  )
}

function SideNavItem({ 
  href, 
  isSideBarOpen, 
  icon, 
  label
}: SideNavItemType & { isSideBarOpen: boolean }) {
  const [animationParent] = useAutoAnimate();

  const pathname = usePathname();
  const isActivePage = pathname == href;

  return (
    <Link 
      ref={animationParent}
      href={href} className='flex gap-2 items-center cursor-pointer'>
      {/* icon */}
      <div className='w-[35px] h-[35px] text-3xl flex items-center'>
        {/* <MdOutlineDashboard /> */}
        {isActivePage ? icon?.fillIcon : icon?.icon}
      </div>
      {/* label */}
      { isSideBarOpen && (
        <p className={cn('text-xl hidden md:block pr-2 transition-all',
          isActivePage && 'font-bold')}>
          {label}
        </p>
      )}
    </Link>
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
    hover:bg-gray-200 w-fit dark:hover:bg-slate-800 group-hover:dark:bg-slate-800
    group-hover:bg-gray-200'>
      {children}
    </div>
  );
}