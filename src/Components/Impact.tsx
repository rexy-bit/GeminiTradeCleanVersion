import { memo } from "react"

const Impact = () => {

    const impactData = [
  {
    title: "Reduce Stress for Customs Officers",
    description: "Simplifies complex legal decisions, helping officers make faster and more confident judgments."
  },
  {
    title: "Faster Import Decisions",
    description: "AI-assisted analysis reduces waiting time and shipment delays caused by regulatory uncertainties."
  },
  {
    title: "Increase Compliance Accuracy",
    description: "Explains why a product is restricted, ensuring decisions are aligned with laws and decrees."
  },
  {
    title: "Future-Proof & Scalable",
    description: "Roadmap includes full SaaS, document uploads, enterprise dashboards, and multi-country support."
  }
]

    return(

        <section className="flex flex-col justify-center items-center w-full bg-[#0B1220]" id="impact">
            <h1 className="text-[2em] text-center font-bold text-gray-100 mt-20">Project Impact & Vision</h1>

             <div className="flex flex-col justify-center items-center mt-10 w-[600px] gap-5 max-[700px]:w-[300px]">
                <p className="text-[17px] font-[600] text-gray-100 text-center">
                    Gemini-Trade demonstrates how AI can assist import compliance in a fast, reliable, and explainable way.
                    By reducing stress and errors for customs officers and importers, it empowers faster, safer international trade decisions.
                </p>
                <p className="text-[17px] font-[600] text-gray-100 text-center">
                    This hackathon version focuses on text-based inputs for smooth evaluation, while future versions will expand to full SaaS capabilities, including document uploads, multi-country legal databases, and enterprise dashboards.
                </p>
            </div>

            <div className="mt-15 flex flex-wrap gap-10 justify-center items-center  mb-20">
                {impactData.map((d)=>{
                    return(
                        <div className="bg-[#0F172A] border border-white/5 border-5 p-5 w-[250px] rounded-[10px] border-white/5 flex flex-col items-center  gap-4 h-[260px] transition-transform duration-300 hover:scale-105 cursor-pointer" key={d.title}>
                            <h3 className="text-[1.2em] font-bold leading-6 text-gray-200 text-center">{d.title}</h3>

                           <div className="text-[15px] text-gray-200 text-center font-[600]">
                            {d.description}
                           </div>

                            
                        </div>
                    )
                })}
             </div>
        </section>
    )
}

export default memo(Impact);