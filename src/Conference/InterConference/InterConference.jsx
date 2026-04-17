import React, { useState } from "react";
import "./InterConference.css";
// import events from "./conference";
import { RiArrowRightWideLine } from "react-icons/ri";
import { RiArrowLeftWideLine } from "react-icons/ri";
import Upcoming from "../../Home/Upcoming/Upcoming.jsx";
import { Seo } from "../../components/seo.jsx";

const InterConference = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < events.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };
  const events = [
    // {
    //   SNo: 1,
    //   Date: "25-26 Sep 2025",
    //   Mode: "Hybrid",
    //   Title:
    //     "International Conference on Multidisciplinary Educational Research, Social Science and Humanities (ICMERSH-2025)",
    //   Theme:
    //     "Bridging Knowledge and Innovation: Exploring Interdisciplinary Approaches in Education, Social Science and Humanities",
    //   Place: "Bali, Indonesia",
    // },
    // {
    //   SNo: 1,
    //   Date: "19-20 Nov 2025",
    //   Mode: "Hybrid",
    //   Title:
    //     "International Conference on Emerging Trends in Multidisciplinary Research Studies (ICETMRS-2025)",
    //   Theme:
    //     "Sustainable Learning Through Multidisciplinary Research and Technological Innovation",
    //   Place: "Kuala Lumpur, Malaysia",
    // },
    // {
    //   SNo: 2,
    //   Date: "15-16 Dec 2025",
    //   Mode: "Hybrid",
    //   Title:
    //     "Asia Pacific Conference on Engineering, Education, Social Science and Humanities (APCEESH-2025)",
    //   Theme:
    //     "Redefining Futures through Education, Technology and Social Progress for Global Sustainability",
    //   Place: "Bangkok, Thailand",
    // },
    
    
    // {
    //   SNo: 1,
    //   Date: "16-17 Apr 2026",
    //   Mode: "Hybrid",
    //   Superscript: {
    //     number: 2,
    //     text: "nd",
    //   },
    //   Title:
    //     "International Conference on Sustainable Agriculture Practices and Climate Change Impacts (ICSAPCI-2026)",
    //   Theme:
    //     "Innovative Approaches to Mitigate Climate Change through Sustainable Agriculture",
    //   Place: "Jakarta, Indonesia",
    // },
    {
      SNo: 1,
      Date: "14-15 May 2026",
      Mode: "Hybrid",
      Superscript: {
        number: 2,
        text: "nd",
      },
      Title:
        "International Conference on Social Sciences, Teaching & Education, Engineering and Technology (ICSTEET-2026)",
      Theme:
        "Bridging the Gap: Innovations and Challenges in Social Sciences, Teaching & Education, Engineering and Technology",
      Place: "Manila, Philippines",
      Link: "https://icsteet.com",
    },
    
    {
      SNo: 2,
      Date: "14-15 May 2026",
      Mode: "Hybrid",
      Title:
        "International Conference on Life Sciences and Multidisciplinary Healthcare Approaches (ICLSMHA-2026)",
      Theme:
        "Bridging Science and Practice: Multidisciplinary Approaches to Health and Wellbeing",
      Place: "Manila, Philippines",
    },
    {
      SNo: 3,
      Date: "29-30 May 2026",
      Mode: "Hybrid",
      Superscript: {
        number: 2,
        text: "nd",
      },
      Title:
        "World Conference on Multidisciplinary Research and Practices (WCMRP-2026)",
      Theme:
        "Integrating Knowledge Across Disciplines for Global Impact: Innovations, Challenges and Sustainable Solutions",
      Place: "Kuala Lumpur, Malaysia",
    },
    {
      SNo: 4,
      Date: "27-28 Jul 2026",
      Mode: "Hybrid",
      Superscript: {
        number: 1,
        text: "st",
      },
      Title:
        "International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities (ICAEBMS-2026)",
      Theme:
        "Interdisciplinary Innovations for a Sustainable Future",
      Place: "Singapore",
    },
    {
      SNo: 5,
      Date: "28-29 Sep 2026",
      Mode: "Hybrid",
      Superscript: {
        number: 2,
        text: "nd",
      },
      Title:
        "Asia Pacific Conference on Engineering, Education, Social Science and Humanities (APCEESH-2026)",
      Theme:
        "Redefining Futures through Education, Technology and Social Progress for Global Sustainability",
      Place: "Bangkok, Thailand",
    },
    {
      SNo: 6,
      Date: "16-17 Nov 2026",
      Mode: "Hybrid",
      Superscript: {
        number: 2,
        text: "nd",
      },
      Title:
        "International Conference on Emerging Trends in Multidisciplinary Research Studies (ICETMRS-2026)",
      Theme:
        "Sustainable Learning Through Multidisciplinary Research and Technological Innovation",
      Place: "Istanbul, Turkey",
    },
    {
      SNo: 7,
      Date: "26-27 Jul 2027",
      Mode: "Hybrid",
      Superscript: {
        number: 3,
        text: "rd",
      },
      Title:
        "International Conference on Applied Science, Business and Management, Engineering & Technology (ICABMET-2027)",
      Theme:
        "Driving Innovation and Sustainable Solutions: Interdisciplinary Approaches in Applied Sciences, Business and Technology",
      Place: "Chennai, India",
    },
  ];
  return (
    <div className="conference">
      <Seo
        title="Upcoming CERADA International Conferences 2025-2026 | Global Research & Innovation Events"
        description="Join CERADA’s upcoming international conferences in Asia and beyond. Connect with global researchers, share innovations, and explore multidisciplinary breakthroughs."
      />
      <div className="top-img relative" data-aos="fade-up">
        <img
          className="absolute object-center z-[-10] h-full w-full object-cover"
          src="/images/international-conferences-banner.webp"
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
              International Conferences
            </text>
          </svg>
        </h1>
      </div>
      <section className="about-main I-C" style={{ marginBottom: "0px" }}>
        <div data-aos="fade-right">
          <h1 style={{ height: "auto", background: "none" }}>
            Upcoming CERADA International Conferences
          </h1>
          <p>
            We are thrilled to announce the upcoming Confworld Educational
            Research and Development Association (CERADA) International
            Conferences, a premier event that brings together leading minds from
            around the globe to share groundbreaking research, innovative ideas
            and dynamic discussions. These international conferences are
            designed to foster collaboration, inspire creativity and drive
            progress across various fields of study.
          </p>
        </div>
        <img
          data-aos="fade-left"
          src="/gifImages/upcoming-cerada-international-conferences.svg"
          alt="Upcoming CERADA International Conferences"
          width={450}
          height={450}
          loading="lazy"
        />
      </section>
      <div className="inter-upcoming-div">
        <Upcoming />
      </div>
      <section className="list-table" id="list-of-conferences">
        <table>
          <thead>
            <tr data-aos="fade-up">
              <th>Date</th>
              <th>Topic</th>
              <th>Theme</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {events
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((event) => (
                <tr key={event.SNo} data-aos="fade-up">
                  <td>{event.Date}</td>
                  <td>
                    {event.Superscript ? (
                      <>
                        {event.Superscript.number}
                        <span style={{ fontSize: 12, verticalAlign: "super" }}>
                          {event.Superscript.text}
                        </span>{" "}
                        {event.Title}
                      </>
                    ) : (
                      event.Title
                    )}
                  </td>
                  <td>{event.Theme}</td>
                  <td>{event.Place}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div
          className="btns"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <button onClick={handlePrevious} disabled={currentIndex === 0}>
            <RiArrowLeftWideLine className="icon" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + itemsPerPage >= events.length}
          >
            <RiArrowRightWideLine className="icon" />
          </button>
        </div>
      </section>
      <section className="about-main change align" style={{ marginTop: "0px" }}>
        <div data-aos="fade-left">
          <h2>CERADA International Conferences</h2>
          <h4>
            Experience the Best with Confworld Educational Research and
            Development Association (CERADA)
          </h4>
          <p>
            We are dedicated to ensure that our conference is a reward and
            enjoyable experience for all participants. Our carefully curated
            program includes keynote speeches from industry leaders, engaged
            panel discussions and numerous networking opportunities. We ensure
            that every moment at the Confworld Educational Research and
            Development Association (CERADA) conference is packed with valuable
            insights, connections and experiences that will leave a lasting
            impact on your professional journey.
          </p>
        </div>
        <img
          data-aos="fade-right"
          src="/gifImages/experience-the-best.svg"
          id="conf"
          alt="Experience the Best (CERADA)"
          width={450}
          height={450}
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default InterConference;
