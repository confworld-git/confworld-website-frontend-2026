import React from "react";
import "./Awards.css";
import { Seo } from "../../components/seo";

const Awards = () => {
  const our_prestigious_awards = [
    {
      title: "best paper award",
      description:
        "the Best Paper Award acknowledges outstanding research papers that         demonstrate significant contributions to their respective fields. Winners of this award showcase excellence in research methodology, originality and impact on the academic community",
      image: "/gifImages/win.gif",
    },
    {
      title: "best paper presentation award",
      description:
        "the Best Paper Award acknowledges outstanding research papers that         demonstrate significant contributions to their respective fields. Winners of this award showcase excellence in research methodology, originality and impact on the academic community",
      image: "/gifImages/win.gif",
    },
  ];
  return (
    <div>
      <Seo
        title="CERADA Awards | Recognizing Excellence in Research, Innovation & Leadership"
        description="Discover the CERADA Awards honoring outstanding research papers, presentations, innovative ideas, and leadership contributions in education and development."
      />
      <div className="top-img " data-aos="fade-up">
        <img
          className="absolute object-center z-[-10] h-full w-full object-cover"
          src="/images/cerada-awards.webp"
          alt="cereda-award-banner"
          width={800}
          height={400}
          loading="lazy"
        />
        <h1>
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
              CERADA Awards
            </text>
          </svg>
        </h1>
      </div>
      <section
        className="about-main center awards"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <img
          data-aos="fade-up"
          src="/gifImages/cerada-awards1.svg"
          id="award-img"
          alt="cerada-award-image1"
          width={800}
          height={400}
          loading="lazy"
        />
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h2 data-aos="fade-up">CERADA Awards</h2>
          <p data-aos="fade-up">
            Welcome to the Confworld Educational Research and Development
            Association (CERADA) Awards page, where we honor outstanding
            contributions in the fields of research and development. Our awards
            recognize exceptional work that advances knowledge, innovation and
            leadership within the community. Explore our prestigious awards and
            learn how you can nominate deserving candidates.
          </p>
        </div>
        <img
          data-aos="fade-up"
          src="/gifImages/cerada-awards2.svg"
          id="award-img"
          alt="cerada-award-image2"
        />
      </section>
      <section className="award">
        <h2 data-aos="fade-up">Our Prestigious Awards</h2>
        <div className="award-list">
          <div data-aos="zoom-in">
            <img
              src="/gifImages/best_paper.gif"
              alt="Best Paper Award"
              width={800}
              height={400}
              loading="lazy"
            />
            <h2>Best Paper Award</h2>
            <p>
              The Best Paper Award acknowledges outstanding research papers that
              demonstrate significant contributions to their respective fields.
              Winners of this award showcase excellence in research methodology,
              originality and impact on the academic community.
            </p>
          </div>
          <div data-aos="zoom-in">
            <img
              src="/gifImages/win.gif"
              alt="Best Paper Presentation Award"
              width={800}
              height={400}
              loading="lazy"
            />
            <h2>Best Paper Presentation Award</h2>
            <p>
              The Best Paper Presentation Award celebrates individuals who excel
              in presenting their research. This award recognizes the clarity,
              engagement and effectiveness of the presentation as well as the
              ability to communicate complex ideas to a diverse audience.
            </p>
          </div>
          <div data-aos="zoom-in">
            <img
              src="/gifImages/idea.gif"
              alt="Best Innovative Idea Award"
              width={800}
              height={400}
              loading="lazy"
            />
            <h2>Best Innovative Idea Award</h2>
            <p>
              The Best Innovative Idea Award honors groundbreaking ideas that
              push the boundaries of current knowledge and technology. This
              award is given to those whose innovative concepts have the
              potential to transform industries and improve lives.
            </p>
          </div>
          <div data-aos="zoom-in">
            <img
              src="/gifImages/lead.gif"
              alt="Leadership and Contribution Award"
              width={800}
              height={400}
              loading="lazy"
            />
            <h2>Leadership and Contribution Award</h2>
            <p>
              The Leadership and Contribution Award is presented to individuals
              who have shown exceptional leadership and made significant
              contributions to their fields. This award highlights dedication,
              vision and the ability to inspire others within the research
              community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;
