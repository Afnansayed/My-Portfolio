import { IoDownloadOutline } from "react-icons/io5";
const  PDF_URL = '/razin_resume.pdf'

const Banner = () => {
    const downloadFileURL = url => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    return (
        <div className="bg-[#0a192f]">
            <div className="w-full md:w-[70%] p-8">
                <div className="md:ml-24">
                <p className="text-[#12eac3] mb-3">Hi, my name is</p>
                <h1 className="text-[#ccd6f6] mb-2 text-3xl md:text-6xl font-semibold">Afnan Sayed Razin</h1>
                <h1 className="text-[#8993b1] text-3xl md:text-5xl font-semibold mb-6">I build Thing for the web.</h1>
                <p className="text-[#8993b1]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam itaque quo molestiae corporis, provident sint laudantium est aut veritatis, velit molestias amet in qui sequi ratione labore asperiores ex <span className="text-[#12eac3]">incidunt.</span></p>
                <button onClick={() => {downloadFileURL(PDF_URL)}}  type="button" className="px-8 mt-8 py-3 font-semibold border rounded dark:border-[#12eac3] dark:text-[#12eac3] hover:dark:border-[#ccd6f6] hover:dark:text-[#ccd6f6] flex justify-center items-center gap-5">Download Resume <span className="text-2xl"><IoDownloadOutline /></span></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;