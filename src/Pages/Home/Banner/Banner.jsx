

const Banner = () => {
    return (
        <div className="bg-[#0a192f]">
            <div className="w-full md:w-[70%] p-8">
                <div className="md:ml-24">
                <p className="text-[#12eac3] mb-3">Hi, my name is</p>
                <h1 className="text-[#ccd6f6] mb-2 text-3xl md:text-6xl font-semibold">Afnan Sayed Razin</h1>
                <h1 className="text-[#8993b1] text-3xl md:text-5xl font-semibold mb-6">I build Thing for the web.</h1>
                <p className="text-[#8993b1]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam itaque quo molestiae corporis, provident sint laudantium est aut veritatis, velit molestias amet in qui sequi ratione labore asperiores ex <span className="text-[#12eac3]">incidunt.</span></p>
                <button type="button" className="px-8 mt-8 py-3 font-semibold border rounded dark:border-[#12eac3] dark:text-[#12eac3]">Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;