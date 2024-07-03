import logo1 from '../../../assets/icons/icons8-css-96.png'
import logo2 from '../../../assets/icons/icons8-express-js-96.png'
import logo3 from '../../../assets/icons/physics.png'
import logo4 from '../../../assets/icons/icons8-javascript-96.png'
import logo5 from '../../../assets/icons/icons8-mongo-db-96.png'
import logo6 from '../../../assets/icons/icons8-nodejs-96.png'
import logo7 from '../../../assets/icons/icons8-html-96.png'
import logo8 from '../../../assets/icons/icons8-tailwind-css-96.png'
const Skills = () => {
    return (
        <div id='skills' className="bg-[#0a192f]">
            <div className='text-center text-2xl md:text-4xl py-5 '>
                <h2 className='text-[#ccd6f6] font-semibold'>Technology that I know</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 p-8 gap-5 md:gap-0'>
                <div className='w-64 flex flex-col mx-auto bg-[#ccd6f6] shadow-xl rounded-xl p-3 border-b-8 border-[#6dafe0] outline-none hover:scale-110'>
                    <img src={logo3} className='w-24 mx-auto' alt="" />
                    <p className='text-[#0a192f] text-center text-2xl font-semibold'>React</p>
                </div>
                <div className='w-64 flex flex-col mx-auto bg-[#ccd6f6] shadow-xl rounded-xl p-3 border-b-8 border-[#ffd600] outline-none hover:scale-110'>
                    <img src={logo4} className='w-24 mx-auto' alt="" />
                    <p className='text-[#0a192f] text-center text-2xl font-semibold'>Javascript</p>
                </div>
                <div className='w-64 flex flex-col mx-auto bg-[#ccd6f6] shadow-xl rounded-xl p-3 border-b-8 border-[#689f38] outline-none hover:scale-110'>
                    <img src={logo5} className='w-24 mx-auto' alt="" />
                    <p className='text-[#0a192f] text-center text-2xl font-semibold'>MongoDB</p>
                </div>
                <div className='w-64 flex flex-col mx-auto bg-[#ccd6f6] shadow-xl rounded-xl p-3 border-b-8 border-[#689f38] outline-none hover:scale-110 mt-0 md:mt-6'>
                    <img src={logo6} className='w-24 mx-auto' alt="" />
                    <p className='text-[#0a192f] text-center text-2xl font-semibold'>Node.js</p>
                </div>
                <div className='w-64 flex flex-col mx-auto bg-[#ccd6f6] shadow-xl rounded-xl p-3 border-b-8 border-[#039be5] outline-none hover:scale-110 mt-0 md:mt-6'>
                    <img src={logo2} className='w-24 mx-auto' alt="" />
                    <p className='text-[#0a192f] text-center text-2xl font-semibold'>Express.js</p>
                </div>
                <div className='w-64 flex flex-col mx-auto bg-[#ccd6f6] shadow-xl rounded-xl p-3 border-b-8 border-[#00acc1] outline-none hover:scale-110 mt-0 md:mt-6'>
                    <img src={logo8} className='w-24 mx-auto' alt="" />
                    <p className='text-[#0a192f] text-center text-2xl font-semibold'>Tailwind</p>
                </div>
                <div className='w-64 flex flex-col mx-auto bg-[#ccd6f6] shadow-xl rounded-xl p-3 border-b-8 border-[#039be5] outline-none hover:scale-110 mt-0 md:mt-6'>
                    <img src={logo1} className='w-24 mx-auto' alt="" />
                    <p className='text-[#0a192f] text-center text-2xl font-semibold'>CSS</p>
                </div>
                <div className='w-64 flex flex-col mx-auto bg-[#ccd6f6] shadow-xl rounded-xl p-3 border-b-8 border-[#e65100] outline-none hover:scale-110 mt-0 md:mt-6'>
                    <img src={logo7} className='w-24 mx-auto' alt="" />
                    <p className='text-[#0a192f] text-center text-2xl font-semibold'>HTML</p>
                </div>

            </div>
        </div>
    );
};

export default Skills;