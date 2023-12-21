import * as React from 'react';
import SideBar from '../components/SideBar';


export default function Page() {
    return (
        <>
            <div className='h-screen w-screen flex flex-col bg-white dark:bg-black'>    
                
                {/* <SideBar /> */}
            
                <div id='projects' className='flex flex-row mt-[10vh] ml-8 mr-8 mb-8 
                    h-[45vh] bg-white dark:bg-slate-800 dark:text-white
                    shadow-lg rounded-lg'>
                    <h1>Projects Go Here</h1>
                    <button className='
                        bg-sky-500 
                        hover:bg-sky-600 
                        text-white 
                        font-semibold 
                        h-10
                        w-21
                        py-2 
                        px-4 
                        rounded 
                        focus:outline-none 
                        focus:shadow-outline" type="button'>
                        New Project
                    </button>
                </div>

                <div id='stats' className='flex flex-col 
                    h-[35vh] mb-[5vh] ml-8 mr-8 bg-white dark:bg-slate-800 dark:text-white
                    shadow-lg rounded-lg'>
                    <h1>Stats Go Here</h1>
                </div>

            </div>
        </>
    );
}
