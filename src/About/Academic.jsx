import React from "react";
import { Seo } from "../components/seo";

const Academic = () => {
  const AcademicPartners = [
    {
      title: "GlobalNxt University ",
      image: "/images/partners/globalnxt.png",
      location: "Malaysia.",
    },
    {
      title: "Shinawatra University (SIU),",
      image: "/images/partners/siupng.png",
      location: "Thailand.",
    },
    {
      title: "World Citi Colleges, Quezon City (WCC), ",
      image: "/images/partners/wcc.webp",
      location: "Philippines.",
    },
    {
      title: "Nueva Ecija University of Science and Technology (NEUST),",
      image: "/images/partners/neust.webp",
      location: "Philippines.",
    },
    {
      title: "St. Dominic College of Asia,",
      image: "/images/partners/sdca.webp",
      location: "Philippines.",
    },
    
    {
      title:
        "Shri Madhwa Vadiraja Institute of Technology & Management (SMVITM), ",
      image: "/images/partners/smvitm.webp",
      location: "India.",
    },
    {
      title:
        "Keladi Shivappa Nayaka University of Agricultural and Horticultural Sciences (KSNUAHS),",
      image: "/images/partners/ksnuahs.webp",
      location: "India.",
    },
    {
      title:
        "Dashmesh Khalsa College (DKC),",
      image: "/images/partners/dkc.png",
      location: "India.",
    },
    {
      title:
        "KLS Vishwanathrao Deshpande Institute of Technology (KLS VDIT),",
      image: "/images/partners/klsvdit.png",
      location: "India.",
    },
    {
      title:
        "Edulogic International Academic Research Education, India",
      image: "/images/partners/edu.jpeg",
      location: "India.",
    },
  ];

  return (
    <>
      <Seo
        title="Our Associates | CERADA – Global Academic and Research Collaborations"
        description="CERADA partners with leading institutions like WCC, NEUST, SMVITM, and KSNUAHS to promote global collaboration in research, science, and education."
      />
      <div className="top-img relative" data-aos="fade-up">
        <img
          className="absolute object-center z-[-10] h-full w-full object-cover"
          src="/images/our-associates-and-partners.webp"
          alt="our-associates-and-partners-banner"
          width={800}
          height={400}
          loading="lazy"
        />
        <h1 className="relative">
          <svg
            viewBox="0 0 500 60"
            className="svgs"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="50%"
              dominant-baseline="middle"
              text-anchor="middle"
              className="outline-draw"
              font-size="60"
            >
              Our Associates and Partners
            </text>
          </svg>
        </h1>
      </div>

      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          data-aos="fade-up"
        >
          {AcademicPartners.map(({ image, title, location }, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden p-2 "
              data-aos="fade-up"
            >
              <div
                className={`p-4 flex justify-center items-center h-40 w-full relative shadow-md rounded-md`}
              >
                <div
                  className={`z-0 absolute inset-0 bg-cover bg-center opacity-100 rounded-md`}
                  style={{
                    backgroundImage: `url(/images/partners/associates-and-partners-background.webp)`,
                  }}
                  data-aos="fade-up"
                ></div>
                <img
                  src={image}
                  alt={title}
                  className="max-h-full max-w-full object-contain relative "
                  data-aos="fade-up"
                  width={800}
                  height={400}
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-shadow-sm">
                <h3
                  className="text-md font-bold text-gray-800 "
                  data-aos="fade-up"
                >
                  {title}
                </h3>
                <p className="text-sm text-gray-500 mt-1" data-aos="fade-up">
                  {location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Academic;
