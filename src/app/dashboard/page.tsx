import * as React from 'react';
import SideBar from '../components/SideBar';
import Waves from '../components/Waves';

export default function Page() {
    return (
        <div className='h-screen w-screen flex flex-col align-bottom
            bg-gradient-to-br from-slate-50 to-emerald-300 overflow-hidden'>
            
            <div className='flex h-[70vh]'>
                <SideBar />
            </div>

            <div className='w-full max-w-xl'>
                <div className='bg-white shadow-md rounded px-8 justify-center space-x-1.5'>

                </div>
            </div>
            <Waves />
        </div>
    );
}
