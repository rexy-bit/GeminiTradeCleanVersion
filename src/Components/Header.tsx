import  { memo, useEffect, useState } from "react"


const Header = () => {

    const [showNav, setShowNav] = useState<boolean>(()=>{
        const saved = localStorage.getItem('showNav');

        return saved ? JSON.parse(saved) : true;
    });

    useEffect(()=>{
        localStorage.setItem('showNav', JSON.stringify(showNav));
    }, [showNav]);


    return(
        <header className="flex flex-row justify-between  fixed top-0 w-full items-center bg-[#1E2A47] h-[70px] px-6 max-[600px]:px-3 shadow-2xl z-50">
              <h1 className="text-white font-bold text-[2em] max-[600px]:text-[1.5em] ">Gemini-Trade</h1>
              <nav className="flex flex-row justify-center items-center gap-4 max-[600px]:gap-3                     max-[1000px]:hidden">
                <a href="#hero" className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">Home</a>
                <a href="#how" className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">How</a>
                <a href="#example" className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">Examples</a>
               <a href="#test" className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">Test</a>
                <a href="#limitations" className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">Limitations</a>
                  <a href="#roadmap" className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">Roadmap</a>
                   <a href="#more" className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">More</a>
                  <a href="#impact" className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">Impact</a>
                <a href="#author" className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">Author</a>

              </nav>

              <div className="hidden max-[1000px]:block  text-[2em] text-white font-black cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60" onClick={()=>setShowNav(prev => !prev)}>
                   &#9776;
              </div>

              {showNav && 
                 <nav className="hidden max-[1000px]:flex flex-col p-5 w-[150px] rounded-[5px] gap-3 bg-[#1E2A47] absolute top-20 right-3">

                                     <a href="#hero" onClick={()=>setShowNav(false)} className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">Home</a>
                <a href="#how" onClick={()=>setShowNav(false)} className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">How</a>
                <a href="#example" onClick={()=>setShowNav(false)} className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">Examples</a>
               <a href="#test" onClick={()=>setShowNav(false)} className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">Test</a>
                              <a href="#case" onClick={()=>setShowNav(false)} className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">Use Cases</a>
                <a href="#limitations" onClick={()=>setShowNav(false)} className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">Limitations</a>
                  <a href="#roadmap" onClick={()=>setShowNav(false)} className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">Roadmap</a>
                   <a href="#more" onClick={()=>setShowNav(false)} className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">More</a>
                  <a href="#impact" onClick={()=>setShowNav(false)} className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">Impact</a>
                <a href="#author" onClick={()=>setShowNav(false)} className="text-white font-[600] text-[15px] max-[600px]:text-[14px] transition-opacity duration-200 hover:opacity-80 active:opacity-60 cursor-pointer">Author</a>

                  <div className="absolute top-0 right-1 text-white text-[2em] cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60" onClick={()=>setShowNav(false)}>&times;</div>
                 </nav>
              }
        </header>
    )
}

export default memo(Header);