import React from "react";
import "./Membership.css";
import { Link } from "react-router-dom";

const Membership = () => {
  const courses = [
    {
      title: "Student Membership",
      description:
        "Elevate your student experience with our membership! Gain access to valuable resources, networking opportunities and exclusive discounts.",
      bg_image: "/images/student.webp",
      icon: "/images/icons/alumni.webp",
      link: "/student",
    },
    {
      title: "Professional Membership",
      description:
        "Level up your career with our elite professional membership! Unlock exclusive resources, network with industry leaders and enjoy unbeatable discounts.",
      price: "₹4599",
      bg_image: "/images/professional.webp",
      icon: "/images/icons/briefcase.webp",
      link: "/professional",
    },
    {
      title: "Institutional Membership",
      description:
        "Discover the perks of institutional membership: host conferences, access development programs and receive research and publication assistance with discounts.",
      bg_image: "/images/institutional.webp",
      icon: "/images/icons/government.webp",
      link: "/institutional",
    },
    {
      title: "Corporate Membership",
      description:
        "Enjoy the perks of corporate membership: Brand promotion & visibility, Advertise, Exhibit & Sponsor.",
      price: "₹4599",
      bg_image: "/images/corporate.webp",
      icon: "/images/icons/business.webp",
      link: "/corporate",
    },
  ];

  return (
    <div className="content bg-[#F9FAFB]">
      <div className=" space-y-10 px-10 sm:px-20 mg:px-40 lg:px-50 py-15">
        <h1
          data-aos="fade-up"
          className="text-center text-3xl text-[#00cec8] py-5 text-4xl font-semibold text-shadow-md"  style={{height:"auto", background : "none"}}
        >
          CERADA Membership
        </h1>
        {courses.map(
          ({ bg_image, title, description, link, price, icon }, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="relative flex flex-col-reverse md:flex-col md:flex-row rounded-xl overflow-hidden bg-gradient-to-r from-[#009590] to-[#008790] text-white"
            >
              {/* Background Image Overlay */}
              <img
                src={bg_image}
                alt={title}
                width={800}
                height={700}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />

              {/* Content */}
              <div className="z-1 w-full md:w-2/3 p-6 space-y-3">
                <h2
                  data-aos="fade-up"
                  className="text-xl md:text-2xl font-bold leading-snug text-shadow-md"
                >
                  {title}
                </h2>
                <p className="text-sm text-white/90" data-aos="fade-up">
                  {description}
                </p>
                <Link
                  data-aos="fade-up"
                  className="mt-2 text-black font-semibold px-4 py-2 rounded-full bg-white"
                  to={link}
                >
                  Know More
                </Link>
              </div>

              {/* Speaker Section */}
              <div
                data-aos="fade-up"
                className="z-1 w-full md:w-1/3 flex flex-col items-center justify-center text-center p-4"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white overflow-hidden mb-2">
                  <img
                    src={icon}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Membership;
