import * as React from 'react';
import SideBar from '../components/SideBar';

export default function Page() {
    return (
        <>
            <div className='h-screen w-screen flex flex-col
                bg-gradient-to-br from-slate-50 to-emerald-300 overflow-hidden'>    
                
                <SideBar />
            
                <main className='flex items-center justify-center flex-col h-[75vh]'>
                    <h1>Main Content Goes Here</h1>
                </main>
                
            </div>
        </>
    );
}
