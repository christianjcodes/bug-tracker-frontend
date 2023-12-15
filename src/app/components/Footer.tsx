import * as React from 'react';
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='mt-auto'>
            <footer className='absolute bottom-0 flex flex-row justify-center w-full text-slate-600
                                space-x-4 pb-4 dark:text-white ml-auto mr-auto'>
                <p>Christian Johnson &copy; {new Date().getFullYear()}</p>
                <div className='hover:text-white'>
                    <Link href="https://github.com/christianjcodes">
                        <FaGithub size="24"/>
                    </Link>
                </div>
            </footer>
        </div>
    );
}