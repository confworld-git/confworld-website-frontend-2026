import React from "react";
import "./Pastconference.css";
import { Link, useNavigate } from "react-router-dom";
import { Seo } from "../../components/seo";

const Pastconference = () => {
  const navigate = useNavigate();
  return (
    <div className="past-conferences">
      <Seo
        title="Past Conferences | CERADA – Shaping Research Excellence Worldwide"
        description="Explore CERADA's impactful past conferences that have advanced global research in engineering, science, education, social sciences and humanities, fostering innovation and collaboration."
      />
      <div className="top-img relative " data-aos="fade-up">
        <img
          className="absolute object-center z-[-10] h-full w-full object-cover"
          src="/images/WCMRP Web Banner.jpg"
          alt="international-conferences-banner"
          width={800}
          height={400}
          loading="lazy"
        />
        <h1 className="">
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
              Past Conferences
            </text>
          </svg>
        </h1>
      </div>
      
      <p data-aos="fade-up" style={{paddingTop: "20px"}}>
        CERADA takes immense pride in being a platform that has empowered
        members of the global scientific and technological communities with
        essential professional guidance and support. This foundation has enabled
        groundbreaking innovation and research in various domains. Discover some
        of the landmark events that have significantly influenced the evolution
        of Engineering and Technology, Science, Education, Social Sciences and
        Humanities, shaping these fields into what they are today.
      </p>
      <div className="year_section space-x-8">
        <Link data-aos="zoom-in-up" to="/past-conference-list-2025">
          2025 <br /> CONFERENCES
        </Link>
        <Link data-aos="zoom-in-up" to="/past-conference-list-2026">
          2026 <br /> CONFERENCES
        </Link>
      </div>
    </div>
  );
};

export default Pastconference;
