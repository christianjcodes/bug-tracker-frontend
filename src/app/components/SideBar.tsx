import { FaBug } from "react-icons/fa";
import Link from "next/link";

const SideBar = () => {

    return (
        <div className="fixed top-0 left-0 h-screen w-44 m-0
                        flex flex-col bg-stone-50 text-black
                        shadow-lg">
            <div className="flex flex-row">
                <SideBarIcon icon={<FaBug size="38" />} />
                <h1 className="ml-2 mt-4 font-bold">Bug Tracker</h1>
            </div>
            <div className="ml-2 space-y-4">
                <h3>Dashboard</h3>
                <h3>Tickets</h3>
                <h3>Administration</h3>
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