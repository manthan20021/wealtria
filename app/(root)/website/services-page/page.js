import { ThreeDCardDemo } from "@/components/Application/websit/servises/ThreeDCardDemo";
import { ServicesData } from "@/lib/serviseData";

export default function Services() {

  const serviceData = ServicesData
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-background px-4 sm:px-6 md:px-10 lg:px-16 py-16">
      {/* Container */}
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            We Are <span className="text-[#6F39C5]">Serving.</span>
          </h1>
        </div>

        {/* Card Section */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-2 
            gap-8 
            md:gap-10
            w-full
            justify-items-center
          "
        >
          {
            serviceData.map((data, index) => (
              <ThreeDCardDemo key={index} servicedata={data} />
            ))
          }
        </div>
      </div>
    </section>
  );
}
