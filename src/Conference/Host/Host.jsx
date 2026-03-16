import React, { useRef, useState } from "react";
import "./Host.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import { toaster } from "evergreen-ui";
import { Seo } from "../../components/seo";

const Host = () => {
  const formRef = useRef();

  const [NumberValue, setNumberValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const data = {
      institutionName: formData.get("institutionName"),
      contactPerson: formData.get("contactPerson"),
      titlePosition: formData.get("titlePosition"),
      email: formData.get("email"),
      mobile: NumberValue,
      department: formData.get("department"),
      preferredDates: formData.get("preferredDates"),
      conferenceTheme: formData.get("conferenceTheme"),
      additionalInfo: formData.get("additionalInfo"),
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/Host-Form`,
        data
      );
      console.log("Response:", response.data);
      formRef.current.reset();
      toaster.success(response.data.message);
    } catch (error) {
      console.error("Error submitting form:", error);
      toaster.danger("Something Wrong");
    }
  };

  const importance_of_host = [
    {
      heading: "knowledge dissemination",
      description:
        "conferences are a powerful platform for sharing research findings, innovative ideas and advancements in various domains.",
    },
    {
      heading: "community building",
      description:
        "foster a sense of community among researchers, academics and professionals, promoting collaboration and shared learning.",
    },
    {
      heading: "professional development",
      description:
        "participants can enhance their skills and knowledge through workshops, keynote sessions and networking events.",
    },
    {
      heading: "innovation stimulation",
      description:
        "conferences stimulate innovative thinking and can lead to the development of new projects, research collaborations and technological advancements.",
    },
    {
      heading: "visibility and impact",
      description:
        "gain visibility for your institution on a national and international scale, positioning it as a leader in research and development.",
    },
  ];

  return (
    <div className="host">
      <Seo
        title="Host a Conference with CERADA | Partner for Impactful Academic Events"
        description="Partner with CERADA to host impactful academic conferences. Foster innovation, collaboration, and professional growth through dynamic events and expert support."
      />
      <div className="top-img host-img" data-aos="fade-up">
        <img
          className="absolute object-center z-[-10] h-full w-full object-cover"
          src="/images/host-a-conference.webp"
          alt="host-a-conference"
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
              Host a Conference
            </text>
          </svg>
        </h1>
      </div>
      <section className="about-main">
        <div data-aos="fade-right">
          <h2></h2>
          <h4>
            Host a Conference with Confworld Educational Research And Development Association (CERADA)
          </h4>
          <p>
            We are excited to collaborate with universities, colleges and
            professional organizations to host impactful conferences that foster
            innovation, knowledge sharing and professional growth. By partnering
            with Confworld Educational Research and Development Association
            (CERADA), your institution can take advantage of our expertise and
            network to create a memorable and successful event.
          </p>
        </div>
        <img
          data-aos="fade-left"
          src="/images/benefit-host.webp"
          alt="Host a Conference with Confworld Educational Research And Development Association (CERADA)"
          loading="lazy"
          width={450}
          height={450}
        />
      </section>
      <section className="info-host">
        <h2 data-aos="fade-up">Importance of Host a Conference with</h2>
        <h4 data-aos="fade-up">
          Confworld Educational Research And Development Association (CERADA)
        </h4>
        <div className="points">
          <ul>
            {importance_of_host.map(({ heading, description }, index) => (
              <li>
                <h4 className="capitalize">{heading}</h4>
                <p className="first-letter:uppercase">{description}</p>
              </li>
            ))}
          </ul>
          <img
            data-aos="fade-left"
            src="/images/importance-of-host.webp"
            alt="Importance of Host a Conference with Confworld Educational Research And Development Association (CERADA)"
            width={450}
            height={450}
            loading="lazy"
          />
        </div>
      </section>
      <section className="about-main align">
        <div data-aos="fade-right">
          <h2 style={{ height: "auto", background: "none" }}>
            Contact Us to Host a Conference
          </h2>
          <p>
            Ready to bring a dynamic and impactful conference to your
            institution? Complete the form below and a Confworld Educational
            Research and Development Association (CERADA) representative will be
            in touch to discuss the next steps.
          </p>
        </div>
        <img
          data-aos="fade-left"
          src="/gifImages/contact-us-to-host-a-conference.svg"
          id="contactHost"
          alt="Contact Confworld Educational Research and Development Association (CERADA) to host a conference."
          width={450}
          height={450}
          loading="lazy"
        />
      </section>
      <div className="conference-enquiry-form-container" data-aos="fade-up">
        <h2 className="conference-enquiry-form-title">
          Host a Conference Enquiry Form
        </h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="conference-enquiry-form"
          id="conferenceEnquiryForm"
        >
          <div className="conference-enquiry-form-group">
            <label
              htmlFor="institutionName"
              className="conference-enquiry-form-label"
            >
              Institution / Organization Name:
            </label>
            <input
              type="text"
              name="institutionName"
              id="institutionName"
              className="conference-enquiry-form-input"
              required
            />
          </div>

          <div className="conference-enquiry-form-group">
            <label
              htmlFor="contactPerson"
              className="conference-enquiry-form-label"
            >
              Contact Person:
            </label>
            <input
              type="text"
              name="contactPerson"
              id="contactPerson"
              className="conference-enquiry-form-input"
              required
            />
          </div>

          <div className="conference-enquiry-form-group">
            <label
              htmlFor="titlePosition"
              className="conference-enquiry-form-label"
            >
              Title / Position:
            </label>
            <input
              type="text"
              id="titlePosition"
              name="titlePosition"
              className="conference-enquiry-form-input"
              required
            />
          </div>

          <div className="conference-enquiry-form-group">
            <label htmlFor="email" className="conference-enquiry-form-label">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="conference-enquiry-form-input"
              required
            />
          </div>

          <div className="conference-enquiry-form-group">
            <label htmlFor="mobile" className="conference-enquiry-form-label">
              Mobile with country code:
            </label>
            <PhoneInput
              style={{ padding: "2px 10px", width: "calc(100% - 20px)" }}
              defaultCountry="US"
              name="mobile"
              value={NumberValue}
              onChange={(value) => setNumberValue(value)}
              required
            />
          </div>

          <div className="conference-enquiry-form-group">
            <label
              htmlFor="department"
              className="conference-enquiry-form-label"
            >
              Department:
            </label>
            <input
              type="text"
              name="department"
              id="department"
              className="conference-enquiry-form-input"
              required
            />
          </div>

          <div className="conference-enquiry-form-group">
            <label
              htmlFor="preferredDates"
              className="conference-enquiry-form-label"
            >
              Preferred Conference Dates:
            </label>
            <input
              type="date"
              id="preferredDates"
              name="preferredDates"
              className="conference-enquiry-form-input"
              required
            />
          </div>

          <div className="conference-enquiry-form-group">
            <label
              htmlFor="conferenceTheme"
              className="conference-enquiry-form-label"
            >
              Proposed Conference Theme / Topics:
            </label>
            <textarea
              id="conferenceTheme"
              className="conference-enquiry-form-textarea"
              name="conferenceTheme"
              required
            ></textarea>
          </div>

          <div className="conference-enquiry-form-group">
            <label
              htmlFor="additionalInfo"
              className="conference-enquiry-form-label"
            >
              Additional Information or Questions:
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              className="conference-enquiry-form-textarea"
            ></textarea>
          </div>

          <button type="submit" className="conference-enquiry-form-submit">
            Submit
          </button>
        </form>
        <img
          src="/images/waveLong.svg"
          width={10000}
          height={400}
          alt="Waves design"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Host;
