import React from "react";
import { HiDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Seo } from "../../components/seo";


const IcsteetConference = () => {
  return (
    <div>
      <Seo
        title="ICSTEET 2025 | 1st International Conference on Social Sciences, Education & Engineering – CERADA"
        description="Explore ICSTEET 2025 by CERADA – a multidisciplinary international conference on social sciences, teaching, education, and engineering. View proceedings, reports, and gallery from the Manila event."
      />
      <div
        className="conference__detail"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1>
          <span>
            1<sup>st </sup> International Conference on Social Sciences,
            Teaching & Education, Engineering and Technology (ICSTEET - 2025)
          </span>
        </h1>
        <div className="conference_material">
          <img
            src="/images/past-conference/2025/icsteet/icsteet-conference-proceeding-front-cover.webp"
            alt="ICSTEET - 2025 proceeding book front cover"
            height={600}
            width={600}
            loading="lazy"
          />
          <a
            href="https://drive.google.com/file/d/1ByQmsZrniKo024U8TqZQiwKpiBLysLzb/view"
            target="_black"
            rel="noopener"
          >
            <div>
              <i>
                <HiDownload />
              </i>
              <img
                src="/images/past-conference/2025/icsteet/icsteet-conference-proceeding-front-and-back-cover.webp"
                alt="ICSTEET - 2025 proceeding book cover"
                height={600}
                width={600}
                loading="lazy"
              />
              <p>Conference Proceedings</p>
              <span>To view the conference proceedings. Click here...</span>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1lsejJEntJVh0VMpPd--YYjBjoIYUI5v2/view"
            target="_black"
            rel="noopener"
          >
            <div>
              <i>
                <HiDownload />
              </i>
              <img
                src="/images/past-conference/2025/icsteet/backdrop.webp"
                alt="icsteet backdrop poster"
              />
              <p>Conference Report</p>
              <span>To view the conference report. Click here...</span>
            </div>
          </a>
          <Link to="/icsteet-conference-2025-gallery" rel="noopener">
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IcsteetConference;
