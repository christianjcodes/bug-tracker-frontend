import * as React from 'react';
import SideBar from '../components/SideBar';


export default function Page() {
    return (
        <>
            <div className='h-screen w-screen flex flex-col'>    
                
                <SideBar />

                <h1 className='mt-4 ml-[17rem] mb-4 text-3xl 
                    text-sky-500 drop-shadow-md'>Dashboard</h1>
            
                <div id='projects' className='flex flex-col 
                    h-[45vh] mb-[5vh] ml-[17rem] mr-[10vh] bg-white
                    shadow-lg rounded-lg'>
                    <h1>Projects Go Here</h1>
                </div>

                <div id='stats' className='flex flex-col 
                    h-[35vh] mb-[5vh] ml-[17rem] mr-[10vh] bg-white
                    shadow-lg rounded-lg'>
                    <h1>Stats Go Here</h1>
                </div>

            </div>
        </>
    );
}
