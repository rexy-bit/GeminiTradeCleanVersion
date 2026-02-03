import  { memo } from "react"


const Try = () => {

    return(
        <section className="flex flex-col justify-center items-center bg-[#0B1220]" id="try">

             <h1 className="text-[2em] text-center font-bold text-gray-100 mt-10">Try Gemini-Trade Yourself</h1>

             <p className="text-[16px] text-gray-200 font-[600] w-[600px] max-[700px]:w-[300px] text-center mt-5">
                Ready to see Gemini-Trade in action? Test your product’s importability in seconds using our AI-powered compliance checker. Whether you’re an importer, a logistics company, or a compliance officer, Gemini-Trade helps you make faster and safer decisions.
             </p>

             <div className="flex flex-row justify-center items-center gap-5 mt-5 mb-10 max-[400px]:gap-1">

                <a href="#test" className="w-[120px] text-[14px] bg-[#2563EB] h-[40px] font-sans font-bold text-white rounded-[5px] cursor-pointer flex justify-center items-center transition-transform duration-200 hover:scale-105 active:scale-100">
                    Start Analysis
                </a>

                <a href="#example" className="flex justify-center items-center w-[200px] text-[14px] font-bold bg-white text-[#1E2A47] h-[40px] font-bold font-sans rounded-[5px] cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60">
                    See Pre-Analyzed Examples
                </a>

             </div>
        </section>
    )
}

export default memo(Try);