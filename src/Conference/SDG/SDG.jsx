import React from "react";
import "./SDG.css";
import { Seo } from "../../components/seo";
const SDG = () => {
  const sdgGoals = [
    {
      image: "/images/sdg/no-poverty.webp",
      color: "#E5243B",
      text: "CERADA’s educational initiatives to enhance opportunities and economic growth.",
      alt: "no-poverty",
    },
    {
      image: "/images/sdg/zero-hunger.webp",
      color: "#DDA63A",
      text: "CERADA supports agricultural research for food security and sustainable agriculture.",
      alt: "zero-hunger",
    },
    {
      image: "/images/sdg/good-health-and-well-being.webp",
      color: "#4C9F38",
      text: "CERADA disseminates health research through conferences and publications.",
      alt: "good-health-and-well-being",
    },
    {
      image: "/images/sdg/quality-education.webp",
      color: "#C5192D",
      text: "CERADA promotes lifelong learning through conferences, workshops and training.",
      alt: "quality-education",
    },
    {
      image: "/images/sdg/gender-equality.webp",
      color: "#FF3A21",
      text: "CERADA empowers women and girls with equal opportunities in research and development.",
      alt: "gender-equality",
    },
    {
      image: "/images/sdg/clean-water-and-sanitation.webp",
      color: "#26BDE2",
      text: "CERADA facilitates research on sustainable water management.",
      alt: "clean-water-and-sanitation",
    },
    {
      image: "/images/sdg/affordable-and-clean-energy.webp",
      color: "#FCC30B",
      text: "CERADA promotes research in renewable energy and clean technologies.",
      alt: "affordable-and-clean-energy",
    },
    {
      image: "/images/sdg/decent-work-and-economic-growth.webp",
      color: "#A21942",
      text: "CERADA supports sustainable economic growth through industry-academia partnerships..",
      alt: "decent-work-and-economic-growth",
    },
    {
      image: "/images/sdg/industry-innovation-and-infrastructure.webp",
      color: "#FD6925",
      text: "CERADA fosters collaboration between academia and industry to address complex challenges. By supporting research activities and fostering industry trends, CERADA helps drive innovation and the development of sustainable infrastructure.",
      alt: "industry-innovation-and-infrastructure",
    },
    {
      image: "/images/sdg/reduced-inequalities.webp",
      color: "#DD1367",
      text: "CERADA promotes equal opportunities in research and education through global partnerships.",
      alt: "reduced-inequalities",
    },
    {
      image: "/images/sdg/sustainable-cities-and-communities.webp",
      color: "#FD9D24",
      text: "CERADA advances sustainable development through interdisciplinary research.Through conferences like the International Conference on Urban Growth and Smart Infrastructure, CERADA promotes sustainable practices and technologies for urban development.",
      alt: "sustainable-cities-and-communities",
    },
    {
      image: "/images/sdg/responsible-consumption-and-production.webp",
      color: "#BF8B2E",
      text: "CERADA encourages research on sustainable consumption and production practices.",
      alt: "responsible-consumption-and-production",
    },
    {
      image: "/images/sdg/climate-action.webp",
      color: "#3F7E44",
      text: "CERADA supports research and innovation to combat climate change.",
      alt: "climate-action",
    },
    {
      image: "/images/sdg/life-below-water.webp",
      color: "#0A97D9",
      text: "CERADA facilitates marine research for ocean conservation.",
      alt: "life-below-water",
    },
    {
      image: "/images/sdg/life-on-land.webp",
      color: "#56C02B",
      text: "CERADA promotes sustainable use of terrestrial ecosystems and biodiversity conservation.",
      alt: "life-on-land",
    },
    {
      image: "/images/sdg/peace-justice-and-strong-institutions.webp",
      color: "#00689D",
      text: "CERADA promotes inclusive societies and effective institutions through global networking.",
      alt: "peace-justice-and-strong-institutions",
    },
    {
      image: "/images/sdg/partnerships-for-the-goals.webp",
      color: "#19486A",
      text: "CERADA fosters collaborations with universities, organizations and industry leaders globally, enabling knowledge sharing and joint ventures that advance sustainability. Enhances global collaboration, supports research publication, organizes scientific events and offers training programs and research consultancy.",
      alt: "partnerships-for-the-goals",
    },
  ];

  return (
    <div className="sdg">
      <Seo
        title="SDG Contributions | CERADA – Advancing Sustainability Through Research & Innovation"
        description="CERADA contributes to SDGs by promoting quality education, climate action, gender equality, sustainable development, and innovation through global conferences, research and training."
      />
      <section className="about-main center">
        <div data-aos="fade-right">
          <h1
  className="!text-base sm:!text-lg md:!text-2xl lg:!text-3xl"
  style={{ background: "none", height: "auto" }}
>
  CERADA&apos;s Contributions to Sustainable Development Goals (SDGs)
</h1>


          <p>
            The Confworld Educational Research and Development Association
            (CERADA) aligns with the United Nations Sustainable Development
            Goals (SDGs) by promoting education, innovation and collaboration in
            the fields of engineering, science and technology. CERADA organizes
            conferences, workshops, webinars and training programs aimed at
            advancing knowledge and providing access to quality education in
            science and technology fields.
          </p>
        </div>
        <img
          data-aos="fade-left"
          src="/images/sdg/cerada-sustainable-development-goals.webp"
          id="sdg-img"
          alt="CERADA’s Contributions to Sustainable Development Goals (SDGs)"
        />
      </section>
      <h2 data-aos="fade-up" className="mt-10">
        Here’s how CERADA contributes to the SDGs
      </h2>
      <section className="sdg-gallery">
        {sdgGoals.map(({ color, image, text, alt }, index) => (
          <div
            key={index}
            className="sdg-card"
            style={{ backgroundColor: color }}
            data-aos="zoom-out-up"
          >
            <img
              src={image}
              alt={alt}
              loading="lazy"
              width={100}
              height={100}
              className="sdg-card-front"
            />
            <p className="sdg-card-back">{text}</p>
          </div>
        ))}
      </section>
      <p>
        CERADA’s activities, such as knowledge dissemination, academic and
        industry networking and research funding, contribute to building a more
        sustainable future across various sectors.
      </p>
      <h6>
        Note: Attending CERADA International Conference boosts career, knowledge
        sharing and networking, along with gifts, awards and recognition for
        contributions to a sustainable society.
      </h6>
    </div>
  );
};

export default SDG;
