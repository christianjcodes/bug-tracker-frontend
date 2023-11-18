import { FaBug } from "react-icons/fa";
import Link from "next/link";

const SideBar = () => {

    return (
        <div className="fixed top-0 left-0 h-screen w-44 m-0
                        flex flex-col bg-slate-50 text-sky-500
                        shadow-lg 
                        dark:text-white  dark:bg-slate-800">
            <div className="ml-1.5 flex flex-row text-teal-500">
                <SideBarIcon icon={<FaBug size="38" />} />
                <h1 className="ml-2 mt-4 font-bold">Bug Tracker</h1>
            </div>
            <div className="ml-4 space-y-8 font-bold">
                <h3 className="hover:text-sky-700"><Link href="/dashboard">Dashboard</Link></h3>
                <h3 className="hover:text-sky-700"><Link href="/dashboard/tickets">Tickets</Link></h3>
                <h3 className="hover:text-sky-700"><Link href="/dashboard/admin">Administration</Link></h3>
            </div>
            <div className="flex justify-center items-center mt-10">
                <Link href="/">
                    <button className="
                        h-10 
                        px-5
                        text-l
                        font-semibold
                        text-red-500 
                        transition-colors 
                        duration-150 
                        border 
                        border-red-500 
                        rounded-lg 
                        focus:shadow-outline 
                        hover:bg-red-700 
                        hover:text-red-100">
                        Sign Out
                    </button>
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