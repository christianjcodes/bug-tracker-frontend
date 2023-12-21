import { useState, useEffect } from "react";
import * as React from "react";
import { FaSun, FaRegMoon } from "react-icons/fa";

export default function ToggleDark() {

    const [theme, setTheme] = useState('');

    useEffect(() => {

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


    return (
        <button
            className="theme-toggle hover:scale-125 dark:text-teal-300 text-xl"
            onClick={toggleTheme}
        >
            {theme === "dark" ? (
                <FaSun />
            ) : (
                <FaRegMoon />
            )}

        </button>
    );
}