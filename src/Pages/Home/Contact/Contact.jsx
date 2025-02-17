import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import linkedin from '../../../assets/icons/icons8-linkedin-96.png'
import facebook from '../../../assets/icons/icons8-facebook-96.png'
import github from '../../../assets/icons/icons8-github-96.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r3povy2', 'template_jjysmi7', form.current, {
            publicKey: '0GdapRvZ2bSQtDUDB',
        })
            .then(
                () => {
                    toast.success('🦄 I Received your message', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section id='contact' className="py-6 bg-[#0a192f] text-[#ccd6f6] md:pt-12 md:pb-16">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">Contact Me</h1>
                    <p className="pt-2 pb-4">Feel free to contact me facebook ,Linkedin and Email </p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span> Nikunja khilkhet,Dhaka</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>01864079730</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>afnansayed@gmail.com</span>
                        </p>
                    </div>
                    <div className='flex mt-12'>
                        <div className='hover:border-4 hover:rounded-lg hover:border-gray-100 hover:scale-110'>
                            <a href="https://www.linkedin.com/in/afnan-sayed-razin"> <p><img src={linkedin} alt="" /></p></a>
                        </div>
                        <div className='hover:border-4 hover:rounded-lg hover:border-gray-100 hover:scale-110'>
                            <a href="https://www.facebook.com/zofaf.razin"> <p><img src={facebook} alt="" /></p></a>
                        </div>
                        <div className='hover:border-4 hover:rounded-lg hover:border-gray-100 hover:scale-110'>
                            <a href="https://github.com/Afnansayed"> <p><img src={github} alt="" /></p></a>
                        </div>
                    </div>
                </div>
                <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6" ref={form} onSubmit={sendEmail}>
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input type="text" name="user_name" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 text-[#0a192f]" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" name="user_email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 text-[#0a192f]" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea rows="3" name="message" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 text-[#0a192f] p-3"></textarea>
                    </label>
                    <button type="submit" className="px-8 py-3 font-semibold border rounded border-[#12eac3] text-[#12eac3] hover:text-[#ccd6f6] hover:border-[#ccd6f6]">Send Message</button>
                </form>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition:Bounce/>
            </div>
        </section>
    );
};

export default Contact;