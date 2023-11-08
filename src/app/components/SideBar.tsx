import { FaBug } from "react-icons/fa";

const SideBar = () => {

    return (
        <div className="fixed top-0 left-0 h-screen w-64 m-0
                        flex flex-col bg-teal-500 text-black
                        shadow-lg">
            <SideBarIcon icon={<FaBug size="38" />} />
            <i>Projects</i>
            <i>B</i>
            <i>C</i>
            <i>D</i>
            <i>E</i>

        </div>
    )
};

const SideBarIcon = ({ icon }:any) => (
    <div className="sidebar-icon">
        {icon}
    </div>
);

export default SideBar;