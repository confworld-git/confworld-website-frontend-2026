import React from "react";
import Main from "./Home/Main/Main";
import Welcome from "./Home/Welcome/Welcome";
import Service from "./Home/Service/Service";
import Upcoming from "./Home/Upcoming/Upcoming";
import Membership from "./Home/Membership/Membership";
import Testimonial from "./Home/Testimonial/Testimonial";
import { Seo } from "./components/seo";

const                                                     Homepage = () => {
  return (
    <>
      <Seo
        title="Home | CERADA – Confworld Educational Research and Development Association"
        description="CERADA offers global academic conferences, publication support, memberships, and research assistance across science, education, and technology."
      />

      <Main />
      <Upcoming />
      <Welcome />
      <Service />
      
      <Membership />
      <Testimonial />
    </>
  );
};

export default Homepage;
