import React from "react";
import { HiDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Seo } from "../../components/seo";

const Icsap2025Conference = () => {
  return (
    <div>
      <Seo
        title="ICSAPCI 2025 Conference Gallery | CERADA - Sustainable Agriculture & Climate Change Impacts"
        description="Explore the ICSAPCI 2025 Conference Gallery showcasing highlights, research, and key moments from the 1st International Conference on Sustainable Agriculture Practices and Climate Change Impacts."
      />
      <div
        className="conference__detail"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1>
          <span>
            1<sup>st </sup> International Conference on Sustainable Agriculture
            Practices <br /> and Climate Change Impacts (ICSAPCI - 2025)
          </span>
        </h1>
        <div className="conference_material">
          <img
            src="/images/past-conference/2025/icsapci/icsapci-conference-proceeding-front-cover.webp"
            alt="icsapci Proceeding Book front cover"
          />
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1mYvx2JBdWqlhvMR43m5s879_7apUgMH9/view?usp=drive_link"
            rel="noopener"
          >
            <div>
              <i>
                <HiDownload />
              </i>
              <img
                src="/images/past-conference/2025/icsapci/icsapci-conference-proceeding-front-and-back-cover.webp"
                alt="icsapci Proceeding Book front and back cover"
              />
              <p>Conference Proceedings</p>
              <span>To view the conference proceedings. Click here...</span>
            </div>
          </a>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1r_1tvesMaIZlHzxst1dnIuUmEbjIsAWa/view?usp=drive_link"
            rel="noopener"
          >
            <div>
              <i>
                <HiDownload />
              </i>
              <img
                src="/images/past-conference/2025/icsteet/backdrop.webp"
                alt="backdrop-image"
                width={450}
                height={450}
                loading="lazy"
              />
              <p>Conference Report</p>
              <span>To view the conference report. Click here...</span>
            </div>
          </a>
          <Link to="/icsap-conference-2025-gallery" rel="noopener">
            <div>
              <img
                src="/images/past-conference/2025/icsteet/icsteet-gallery-image.webp"
                alt="icsapci-2025 gallery cover image"
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

export default Icsap2025Conference;
