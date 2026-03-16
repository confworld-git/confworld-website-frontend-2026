import React, { useState } from "react";
import "./AboutUs.css";

import "react-phone-number-input/style.css";
import { Seo } from "../../components/seo";

const AboutUs = () => {
  return (
    <div className="about-us">
      <Seo
        title="About Us | CERADA – Confworld Educational Research and Development Association"
        description="Learn about CERADA’s mission, global impact, and leadership in advancing research, education, and innovation through conferences and collaborations."
      />

      <div className="top-img relative" data-aos="fade-up">
        <img
          className="absolute object-top z-[-10] h-full w-full object-cover"
          src="/images/aboutUs/cerada-about-banner.webp"
          alt="cereda-about-image"
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
              About Us
            </text>
          </svg>
        </h2>
      </div>
      <section className="about-main center change z-10" data-aos="fade-up">
        <div data-aos="fade-right" data-aos-anchor-placement="top-bottom">
          <h1
            style={{
              height: "auto",
              background: "none",
              justifyContent: "left",
              fontWeight: "400",
            }}
          >
            Who We Are
          </h1>
          <p>
            The Confworld Educational Research And Development Association
            (CERADA) is an internationally recognized, globally operating
            multidisciplinary professional association. Confworld Educational
            Research and Development Association (CERADA) aims to integrate
            researchers and academicians working in the micro disciplines of
            science and technology, fostering collaboration and innovation
            across a broad spectrum of fields.
          </p>
        </div>
        <img
          data-aos="fade-left"
          src="/gifImages/who-we-are.svg"
          alt="The Confworld Educational Research And Development Association
            (CERADA) is an internationally recognized, globally operating
            multidisciplinary professional association."
          width={450}
          height={450}
          loading="lazy"
        />
      </section>
      <section className="about-main mission">
        <div data-aos="fade-right">
          <h4>Our Mission</h4>
          <p>
            Confworld Educational Research and Development Association (CERADA)
            advances global education and research through international
            conferences, research assistance and collaborative publications,
            fostering an inclusive environment for knowledge sharing and
            innovation.
          </p>
        </div>
        <img
          data-aos="fade-left"
          src="/images/cerada-mission.webp"
          alt="Confworld Educational Research and Development Association (CERADA)
            advances global education and research through international
            conferences, research assistance and collaborative publications,
            fostering an inclusive environment for knowledge sharing and
            innovation."
          width={400}
          height={200}
          loading="lazy"
        />
      </section>
      <section className="about-main mission vision">
        <div data-aos="fade-left">
          <h4>Our Vision</h4>
          <p>
            Confworld Educational Research and Development Association (CERADA)
            advances global education and research through international
            conferences, research assistance and collaborative publications,
            fostering an inclusive environment for knowledge sharing and
            innovation.
          </p>
        </div>
        <img
          data-aos="fade-right"
          src="/images/cerada-vision.webp"
          alt="Confworld Educational Research and Development Association (CERADA)
            advances global education and research through international
            conferences, research assistance and collaborative publications,
            fostering an inclusive environment for knowledge sharing and
            innovation."
          width={450}
          height={450}
          loading="lazy"
        />
      </section>
      <section className="what-we" data-aos="fade-up">
        <h2>What We do</h2>
        <p>
          Confworld Educational Research and Development Association (CERADA)
          dedicated to promote activities leading to overall research and
          development, such as the promotion of Science, Education and Research
          associated with various professional fields including but not limited
          to engineering, management, medicine and beyond. This includes the
          publication of research papers and articles, organizing seminars,
          workshops, conferences and providing a platform for technical
          interactions among professionals, researchers and scientists to guide
          students in the development of Engineering, Science & Technology,
          Education, Management, Social Sciences, Arts & Humanities and beyond.
          As a part of this mission, we offer a platform that enables:
        </p>
        <ul>
          <li data-aos="flip-down">
            CERADA organizes a wide range of educational initiatives, which
            includes conferences, workshops, webinars, guest lectures, seminars,
            short-term training programs, public education programs and faculty
            development programs, all focused on Engineering and Science &
            Technology.
          </li>
          <li data-aos="flip-down">
            With a focus on curiosity, innovation and the latest trends in
            Engineering and Technology, CERADA is dedicated to fostering
            knowledge in these fields.
          </li>
          <li data-aos="flip-down">
            We are committed to provide easy access to academic resources and
            support for aspiring students and research scholars from both urban
            and rural areas.
          </li>
          <li data-aos="flip-down">
            We are committed to fostering partnerships with universities,
            organizations and associations to promote knowledge sharing and work
            collectively toward building a better future.
          </li>
        </ul>
      </section>
      <section className="about-main change">
        <div data-aos="fade-left">
          <h2>Our Role in the Global Community</h2>
          <p>
            Confworld Educational Research and Development Association (CERADA)
            plays a crucial role in the global scientific community by driving
            progress and innovation through its multidisciplinary approach and
            international collaborations. By working together with a wide array
            of stakeholders, Confworld Educational Research and Development
            Association (CERADA) contributes to overcoming global challenges and
            enhancing scientific understanding across multiple domains. Our
            commitment to excellence and sustainability positions us as a leader
            in the advancement of science and technology, making a positive
            impact on society and the world at large.
          </p>
        </div>
        <img
          width={450}
          height={450}
          loading="lazy"
          data-aos="fade-left"
          src="/gifImages/our-role-in-the-global-community.svg"
          alt="Our Role in the Global Community"
        />
      </section>
      <section className="about-main">
        <div data-aos="fade-right">
          <h2>Our Incorporation</h2>
          <h4>Research & Development Association</h4>
          <p>
            Confworld Educational Research and Development Association (CERADA),
            officially registered as a Non-Profit Organization under Section 8
            of the Companies Act at the Ministry of Corporate Affairs,
            Government of India, was founded in Chennai, Tamil Nadu. Since our
            inception, we have been dedicated to supporting the global academic
            community through strong associations and publications.
          </p>
          <p>
            We serve as a comprehensive umbrella for numerous scientific
            communities, associations and organizations in sectors such as
            engineering, science & technology, education and medicine. Our
            mission is to enhance research outcomes worldwide by providing
            researchers and institutions with opportunities to foster innovation
            and collaboration.
          </p>
          <p>
            Confworld Educational Research and Development Association (CERADA)
            is committed to promoting sustainable development and elevating the
            standards of scientific research and technological advancement
            globally.
          </p>
        </div>
        <img
          width={450}
          height={450}
          loading="lazy"
          data-aos="fade-left"
          src="/gifImages/our-incorporation.svg"
          alt="Research & Development Association"
        />
      </section>
      <section className="about-main change center">
        <div data-aos="fade-left">
          <h2>Small-Scale Industry</h2>
          <p>
            Confworld Educational Research and Development Association (CERADA)
            has been registered in the small-scale industry, which has been
            recognized as a small-scale industry by the Government of India.
            This is significant as it implies that Confworld Educational
            Research and Development Association (CERADA) can now leverage
            various benefits and support systems designed for small-scale
            industries in India, potentially enhancing its ability to prioritize
            skill development.
          </p>
        </div>
        <img
          width={450}
          height={450}
          loading="lazy"
          data-aos="fade-right"
          src="/gifImages/small-scale-industry.svg"
          alt="Small-Scale Industry"
        />
      </section>
      <section className="about-main">
        <div data-aos="fade-right">
          <h2>Leadership and Governance</h2>
          <h4>Executive Leadership</h4>
          <p>
            Our executive team brings together a wealth of experience and
            expertise from diverse backgrounds. Committed to fostering
            innovation and growth, they steer our organization towards its goals
            while upholding our core values. Meet the individuals shaping our
            future.
          </p>
          <h4>Chairs, Committees and Councils</h4>
          <p>
            Our Chairs, Committees and Councils serve as pillars of support and
            guidance, providing strategic direction and oversight across various
            aspects of our operations. Comprised of talented professionals and
            industry leaders, these bodies ensure that we remain at the
            forefront of our field, driving progress and maintaining our
            commitment to excellence.
          </p>
        </div>
        <img
          width={450}
          height={450}
          loading="lazy"
          data-aos="fade-left"
          src="/gifImages/leadership-and-governance.svg"
          alt="Our Role in the Global Community"
        />
      </section>
    </div>
  );
};

export default AboutUs;
