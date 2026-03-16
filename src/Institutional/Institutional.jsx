import React from "react";
import "./Institutional.css";
import { Link, useNavigate } from "react-router-dom";
import enhance_your_institutions from "./Institutional_table.js";

import Our_Institutional_Members from "./Our_Institutional_Members/Our_Institutional_Members";
import { Seo } from "../components/seo.jsx";
const Institutional = () => {
  const navigate = useNavigate();

  const institutional_fees = [
    {
      price: [
        {
          university: "Indian Universities",
          fee: "49,999",
          gst: "18",
          currency: "INR",
        },
        {
          university: "Abroad Universities",
          fee: "999",
          currency: "USD",
        },
      ],
    },
    {
      price: [
        {
          university: "Indian Universities",
          fee: "99,999",
          gst: "18",
          currency: "INR",
        },
        {
          university: "Abroad Universities",
          fee: "1,999",
          currency: "USD",
        },
      ],
    },
  ];

  return (
    <div>
      <Seo
        title="Institutional Membership | CERADA - Collaborate & Advance Academic Research"
        description="Confworld CERADA Institutional Membership offers collaboration in engineering, science & tech with benefits like conferences, publication discounts, and research support."
      />
      <div className="top-img im relative" data-aos="fade-up">
        <img
          className="absolute object-center z-[-10] h-full w-full object-cover"
          src="/images/institutional.webp"
          alt="institutional-banner"
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
              Institutional Membership
            </text>
          </svg>
        </h1>
      </div>
      <section
        className="about-main center Institutional"
        style={{ marginBottom: "0px" }}
      >
        <div data-aos="fade-right">
          <h4>CERADA Institutional Membership</h4>
          <p>
            Our Institutional Membership program enables universities and
            institutions to collaborate in the fields of Engineering, Science
            and Technology. By becoming an Institutional Member of the Confworld
            Educational Research And Development Association (CERADA)
            engineering colleges, universities and institutions gain exclusive
            opportunities for mutual collaboration aimed at academic advancement
            and research & development.
          </p>
          <br />
          <p>
            Institutional Membership with Confworld Educational Research and
            Development Association (CERADA) fosters a collaborative environment
            where institutions can work together to achieve significant
            advancements in academic and research pursuits. Join us to be a part
            of a global network dedicated to the progress and development of
            science and technology.
          </p>
        </div>
        <img
          data-aos="fade-left"
          src="/images/benefits-of-institutional-membership.webp"
          id="inst-info"
          alt="CERADA Institutional Membership"
          width={450}
          height={450}
          loading="lazy"
        />
      </section>
      <section className="types" style={{ marginTop: "0px" }}>
        <h2 data-aos="fade-up">
          Two types of Confworld Educational Research and Development
          Association (CERADA) Institutional Membership
        </h2>
        <div>
          <img
            src="/images/standard-institutional-membership.webp"
            data-aos="flip-left"
            alt="standard-institutional-membership"
            width={300}
            height={300}
            loading="lazy"
          />
          <img
            src="/images/elite-institutional-membership.webp"
            data-aos="flip-right"
            alt="elite-institutional-membership"
            width={300}
            height={300}
            loading="lazy"
          />
        </div>
      </section>
      <section>
        <h2 className="Enhance" data-aos="fade-up">
          Enhance Your Institution’s QS Ranking with CERADA's Institutional
          Membership
        </h2>
        <div className="cerada-membership-container" data-aos="fade-up">
          <table className="cerada-membership-table">
            <thead>
              <tr>
                <th>STANDARD</th>
                <th>ELITE</th>
                <th>QS RANKING SUPPORT</th>
              </tr>
            </thead>
            <tbody>
              {enhance_your_institutions.map(
                ({ standard, elite, qs_ranking }, head_index) => (
                  <tr key={head_index}>
                    <td>
                      <ul>
                        {standard?.map(({ description }, index) => (
                          <li key={index}>{description}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <ul>
                        {elite?.map(({ description }, index) => (
                          <li key={index}>{description}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <ul>
                        {qs_ranking?.map(({ description }, index) => (
                          <li key={index}>{description}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                )
              )}
              <tr>
                {institutional_fees.map(({ price }, index) => (
                  <td className="last">
                    {price?.map(({ currency, fee, university, gst }) => (
                      <p>
                        For {university} : {fee}{" "}
                        {gst ? `${currency} + ${gst} % GST` : `${currency}`}
                      </p>
                    ))}
                    <button>
                      <Link to="/institutional-membership" rel="noopener">
                        Join as a Member {">"}
                      </Link>
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Our_Institutional_Members />
    </div>
  );
};

export default Institutional;
