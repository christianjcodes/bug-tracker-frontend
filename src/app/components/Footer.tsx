import * as React from 'react';
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div>
                <p>Christian Johnson &copy; {new Date().getFullYear()}</p>
                <Link href="https://github.com/christianjcodes">
                    <FaGithub size="28"/>
                </Link>
            </div>
        </footer>
    );
}