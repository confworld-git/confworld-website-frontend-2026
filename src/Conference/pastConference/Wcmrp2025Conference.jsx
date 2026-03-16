import React from "react";
import { HiDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Seo } from "../../components/seo";


const WcmrpConference = () => {
  return (
    <div>
      <Seo
        title="WCMRP 2025 | World Conference on Multidisciplinary Research and Practices – CERADA"
        description="Explore WCMRP 2025 by CERADA – a multidisciplinary international conference on social sciences, teaching, education, and engineering. View proceedings, reports, and gallery from the Manila event."
      />
      <div
        className="conference__detail"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1>
          <span>
            1<sup>st </sup> World Conference on Multidisciplinary Research and Practices (WCMRP-2025)
          </span>
        </h1>
        <div className="conference_material">
          <img
            src="/images/past-conference/2025/wcmrp/wcmrp-conference-proceeding-front-cover.jpg"
            alt="WCMRP - 2025 proceeding book front cover"
            height={600}
            width={600}
            loading="lazy"
          />
          <a
            href='https://drive.google.com/file/d/10CaaL1dKOkbtw0bJ4NNHfSkr6Bj2bzvv/view?usp=drive_link'
            target="_black"
            rel="noopener"
          >
            <div>
              <i>
                <HiDownload />
              </i>
              <img
                src="/images/past-conference/2025/wcmrp/wcmrp-front-and-back-cover.jpg"
                alt="WCMRP - 2025 proceeding book cover"
                height={600}
                width={600}
                loading="lazy"
              />
              <p>Conference Proceedings</p>
              <span>To view the conference proceedings. Click here...</span>
            </div>
          </a>
          <a
            href='https://drive.google.com/file/d/1LQVQQaAtU_Cc0fiG3A9MlWFxxG5y5XiU/view?usp=drive_link'
            target="_black"
            rel="noopener"
          >
            <div>
              <i>
                <HiDownload />
              </i>
              <img
                src="/images/past-conference/2025/wcmrp/wcmrp-backdrop.jpg"
                alt="WCMRP backdrop poster"
              />
              <p>Conference Report</p>
              <span>To view the conference report. Click here...</span>
            </div>
          </a>
          {/* <Link to="/icsteet-conference-2025-gallery" rel="noopener">
            <div>
              <img
                src="/images/past-conference/2025/icsteet/icsteet-gallery-image.webp"
                alt="icsteet-2025 gallery cover image"
                width={450}
                height={450}
                loading="lazy"
              />
              <p>Conference Gallery</p>
              <span>To view the conference gallery. Click here....</span>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default WcmrpConference;
