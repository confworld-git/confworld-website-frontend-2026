import React from "react";
import "./Pastconference.css";
import { Link } from "react-router-dom";
import { Seo } from "../../components/seo";

const conference_images = [
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-keynote-address.webp",
    alt: "icsapci-2025-keynote-address",
  },
  {
    image: "/images/past-conference/2025/icsapci/icsapci-2025-keynote.webp",
    alt: "icsapci-2025-keynote",
  },
  {
    image: "/images/past-conference/2025/icsapci/icsapci-2025-group.webp",
    alt: "icsapci-2025-group",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-inauguration-ceremony.webp",
    alt: "icsapci-2025-inauguration-ceremony",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-climate-change-research-panel.webp",
    alt: "icsapci-2025-climate-change-research-panel",
  },
  {
    image: "/images/past-conference/2025/icsapci/icsapci-2025-session.webp",
    alt: "icsapci-2025-session",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-farmer-led-innovation-talk.webp",
    alt: "icsapci-2025-farmer-led-innovation-talk",
  },
  {
    image: "/images/past-conference/2025/icsapci/icsapci-2025-certificate.webp",
    alt: "icsapci-2025-certificate",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-certificate-2.webp",
    alt: "icsapci-2025-certificate-2",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-certificate-3.webp",
    alt: "icsapci-2025-certificate-3",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-certificate-4.webp",
    alt: "icsapci-2025-certificate-4",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-certificate-5.webp",
    alt: "icsapci-2025-certificate-5",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-certificate-6.webp",
    alt: "icsapci-2025-certificate-6",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-certificate-7.webp",
    alt: "icsapci-2025-certificate-7",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-certificate-8.webp",
    alt: "icsapci-2025-certificate-8",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-certificate-9.webp",
    alt: "icsapci-2025-certificate-9",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-certificate-10.webp",
    alt: "icsapci-2025-certificate-10",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-certificate-11.webp",
    alt: "icsapci-2025-certificate-11",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-certificate-12.webp",
    alt: "icsapci-2025-certificate-12",
  },
  {
    image: "/images/past-conference/2025/icsapci/icsapci-2025-momento.webp",
    alt: "icsapci-2025-momento",
  },
  {
    image: "/images/past-conference/2025/icsapci/icsapci-2025-momento-2.webp",
    alt: "icsapci-2025-momento-2",
  },
  {
    image: "/images/past-conference/2025/icsapci/icsapci-2025-momento-3.webp",
    alt: "icsapci-2025-momento-3",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-poster-presentation-session.webp",
    alt: "icsapci-2025-poster-presentation-session",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-session-chair.webp",
    alt: "icsapci-2025-session-chair",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2026-group-photo-day1.webp",
    alt: "icsapci-2026-group-photo-day1",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2026-volunteer-team.webp",
    alt: "icsapci-2026-volunteer-team",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2026-keynote-dr-alvarez.webp",
    alt: "icsapci-2026-keynote-dr-alvarez",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-sustainable-practices-session.webp",
    alt: "icsapci-2025-sustainable-practices-session",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2026-speaker-panel-education.webp",
    alt: "icsapci-2026-speaker-panel-education",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2026-manila-venue-poster.webp",
    alt: "icsapci-2026-manila-venue-poster",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2026-best-paper-award.webp",
    alt: "icsapci-2026-best-paper-award",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2026-closing-ceremony.webp",
    alt: "icsapci-2026-closing-ceremony",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-agroecology-workshop.webp",
    alt: "icsapci-2025-agroecology-workshop",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-panel-discussion-climate-policy.webp",
    alt: "icsapci-2025-panel-discussion-climate-policy",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2026-award-winners-photo.webp",
    alt: "icsapci-2026-award-winners-photo",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2025-welcome-speech.webp",
    alt: "icsapci-2025-welcome-speech",
  },
  {
    image: "/images/past-conference/2025/icsapci/icsapci-2026-virutal.webp",
    alt: "icsapci-2026-virutal",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2026-final-remarks.webp",
    alt: "icsapci-2026-final-remarks",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2026-virtual-lab-demonstration.webp",
    alt: "csteet-2026-virtual-lab-demonstration",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2026-online-teaching-tools-demo.webp",
    alt: "icsapci-2026-online-teaching-tools-demo",
  },
  {
    image:
      "/images/past-conference/2025/icsapci/icsapci-2026-education-apps-workshop.webp",
    alt: "icsapci-2026-education-apps-workshop",
  },
];

const IcsapGallery = () => {
  return (
    <div className="icsteet_gallery">
      <Seo
        title="ICSAPCI - 2025 Conference Gallery | CERADA - Sustainable Agriculture & Climate Change Impacts"
        description="Explore the ICSAPCI - 2025 Conference Gallery with highlights, presentations, and research from the 1st Intl Conference on Sustainable Agriculture & Climate Change."
      />
      <p data-aos="fade-right">
        <Link to="/past-conferences" rel="noopener">
          Past Conference
        </Link>{" "}
        {">"}{" "}
        <Link to="/icsap-conference-2025" rel="noopener">
          ICSAPCI Conference
        </Link>{" "}
        {">"} ICSAPCI - 2025 Conference Gallery
      </p>
      <h1 data-aos="fade-up">ICSAPCI - 2025 Conference Gallery</h1>
      <div data-aos="fade-up">
        {conference_images.map(({ image, alt }) => {
          return (
            <img
              src={image}
              loading="lazy"
              width={400}
              height={400}
              alt={alt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default IcsapGallery;
