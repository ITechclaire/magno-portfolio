import NavBar from './components/NavBar.jsx';
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx"
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Skills from "./components/Skills.jsx";
const App = () =>{
    return (
        <div><NavBar />
        <Hero />
            <Skills />
            <Work />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}
export default App