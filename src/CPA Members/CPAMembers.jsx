import React from "react";
import CPAMembers from "./CPAMembersdata";
import "./CPAMembers.css";
import { Seo } from "../components/seo";

const Board = () => {
  // Group members by country
  const membersByCountry = CPAMembers.reduce((acc, member) => {
    const country = member.country || "Other";
    if (!acc[country]) {
      acc[country] = [];
    }
    acc[country].push(member);
    return acc;
  }, {});

  // Define country order
  const countryOrder = [
    "Philippines",
    "Malaysia",
    "India",
  ];

  // Sort countries according to the defined order
  const sortedCountries = countryOrder.filter(country => membersByCountry[country]);

  return (
    <div className="relative" data-aos="fade-up">
      <Seo
        title="Professional Ambassadors | CERADA - Leaders in Research and Education"
        description="Meet the distinguished Professional Ambassadors of CERADA, including international experts and leaders in education, research, innovation, and development."
      />
      
      {/* Banner Section */}
      <div className="relative" data-aos="fade-up">
        <img
          className="absolute z-[-10] h-full w-full object-cover"
          src="/images/cpa-banner.webp"
          alt="cpa-banner"
          width={800}
          height={400}
          loading="lazy"
        />
        <h1 className="relative">
          <svg
            viewBox="0 0 500 60"
            className="svgs"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="outline-draw"
            >
              Professional Ambassadors
            </text>
          </svg>
        </h1>
      </div>

      {/* Country Sections */}
      {sortedCountries.map((country, countryIndex) => (
        <div 
          key={country} 
          className={`${countryIndex > 0 ? 'mt-16 pt-8 border-t border-gray-200' : 'mt-12'}`}
          data-aos="fade-up"
        >
          {/* Country Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-3">
              CERADA {country} Professional Ambassadors
            </h2>
          </div>

          {/* Members Grid */}
          <section 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 md:px-12 mb-12"
            data-aos="fade-up"
          >
            {membersByCountry[country].map(
              ({ image, name, title, title2, title3, title4, region, back }, index) => {
                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 p-5 flex flex-col items-center h-[450px] border border-green-100"
                  >
                    {/* Member Image */}
                    <img
                      src={image}
                      alt={name}
                      style={{ objectPosition: back === "top" ? "top" : "center" }}
                      width={200}
                      height={200}
                      loading="lazy"
                      className="w-[200px] h-[200px] rounded-full object-cover border-4 border-teal-400 p-1 mb-3"
                    />
                    
                    {/* Member Info */}
                    <h2 className="text-base font-semibold text-center mb-2 min-h-[40px] flex items-center text-teal-700">
                      {name}
                    </h2>
                    
                    <div className="text-center text-xs space-y-0.5 flex-1 overflow-y-auto">
                      <p >{title}</p>
                      {title2 && <p>{title2}</p>}
                      {title3 && <p>{title3}</p>}
                      {title4 && <p>{title4}</p>}
                      {region && (
                        <p className="font-bold text-black pt-3">
                          Region: <span className="font-bold text-orange-600">{region}</span>
                        </p>
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </section>
        </div>
      ))}
    </div>
  );
};

export default Board;