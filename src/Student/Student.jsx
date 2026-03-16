import React from "react";
import "./Student.css";
import { Link, useNavigate } from "react-router-dom";
import { Seo } from "../components/seo";

const student_membership_fees = [
  {
    currency: "INR",
    fee: "499",
    gst: "18",
    perMonthYear: "year",
    for_student: "indian students",
  },
  {
    currency: "USD",
    fee: "15",
    perMonthYear: "year",
    for_student: "international students",
  },
];
const Student = () => {
  const navigate = useNavigate();
  const student_membership = [
    {
      heading:
        "Confworld Educational Research and Development Association (CERADA) Student Membership",
      description:
        "Our premium student membership encourages and supports students in            developing and globalizing their innovative engineering and technology concepts. Students pursuing undergraduate and postgraduate degrees in engineering, science and technology, business and management can apply for Confworld Educational Research and Development Association (CERADA) Student Membership.",
    },
    {
      heading: "Support and Guidance",
      description:
        "Confworld Educational Research and Development Association (CERADA) provides essential guidance to student members, helping them build and globalize their innovative ideas. Through this membership, students can connect with professionals in engineering, science and technology, business and management, offering them a global network to enhance their academic and professional journeys.",
    },
    {
      heading: "Premium Membership Community",
      description:
        "Joining the Confworld Educational Research and Development Association (CERADA) Premium Membership community allows students to network with like-minded individuals and focus on developing their professional skills. This community supports students as they progress through their academic studies and their professional careers.",
    },
  ];
  return (
    <div>
      <Seo
        title="Student Membership | CERADA - Support for Engineering & Science Students"
        description="Join CERADA Student Membership for UG & PG students in engineering, science, technology, and management. Access global network, guidance, and career support."
      />
      <div className="top-img" data-aos="fade-up">
        <img
          className="absolute  z-[-10] h-full w-full object-cover"
          src="/images/student-membership-banner.webp"
          alt="student-membership-banner"
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
              Student Membership
            </text>
          </svg>
        </h1>
      </div>
      <section className="about-main std-m">
        <div data-aos="fade-right">
          {student_membership.map(({ heading, description }, index) => (
            <>
              <h4>{heading}</h4>
              <p>{description}</p>
            </>
          ))}
        </div>
        <section data-aos="fade-left">
          <h2 className="text-[#00cec8] text-2xl text-center">
            Benefits of Student Membership
          </h2>
          <img
            src="/images/benefits-student-membership.gif"
            className="w-200 "
            alt="Confworld Educational Research and Development Association (CERADA)
            Student Membership"
            width={450}
            height={450}
            loading="lazy"
          />
        </section>
      </section>
      <section className="join-us">
        <h2 data-aos="fade-up">Join Us</h2>
        <p data-aos="fade-up">
          Join us today and be a part of a thriving tech innovation community
          dedicated to advancing engineering, science and technology.
        </p>
        <p data-aos="fade-up" style={{ color: "red", fontSize: "15px" }}>
          *Student Membership - UG and PG students only
        </p>
        <div>
          <img
            data-aos="fade-right"
            src="/images/join.svg"
            alt="Join us today and be a part of a thriving tech innovation community
          dedicated to advancing engineering, science and technology."
            width={500}
            height={500}
            loading="lazy"
          />
          <section className="price-tag">
            {student_membership_fees.map(
              ({ perMonthYear, gst, fee, currency, for_student }, index) => (
                <Link to="/student-membership" data-aos="fade-left">
                  <h2 className="capitalize">
                    {gst
                      ? `${currency} ${fee} + ${gst}% GST`
                      : `${fee} ${currency}`}{" "}
                    / {perMonthYear}
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

export default Student;
