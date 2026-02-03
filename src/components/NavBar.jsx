import {FaDna, FaMoon} from "react-icons/fa";
import {MdAlarm, MdFolder, MdHome, MdPages, MdPhone, MdWork} from "react-icons/md";
const NavBar = () => {
return    (

        <div className=" w-35 h-162 rounded-xl mt-3 bg-gray-400 fixed top-0 left-7  ">
                <div className="flex flex-col justify-between p-4 px-8">
                <img className="justify-center justify-align-center h-13 w-13" src="/logo.png" alt="logo" />
                    <nav className="flex flex-col gap-10 ">
                        <a className=" nav-theme" href="#hero">
                            <i className="icon-space"><MdHome /></i>Home</a>
                        <a className=" nav-theme" href="#stack">
                            <i className="icon-space"><FaDna /></i>Stack</a>
                        <a className="nav-theme" href="#work">
                            <i className="icon-space"><MdWork /></i>Experience</a>
                        <a className="nav-theme" href="#project">
                            <i className="icon-space"><MdFolder /></i>Project</a>
                        <a className="nav-theme" href="#contact">
                            <i className="icon-space"><MdPhone /></i>Contact</a>
                    </nav>
                </div>
        </div>

    );
}
export default NavBar;
