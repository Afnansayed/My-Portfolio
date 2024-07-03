import Aboutme from "../Aboutme/Aboutme";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Aboutme></Aboutme>
            <Skills></Skills>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;