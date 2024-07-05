import { IoDownloadOutline } from "react-icons/io5";
const  PDF_URL = 'https://my-personal-portfolio-razin.surge.sh/razin_resume.pdf'

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
                <p className="text-[#8993b1]">Web Developer (React & Node.js) | Building dynamic and responsive web application with a focus on user experience .| Passionate about creating innovative <span className="text-[#12eac3]">Web Solution.</span></p>
                <button onClick={() => {downloadFileURL(PDF_URL)}}  type="button" className="px-8 mt-8 py-3 font-semibold border rounded border-[#12eac3] text-[#12eac3] hover:border-[#ccd6f6] hover:text-[#ccd6f6] flex justify-center items-center gap-5">Download Resume <span className="text-2xl"><IoDownloadOutline /></span></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;