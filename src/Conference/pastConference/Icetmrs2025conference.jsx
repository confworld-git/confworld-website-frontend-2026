import React from "react";
import { HiDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Seo } from "../../components/seo";


const IcetmrsConference = () => {
  return (
    <div>
      <Seo
        title="ICETMRS 2025 | International Conference on Emerging Trends in Multidisciplinary Research Studies (ICETMRS-2025)"
        description="Explore ICETMRS 2025 by CERADA – a multidisciplinary international conference on Emerging Trends in Multidisciplinary Research Studies."
      />
      <div
        className="conference__detail"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1>
          <span>
            1<sup>st </sup>International Conference on Emerging Trends in Multidisciplinary Research Studies (ICETMRS-2025)
          </span>
        </h1>
        <div className="conference_material">
          <img
            src="/images/past-conference/2025/icetmrs/icetmrs-front-page.png"
            alt="ICABMET - 2025 proceeding book front cover"
            height={600}
            width={600}
            loading="lazy"
          />
          <a
            href='https://drive.google.com/file/d/1O0kYxuvWYgQoo0t37EcPbFwdZ2RRsXky/view?usp=drive_link'
            target="_black"
            rel="noopener"
          >
            <div>
              <i>
                <HiDownload />
              </i>
              <img
                src="/images/past-conference/2025/icetmrs/icetmrs-front-and-back.jpg"
                alt="ICABMET - 2025 proceeding book cover"
                height={600}
                width={600}
                loading="lazy"
              />
              <p>Conference Proceedings</p>
              <span>To view the conference proceedings. Click here...</span>
            </div>
          </a>
          <a
            href='https://drive.google.com/file/d/1PZX18VY3d_uIzPQ6_o29_BKTTnR2qeIw/view?usp=drive_link'
            target="_black"
            rel="noopener"
          >
            <div>
              <i>
                <HiDownload />
              </i>
              <img
                src="/images/past-conference/2025/icetmrs/backdrop-icetmrs.jpg"
                alt="ICETMRS backdrop poster"
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

export default IcetmrsConference;
