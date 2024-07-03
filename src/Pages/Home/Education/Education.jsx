

const Education = () => {
    return (
        <div id="education" className="bg-[#0a192f]">
            <div >
                <h2 className="text-4xl text-center font-semibold py-5 text-[#ccd6f6]">Educational Qualification</h2>
            </div>
            <div className="p-8">
                <div className="flex  items-center justify-between p-6 border-l-[25px] sm:py-8 dark:border-[#12eac3] dark:bg-[#ccd6f6] dark:text-gray-800 rounded-sm">
                    <div className="flex flex-col md:flex-row  gap-5 justify-between">
                        <div>
                            <h3 className="text-lg"><span className="text-xl font-semibold">University Name </span> | Northern University Bangladesh</h3>
                            <span className="text-lg">Computer Science and Engineering (CSE) | Bsc </span>
                        </div>
                        <div className="text-right ">
                            <h3 className="text-xl font-semibold">Dhaka, Bangladesh | Ongoing</h3>
                            <span className="text-lg ">[My classes are only on fridays I can easily work full time.]
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex  items-center justify-between p-6 border-l-[25px] sm:py-8 dark:border-[#12eac3] dark:bg-[#ccd6f6] dark:text-gray-800 rounded-sm mt-6">
                    <div className="flex flex-col md:flex-row  gap-5 ">
                        <div className="md:w-1/2 ">
                            <h3 className="text-lg"><span className="text-xl font-semibold">Institute Name</span> |  Cox’s Bazar Polytechnic Institute</h3>
                            <span className="text-lg">Successfully Completed my diploma in Computer Science and Engineering with (3.62 out of 4.00)</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl font-semibold">Cox’s Bazar,Bangladesh| 06-2018- 06.2022</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;