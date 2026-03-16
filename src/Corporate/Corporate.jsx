import React from "react";
import "./Corporate.css";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Seo } from "../components/seo";
import CorporateCards from "./corporate-card";

const Corporate = () => {
  const navigate = useNavigate();

  const corporate_membership = [
    {
      title: "Benefits",
      image: "/images/corporate-benefits.svg",
      link: "/corporate-membership",
      details: [
        {
          heading: "Networking",
          description:
            "Connect with global engineers, academicians and professionals.",
        },
        {
          heading: "Brand Exposure",
          description:
            "Promote your brand on CERADA’s platforms in event materials.",
        },
        {
          heading: "Collaboration",
          description:
            "Form partnerships with academic and professional organizations.",
        },
        {
          heading: "Research Support",
          description: "Access resources and support for R&D projects.",
        },
        {
          heading: "Professional Development",
          description:
            "Invitations to conferences, workshops and access to cutting-edge research.",
        },
        {
          heading: "Employee Engagement",
          description:
            "Enhance skills through CERADA events and training programs.",
        },
        {
          heading: "Career Development",
          description:
            "Support for employee career growth and opportunities to present their work and ideas.",
        },
        {
          heading: "Exclusive Content",
          description:
            "Access and contribute to CERADA’s research papers and publications.",
        },
      ],
    },
    {
      title: "Brand Promotion & Visibility",
      image: "/images/brand-promotion-and-visibility.svg",
      details: [
        {
          heading: "Global Reach",
          description:
            "Connect with international researchers, academicians and professionals.",
        },
        {
          heading: "Digital Marketing",
          description:
            "Feature your logo on CERADA’s website,email and social media.",
        },
        {
          heading: "Event Materials",
          description: "Prominent logo placement in brochures and kits.",
        },
        {
          heading: "Increased Visibility",
          description: "Showcase your brand to global conference attendees.",
        },
        {
          heading: "Targeted Networking",
          description:
            "Connect with industry professionals and decision-makers.",
        },
        {
          heading: "Brand Recognition",
          description: "Enhance reputation by partnering with CERADA events.",
        },
        {
          heading: "Lead Generation",
          description: "Attract high-quality leads from a focused audience.",
        },
      ],
    },
    {
      title: "Advertise, Exhibit & Sponsor",
      image: "/images/advertise-exhibit-and-sponsor.svg",
      details: [
        {
          heading: "Advertise",
          description: "Slots in CERADA’s publications and online platforms.",
        },
        {
          heading: "Exhibit",
          description:
            "Booths at international events to showcase products and network.",
        },
        {
          heading: "Sponsorship",
          description:
            "Various tiers offering speaking opportunities, branded spaces and exclusive networking sessions,etc.",
        },
      ],
    },
  ];
  return (
    <div className="corporate">
      <Seo
        title="Corporate Membership | CERADA - Global Networking & Brand Promotion"
        description="Join CERADA Corporate Membership to connect with global engineers, academicians, and professionals. Boost your brand visibility, collaborate on R&D, and access exclusive events and marketing opportunities."
      />
      <div className="top-img" data-aos="fade-up">
        <img
          className="absolute object-center z-[-10] h-full w-full object-cover"
          src="/images/corporate-members-banner.webp"
          alt="corporate-members-banner-banner"
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
              Corporate Membership
            </text>
          </svg>
        </h1>
      </div>
      <section className="types corpo">
        <h2 data-aos="fade-up">
          Confworld Educational Research and Development Association (CERADA)
          Corporate Membership
        </h2>
        <div>
          <img
            data-aos="flip-left"
            src="/images/corporate-membership.webp"
            alt="Confworld Educational Research and Development Association (CERADA)
          Corporate Membership"
            height={450}
            width={300}
            loading="lazy"
          />
        </div>
      </section>
      {corporate_membership.map(
        ({ title, image, link, details }, head_index) => (
          <section
            className={`about-main center ${head_index == 1 ? "change" : ""}`}
            key={head_index}
          >
            <div data-aos="fade-right">
              <h2 style={{ marginBottom: "40px" }}>{title}</h2>

              {details.map(({ heading, description }, index) => (
                <div className="benefits " key={index}>
                  <FaStar />
                  <h4>{heading}</h4>
                  <p>{description}</p>
                </div>
              ))}

              {link && (
                <Link
                  className="bg-[#00cec8] text-white py-3 px-8 rounded-md ms-2 text-shadow-xl"
                  to="/corporate-membership"
                  rel="noopener"
                >
                  Join as a Member {">"}{" "}
                </Link>
              )}
              {/* <button
                onClick={() => navigate("/Corporate-Membership")}
              ></button> */}
            </div>
            <img
              data-aos="fade-left"
              src={image}
              alt={title}
              width={450}
              height={450}
              loading="lazy"
            />
          </section>
        )
        
      )}
      <section>
        {/* <SponsorshipCards/> */}
        <CorporateCards/>
      </section>

      {/* <section className="about-main center">
        <div data-aos="fade-right">
          <h2 style={{ marginBottom: "40px" }}>Benefits</h2>
          <p className="benefits">
            <span>
              <FaStar />
            </span>
            <span>Networking</span>
            <span>
              Connect with global engineers, academicians and professionals.
            </span>
          </p>
          <p className="benefits">
            <span>
              <FaStar />
            </span>
            <span>Brand Exposure</span>
            <span>
              Promote your brand on CERADA’s platforms in event materials.
            </span>
          </p>
          <p className="benefits">
            <span>
              <FaStar />
            </span>
            <span>Collaboration</span>
            <span>
              Form partnerships with academic and professional organizations.
            </span>
          </p>
          <p className="benefits">
            <span>
              <FaStar />
            </span>
            <span>Research Support</span>
            <span>Access resources and support for R&D projects.</span>
          </p>
          <p className="benefits">
            <span>
              <FaStar />
            </span>
            <span>
              Professional
              <br /> Development
            </span>
            <span>
              Invitations to conferences, workshops and access to cutting-edge
              research.
            </span>
          </p>
          <p className="benefits">
            <span>
              <FaStar />
            </span>
            <span>Employee Engagement</span>
            <span>
              Enhance skills through CERADA events and training programs.
            </span>
          </p>
          <p className="benefits">
            <span>
              <FaStar />
            </span>
            <span>Career Development</span>
            <span>
              Support for employee career growth and opportunities to present
              their work and ideas.
            </span>
          </p>
          <p className="benefits">
            <span>
              <FaStar />
            </span>
            <span>Exclusive Content</span>
            <span>
              Access and contribute to CERADA’s research papers and
              publications.
            </span>
          </p>
          <button onClick={() => navigate("/Corporate-Membership")}>
            Join as a Member {">"}
          </button>
        </div>
        <img data-aos="fade-left" src={corp1} alt="Benefits" />
      </section>
      <section className="about-main change center">
        <div data-aos="fade-left">
          <h2 style={{ marginBottom: "40px" }}>Brand Promotion & Visibility</h2>
          <p className="benefits">
            <span>
              <FaStar />
            </span>
            <span>Global Reach</span>
            <span>
              Connect with international researchers, academicians and
              professionals.
            </span>
          </p>
          <p className="benefits">
            <span>
              <FaStar />
            </span>
            <span>Digital Marketing</span>
            <span>
              Feature your logo on CERADA’s website,email and social media.
            </span>
          </p>
          <p className="benefits">
            <span>
              <FaStar />
            </span>
            <span>Event Materials</span>
            <span>Prominent logo placement in brochures and kits.</span>
          </p>
          <p className="benefits">
            <span>
              <FaStar />
            </span>
            <span>Increased Visibility</span>
            <span>Showcase your brand to global conference attendees.</span>
          </p>
          <p className="benefits">
            <span>
              <FaStar />
            </span>
            <span>Targeted Networking</span>
            <span>
              Connect with industry professionals and decision-makers.
            </span>
          </p>
          <p className="benefits">
            <span>
              <FaStar />
            </span>
            <span>Brand Recognition</span>
            <span>Enhance reputation by partnering with CERADA events.</span>
          </p>
          <p className="benefits">
            <span>
              <FaStar />
            </span>
            <span>Lead Generation</span>
            <span>Attract high-quality leads from a focused audience.</span>
          </p>
        </div>
        <img
          data-aos="fade-right"
          src={corp2}
          id="corp2"
          alt="Brand Promotion & Visibility"
        />
      </section>
      <section className="about-main center">
        <div data-aos="fade-right">
          <h2 style={{ marginBottom: "40px" }}>Advertise, Exhibit & Sponsor</h2>
          <p className="benefits Advertise">
            <span>
              <FaStar />
            </span>
            <span>Advertise</span>
            <span>Slots in CERADA’s publications and online platforms.</span>
          </p>
          <p className="benefits Advertise">
            <span>
              <FaStar />
            </span>
            <span>Exhibit</span>
            <span>
              Booths at international events to showcase products and network.
            </span>
          </p>
          <p className="benefits Advertise">
            <span>
              <FaStar />
            </span>
            <span>Sponsorship</span>
            <span>
              Various tiers offering speaking opportunities, branded spaces and
              exclusive networking sessions,etc.
            </span>
          </p>
        </div>
        <img
          data-aos="fade-left"
          src={corp3}
          alt="Advertise, Exhibit & Sponsor"
        />
      </section> */}
    </div>
  );
};

export default Corporate;
