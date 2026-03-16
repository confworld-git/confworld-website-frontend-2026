import React from "react";
import { HiDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Seo } from "../../components/seo";


const ApceeshConference = () => {
  return (
    <div>
      <Seo
        title="apceesh 2025 | 1st International Conference on Social Sciences, Education & Engineering – CERADA"
        description="Explore apceesh 2025 by CERADA – a multidisciplinary international conference on social sciences, teaching, education, and engineering. View proceedings, reports, and gallery from the Manila event."
      />
      <div
        className="conference__detail"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1>
          <span>
            1<sup>st </sup> Asia Pacific Conference on Engineering, Education, Social Science and Humanities (APCEESH-2025)
          </span>
        </h1>
        <div className="conference_material">
          <img
            src="/images/past-conference/2025/apceesh/apceesh-front-cover.webp"
            alt="APCEESH - 2025 proceeding book front cover"
            height={600}
            width={600}
            loading="lazy"
          />
          <a
            href="https://drive.google.com/file/d/10bn0PecE9WnNb2WNo8yLlqPfj77Nc6L5/view?usp=drive_link"
            target="_black"
            rel="noopener"
          >
            <div>
              <i>
                <HiDownload />
              </i>
              <img
                src="/images/past-conference/2025/apceesh/apceesh-frontandback.webp"
                alt="apceesh - 2025 proceeding book cover"
                height={600}
                width={600}
                loading="lazy"
              />
              <p>Conference Proceedings</p>
              <span>To view the conference proceedings. Click here...</span>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1pJBBOV73sS_Rh3ggB-1AeFIGmjk7BpAt/view?usp=drive_link"
            target="_black"
            rel="noopener"
          >
            <div>
              <i>
                <HiDownload />
              </i>
              <img
                src="/images/past-conference/2025/apceesh/apceesh-backdrop.webp"
                alt="apceesh backdrop poster"
              />
              <p>Conference Report</p>
              <span>To view the conference report. Click here...</span>
            </div>
          </a>
          <Link to="/apceesh-conference-2025-gallery" rel="noopener">
            <div>
              <img
                src="/images/past-conference/2025/icsteet/icsteet-gallery-image.webp"
                alt="apceesh-2025 gallery cover image"
                width={450}
                height={450}
                loading="lazy"
              />
              <p>Conference Gallery</p>
              <span>To view the conference gallery. Click here....</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApceeshConference;
