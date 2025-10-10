"use client"
//import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useTheme } from "next-themes";





export default function LandingPage(){

    const {theme} = useTheme()

    const words = `Wehelp India’s middle class grow their wealth, protect their assets, and achieve financial freedom`
    return(
        <div className=" w-screen h-screen flex flex-col items-center">
            {/* hero section */}
           <div className="w-[1200px] flex items-center justify-between ">
            {/* text section */}
            <div className="w-[774px]">
                <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Sanjana Airlines, <br /> Sajana Textiles.
      </h1>
                <h2>
                    <TextGenerateEffect words={words} />;
                </h2>
            </div>

            {/* img section */}
            <div >
              
             {/* <img src="/heroDark.png"/> */}
               {theme == "dark" && <img src="/heroDark.png"/> && <img src="/heroLight.png"/>}
            </div>
           </div>
        </div>
    )
}