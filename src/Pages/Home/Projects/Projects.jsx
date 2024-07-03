import medi from '../../../assets/project/medi.png';
import infinity from '../../../assets/project/infinity.png';
import art from '../../../assets/project/artisthan.png';


const Projects = () => {
    return (
        <div id='projects' className="bg-[#0a192f]">
            <div >
                <h2 className="text-4xl text-center font-semibold py-5 text-[#ccd6f6]">My Projects</h2>
            </div>
            {/* Projects */}
            <div className='grid grid-cols-1 md:grid-cols-2 px-2 gap-6 md:px-24'>
                <div className="max-w-lg p-4 shadow-md dark:bg-[#ccd6f6] dark:text-gray-800">
                    <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-[#0a192f] font-bold"> Medicoord</a>
                        </div>
                        <a className='px-6 py-2 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:bg-[#0a192f] hover:text-[#12eac3]' rel="noopener noreferrer" href="https://medicoord-901e4.web.app">View</a>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={medi} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold dark:text-[#0a192f]">Medical Camp Management System</h3>
                            </a>
                            <p className="leading-snug dark:text-gray-600"><span className="text-[#0a192f] text-lg font-semibold">1.Comprehensive Organizer Dashboard:</span> Developed a feature-rich dashboard for organizers to view, manage,
                                , update and delete camp details efficiently . (OrganizerEmail: monjarinshahid@gmail.com Pass: 123456)</p>
                            <p className="leading-snug dark:text-gray-600"><span className="text-[#0a192f] text-lg font-semibold">2. Secure Authentication:</span>  Utilized JWT and Firebase for secure user authentication and data protection.</p>
                            <p className="leading-snug dark:text-gray-600"><span className="text-[#0a192f] text-lg font-semibold">3. Feedback and Ratings:</span> Created a system for participants to provide post-camp feedback and ratings,displayed transparently on the homepage.</p>
                            <p className="leading-snug dark:text-gray-600 font-bold"><span className="text-[#0a192f] text-lg font-semibold">4. Using Technology :</span> MongoDb | Rect.js | JavaScript | express | node.js| Stripe | Jwt |</p>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="max-w-lg p-4 shadow-md dark:bg-[#ccd6f6] dark:text-gray-800">
                    <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-[#0a192f] font-bold"> Infiniti Insiteshub</a>
                        </div>
                        <a className='px-6 py-2 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:bg-[#0a192f] hover:text-[#12eac3]' rel="noopener noreferrer" href="https://assignment-11-blogs.web.app">View</a>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={infinity} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold dark:text-[#0a192f]">This is a blogging web-site .</h3>
                            </a>
                            <p className="leading-snug dark:text-gray-600"><span className="text-[#0a192f] text-lg font-semibold">1. Post and update Blogs:</span>Users can post here their blogs and updates too.</p>
                            <p className="leading-snug dark:text-gray-600"><span className="text-[#0a192f] text-lg font-semibold">2. Secure Authentication:</span>  Utilized JWT and Firebase for secure user authentication and data protection.</p>
                            <p className="leading-snug dark:text-gray-600"><span className="text-[#0a192f] text-lg font-semibold">3. Feedback and Ratings:</span> Created a system for user to provide our web-site related feedback and ratings,displayed transparently on the homepage.</p>
                            <p className="leading-snug dark:text-gray-600"><span className="text-[#0a192f] text-lg font-semibold">4.Comments Others Blogs:</span>  Users can comment on others blogs and share their opinion .</p>
                            <p className="leading-snug dark:text-gray-600 font-bold"><span className="text-[#0a192f] text-lg font-semibold">5. Using Technology :</span> MongoDb | Rect.js | JavaScript | express | node.js | Jwt |</p>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="max-w-lg p-4 shadow-md dark:bg-[#ccd6f6] dark:text-gray-800">
                    <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-[#0a192f] font-bold">ArtIsthan</a>
                        </div>
                        <a className='px-6 py-2 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:bg-[#0a192f] hover:text-[#12eac3]' rel="noopener noreferrer" href="https://assignment-10-b8ee6.web.app">View</a>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={art} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold dark:text-[#0a192f]">This is a blogging web-site .</h3>
                            </a>
                            <p className="leading-snug dark:text-gray-600"><span className="text-[#0a192f] text-lg font-semibold">1. Comprehensive Item Management: </span>Users can register, log in, and add new art items. Organizers manage items, view details, and update stock status.</p>
                            <p className="leading-snug dark:text-gray-600"><span className="text-[#0a192f] text-lg font-semibold">2. Responsive Design:</span>  Fully responsive for mobile, tablet, and desktop. Ensures a seamless browsing experience across all devices.</p>
                            <p className="leading-snug dark:text-gray-600"><span className="text-[#0a192f] text-lg font-semibold">3. Secure Authentication: </span> Password and email-based authentication with additional social login options.</p>
                            <p className="leading-snug dark:text-gray-600 font-bold"><span className="text-[#0a192f] text-lg font-semibold">4. Using Technology :</span> MongoDb | Rect.js | JavaScript | express | node.js | Jwt |</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;