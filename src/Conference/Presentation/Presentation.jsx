import React, { useRef, useState } from "react";
import "./Presentation.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import { toaster } from "evergreen-ui";
import { Seo } from "../../components/seo";

const Presentation = () => {
  const PresentationRef = useRef();
  const [NumberValue, setNumberValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(PresentationRef.current);
    formData.append("mobile", NumberValue);

    const fileInput =
      PresentationRef.current.querySelector('input[type="file"]');
    const file = fileInput.files[0];
    const maxSize = 500 * 1024;

    if (file && file.size > maxSize) {
      toaster.danger("File size exceeds 500KB");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/Submission-Form`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      setNumberValue("");
      PresentationRef.current.reset();
      toaster.success(response.data.message);
    } catch (error) {
      console.error("Error submitting form:", error);
      toaster.danger("Something Wrong");
    }
  };

  return (
    <div>
      <Seo
        title="Presentation Skills & Modes | CERADA - Academic & Professional Communication"
        description="Enhance your presentation skills with CERADA. Learn oral and poster presentation techniques to effectively communicate research at conferences and workshops."
      />
      <div className="top-img relative" data-aos="fade-up">
        <img
          className="absolute object-top z-[-10] h-full w-full object-cover"
          src="/images/presentation-banner.webp"
          alt="presentation-banner"
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
              fontSize="60"
            >
              Presentation
            </text>
          </svg>
        </h1>
      </div>
      <section className="about-main Presentations">
        <div data-aos="fade-right">
          <h2 className="text-center"></h2>
          
          <p>
            Effective communication of research findings and innovative ideas is
            a cornerstone of academic and professional success. At Confworld
            Educational Research and Development Association (CERADA), we
            emphasize the importance of presentation skills for researchers,
            students and professionals in the scientific sector.
          </p>
          <p>
            Whether you're presenting groundbreaking research at a conference,
            leading a workshop or pitching a project to stakeholders, mastering
            the art of presentation is essential.
          </p>
        </div>
        <img
          data-aos="fade-left"
          src="/images/our-approach-to-presentation-focuses-on.webp"
          alt="our-approach-to-presentation-focuses-on"
          width={480}
          height={450}
          loading="lazy"
        />
      </section>
      <section
        className="about-main  change"
        style={{ marginBottom: "0px", alignItems: "center" }}
      >
        <div data-aos="fade-left">
          <h2>Mode of Presentation</h2>
          <h4>
            Confworld Educational Research And Development Association (CERADA)
          </h4>
          <p>
            At Confworld Educational Research and Development Association
            (CERADA), we recognize that different contexts and audiences require
            different modes of presentation. We provide training and resources
            for various presentation formats to ensure that our members can
            effectively communicate their ideas in any setting. Here are some of
            the primary modes of presentation we focus on:
          </p>
          <div className="oppp">
            <h2>Oral Presentation</h2>
            <p>
              Oral presentations are a fundamental mode of communication in
              academia and professional settings. Our training programs covers.
            </p>
          </div>
          <div className="oppp">
            <h2>Poster Presentation</h2>
            <p>
              Poster presentations are commonly used in conferences and
              symposiums to present research in a concise and visually appealing
              format. Our guidance includes.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            data-aos="fade-right"
            src="/images/oral-presentation.webp"
            id="mof"
            alt="oral-presentation"
            width={450}
            height={450}
            loading="lazy"
          />
          <img
            data-aos="fade-right"
            src="/images/poster-presentation.webp"
            id="mof"
            alt="poster-presentation"
            width={450}
            height={450}
            loading="lazy"
          />
        </div>
      </section>
      <section className="about-main center" style={{ marginTop: "0px" }}>
        <div data-aos="fade-right">
          <h2>Conference Enquiry Form</h2>
          <h4>
            Confworld Educational Research And Development Association (CERADA)
          </h4>
          <p>
            We are excited to have you join us for the Confworld Educational
            Research and Development Association (CERADA) Conference. Please
            fill out the enquiry form below.
          </p>
        </div>
        <img
          data-aos="fade-left"
          src="/gifImages/conference-enquiry-form.svg"
          alt="Conference Enquiry Form"
          width={450}
          height={450}
          loading="lazy"
        />
      </section>
      <section>
        <div className="registration-form-container" data-aos="zoom-out-up">
          <h2 className="registration-form-title">
            <img
              src="/gifImages/register-form.gif"
              width={80}
              height={80}
              alt="registration-form"
              loading="lazy"
            />
            Conference Enquiry Form
          </h2>
          <form
            className="registration-form"
            ref={PresentationRef}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label className="form-label">Full Name:</label>
              <input
                type="text"
                name="fullName"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Affiliation/Institution:</label>
              <input
                type="text"
                required
                name="affiliation"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">E-mail:</label>
              <input
                type="email"
                required
                name="email"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Mobile Number:</label>
              <PhoneInput
                required
                style={{ padding: "2px 10px", width: "calc(100% - 20px)" }}
                defaultCountry="US"
                onChange={(value) => setNumberValue(value)}
                value={NumberValue}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Title of Presentation:</label>
              <input
                type="text"
                name="presentationTitle"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Mode of Presentation:</label>
              <input
                type="text"
                name="modeOfPresentation"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Abstract (upload file): Doc, Docx
              </label>
              <span className="file-size">
                Your file should be less than 500 KB in size.
              </span>
              <input
                type="file"
                name="abstractFile"
                className="form-input-file"
                accept=".doc,.docx,.pdf"
                required
              />
            </div>

            <div className="form-group" style={{ marginTop: "10px" }}>
              <label className="form-label">Conference Participation:</label>
              <input
                type="text"
                required
                name="participation"
                className="form-input"
              />
            </div>

            <div className="check" id="check">
              <label htmlFor="preConferenceWorkshops" className="marg">
                Are you interested in attending pre-conference workshops?
              </label>
              <input
                type="checkbox"
                id="preConferenceWorkshops"
                name="preConferenceWorkshops"
                className="form-checkbox"
                required
              />
            </div>
            <div style={{ margin: "50px 0px" }}></div>
            <button type="submit" className="form-submit-button">
              Submit
            </button>
          </form>
          <img
            src="/images/waveLong.svg"
            width={1000}
            height={400}
            alt="wave-image"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Presentation;
