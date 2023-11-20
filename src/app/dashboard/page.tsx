import * as React from 'react';
import SideBar from '../components/SideBar';
import Waves from '../components/Waves';

export default function Page() {
    return (
        <div className='h-screen w-screen flex flex-col align-bottom
            bg-gradient-to-br from-slate-50 to-emerald-300'>
            <div className='flex h-[70vh]'>
                <SideBar />
            </div>
            <Waves />
        </div>
    );
}
