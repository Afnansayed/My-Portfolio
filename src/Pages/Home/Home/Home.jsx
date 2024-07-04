import Aboutme from "../Aboutme/Aboutme";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Fotter from "../Fotter/Fotter";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Aboutme></Aboutme>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
            <Fotter></Fotter>
        </div>
    );
};

export default Home;