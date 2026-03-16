import React from "react";
import "./Pastconference.css";
import { Link } from "react-router-dom";
import { Seo } from "../../components/seo";
const conference_images = [
  {
    image: "/images/past-conference/2025/icsteet/certificate-provide.webp",
    alt: "certificate-provide",
  },
  {
    image: "/images/past-conference/2025/icsteet/climate-panel.webp",
    alt: "climate-panel",
  },
  {
    image: "/images/past-conference/2025/icsteet/conference-food.webp",
    alt: "conference-food",
  },
  {
    image: "/images/past-conference/2025/icsteet/conference-hotel-room.webp",
    alt: "conference-hotel-room",
  },
  {
    image: "/images/past-conference/2025/icsteet/conference-member.webp",
    alt: "conference-member",
  },
  {
    image: "/images/past-conference/2025/icsteet/conference-room.webp",
    alt: "conference-room",
  },
  {
    image: "/images/past-conference/2025/icsteet/conference-speech.webp",
    alt: "conference-speech",
  },
  {
    image: "/images/past-conference/2025/icsteet/discussing-members.webp",
    alt: "discussing-members",
  },
  {
    image: "/images/past-conference/2025/icsteet/explain-project.webp",
    alt: "explain-project",
  },
  {
    image: "/images/past-conference/2025/icsteet/final-group-member.webp",
    alt: "final-group-member",
  },
  {
    image: "/images/past-conference/2025/icsteet/fun-movement.webp",
    alt: "fun-movement",
  },
  {
    image: "/images/past-conference/2025/icsteet/group-discussing.webp",
    alt: "group-discussing",
  },
  {
    image: "/images/past-conference/2025/icsteet/icsteet-certificate.webp",
    alt: "icsteet-certificate",
  },
  {
    image:
      "/images/past-conference/2025/icsteet/icsteet-certificate-provide.webp",
    alt: "icsteet-certificate-provide",
  },
  {
    image: "/images/past-conference/2025/icsteet/icsteet-selfie-banner.webp",
    alt: "icsteet-selfie-banner",
  },
  {
    image: "/images/past-conference/2025/icsteet/icsteet-welcome-standee.webp",
    alt: "icsteet-welcome-standee",
  },
  {
    image: "/images/past-conference/2025/icsteet/keynote-speaker.webp",
    alt: "keynote-speaker",
  },
  {
    image: "/images/past-conference/2025/icsteet/membership.webp",
    alt: "membership",
  },
  {
    image: "/images/past-conference/2025/icsteet/moment-giving.webp",
    alt: "moment-giving",
  },
  {
    image: "/images/past-conference/2025/icsteet/opening-ceremony.webp",
    alt: "opening-ceremony",
  },
  {
    image: "/images/past-conference/2025/icsteet/panel-discussion.webp",
    alt: "panel-discussion",
  },
  {
    image: "/images/past-conference/2025/icsteet/project-explain.webp",
    alt: "project-explain",
  },
  {
    image: "/images/past-conference/2025/icsteet/provide-proceeding-book.webp",
    alt: "provide-proceeding-book",
  },
  {
    image: "/images/past-conference/2025/icsteet/student-poster-session.webp",
    alt: "student-poster-session",
  },
  {
    image: "/images/past-conference/2025/icsteet/students-certificate.webp",
    alt: "students-certificate",
  },
  {
    image:
      "/images/past-conference/2025/icsteet/sustainable-farming-exhibit.webp",
    alt: "sustainable-farming-exhibit",
  },
  {
    image: "/images/past-conference/2025/icsteet/virtual-conference.webp",
    alt: "virtual-conference",
  },
  {
    image: "/images/past-conference/2025/icsteet/welcome-speech.webp",
    alt: "welcome-speech",
  },
];

const IcsteetGallery = () => {
  return (
    <div className="icsteet_gallery">
      <Seo
        title="ICSTEET 2025 Conference Gallery | CERADA - International Conference on Social Sciences, Teaching & Engineering"
        description="Explore the ICSTEET 2025 Conference Gallery by CERADA, showcasing highlights and expert research from the International Conference on Social Sciences and Engineering."
      />
      <p data-aos="fade-right">
        <Link to="/past-conferences" rel="noopener">
          Past Conference
        </Link>{" "}
        {">"}{" "}
        <Link to="/icsteet-conference-2025" rel="noopener">
          ICSTEET Conference
        </Link>{" "}
        {">"} ICSTEET 2025 Conference Gallery
      </p>
      <h1 data-aos="fade-up">ICSTEET 2025 Conference Gallery</h1>
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

export default IcsteetGallery;
