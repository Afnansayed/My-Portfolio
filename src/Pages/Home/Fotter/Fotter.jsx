import { HashLink } from 'react-router-hash-link';
import myimg from '../../../assets/razin2.jpg';
import facebook from '../../../assets/icons/icons8-facebook-96.png'
import instragram from '../../../assets/icons/icons8-instagram-96.png'

const Fotter = () => {
    return (
        <div>
            <footer className="footer border-base-300 border-t  bg-[#0a192f] dark:text-[#ccd6f6] py-12">
                <nav className=" grid grid-flow-col gap-4 mx-auto">
                    <h6 className="footer-title sm:block hidden">NavLinks</h6>
                    <HashLink smooth to='#aboutme' className='font-semibold mr-4'>
                        About Me
                    </HashLink>
                    <HashLink smooth to='#skills' className='font-semibold mr-4'>
                        Skills
                    </HashLink>
                    <HashLink smooth to='#projects' className='font-semibold mr-4'>
                        Projects
                    </HashLink>
                    <HashLink smooth to='#education' className='font-semibold mr-4'>
                        Education
                    </HashLink>
                </nav>
            </footer>
            <footer className="footer bg-[#0a192f] dark:text-[#ccd6f6] border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <div>
                        <img src={myimg} className='w-12 rounded-full' alt="" />
                    </div>
                    <p>
                        AFNAN SAYED RAZIN
                        <br />
                        Frontend Developer <span className='text-[#12eac3] '>[ MERN ]</span>
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://www.facebook.com/zofaf.razin'>
                           <img src={facebook} className='w-12' alt="" />
                        </a>
                        <a href='https://www.instagram.com/mdbin_razin'>
                           <img src={instragram} className='w-12' alt="" />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Fotter;