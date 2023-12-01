import * as React from "react";
import SideBar from "@/app/components/SideBar";

export default function Page() {
    return (
        <>
            <div className="h-screen w-screen flex flex-col">

                <SideBar/>

                <main className='flex items-center justify-center flex-col 
                    h-[89vh] mb-[5vh] mt-[5vh] ml-[17rem] mr-[10vh] bg-white
                    shadow-lg rounded-lg'>
                    <h1>Ticket Content Goes Here</h1>
                </main>
            </div>
        </>
    );
}