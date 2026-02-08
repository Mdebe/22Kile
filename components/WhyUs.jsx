"use client";

 import Image from "next/image";

const reasons = [
  "Experienced Instructors",
  "Affordable Rates",
  "Reliable Connectivity",
  "Safe Transportation",
];

export default function WhyUs() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Image */}
        <div className="md:w-1/2 relative h-96 w-full rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="why-us.jpg" // Replace with your image
            alt="Why Us"
            fill
            className="object-cover rounded-3xl"
          />
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-4xl font-bold text-[#010a33]">
            Why Choose Kopano-Solutions?
          </h3>
          <p className="text-gray-700 mt-4 text-lg mb-8">
            At Kopano-Solutions, we provide reliable services and expert guidance to help you gain essential computer skills, access fast internet, and enjoy safe transportation.
          </p>

          <div className="grid grid-cols-1 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="
                  flex items-start gap-4
                  bg-[#f9f9f9] 
                  p-4 
                  rounded-2xl 
                  shadow-lg 
                  border-l-4 border-accent
                  transform transition-transform duration-500
                  hover:-translate-y-2 hover:shadow-2xl
                "
              >
                <div className="h-12 w-12 flex items-center justify-center bg-accent/20 text-accent font-bold text-lg rounded-full">
                  {reason.split(" ")[0][0]}
                </div>
                <h4 className="text-[#010a33] font-semibold self-center">
                  {reason}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
