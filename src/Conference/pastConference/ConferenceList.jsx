import React from "react";
import { Link } from "react-router-dom";
import { Seo } from "../../components/seo";

const ConferenceList = () => {
  const pastConference = [
  {
    title: (
      <>
        1<sup>st</sup> International Conference on Social Sciences, Teaching & Education, Engineering and Technology ( ICSTEET-2025 )
      </>
    ),
    date: "22-23 January, 2025",
    location: "Manila, Philippines",
    conference_venue: "Conference Venue: Acacia Hotel Manila",
    organized_by:
      "World Citi Colleges, Quezon City, Philippines and Confworld Educational Research and Development Association",
    link: "/icsteet-conference-2025",
    logo: "/images/past-conference/2025/icsteet/icsteet-logo-2025.webp",
  },
  {
    title: (
      <>
        1<sup>st</sup> International Conference on Sustainable Agriculture Practices and Climate Change Impacts ( ICSAPCI-2025 )
      </>
    ),
    date: "08-09 May, 2025",
    location: "Manila, Philippines",
    conference_venue: "Conference Venue: Acacia Hotel Manila",
    organized_by:
      "Nueva Ecija University of Science and Technology (NEUST), Philippines, Keladi Shivappa Nayaka University of Agricultural Sciences (KSNUAHS), India and Confworld Educational Research and Development Association (CERADA)",
    link: "/icsap-conference-2025",
    logo: "/images/past-conference/2025/icsapci/icsapci-logo-2025.webp",
  },
  {
    title: (
      <>
        1<sup>st</sup> World Conference on Multidisciplinary Research and Practices (WCMRP-2025)
      </>
    ),
    date: "19-20 Jun, 2025",
    location: "Kuala Lumpur, Malaysia",
    conference_venue: "Virtual Conference",
    organized_by:
      "Nueva Ecija University of Science and Technology (NEUST), Philippines, Shri Madhwa Vadiraja Institute of Technology & Management (SMVITM), India and Confworld Educational Research and Development Association",
    link: "/wcmrp-conference-2025",
    logo: "/images/past-conference/2025/wcmrp/wcmrp.jpg",
  },
  {
    title: (
      <>
        1<sup>st</sup> International Conference on Applied Science, Business and Management, Engineering & Technology (ICABMET-2025)
      </>
    ),
    date: "23-24 Jul, 2025",
    location: "Chennai, India",
    conference_venue: "Virtual Conference",
    organized_by:
      " Dashmesh Khalsa College, Zirakpur, Punjab, India and Confworld Educational Research and Development Association",
    link: "/icabmet-conference-2025",
    logo: "/images/past-conference/2025/icabmet/icabmet.jpg",
  },
  {
    title: (
      <>
        1<sup>st</sup> International Conference on Emerging Trends in Multidisciplinary Research Studies (ICETMRS-2025)
      </>
    ),
    date: "19-20 Nov, 2025",
    location: "Kuala Lumpur, Malaysia",
    conference_venue: "Virtual Conference",
    organized_by:
      "GlobalNxt University, Malaysia and Confworld Educational Research and Development Association",
    link: "/icetmrs-conference-2025",
    logo: "/images/past-conference/2025/icetmrs/icetmrs.png",
  },
  {
    title: (
      <>
        1<sup>st</sup> Asia Pacific Conference on Engineering, Education, Social Science and Humanities (APCEESH-2025)
      </>
    ),
    date: "15-16 Dec, 2025",
    location: "Bangkok, Thailand",
    conference_venue: "Conference Venue: Novotel Bangkok Platinum Pratunam, Thailand",
    organized_by:
      "Shinawatra University (SIU), Thailand, KLS Vishwanathrao Deshpande Institute of Technology (KLS VDIT), India and Confworld Educational Research and Development Association",
    link: "/apceesh-conference-2025",
    logo: "/images/past-conference/2025/apceesh/apceesh.jpg",
  },
  
];

  return (
    <div className="past_conference_list_2025">
      <Seo
        title="Past Conferences 2025 | CERADA – Global Research Conferences in Education, Technology & Sustainability"
        description="View CERADA's 2025 conferences including ICSTEET and ICSAPCI, held in Manila. Topics spanned social sciences, education, engineering, and climate-resilient agriculture—fostering global academic collaboration."
      />
      <h1 data-aos="fade-up">Past Conferences - 2025</h1>
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

export default ConferenceList;
