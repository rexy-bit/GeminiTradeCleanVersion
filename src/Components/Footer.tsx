import { memo } from "react"


const Footer = () => {

    return(
        <section className="flex flex-col w-full bg-[#0B1220] border-t border-t-gray-600 ">

           <div className="flex flex-row w-full justify-between px-15 mt-10 max-[1025px]:px-5 max-[950px]:flex-col max-[950px]:justify-center max-[950px]:items-center max-[950px]:gap-10">
            <div className="flex flex-col gap-1 max-[950px]:justify-center max-[950px]:items-center max-[950px]:gap-2">
                <h1 className="font-[poppins] font-bold text-gray-100 text-[1.3em]">Gemini-Trade</h1>
                <h2 className="text-gray-100 text-[16px] font-[600]">Powered by Gemini 3</h2>
                <p className="w-[300px] text-[15px] text-gray-100 max-[950px]:text-center">AI-powered assistant that helps importers, logistics teams, and compliance officers quickly assess product importability by providing reliable, explainable insights based on technical specifications and country-specific regulations.</p>
            </div>

            <div className="flex flex-col gap-1 items-center">
                <h3 className="font-[poppins] font-[600] text-gray-100 text-[1.1em]">Quick Links</h3>

                <div className="mt-1 flex flex-col justify-center items-center gap-1">
                    <a href="#hero" className="text-gray-100">Home</a>
                    <a href="#how" className="text-gray-100">How It Works</a>
                     <a href="#example" className="text-gray-100">Examples</a>
                     <a href="#try" className="text-gray-100">Try</a>
                     <a href="#test" className="text-gray-100">Test</a>
                     
                </div>
            </div>

            <div className="flex flex-col gap-1 items-center">
                <h3 className="font-[poppins] font-[600] text-gray-100 text-[1.1em]">Info Sections</h3>

                <div className="mt-1 flex flex-col justify-center items-center gap-1">
                    <a href="#case" className="text-gray-100">Use Cases</a>
                    <a href="#limitations" className="text-gray-100">Limitations</a>
                     <a href="#roadmap" className="text-gray-100">Roadmap</a>
                     <a href="#more" className="text-gray-100">More</a>
                     <a href="#impact" className="text-gray-100">Impact</a>
                     <a href="#author" className="text-gray-100">About Me</a>
                </div>

            
            </div>

            <div className="flex flex-col gap-1 items-center">

                <h3 className="font-[poppins] font-[600] text-gray-100 text-[1.1em]">Contacts</h3>

                <div className="mt-1 flex flex-col justify-center items-center gap-1 text-gray-100 underline">
                    <a target="_blank" href="https://www.linkedin.com/in/yanis-rezgui/">LinKedIn</a>
                    <a target="_blank" href="https://github.com/rexy-bit/GeminiTrade">Github Demo</a>
                    <a target="_blank" href="https://gemini3.devpost.com/?ref_feature=challenge&ref_medium=your-open-hackathons&ref_content=Submissions+open&_gl=1*ssb8w6*_gcl_au*MTEzNjM5MjE3My4xNzY5NzMwNzEx*_ga*NjU0MTA2ODk0LjE3Njk3MzA3MTI.*_ga_0YHJK3Y10M*czE3NzAxMjgxODIkbzkkZzAkdDE3NzAxMjgxODIkajYwJGwwJGgw">Hakathon Link</a>
                </div>
                     
            </div>

           </div>

           <div className="flex flex-row justify-between items-center p-5 border-t border-t-gray-500 text-gray-100 mt-10 text-[15px] max-[750px]:flex-col max-[750px]:gap-1">
               <p>© 2026 Gemini 3 Hackathon - All rights reserved</p>
               <p className="">Built with passion by <strong>Yanis Rezgui</strong></p>
           </div>
        </section>
    )
}

export default memo(Footer);