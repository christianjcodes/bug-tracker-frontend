'use client';

import { usePathname } from "next/navigation";

export default function Pathname() {
    
    const pathname = usePathname();

    const string = pathname.toString();
    return string;
}