import React from "react";
import Careers from "./Careers";
import "./careers.css";
import { FaLocationDot } from "react-icons/fa6";
import { Seo } from "../components/seo";

const Career = ({ handlePopup }) => {
  return (
    <div className="careers">
      <Seo
        title="Current Job Openings | CERADA - Graphic Designer, Conference Coordinator & Speaker Liaison"
        description="Explore career opportunities at CERADA. Hiring Graphic Designer, Conference Coordinator, and Global Speaker Liaison. Apply now to join our team in Chennai."
      />
      <img
        className="object-center z-[-10] h-full w-full object-cover"
        src="/images/career-banner.webp"
        alt="career-banner"
        width={800}
        height={400}
        loading="lazy"
      />
      <h1 data-aos="fade-up" style={{ background: "none", height: "auto" }}>
        Current Openings at Confworld Educational Research and Development
        Association (CERADA)
      </h1>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        {Careers.map((items, index) => {
          return (
            <section key={index} className="career">
              <div>
                <h2>
                  {items.position}
                  <button onClick={() => handlePopup(true)}>
                    Apply Now {">"}
                  </button>
                </h2>
                <p>{items.description}</p>
                <span
                  className={
                    items.vacancy === "Open" ? "vacancy-open" : "vacancy-closed"
                  }
                  style={{
                    backgroundColor:
                      items.vacancy === "Open" ? "#00a7a14a" : "#fdcccb",
                    color: items.vacancy === "Open" ? "#000" : "#7e211e",
                  }}
                >
                  {items.vacancy}
                </span>
                <p>
                  <FaLocationDot className="location" />
                  {items.location}
                </p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Career;
