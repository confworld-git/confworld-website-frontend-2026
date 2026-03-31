import React from "react";
import { HiDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Seo } from "../../components/seo";


const IcabmetConference = () => {
  return (
    <div>
      <Seo
        title="ICABMET 2026 | International Conference on Applied Science, Business and Management, Engineering & Technology (ICABMET-2026)"
        description="Explore ICABMET 2026 by CERADA – a multidisciplinary international conference on Applied Science, Business and Management, Engineering & Technology."
      />
      <div
        className="conference__detail"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1>
          <span>
            2<sup>nd </sup> International Conference on Applied Science, Business and Management, Engineering & Technology (ICABMET-2026)
          </span>
        </h1>
        <div className="conference_material">
          <img
            src="/images/past-conference/2026/icabmet-2026/icabmet-front-page.jpg"
            alt="ICABMET - 2026 proceeding book front cover"
            height={600}
            width={600}
            loading="lazy"
          />
          <a
            href='https://drive.google.com/file/d/1yXvBGZH6hM8pogB-__ZVkf2qOiMSqROG/view?usp=sharing'
            target="_black"
            rel="noopener"
          >
            <div>
              <i>
                <HiDownload />
              </i>
              <img
                src="/images/past-conference/2026/icabmet-2026/icabmet-front-back.jpg"
                alt="ICABMET - 2026 proceeding book cover"
                height={600}
                width={600}
                loading="lazy"
              />
              <p>Conference Proceedings</p>
              <span>To view the conference proceedings. Click here...</span>
            </div>
          </a>
          <a
            href='https://drive.google.com/file/d/1XYBNqH46ucIw_ZLN8SlUj7N2pXgYoN6y/view?usp=sharing'
            target="_black"
            rel="noopener"
          >
            <div>
              <i>
                <HiDownload />
              </i>
              <img
                src="/images/past-conference/2026/icabmet-2026/icabmet-backdrop.jpg"
                alt="ICABMET backdrop poster"
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

export default IcabmetConference;
