import React from "react";
import "./Welcome.css";
import { Link, useNavigate } from "react-router-dom";

const Welcome = () => {
  // const navigate = useNavigate();
  return (
    <div className="mt-20  " data-aos="fade-up">
      <h1 className="px-20 text-center text-[#00cec8] text-3xl md:text-4xl lg:text-5xl font-bold text-shadow-md" style={{height:"auto", background : "none"}}>
        Welcome to Confworld Educational Research and Development Association (CERADA)
      </h1>
      <section className=" flex flex-col-reverse   lg:flex-row items-center justify-between gap-5 h-auto py-10 px-20 mt-10">
        <div className="gap-5 flex flex-col w-full lg:w-1/2 space-y-4 text-justify">
          <p data-aos="fade-up">
            The Confworld Educational Research and Development Association
            (CERADA) is a professional association dedicated to fostering
            Engineering, Science & Technology, Education, Business & Management,
            Social Sciences, Arts & Humanities and beyond by supporting research
            initiatives, disseminating cutting-edge insights, driving industry
            trends and fostering related endeavors.
          </p>
          <p data-aos="fade-up">
            CERADA aims to transform the process of innovation, collaboration
            and knowledge-sharing into a digital format by creating a unified
            virtual scientific community worldwide. This initiative will include
            research support, networking, educational opportunities, joint
            ventures, publications and other related activities.
          </p>
          <p data-aos="fade-up">
            CERADA is establishing strong academic, scientific and industry
            networks across Asia and the Middle East. Its presence extends to
            countries such as Indonesia, Malaysia, Philippines, Singapore, Sri
            Lanka, South Korea, Taiwan, Thailand, Vietnam and the United Arab
            Emirates (UAE).
          </p>
          <button
            data-aos="fade-up"
            className="bg-orange-500 w-30   p-2 rounded text-white font-sembold"
          >
            <Link to="/about-us">Know More</Link>
          </button>
        </div>
        <div className="w-full lg:w-2/3 space-y-4 ">
          <img
            data-aos="fade-left"
            src="/images/mainBanners/cerda_sdg.webp"
            alt="Logo of the Confworld Educational Research and Development Association (CERADA), supporting research in Engineering, Science & Technology, Education, and more."
          />
        </div>
      </section>
    </div>
  );
};

export default Welcome;
