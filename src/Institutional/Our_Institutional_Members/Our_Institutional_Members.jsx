import React from "react";
import "./Our_Institutional_Members.css";

const Our_Institutional_Members = () => {
  const AcademicPartners = [
    {
      package_name: "standard",
      partners: [
        {
          title: "GlobalNxt University,",
          image: "/images/partners/globalnxt.jpeg",
          location: "Malaysia.",
        },
        {
          title: "Shinawatra University (SIU),",
          image: "/images/partners/siu.png",
          location: "Thailand.",
        },
        {
          title: "World Citi Colleges, Quezon City (WCC),",
          image: "/images/partners/wcc.webp",
          location: "Philippines.",
        },
        {
          title:
            "Dr. Emilio B. Espinosa, Sr. Memorial State College of Agriculture and Technology (DEBESMSCAT),",
          image: "/images/partners/masbate.webp",
          location: "Philippines.",
        },
        {
          title: "Nueva Ecija University of Science and Technology (NEUST),",
          image: "/images/partners/neust.webp",
          location: "Philippines.",
        },
        
        {
          title:
            "Shri Madhwa Vadiraja Institute of Technology & Management (SMVITM), ",
          image: "/images/partners/smvitm.webp",
          location: "India.",
        },
        {
          title:
            "Keladi Shivappa Nayaka University of Agricultural and Horticultural Sciences (KSNUAHS),",
          image: "/images/partners/ksnuahs.webp",
          location: "India.",
        },
        {
          title:
            "KLS Vishwanathrao Deshpande Institute of Technology (KLS VDIT),",
          image: "/images/partners/klsvdit.png",
          location: "India.",
        },
      ],
    },
    {
      package_name: "elite",
      partners: [
        {
          title: "St. Dominic College of Asia,",
          image: "/images/partners/sdca.webp",
          location: "Philippines.",
        },
      ],
    },
  ];
  return (
    <div className="institutional_membership">
      <h2>Our Institutional Members</h2>
      {AcademicPartners.map(({ package_name, partners }) => (
        <div key={package_name}>
          <p
            className="stanp capitalize"
            style={{ color: "#06a7a2", textShadow: "1px 1px 1px #00000018" }}
          >
            {package_name}
          </p>
          <div className="logo-list">
            {partners.map(({ title, image, location }) => (
              <div key={title}
                className={`logo-item ${
                  package_name === "standard" ? "standard" : "elite"
                }`}
              >
                {package_name === "elite" && (
                  <span className="elite-badge">ELITE</span>
                )}
                <img src={image} width={1000} alt={title} loading="lazy" />
                <p>{title}</p>
                <p>{location}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Our_Institutional_Members;