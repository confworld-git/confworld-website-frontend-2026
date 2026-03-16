import React from "react";
import "./History.css";
import { Seo } from "../components/seo";

const History = () => {
  return (
    <div className="history">
      <Seo
        title="Our History | CERADA – Confworld Educational Research and Development Association"
        description="Explore CERADA’s journey from inception to global impact, fostering scientific innovation through research, education, and international collaboration."
      />
      <div className="top-img relative" data-aos="fade-up">
        <img
          className="absolute object-center z-[-10] h-full w-full object-cover"
          src="/images/cerada-history-banner.webp"
          alt="cereda-history-banner"
          width={800}
          height={400}
          loading="lazy"
        />
        <h2 className="relative">
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
              Our History
            </text>
          </svg>
        </h2>
      </div>
      <section className="about-main item" data-aos="fade-up">
        <div data-aos="fade-right">
          <h1 style={{ height: "auto", background: "none" }}>
            Confworld Educational Research And Development Association (CERADA)
          </h1>
          <p>
            The history of the Confworld Educational Research And Development
            Association (CERADA) echoes our rigorous efforts in ushering a new
            era of technical transformation in science and technology. Our
            groundbreaking initiatives to integrate researchers and foster
            scientific advancement have established significant milestones in
            diverse fields including Engineering, Medicine, Science &
            Technology, Education, Management, Social Sciences, Arts &
            Humanities and beyond.
          </p>
          <p>
            CERADA is registered as a Non-Profit Organization under Section 8 of
            the Companies Act at the Ministry of Corporate Affairs, Government
            of India. The organization was officially founded during its
            inaugural meeting in Chennai, Tamil Nadu, where a resolution was
            passed by the board of members to establish Confworld.
          </p>
        </div>
        <img
          data-aos="fade-left"
          src="/logo/cerada-logo.webp"
          id="cerada-history"
          alt="Confworld Educational Research And Development Association (CERADA) logo"
          width={300}
          height={300}
          loading="lazy"
        />
      </section>
      <section className="about-main item change" data-aos="fade-up">
        <div data-aos="fade-left">
          <h2>Our History: A Chronicle of Scientific Breakthroughs.</h2>
          <p>
            Since its inception, CERADA has been relentless in strengthening its
            associations and publications to meet the evolving needs of the
            global academic community. The organization has grown to become a
            comprehensive umbrella, supporting and nurturing numerous scientific
            communities, associations and organizations across various sectors
            such as Engineering, Medicine, Science & Technology, Education,
            Management, Social Sciences, Arts & Humanities and beyond.
          </p>
          <p>
            Operating worldwide to enhance research outcomes, CERADA provides
            individual researchers and institutions with extensive opportunities
            to create an incubative environment for innovation. By fostering
            collaboration and promoting sustainable development, CERADA
            continues to elevate the standards of scientific research and
            technological advancement globally.
          </p>
        </div>
        <img
          data-aos="fade-right"
          src="/images/our-history.webp"
          id="cerada-history-2"
          alt="Our History: A Chronicle of Scientific Breakthroughs."
          width={300}
          height={300}
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default History;
