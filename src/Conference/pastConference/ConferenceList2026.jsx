import React from "react";
import { Link } from "react-router-dom";
import { Seo } from "../../components/seo";

const ConferenceList2026 = () => {
  const pastConference = [

  {
    title: (
      <>
        2<sup>nd</sup> International Conference on Applied Science, Business and Management, Engineering & Technology (ICABMET-2026)
      </>
    ),
    date: "30-31 Mar, 2026",
    location: "Dubai, UAE",
    conference_venue: "Virtual Conference",
    organized_by:
      " St. Dominic College of Asia, Philippines and Confworld Educational Research and Development Association",
    link: "/icabmet-conference-2026",
    logo: "/images/past-conference/2026/icabmet-2026/icabmet.png",
  },
];

  return (
    <div className="past_conference_list_2025">
      <Seo
        title="Past Conferences 2025 | CERADA – Global Research Conferences in Education, Technology & Sustainability"
        description="View CERADA's 2025 conferences including ICSTEET and ICSAPCI, held in Manila. Topics spanned social sciences, education, engineering, and climate-resilient agriculture—fostering global academic collaboration."
      />
      <h1 data-aos="fade-up">Past Conferences - 2026</h1>
      <section className="past-conferences-list" data-aos="fade-up">
        {pastConference.map(
          (
            {
              title,
              date,
              location,
              conference_venue,
              organized_by,
              link,
              logo,
            },
            index
          ) => (
            <Link
              key={index}
              to={link}
              className="conference-container"
              data-aos="zoom-in-up"
              data-aos-anchor-placement="top-bottom"
              rel="noopener"
            >
              <img
                src={logo}
                alt={title}
                width={400}
                height={400}
                loading="lazy"
              />
              <p className="my-5">{title}</p>
              <div>
                <p>{date}</p>
                <p>{location}</p>
              </div>
              <span
                style={{
                  fontWeight: "550",
                  color: "#CC2352",
                  fontSize: "13.5px",
                }}
              >
                {conference_venue}
              </span>
              <span>
                <b>Organized by:</b> {organized_by}
              </span>
            </Link>
          )
        )}
      </section>
    </div>
  );
};

export default ConferenceList2026;
