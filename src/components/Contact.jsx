import {MdEmail} from "react-icons/md";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const Contact = () => {
    return(
        <section id="contact">
            <div className="w-5xl h-90 relative top-2 left-50 mt-6 justify-items-center text-center bg-gray-300 shadow-xl rounded-3xl">
                <div className="shadow-md w-225 absolute top-7 rounded-xl left-15 h-75 bg-white p-7">
                    <h1 className="text-3xl font-bold">Let's Work Together</h1>
                        <div className="w-160 h-50 p-5 rounded-xl m-auto mt-3">
                            <p className="text-lg">
                                I'm always interested in new opportunities and projects. Whether
                                you need a website, mobile application, modern UI designs, or just want to chat about
                                tech, feel free to reach out!
                            </p>
                            <div className="hover:bg-blue-300 transition-all duration-300 ease-in-out flex w-60 h-12 rounded-full shadow-sm bg-blue-500 cursor-pointer absolute bottom-10 left-80">
                                <a className="flex m-auto text-white" href="mailto:clairey04magno@gmail.com">
                                    <i className="pt-0.5 pr-2 text-xl text-white">
                                        <MdEmail></MdEmail>
                                    </i>
                                    <span className="text-[16px]">Send me an email</span>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </section>

    );
}
export default Contact;