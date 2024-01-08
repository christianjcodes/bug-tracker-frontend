import * as React from "react";
import SignUpForm from "../components/SignUpForm";
import styles from "../page.module.css";


export default function Page() {
    return (
      <div className={styles.homePage}>
        <div className='h-screen w-screen flex flex-col align-bottom'>
          <div className='h-[70vh] flex justify-center items-center'>
            <SignUpForm />
          </div>
        </div>
      </div>
    );
}