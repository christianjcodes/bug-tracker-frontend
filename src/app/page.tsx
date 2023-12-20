'use client'
import * as React from "react";
import LoginForm from "./components/LoginForm";
import styles from "./page.module.css";
import { useTheme } from "next-themes";


export default function Home() {

  const { systemTheme, theme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  var classStyle;

  if (currentTheme == 'dark') {
    classStyle = styles.homePageDark;
  }  

  return (
    <div className={styles.homePageDark}>
      <div className='h-screen w-screen flex flex-col align-bottom'>
        <div className='h-[70vh] flex justify-center items-center'>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
