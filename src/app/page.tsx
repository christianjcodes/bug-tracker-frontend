import * as React from "react";
import LoginForm from "./components/LoginForm";


export default function Home() {

  return (
    <div className='h-screen w-screen flex flex-col align-bottom'>
      <div className='h-[70vh] flex justify-center items-center'>
        <LoginForm />
      </div>
    </div>
  );
}
