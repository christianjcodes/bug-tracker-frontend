import * as React from 'react';
import SideBar from '../components/SideBar';


export default function Page() {
    return (
        <>
            <div className='h-screen w-screen flex flex-col'>    
                
                <SideBar />
            
                <div id='projects' className='flex flex-row mt-[10vh] 
                    h-[45vh] mb-[5vh] ml-[17rem] mr-[10vh] bg-white
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
                    h-[35vh] mb-[5vh] ml-[17rem] mr-[10vh] bg-white
                    shadow-lg rounded-lg'>
                    <h1>Stats Go Here</h1>
                </div>

            </div>
        </>
    );
}
