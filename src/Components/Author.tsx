import { memo } from "react"



const Author = () => {

    return(

        <section className="flex flex-col justify-center items-center w-full bg-[#0B1220]" id="author">
           <h1 className="text-[2em] text-center font-bold text-gray-100 mt-20">About the Author</h1>

           <div className="flex flex-col justify-center items-center mt-8 gap-5 w-[600px] max-[700px]:w-[300px]">
            <p className="text-gray-200 font-[600] text-center">Hi, I’m Yanis Rezgui, a second-year Computer Science student passionate about web development and AI. I previously worked on an AI-powered import compliance assistant during an internship at a multinational company, gaining hands-on experience in developing solutions for real-world import and regulatory challenges.</p>

            <p className="text-gray-200 font-[600] text-center">
                I created Gemini-Trade for the Gemini 3 Hackathon to demonstrate how AI can assist import compliance and make international trade safer and faster.
            </p>

            <p className="text-gray-200 font-[600] text-center">
                Feel free to connect with me on LinkedIn or check out the project demo on GitHub.
            </p>
           </div>

           <div className="flex flex-row justify-center items-center mt-10 mb-10 gap-8">
            <a target="_blank" className="flex flex-col justify-center items-center transition-transform duration-300 hover:scale-110 active:scale-100" href="https://www.linkedin.com/in/yanis-rezgui/">
                <i className="fa-brands fa-linkedin text-[2.2em] text-gray-100"></i>
              
                <p className="text-[13px] font-[500] text-gray-100">Linkedin</p>
            </a>

            <a target="_blank" className="flex flex-col justify-center items-center transition-transform duration-300 hover:scale-110 active:scale-100" href="https://github.com/rexy-bit/GeminiTrade">
                <i className="fa-brands fa-github text-[2.2em] text-gray-100"></i>
                <p className="text-[13px] font-[500] text-gray-100">Github Demo</p>
            </a>
           </div>
        </section>
    )
}


export default memo(Author);