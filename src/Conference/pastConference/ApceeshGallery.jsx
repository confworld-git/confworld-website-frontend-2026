import React from "react";
import "./Pastconference.css";
import { Link } from "react-router-dom";
import { Seo } from "../../components/seo";
const conference_images = [
  {
    image: "/images/past-conference/2025/apceesh/1.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/2.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/3.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/4.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/5.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/6.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/7.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/8.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/9.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/10.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/11.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/12.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/13.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/14.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/15.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/16.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/171.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/181.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/19.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/20.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/21.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/22.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/23.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/24.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/25.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/26.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/27.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/28.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/29.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/30.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/31.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/32.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/33.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/apceesh/34.webp",
    alt: "certificate-provide",
  },

];

const ApceeshGallery = () => {
  return (
    <div className="icsteet_gallery">
      <Seo
        title="APCEESH 2025 Conference Gallery | CERADA - International Conference on Social Sciences, Teaching & Engineering"
        description="Explore the APCEESH 2025 Conference Gallery by CERADA, showcasing highlights and expert research from the International Conference on Social Sciences and Engineering."
      />
      <p data-aos="fade-right">
        <Link to="/past-conferences" rel="noopener">
          Past Conference
        </Link>{" "}
        {">"}{" "}
        <Link to="/icsteet-conference-2025" rel="noopener">
          APCEESH Conference
        </Link>{" "}
        {">"} APCEESH 2025 Conference Gallery
      </p>
      <h1 data-aos="fade-up">APCEESH 2025 Conference Gallery</h1>
      <div data-aos="fade-up">
        {conference_images.map(({ image, alt }) => {
          return (
            <img
              src={image}
              loading="lazy"
              alt={alt}
              width={500}
              height={500}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ApceeshGallery;
