import { WobbleCardDemo } from "@/components/Application/websit/blogs/BlogAnimetion";



export default function BlogPage(){
     
      return (
        <div className="w-full flex justify-center">
          <div className="sm:w-[1200px] w-full sm:px-2 px-10 py-20">
              <h2
                className="max-w-7xl pl-4 mb-12  text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Blogs
              </h2>
              <WobbleCardDemo/>
            </div>
        </div>
      )
  
}
