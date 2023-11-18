import * as React from 'react';
import SideBar from '../components/SideBar';
import Waves from '../components/Waves';

const Page = () => {
    return (
        <div className='h-screen w-screen flex flex-col align-bottom bg-gradient-to-br from-slate-50 to-emerald-300'>
            <div className='flex flex-col min-h-screen relative pb-20'>
                <SideBar />
            </div>
            <Waves/>
        </div>
        
    );
}

export default Page;