import React, { useRef, useState } from "react";
import "./Journals.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ReactFlagsSelect from "react-flags-select";
import axios from "axios";
import { toaster } from "evergreen-ui";
import { Seo } from "../components/seo";

const Journals = () => {
  const journalRef = useRef();

  const [mobileValue, setmobileValue] = useState();
  const [selectedCountry, setselectedCountry] = useState();

  const HandleJournalForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(journalRef.current);
    formData.append("mobile", mobileValue);
    formData.append("country", selectedCountry);

    const fileInput = journalRef.current.querySelector('input[type="file"]');
    const file = fileInput.files[0];
    const maxSize = 3 * 1024 * 1024;

    if (file && file.size > maxSize) {
      toaster.danger("File size exceeds 3MB");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/Journal-Form`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      setmobileValue("");
      setselectedCountry("");
      journalRef.current.reset();
      toaster.success(response.data.message);
    } catch (error) {
      console.error("Error submitting form:", error);
      toaster.danger("Something Wrong");
    }
  };

  const submission_process = [
    {
      heading: "prepare your manuscript",
      description:
        "ensure your paper adheres to the journal's guidelines regarding formatting, structure and content. Our team can provide guidance on manuscript preparation if needed.",
    },
    {
      heading: "submit online",
      description:
        "use our secure online submission portal to upload your manuscript. Provide all necessary details, including author information, abstract, keywords and any supplementary materials.",
    },
    {
      heading: "initial evaluation",
      description:
        "upon submission, your manuscript will undergo an initial evaluation to ensure it meets the journal's scope and quality standards.",
    },
    {
      heading: "peer review",
      description:
        "after passing the initial screening, your paper will be assigned to expert reviewers in your field for thorough evaluation. Peer review ensures the credibility and rigor of published research.",
    },
    {
      heading: "revision (if required)",
      description:
        "based on the reviewers' feedback, you may be asked to revise your manuscript to address any concerns or suggestions. Our team is here to assist you throughout the revision process.",
    },
    {
      heading: "acceptance",
      description:
        "once your paper meets the journal's standards, it will be accepted for publication. Congratulations on reaching this milestone!",
    },
    {
      heading: "publication",
      description:
        "your paper will be published in the journal's upcoming issue, making your research accessible to a wide audience of scholars and practitioners.",
    },
  ];

  return (
    <div style={{ overflowX: "clip" }}>
      <Seo
        title="Journals & Publications | CERADA - Publish in Scopus, SCIE & Web of Science"
        description="Publish your research with CERADA's expert guidance. We assist authors in publishing in Scopus, SCIE, Web of Science & UGC-indexed journals with peer review support."
      />
      <div className="top-img relative" data-aos="fade-up">
        <img
          className="absolute z-[-10] h-full w-full object-cover"
          src="/images/journals-and-publications.webp"
          alt="journals-and-publications"
          width={800}
          height={400}
          loading="lazy"
        />
        <h1 className="relative">
          <svg
            viewBox="0 0 500 60"
            className="svgs"
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="outline-draw"
              fontSize="60"
            >
              Journals & Publications
            </text>
          </svg>
        </h1>
      </div>
      <section className="about-main margin">
        <div data-aos="fade-right">
          <h2>Journals & Publications</h2>
          <p>
            Confworld Educational Research and Development Association (CERADA)
            offers comprehensive assistance and guidance for preparing and
            publishing papers in prestigious journals indexed by Scopus, SCIE
            and Web of Science. Our peer-reviewed journals strive to publish the
            most captivating and reliable sources of current information in
            fields such as Engineering, Science & Technology, Arts & Humanities,
            Management and Medicine.
          </p>
          <h2 className="mt-10">
            Publications in SCOPUS, SCIE, Web of Science, UGC Journals
          </h2>
          <p>
            If you aspire to have your PhD thesis disseminated to the global
            academic community through publication in a distinguished and
            world-renowned journal indexed in globally reputed databases such as
            SCOPUS, Web of Science, SCIE, UGC or others, you can rely on
            Confworld Educational Research and Development Association (CERADA)
            to provide you with all the necessary guidance and support for a
            successful publication journey.
          </p>
          <p className="mt-4">
            Confworld Educational Research and Development Association (CERADA)
            publishes research articles in prominent peer-reviewed journals,
            aiming to promote and globalize the unique innovations of
            researchers. By disseminating scientific articles in various
            chronicles, journals and transactions of worldwide periodicals,
            Confworld Educational Research and Development Association (CERADA)
            facilitates the advancement and recognition of pioneering research
            endeavors.
          </p>
        </div>
        <form
          className="publication-enquiry-form"
          ref={journalRef}
          onSubmit={HandleJournalForm}
          data-aos="fade-left"
        >
          <h2 className="form-title">Journal & Publication Enquiry Form</h2>

          <div className="form-groups-s">
            <label htmlFor="enquirer-name" className="form-label fl">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="enquirer-name"
              className="form-input"
              required
            />
          </div>

          <div className="form-groups-s">
            <label htmlFor="enquirer-email" className="form-label fl">
              E-mail:
            </label>
            <input
              type="email"
              name="email"
              id="enquirer-email"
              className="form-input"
              required
            />
          </div>

          <div className="form-groups-s">
            <label htmlFor="enquirer-mobile" className="form-label fl">
              Mobile with country code:
            </label>
            <PhoneInput
              style={{ padding: "2px 10px", width: "calc(100% - 20px)" }}
              defaultCountry="US"
              value={mobileValue}
              onChange={(value) => setmobileValue(value)}
            />
          </div>

          <div className="form-groups-s">
            <label htmlFor="select-country" className="form-label fl">
              Select country:
            </label>
            <ReactFlagsSelect
              selected={selectedCountry}
              onSelect={(value) => setselectedCountry(value)}
              className="flag-select-form"
            />
          </div>

          <div className="form-groups-s">
            <label htmlFor="institution-name" className="form-label fl">
              Institution / Organization:
            </label>
            <input
              type="text"
              name="Institution"
              id="institution-name"
              className="form-input"
              required
            />
          </div>

          <div className="form-groups-s">
            <label htmlFor="publication-type" className="form-label fl">
              Conference With Publication or Direct Publication:
            </label>
            <select
              id="publication-type"
              name="Publication"
              className="form-select"
              required
            >
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="conference-with-publication">
                Conference With Publication
              </option>
              <option value="direct-publication">Direct Publication</option>
            </select>
          </div>

          <div className="form-groups-s">
            <label htmlFor="upload-file" className="form-label fl">
              Select a file to upload:
            </label>
            <span className="file-size">
              Your file should be less than 3 MB in size.
            </span>
            <input
              type="file"
              name="file"
              id="upload-file"
              className="form-file-input"
              accept=".doc,.docx"
            />
          </div>

          <div className="form-groups-s">
            <label htmlFor="others" className="form-label fl">
              Others:
            </label>
            <input
              type="text"
              name="others"
              id="others"
              className="form-input"
            />
          </div>

          <div className="form-groups-s">
            <button type="submit" className="sub-btn">
              Submit
            </button>
          </div>
        </form>
      </section>

      <section className="about-main change align margin">
        <div data-aos="fade-left">
          <h4>Publications in SCOPUS, SCIE, Web of Science, UGC Journals</h4>
          <p className="mt-4">
            Academic article publication is widely recognized as a challenging
            and time-consuming process. For many PhD researchers, especially
            first-time authors, navigating the publication process can be
            intimidating. Noncompliance with journal criteria and publication
            standards often leads to rejection. Consequently, the reality of
            academic article publishing is that manuscript rejections outnumber
            acceptances, making successful publication a significant hurdle for
            authors.
          </p>
          <p className="mt-4">
            Journal Publication Service involves the process of publishing years
            of study as a paper in prestigious international journals, including
            Scopus, SCIE, IEEE, Web of Science and others. It has always been
            advantageous for researchers worldwide to have their research
            articles published in high-quality publications. Seeking research
            assistance from a journal article publication service provider makes
            the research process more accessible and streamlined than ever
            before.
          </p>
        </div>
        <img
          data-aos="fade-right"
          src="/images/scopus1.png"
          alt="Publications in SCOPUS, SCIE, Web of Science, UGC Journals"
          width={450}
          height={450}
          loading="lazy"
        />
      </section>
      <section className="about-main margin">
        <div data-aos="fade-right">
          <h4>Publications in SCOPUS, SCIE, Web of Science, UGC Journals</h4>
          <p>
            Confworld Educational Research and Development Association (CERADA)
            is India’s premier research Journal Publication Service, dedicated
            to guiding you through every step of the research article process.
            From selecting a research article subject to journal editing and
            publishing, Confworld offers comprehensive support. Our team
            comprises top PhD research specialists, language polishing experts,
            journal publication advisors, research mentors and other
            professionals. Our experts meticulously review your research
            article's structure, grammar, language flow and conduct a thorough
            plagiarism check. Additionally, we ensure that your figures, charts
            and tables adhere to journal formatting guidelines. With our
            commitment to providing cost-effective, high-quality, error-free,
            quick and hassle-free journal publication services, we create an
            optimal environment for your scholarly endeavors.
          </p>
        </div>
        <img
          data-aos="fade-left"
          src="/gifImages/scopus-scie-web-of-science.svg"
          alt="Publications in SCOPUS, SCIE, Web of Science, UGC Journals"
          width={450}
          height={450}
          loading="lazy"
        />
      </section>
      <section className="about-main align change">
        <div data-aos="fade-left" style={{ margin: "30px" }}>
          <h4>Author Paper Submission</h4>
          <p>
            Are you ready to share your research findings with the world? Submit
            your paper to Confworld Educational Research and Development
            Association (CERADA)'s esteemed journals and reach a global audience
            of academics, researchers and professionals.
          </p>
        </div>
        <img
          data-aos="fade-right"
          src="images/peer-review-details.webp"
          id="peer"
          alt="Confworld Educational Research and Development
            Association (CERADA)'s esteemed journals and reach a global audience
            of academics, researchers and professionals."
          width={450}
          height={450}
          loading="lazy"
        />
      </section>
      <section className="info-host ih" style={{ marginTop: "40px" }}>
        <h2 data-aos="fade-up">Journals & Publications</h2>
        <h4 data-aos="fade-up">Submission Process</h4>
        <div className="points ul-li" data-aos="fade-right">
          <ul>
            {submission_process.map(({ heading, description }) => (
              <li>
                <h4 className="capitalize">{heading}</h4>
                <p className="first-letter:uppercase">{description}</p>
              </li>
            ))}
          </ul>
          <img
            data-aos="fade-left"
            src="/images/feedback-and-support.webp"
            alt="Transparent Feedback and support "
            width={450}
            height={450}
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Journals;
