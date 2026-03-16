import React from "react";

const CreditPointDisplay = () => {
  const conferencePoints = [
    { label: "Physical Presentation + Scopus Publication", points: 25 },
    { label: "Physical Presentation only", points: 10 },
    { label: "Virtual Presentation + Scopus Publication", points: 20 },
    { label: "Virtual Presentation only", points: 5 },
    { label: "Physical Listener", points: 3 },
    { label: "Virtual Listener", points: 2 },
  ];

  const membershipPoints = [
    { label: "Student Membership (10 members)", points: 10 },
    { label: "Professional Membership (10 members)", points: 15 },
    { label: "Institutional Membership (Standard)", points: 10 },
    { label: "Institutional Membership (Elite)", points: 50 },
  ];

  const journalReviewerPoints = [
    { label: "Research Paper", points: 10 },
  ];

  const Card = ({ title, data, gradient }) => (
    <div className={`${gradient} text-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
      {/* Card Header */}
      <div className="mb-6 pb-4 border-b border-white/20">
        <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
        <div className="h-1 w-16 bg-white/40 rounded-full mt-3"></div>
      </div>

      {/* Points List */}
      <ul className="space-y-3">
        {data.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3.5 hover:bg-white/20 transition-all duration-200 group"
          >
            <span className="text-sm md:text-base font-medium flex-1 pr-3 group-hover:translate-x-1 transition-transform">
              {item.label}
            </span>
            <span className="bg-white text-purple-700 font-bold px-4 py-1.5 rounded-full text-sm md:text-base whitespace-nowrap shadow-md group-hover:scale-105 transition-transform">
              {item.points} pts
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="mx-auto px-4 py-8 pb-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 mb-4">
          Credit Point System
        </h2>
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400"></div>
          <p className="text-lg md:text-xl text-purple-600 font-semibold">
            1 Credit Point = 1 USD
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400"></div>
        </div>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-2">
          Earn points through conference participation, memberships, and journal reviews
        </p>
      </div>

      {/* Cards - Improved responsive layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        <Card 
          title="For International Conference" 
          data={conferencePoints}
          gradient="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800"
        />
        <Card 
          title="For Membership" 
          data={membershipPoints}
          gradient="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800"
        />
        <Card 
          title="For Journal Reviewer" 
          data={journalReviewerPoints}
          gradient="bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800"
        />
      </div>

      {/* Bottom Info Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-cyan-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-purple-200 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-full p-3 shadow-lg flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                How It Works
              </h4>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Accumulate credit points by participating in conferences, referring memberships, and reviewing research papers. 
                Points can be redeemed for rewards or converted to USD. Track your progress in your ambassador dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditPointDisplay;