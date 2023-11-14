import { useState } from "react";
import * as React from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa";

const [theme] = useState('');

function toggleTheme() {
    if (theme === 'light')
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