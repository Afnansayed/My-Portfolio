import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const navLink = <>
         <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold text-[#396cf0] mr-3 ' : 'text-[#333333] mr-2 font-semibold'}><li>Portfolio</li></NavLink>
         <HashLink smooth to='#skills' className='font-semibold mr-4'>
                <li>Skills</li>
         </HashLink>
         <HashLink smooth to='#projects' className='font-semibold mr-4'>
                <li>Projects</li>
         </HashLink>
         <HashLink smooth to='#education' className='font-semibold mr-4'>
                <li>Education</li>
         </HashLink>
         <HashLink smooth to='#contact' className='font-semibold mr-4'>
                <li>Contact</li>
         </HashLink>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navLink
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl uppercase">Afnan Sayed</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navLink}
                </ul>
            </div>
            <div className="navbar-end">
            <HashLink smooth to='#contact' className='px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800  mr-4'>
                <p>Hire Me</p>
         </HashLink>
            </div>
        </div>
    );
};

export default Navbar;