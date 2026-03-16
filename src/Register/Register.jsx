import React, { useState } from "react";
import "./Register.css";
import { BsArrowRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { Seo } from "../components/seo";

const Register = () => {
  const navigate = useNavigate();
  const HandleMembership = (e) => {
    console.log(e);
    if (e) {
      navigate("/" + e, { state: { who: e } });
    }
  };

  const cerada_membership = [
    {
      title: "CERADA Student Membership",
      link: "/student-membership",
      member: "UG, PG Student",
    },
    {
      title: "CERADA Professional Membership",
      link: "/professional-membership",
      member: "Academicians,Researchers,Corporate Individuals",
    },
    {
      title: "CERADA Institutional Membership",
      link: "/institutional-membership",
      member: "Universities/Colleges/Institutions",
    },
    {
      title: "CERADA Corporate Membership",
      link: "/corporate-membership",
      member: "Company/Organization",
    },
  ];
  return (
    <div className="register-page">
      <Seo
        title="CERADA Membership | Join as Student, Professional, Institutional or Corporate Member"
        description="Join CERADA Membership to connect with global professionals, researchers, institutions, and organizations. Explore Student, Professional, Institutional & Corporate memberships."
      />
      <img
        className="absolute object-center z-[0] h-full w-full object-cover"
        src="/images/register.svg"
        alt="register"
        width={800}
        height={400}
        loading="lazy"
      />
      <h2 data-aos="fade-right">CERADA Membership</h2>
      <p data-aos="fade-right">
        Become a CERADA Member to Get Connect with professional world !
      </p>
      <div data-aos="fade-right">
        {cerada_membership.map(({ title, link, member }, index) => (
          <Link to={link}>
            <h4>
              {title} <BsArrowRight />
            </h4>
            <p>{member}</p>
          </Link>
        ))}
        {/* <button onClick={() => HandleMembership("student-membership")}>
          <p>
            CERADA Student Membership
            <BsArrowRight />
          </p>
          <p>UG, PG Student</p>
        </button>
        <button onClick={() => HandleMembership("professional-membership")}>
          <p>
            CERADA Professional Membership
            <BsArrowRight />
          </p>
          <p>Academicians,Researchers,Corporate Individuals</p>
        </button>
        <button onClick={() => HandleMembership("institutional-membership")}>
          <p>
            CERADA Institutional Membership
            <BsArrowRight />
          </p>
          <p>Universities/Colleges/Institutions</p>
        </button>
        <button onClick={() => HandleMembership("corporate-membership")}>
          <p>
            CERADA Corporate Membership
            <BsArrowRight />
          </p>
          <p>Company/Organization</p>
        </button> */}
      </div>
    </div>
  );
};

export default Register;
