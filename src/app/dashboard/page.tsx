import * as React from 'react';
import SideBar from '../components/SideBar';

const Page = () => {
    return (
        <>
            <div className='flex flex-col min-h-screen relative pb-20'>
                <SideBar />
            </div>
        </>
        
    );
}

export default Page;