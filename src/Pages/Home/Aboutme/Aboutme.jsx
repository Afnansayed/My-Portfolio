import myimg from '../../../assets/razin.jpg'

const Aboutme = () => {
    return (
        <div className='bg-[#0a192f]'>
            <div className='w-full p-2 md:p-8 flex flex-col md:flex-row gap-5 pt-5'>
                 <div className='rounded-full md:rounded-none w-80 md:w-full  border-[20px] md:border-none ml-8 md:ml-24 border-[#ccd6f6]'>
                 <img src={myimg} alt="" className='rounded-full md:rounded-xl md:w-72 ' />
                 </div>
                <div className="w-[2px] h-96 bg-[#12eac3] sm:block hidden"></div>
                <div className='text-[#8993b1] space-y-5 text-center md:text-left'>
                    <h2 className='text-3xl text-[#ccd6f6] font-semibold underline p-3'>About Me</h2>
                    <p className='p-3'>
                    I am a dedicated and passionate web developer currently pursuing a degree in Computer Science and Engineering at Northern University, Bangladesh. I have successfully completed my diploma in <span className='text-[#12eac3]'>Computer Science</span> and Technology, which laid the foundation for my technical skills and knowledge. 
                    </p>
                    <p className='p-3'>
                    I specialize in creating dynamic and responsive websites using a variety of modern technologies. My expertise includes <span className='text-[#12eac3]'>React.js, MongoDB, Express.js, JavaScript,Tailwind, HTML, and CSS</span>. I have a strong focus on front-end development but am also proficient in back-end technologies, allowing me to build full-stack web applications  
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;