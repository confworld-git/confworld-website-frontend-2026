import React, { useRef, useState } from "react";
import "./Advertise.css";
import { FaStar } from "react-icons/fa";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import { toaster } from "evergreen-ui";
import { Seo } from "../../components/seo";

const Advertise = () => {
  const AdvertiseFormRef = useRef();

  const [mobileInputValue, setmobileInputValue] = useState();

  const HandleAdvertiseForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(AdvertiseFormRef.current);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      mobile: mobileInputValue,
      interest: formData.get("interest"),
      details: formData.get("details"),
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/Advertise-Form`,
        data
      );
      console.log("Response:", response.data);
      setmobileInputValue("");
      AdvertiseFormRef.current.reset();
      toaster.success(response.data.message);
    } catch (error) {
      console.error("Error submitting form:", error);
      toaster.danger("Something Wrong !");
    }
  };

  const advertise_with_us = [
    {
      heading: "digital advertisements",
      description:
        "promote your brand on our event website, mobile app and email campaigns.",
    },
    {
      heading: "print advertisements",
      description:
        "gain visibility through the official conference program, flyers and banners.",
    },
    {
      heading: "on-site signage",
      description:
        "capture attention with strategically placed banners and signage at the venue.",
    },
    {
      heading: "sponsored content",
      description:
        "engage our audience with sponsored articles, videos or social media posts.",
    },
  ];

  const exhibit_at = [
    {
      heading: "booth spaces",
      description: "Choose from standard, premium or custom booth spaces.",
    },
    {
      heading: "exhibit hours",
      description:
        "showcase your products and services during dedicated exhibit hours.",
    },
    {
      heading: "networking events",
      description:
        "participate in exclusive networking sessions with potential clients and partners.",
    },
    {
      heading: "product demos",
      description:
        "conduct live product demonstrations to attract and engage attendees.",
    },
    {
      heading: "marketing support",
      description:
        "receive marketing materials and support to maximize your exhibit's impact.",
    },
  ];

  return (
    <div style={{ overflowX: "clip" }}>
      <Seo
        title="Advertise, Exhibit & Sponsor at CERADA | Boost Your Brand at Academic & Research Conferences"
        description="Join CERADA to advertise, exhibit, or sponsor at premier academic conferences. Maximize brand visibility, connect with leaders, and engage targeted audiences."
      />
      <div className="top-img ad-img relative" data-aos="fade-up">
        <img
          className="absolute object-center z-[-10] h-full w-full object-cover"
          src="/images/advertise-exhibit-sponsor-banner.webp"
          alt="advertise-exhibit-sponsor-banner"
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
              dominantBaseline="middle"
              textAnchor="middle"
              className="outline-draw"
            >
              Advertise, Exhibit, Sponsor
            </text>
          </svg>
        </h1>
      </div>
      <section className="about-main Exhibit">
        <div data-aos="fade-right">
          <h2></h2>
          <h4>
            Advertise, Exhibit, Sponsor at Confworld Educational Research And Development Association
            (CERADA)
          </h4>
          <p>
            Join us to advertise, exhibit or sponsor at one of the most
            influential gatherings of industry leaders, innovators and
            decision-makers. Confworld Educational Research and Development
            Association (CERADA) provides unparalleled opportunities for
            networking, visibility and engagement with a highly targeted
            audience.
          </p>
          <div className="with-us">
            <h2 style={{ margin: "20px 0" }}>Advertise with Us</h2>
            {advertise_with_us.map(({ heading, description }, index) => (
              <p>
                <span className="capitalize">
                  <FaStar style={{ color: "#FFBA30" }} />
                  {heading} :
                </span>
                <p className="first-letter:uppercase">{description}</p>
              </p>
            ))}
          </div>
        </div>
        <img
          data-aos="fade-left"
          src="/gifImages/advertise-with-us.svg"
          alt="Advertise, Exhibit, Sponsor at Confworld Educational Research And Development Association
            (CERADA)"
          width={450}
          height={450}
          loading="lazy"
        />
      </section>
      <section className="about-main change center Exhibit">
        <div className="with-us" data-aos="fade-left">
          <h2>Exhibit at</h2>
          <h4 style={{ marginBottom: "20px" }}>
            Confworld Educational Research And Development Association (CERADA)
          </h4>
          {exhibit_at.map(({ heading, description }, index) => (
            <p>
              <span className="capitalize">
                <FaStar style={{ color: "#FFBA30" }} />
                {heading} :
              </span>
              <p className="first-letter:uppercase">{description}</p>
            </p>
          ))}
        </div>
        <img
          data-aos="fade-right"
          src="/images/exhibit-web.webp"
          alt="Exhibit at Confworld Educational Research And Development Association (CERADA)"
          width={450}
          height={450}
          loading="lazy"
        />
      </section>
      <section className="about-main Exhibit">
        <div data-aos="fade-right">
          <h2>Get Started</h2>
          <h4>
            Confworld Educational Research And Development Association (CERADA)
          </h4>
          <p>
            Ready to enhance your brand’s visibility and connect with industry
            leaders at Confworld Educational Research and Development
            Association (CERADA)? Complete the relevant form below and our team
            will get in touch with you promptly.
          </p>
          <p>
            Submit your form and a representative will contact you with more
            information and next steps.
          </p>
        </div>
        <img
          data-aos="fade-left"
          src="images/sponsorship-package.webp"
          alt="Get Started with Confworld Educational Research And Development Association (CERADA)"
          width={450}
          height={450}
          loading="lazy"
        />
      </section>
      <section>
        <div className="enquiry-form-container" data-aos="fade-up">
          <h2 className="enquiry-form-title">
            Advertise, Exhibit, Sponsor Enquiry Form
          </h2>
          <form
            ref={AdvertiseFormRef}
            onSubmit={HandleAdvertiseForm}
            className="enquiry-form"
          >
            <div className="enquiry-form-group">
              <label htmlFor="name" className="enquiry-form-label">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="enquiry-form-input"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="enquiry-form-group">
              <label htmlFor="company" className="enquiry-form-label">
                Company:
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="enquiry-form-input"
                placeholder="Company Name"
                required
              />
            </div>

            <div className="enquiry-form-group">
              <label htmlFor="email" className="enquiry-form-label">
                E-mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="enquiry-form-input"
                placeholder="Your E-mail"
                required
              />
            </div>

            <div className="enquiry-form-group">
              <label htmlFor="mobile" className="enquiry-form-label">
                Mobile with country code:
              </label>
              <PhoneInput
                style={{ padding: "2px 10px", width: "calc(100% - 20px)" }}
                defaultCountry="US"
                value={mobileInputValue}
                onChange={(value) => setmobileInputValue(value)}
                required
              />
            </div>

            <div className="enquiry-form-group">
              <label htmlFor="interest" className="enquiry-form-label">
                Select Your Interest:
              </label>
              <select
                id="interest"
                name="interest"
                className="enquiry-form-input"
                required
              >
                <option value="advertising">Advertising</option>
                <option value="exhibiting">Exhibiting</option>
                <option value="sponsoring">Sponsoring</option>
              </select>
            </div>

            <div className="enquiry-form-group">
              <label htmlFor="details" className="enquiry-form-label">
                Additional Details:
              </label>
              <textarea
                id="details"
                name="details"
                className="enquiry-form-textarea"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button type="submit" className="enquiry-form-submit">
              Submit
            </button>
          </form>
          <img
            src="/images/waveLong.svg"
            alt="wave effect image"
            height={400}
            width={800}
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Advertise;
