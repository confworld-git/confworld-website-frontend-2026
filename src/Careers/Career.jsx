import React, { useState } from "react";
import Careers from "./Careers";
import { FaLocationDot } from "react-icons/fa6";
import { MdWorkOutline, MdOutlineAccessTime } from "react-icons/md";
import { HiArrowRight, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { Seo } from "../components/seo";
const formatDescription = (text) => {
  return text.split("\n").map((line, i) => {
    const isHeading =
      line.toLowerCase().includes("key responsibilities") ||
      line.toLowerCase().includes("required skills") ||
      line.toLowerCase().includes("preferred qualification") ||
      line.toLowerCase().includes("preferred qualifications") ||
      line.toLowerCase().includes("ideal candidate") ||
      line.toLowerCase().includes("required") ||
      line.toLowerCase().includes("requirements") ||
      line.toLowerCase().includes("education") ||
      line.toLowerCase().includes("experience") ||
      line.toLowerCase().includes("technical skills") ||
      line.toLowerCase().includes("program coordination") ||
      line.toLowerCase().includes("stakeholder engagement") ||
      line.toLowerCase().includes("data") ||
      line.toLowerCase().includes("reporting");
      line.toLowerCase().includes("Academic Partnership Development");
      line.toLowerCase().includes("Program Coordination");
      line.toLowerCase().includes("Stakeholder Engagement");
      line.toLowerCase().includes("Data & Impact Analysis");
      line.toLowerCase().includes("Client Acquisition & Sales");
      line.toLowerCase().includes("Program & Event Coordination");
      line.toLowerCase().includes("Stakeholder & Communication Management");
      line.toLowerCase().includes("Operations & Data Management");
      line.toLowerCase().includes("Reporting & Analysis");
      line.toLowerCase().includes("Speaker Acquisition & Outreach");
      line.toLowerCase().includes("Scientific Committee (OCM) Development");
      line.toLowerCase().includes("Relationship Management");
      line.toLowerCase().includes("Program Development Support");
      line.toLowerCase().includes("Coordination & Communication");
      line.toLowerCase().includes("Data & Reporting");
      line.toLowerCase().includes("Manuscript Submission & Coordination");
      line.toLowerCase().includes("Publication Process Management");
      line.toLowerCase().includes("Client Communication");
      line.toLowerCase().includes("Data & Documentation Management");
      line.toLowerCase().includes("Quality & Compliance");

    return (
      <p
        key={i}
        className={`${
          isHeading
            ? "font-semibold text-[#0d2b4e] mt-3"
            : "text-gray-600"
        } text-sm leading-relaxed`}
      >
        {line}
      </p>
    );
  });
};
const Career = ({ handlePopup }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="min-h-screen bg-[#f7f8fc] font-[Poppins,sans-serif]">
      <Seo
        title="Current Job Openings | CERADA - Careers"
        description="Explore career opportunities at CERADA. Hiring across multiple roles in Chennai. Apply now to join our growing team."
      />

      <div className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="/images/career-banner.webp"
          alt="career-banner"
          loading="lazy"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b4e]/80 via-[#0d2b4e]/60 to-[#227bce]/40" /> */}

        {/* <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-[#ed8c24]/20 text-[#ed8c24] text-xs font-semibold tracking-widest uppercase border border-[#ed8c24]/40">
            We're Hiring
          </span>

          <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight max-w-2xl">
            Join the CERADA Team
          </h1>

          <p className="mt-3 text-blue-100 text-sm md:text-base max-w-xl font-light">
            Confworld Educational Research and Development Association — Chennai, Tamil Nadu
          </p>
        </div> */}
      </div>

      {/* 🔥 INTRO STRIP (FROM 1ST CODE) */}
      <div className="bg-white border-b border-gray-100 py-4 px-6">
        <p className="text-center text-sm text-gray-500">
          📍 All roles are Chennai-based (On-site) · Preference for candidates
          from Anna Nagar, Perambur, Kolathur, Kilpauk & nearby areas · ⚡ Immediate joiners preferred
        </p>
      </div>

      {/* 🔥 OPENINGS COUNT */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-2">
        <p className="text-[#0d2b4e] font-semibold text-lg">
          Current Openings
          <span className="ml-2 inline-flex items-center justify-center bg-[#227bce] text-white text-xs font-bold rounded-full w-6 h-6">
            {Careers.length}
          </span>
        </p>
      </div>

      {/* 🔥 JOB CARDS (FROM 2ND CODE) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 mt-4 flex flex-col gap-4">
        {Careers.map((item, index) => {
          const isExpanded = !!expanded[index];
          const hasMore =
            item.fullDescription &&
            item.fullDescription !== item.description;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#227bce]/40 transition-all duration-200"
            >
              <div className="p-5 sm:p-6">
                {/* Title Row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    {/* Icon (from 1st UI style) */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#227bce]/10 flex items-center justify-center text-[#227bce]">
                      <MdWorkOutline size={18} />
                    </div>

                    <div className="flex-1">
                      <h2 className="text-base sm:text-lg font-semibold text-[#0d2b4e] leading-snug">
                        {item.position}
                      </h2>

                      {/* Meta */}
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span className="flex items-center gap-1 text-[#ed8c24] text-xs font-medium">
                          <FaLocationDot size={11} />
                          {item.location}
                        </span>

                        <span className="text-gray-300 text-xs">·</span>

                        <span className="flex items-center gap-1 text-gray-500 text-xs">
                          <MdOutlineAccessTime size={13} />
                          {item.experience}
                        </span>

                        <span className="text-gray-300 text-xs">·</span>

                        <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                          {item.type}
                        </span>

                        <span
                          className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${
                            item.vacancy === "Open"
                              ? "bg-teal-50 text-teal-700 border border-teal-200"
                              : "bg-red-50 text-red-700 border border-red-200"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.vacancy === "Open"
                                ? "bg-teal-500"
                                : "bg-red-500"
                            }`}
                          />
                          {item.vacancy}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={() => handlePopup(true)}
                    className="flex-shrink-0 self-start flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#7e22ce] hover:bg-[#6b18b5] text-white text-sm font-semibold transition-colors duration-150 whitespace-nowrap shadow-sm"
                  >
                    Apply Now <HiArrowRight size={14} />
                  </button>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 my-4" />

                {/* Description */}
                <div className="text-sm leading-relaxed">
  {isExpanded
    ? formatDescription(item.fullDescription)
    : <p className="text-gray-600">{item.description}</p>}
</div>

                {/* Expand toggle */}
                {hasMore && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#227bce] hover:text-[#1a5fa0]"
                  >
                    {isExpanded ? (
                      <>
                        Show less <HiChevronUp size={14} />
                      </>
                    ) : (
                      <>
                        Show full description{" "}
                        <HiChevronDown size={14} />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <a
  href="mailto:hr@confworld.org"
  className="fixed bottom-6 right-6 z-50 bg-[#0d2b4e] hover:bg-[#227bce] text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2 text-sm font-medium transition-all"
>
  📩 Send your resume to <span className="text-amber-500">hr@confworld.org</span>
</a>
    </div>
  );
};

export default Career;