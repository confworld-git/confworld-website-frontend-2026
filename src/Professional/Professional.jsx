import React from "react";
import "./Professional.css";
import { Link, useNavigate } from "react-router-dom";
import { Seo } from "../components/seo";

const Professional = () => {
  const navigate = useNavigate();
  const professional_membership = [
    {
      heading: "CERADA Professional Membership",
      description:
        "Our premium professional membership is a trailblazer in developing global technical and professional advancement opportunities. Confworld Educational Research and Development Association (CERADA) members are actively engaged in various research and development activities, playing a pioneering role in reviewing research papers and ensuring the success of technical events and conferences. The organization provides members with the scope to build a robust technical and professional network, boosting technical advancement and research development worldwide.",
    },
    {
      heading: "Development Opportunities",
      description:
        "Confworld Educational Research and Development Association (CERADA) Professional Membership offers a wealth of professional development opportunities for individuals in engineering, education, business & management, science and technology. Members can access webinars, attend workshops and conferences and enjoy exclusive discounts on events and services.",
    },
    {
      heading: "Networking and Resources",
      description:
        "Members have the opportunity to network with other professionals, receive discounts on courses and services and participate in exclusive events. Additionally, members can join discussion forums and utilize the organization's social media channels to stay informed about current events and advancements in their fields.",
    },
  ];

  const professional_membership_fees = [
    {
      currency: "INR",
      fee: "999",
      gst: "18",
      perMonthYear: "year",
      for_student: " indian professor / researcher",
      year: 1,
    },
    {
      currency: "USD",
      fee: "20",
      perMonthYear: "year",
      for_student: " international  professor / researcher",
      year: 1,
    },
    {
      currency: "INR",
      fee: "2499",
      gst: "18",
      perMonthYear: "year",
      for_student: " indian professor / researcher",
      year: 3,
    },
    {
      currency: "USD",
      fee: "50",
      perMonthYear: "year",
      for_student: " international  professor / researcher",
      year: 3,
    },
    {
      currency: "INR",
      fee: "3999",
      gst: "18",
      perMonthYear: "year",
      for_student: " indian professor / researcher",
      year: 5,
    },
    {
      currency: "USD",
      fee: "75",
      perMonthYear: "year",
      for_student: " international  professor / researcher",
      year: 5,
    },
    {
      currency: "INR",
      fee: "9999",
      gst: "18",
      perMonthYear: "year",
      for_student: " indian professor / researcher",
      year: "Lifetime",
    },
    {
      currency: "USD",
      fee: "150",
      perMonthYear: "year",
      for_student: " international  professor / researcher",
      year: "Lifetime",
    },
  ];
  return (
    <div>
      <Seo
        title="Professional Membership | CERADA - Global Network for Researchers & Professionals"
        description="Join CERADA Professional Membership for researchers, academicians & professionals in engineering, science, and management. Access webinars, workshops, networking & exclusive benefits."
      />
      <div className="top-img pm" data-aos="fade-up">
        <img
          className="absolute  z-[-10] h-full w-full  object-cover"
          src="/images/professional-membership-banner.webp"
          alt="professional-membership-banner"
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
              dominantBaseline="middle"
              textAnchor="middle"
              className="outline-draw"
              fontSize="60"
            >
              Professional Membership
            </text>
          </svg>
        </h1>
      </div>
      <section className="about-main Professional">
        <div data-aos="fade-right">
          {professional_membership.map(({ heading, description }, index) => (
            <>
              <h2>{heading}</h2>
              <p>{description}</p>
            </>
          ))}
        </div>
        <section>
          <h2 className="text-[#00cec8] text-2xl text-center">
            Benefits of Professional Membership
          </h2>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            width="640"
            height="360"
          >
            <source
              src="/videos/benefits-of-professional-membership.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </section>
      </section>
      <section className="join-us">
        <h2>Join Us</h2>
        <p>
          Join Confworld Educational Research and Development Association
          (CERADA) Professional Membership to be part of a thriving community
          dedicated to advancing technical and professional development
          globally.
        </p>
        <p style={{ color: "red", fontSize: "15px", marginBottom: "30px" }}>
          *Professional Membership - Professionals / Academician / Delegates /
          Research Scholars / PhD pursuing
        </p>
        <div>
          <img
            src="/gifImages/join-us.svg"
            id="join-pro"
            alt="Join Confworld Educational Research and Development Association
          (CERADA) Professional Membership"
            width={450}
            height={450}
            loading="lazy"
          />
          <section className="price-tag tag-prof">
            {professional_membership_fees.map(
              (
                { perMonthYear, gst, fee, currency, for_student, year },
                index
              ) => (
                <Link
                  to="/professional-membership"
                  data-aos="fade-left"
                  className=""
                  state={{
                    Year: year,
                    Currency: currency,
                    Professional_Amount: fee,
                  }}
                  rel="noopener"
                >
                  <h2 className="capitalize">
                    {year} {year !== "Lifetime" ? perMonthYear : ""} -
                    {gst
                      ? ` ${currency} ${fee} + ${gst}% GST`
                      : `${fee} ${currency}`}{" "}
                  </h2>
                  <p className="capitalize">For {for_student}</p>
                  <button>
                    <span>Join as a Member {">"}</span>
                  </button>
                </Link>
              )
            )}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Professional;
