import * as React from "react";
import LoginForm from "./components/LoginForm";
import styles from "./page.module.css";


export default function Home() {

  return (
    <div className={styles.homePage}>
      <div className='h-screen w-screen flex flex-col align-bottom'>
        <div className='h-[70vh] flex justify-center items-center'>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
