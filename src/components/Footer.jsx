import {FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaReddit} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const Footer = () => {
    return (
        <section id="project">
            <div className="pt-5 w-5xl h-20 relative top-2 left-50 mt-6 justify-items-center text-center bg-gray-300 shadow-xl rounded-3xl mb-6">
                <footer>
                    <li className="flex gap-8 text-center mb-4 justify-center text-gray-500">
                        <a className="cursor-pointer hover:text-black "><FaGithub/></a>
                        <a className="cursor-pointer hover:text-black " ><FaXTwitter /></a>
                        <a className="cursor-pointer hover:text-black "><FaInstagram/></a>
                        <a className="cursor-pointer hover:text-black "><FaLinkedinIn/></a>
                        <a className="cursor-pointer hover:text-black "><FaReddit /></a>
                        <a className="cursor-pointer hover:text-black "><FaFacebook /></a>
                    </li>
                    <p>© 2026 Claire Joy M. Magno Portfolio. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
}
export default Footer;