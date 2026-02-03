import {FaMoon, FaLinkedinIn, FaGithub, FaFacebook, FaInstagram, FaHandshake} from "react-icons/fa";
import {
    MdAlarm,
    MdFacebook,
    MdHandshake,
    MdLink,
    MdLocationCity,
    MdLocationPin,
    MdOutlineHandshake,
    MdVerified
} from "react-icons/md";
import {FaXTwitter} from "react-icons/fa6";

const Hero = () =>{
    return (
        <section id="hero">
        <div className="w-5xl h-115 relative top-2 left-50 mt-2 justify-items-center text-center bg-gray-300 rounded-3xl">
            <div className="shadow-md w-lg absolute top-3 rounded-xl left-4 h-108 bg-white p-6">
                <img className="shadow-xl h-65 rounded-full m-auto mt-2" src="/profile.jpg" alt="my pfp" />
          <div className="mt-6">

        <i>
                <h3 className="text-center mb-5 font-bold">@claire_magno</h3>
        </i>
            <div className="flex gap-8 w-80 h-11 m-auto mt-1 p-2 justify-center rounded-full shadow-lg bg-gray-100">
                <a className="social-link" title="Facebook" href="#"><FaFacebook /></a>
                <a className="social-link" title="X/Twitter" href="#"><FaXTwitter /></a>
                <a className="social-link" title="LinkedIn" href="#"><FaLinkedinIn /></a>
                <a className="social-link" title="Github" href="#"><FaGithub /></a>
                <a className="social-link" title="Instagram" href="#"><FaInstagram /></a>

            </div>
          </div>
            </div>
            <div className="w-lg absolute top-3 rounded-xl right-3 h-108 bg-white p-6">
                <div className="flex mt-9">
                    <h1 className="text-4xl font-sans font-bold">Claire Joy M. Magno</h1>
                    <i className="pt-1.5 pl-2 text-[32px] text-blue-600">
                        <MdVerified />
                    </i>
                </div>
                <div className="relative top-2 right-23">

                </div>
                    <div className="flex mt-3 ml-2">
                        <i className="pt-1 text-blue-600 pr-2">
                            <MdLocationPin />
                      </i><h5>Kiamba, Sarangani Province, Philippines</h5>
                    </div>

                <div className="w-110 h-55 bg-gray-200 rounded-3xl mt-6 p-8 text-3 shadow-lg">

                    <p>  Aspiring UI/UX designer, and full-stack software developer. I
                        build web and mobile applications specializing in modern
                        experiences and interactive designs that engage users.</p>
                    <div className=" hover:bg-blue-300 transition-all duration-300 ease-in-out cursor-pointer mt-6 rounded-full flex items-center m-auto shadow-lg justify-center w-50 h-10 bg-blue-500 text-white">
                      <i className="pr-2 ">
                          <FaHandshake></FaHandshake>
                      </i>
                        <a className="" href="#contact">Let's Collaborate</a>
                    </div>

                </div>
            </div>
        </div>

        </section>

    );
}
export default Hero;