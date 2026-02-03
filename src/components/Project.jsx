import {FaDna} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

const Project = () =>{
    return (
        <section id="project">
            <div className="w-5xl h-135 relative top-2 left-50 mt-6 bg-gray-200 shadow-xl rounded-3xl">
            <h1 className="font-sans font-bold flex text-center justify-center text-2xl w-50 h-10 m-auto rounded-full bg-white"><span className="text-center text-lg pt-2 mr-2"><FaDna /></span>Projects</h1>
               <div className="grid grid-cols-3 justify-items-center pt-6">

                    <div className="w-70 h-100 bg-blue-300 rounded-xl">
                        <img className="m-auto w-full rounded-t-lg h-52" src="/profile.jpg" alt="pic 1" />
                        <h1 className="heading-title">Title</h1>
                        <p className="px-4 pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque distinctio enim facilis fuga quis quod reprehenderit voluptatibus? Consequatur esse </p>
                    </div>

                    <div className="w-70 h-100 bg-blue-300 rounded-xl">
                        <img className="m-auto w-full  rounded-t-lg h-52" src="/profile.jpg" alt="pic 1" />
                        <h1 className="heading-title">Title</h1>
                        <p className="px-4 pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque distinctio enim facilis fuga quis quod reprehenderit voluptatibus? Consequatur esse </p>
                    </div>

                   <div className="w-70 h-100 bg-blue-300 rounded-xl">
                       <img className="m-auto w-full  rounded-t-lg h-52" src="/profile.jpg" alt="pic 1" />
                       <h1 className="heading-title">Title</h1>
                       <p className="px-4 pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque distinctio enim facilis fuga quis quod reprehenderit voluptatibus? Consequatur esse </p>
                   </div>

               </div>
            </div>
        </section>
    );
}
export default Project;