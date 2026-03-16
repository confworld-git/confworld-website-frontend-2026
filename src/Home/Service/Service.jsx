import React from "react";

import { Link, useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "International Conferences",
      description:
        "Join our international conferences to showcase your research, connect with peers and explore new ideas through meaningful discussions.",
      link: "/conference",
      image: "/images/services/international-conferences.webp",
    },
    {
      title: "Skill Development Program",
      description:
        "Enhance your skills with our specialized training in data analysis, academic writing, presentation skills and technology integration. Join us now!",
      link: "/conference",
      image: "/images/services/skill-development-program.webp",
    },
    {
      title: "Faculty Development Program",
      description:
        "Confworld Educational Research and Development Association offers tailored development programs, workshops and training for educators to enhance teaching, research and career skills.",
      link: "/conference",
      image: "/images/services/faculty-development-program.webp",
    },
    {
      title: "Journals & Publications",
      description:
        "Our team ensures your research gets published in reputable journals, providing manuscript preparation and publication support for maximum exposure.",
      link: "/journals",
      image: "/images/services/journals-publications.webp",
    },
    {
      title: "Research Assistance",
      description:
        "Get expert support with research design, data analysis and literature reviews. Refine your research and make a meaningful impact.",
      link: "/assistance",
      image: "/images/services/research-assistance.webp",
    },
  ];
  return (
    <>
      <section
        className="bg-[url('/images/background/service_bg2.jpg'),_linear-gradient(to_bottom,_transparent_30%,_#F9FAFB_30%)] bg-no-repeat bg-[length:100%_30%,_100%_100%]  text-white  py-12"
        data-aos="fade-up"
      >
        <h2
          className="text-center text-4xl md:text-3xl font-semibold mb-10 text-shadow-md"
          data-aos="fade-up"
        >
          Services
        </h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white text-black max-w-xs w-full rounded-md overflow-hidden shadow-lg relative"
              data-aos="fade-up"
            >
              <div className="relative p-2 rounded-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md"
                  data-aos="fade-up"
                />
                {/* <img
                  src={item.icon}
                  alt="icon"
                  className="w-12 h-12 absolute bottom-[-1rem] right-4 bg-[#f85e4b] p-2 rounded-full"
                /> */}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#008883]" data-aos="fade-up">
                  {item.title}
                </h3>
                <p
                  className="text-sm text-gray-600 mt-2 mb-4"
                  data-aos="fade-up"
                >
                  {item.description}
                </p>
                <Link
                  to={item.link}
                  className="text-[#00cec8] text-sm font-medium hover:underline"
                  data-aos="fade-up"
                  rel="noopener"
                >Explore</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Service;
