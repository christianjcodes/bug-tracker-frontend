import { useState, useEffect } from "react";
import * as React from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa";

const [theme, setTheme] = useState('');

useEffect(() => {

    const theme = JSON.parse(localStorage.getItem('theme') || '{}');

    if ((!theme && 
      window.matchMedia('(prefers-color-scheme: dark)').matches) || theme === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

function toggleTheme() {
    if (theme === 'light') {
        localStorage.setItem('theme', JSON.stringify('dark'));
        setTheme('dark');
        document.documentElement.classList.add('dark');
    } else {
        localStorage.setItem('theme', JSON.stringify('light'));
        setTheme('light');
        document.documentElement.classList.remove('dark');
    }

}

export default function ToggleDark() {
    return (
        <button
            className="theme-toggle dark:text-white text-xl"
            onClick={toggleTheme}
        >
            {theme === "dark" ? (
                <FaRegSun />
            ) : (
                <FaRegMoon />
            )}

        </button>
    );
}