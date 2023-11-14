import { FaBug } from "react-icons/fa";
import Link from "next/link";
import Button from '@mui/material/Button';

const SideBar = () => {

    return (
        <div className="fixed top-0 left-0 h-screen w-44 m-0
                        flex flex-col bg-stone-50 text-slate-600
                        shadow-lg 
                        dark:text-white  dark:bg-slate-800">
            <div className="flex flex-row text-teal-500">
                <SideBarIcon icon={<FaBug size="38" />} />
                <h1 className="ml-2 mt-4 font-bold">Bug Tracker</h1>
            </div>
            <div className="ml-2 space-y-4">
                <h3 className="hover:text-cyan-500"><Link href="/dashboard">Dashboard</Link></h3>
                <h3 className="hover:text-cyan-500"><Link href="/dashboard/tickets">Tickets</Link></h3>
                <h3 className="hover:text-cyan-500"><Link href="/dashboard/admin">Administration</Link></h3>
            </div>
            <div className="flex justify-center items-center mt-10">
                <Link href="/">
                    <Button variant="outlined" size="medium">Sign Out</Button>
                </Link>
            </div>
        </div>
    )
};

const SideBarIcon = ({ icon }:any) => (
    <div className="sidebar-icon">
        {icon}
    </div>
);

export default SideBar;