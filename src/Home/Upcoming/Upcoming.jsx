import React from "react";
import "./Upcoming.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

const upcomingConferences = [
  
  
  // {
  //   title:
  //     "International Conference on Multidisciplinary Educational Research, Social Science and Humanities ",
  //   shortName: "( ICMERSH-2025 )",
  //   date: "25-26 Sep, 2025",
  //   location: "Bali, Indonesia",
  //   link: "https://icmersh.com",
  //   image: "/logo/icmersh-logo.webp",
  //   count: "",
  // },

  // {
  //   title:
  //     "International Conference on Emerging Trends in Multidisciplinary Research Studies ",
  //   shortName: "( ICETMRS-2025 )",
  //   date: "19-20 Nov, 2025",
  //   location: "Kuala Lumpur, Malaysia",
  //   link: "https://icetmrs.com",
  //   image: "/logo/icetmrs-logo.webp",
  //   count: "",
  // },
  // {
  //   title:
  //     "Asia Pacific Conference on Engineering, Education, Social Science and Humanities ",
  //   shortName: "( APCEESH-2025 )",
  //   date: "15-16 Dec, 2025",
  //   location: "Bangkok, Thailand",
  //   link: "https://cerada.in",
  //   image: "/logo/apceesh-logo.webp",
  //   count: "",
  // },
  
  
  // {
  //   title:
  //     "International Conference on Sustainable Agriculture Practices and Climate Change Impacts ",
  //   shortName: "( ICSAPCI-2026 )",
  //   date: "16-17 Apr, 2026",
  //   location: "Jakarta, Indonesia",
  //   link: "https://icsap.co.in",
  //   image: "/logo/icsapcilogo.png",
  //   count: "2",
  // },
  {
    title:
      "International Conference on Social Sciences, Teaching and Education, Engineering and Technology ",
    shortName: "( ICSTEET-2026 )",
    date: "14-15 May, 2026",
    location: "Manila, Philippines",
    link: "https://icsteet.com",
    image: "/logo/icsteetlogo.jpg",
    count: "2",
  },
  
  {
    title: "International Conference on Life Sciences and Multidisciplinary Healthcare Approaches",
    shortName: "(ICLSMHA-2026)",
    date: "14-15 May, 2026",
    location: "Manila, Philippines",
    link: "https://iclsmha.cerada.in",
    image: "/logo/iclsmha-logo.jpg",
    count: "",
  },
  {
    title: "World Conference on Multidisciplinary Research and Practices ",
    shortName: "( WCMRP-2026 )",
    date: "29-30 May, 2026",
    location: "Kuala Lumpur, Malaysia",
    link: "https://wcmrp.com",
    image: "/logo/WCMRP Logo JPG.jpg",
    count: "2",
  },
  {
    title: "International Conference on Applied Science, Engineering, Education, Business, Management, Social Science & Humanities ",
    shortName: "(ICAEBMS-2026)",
    date: "27-28 Jul, 2026",
    location: "Singapore",
    link: "https://icaebms.com",
    image: "/logo/icaebmslogo.png",
    count: "",
  },
  {
    title: "Asia Pacific Conference on Engineering, Education, Social Science and Humanities ",
    shortName: "(APCEESH-2026)",
    date: "28-29 Sep, 2026",
    location: "Bangkok, Thailand",
    link: "https://cerada.in",
    image: "/logo/apceesh-logo.png",
    count: "2",
  },
  {
    title: " International Conference on Emerging Trends in Multidisciplinary Research Studies ",
    shortName: "(ICETMRS-2026)",
    date: "16-17 Nov, 2026",
    location: "Istanbul, Turkey",
    link: "https://icetmrs.com/",
    image: "/logo/icetmrs-logo.png",
    count: "2",
  },
  {
    title:
      "International Conference on Applied Science, Business and Management, Engineering & Technology ",
    shortName: "( ICABMET-2027 )",
    date: "26-27 Jul, 2027",
    location: "Chennai, India",
    link: "https://icabmet.com",
    image: "/logo/icabmetlogo.jpg",
    count: "3",
  },
];

const Upcoming = () => {
  const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };
  return (
    <section >
      <h2
          data-aos="fade-up"
          className="mt-8 text-center text-4xl font-bold text-teal-600 text-shadow-md"
        >
          Upcoming International Conferences 2026-2027
        </h2>
        <div className="upcoming relative bg-[#00cec8] " data-aos="fade-up">
      <div
        className="z-0 absolute inset-0 bg-cover bg-center opacity-30"
        style={{  }}
      ></div>
      <div className="relative z-5">
        
        <div data-aos="fade-up">
          <Swiper
            slidesPerView={4}
            modules={[Navigation, Autoplay]}
            speed={800}
            effect="slide"
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              1200: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              300: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              200: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
          >
            {upcomingConferences.map(
              (
                { image, title, date, location, link, count, shortName },
                index
              ) => (
                <SwiperSlide key={index}>
                  <div className="events bg-cyan-100" data-aos="fade-up">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      width="600"
                      height="700"
                      data-aos="fade-up"
                    />
                    <p data-aos="fade-up">{date}</p>
                    <p data-aos="fade-up">
                      {count}
                      {count && <sup>{getOrdinal(count)} </sup>}
                      {title}
                      {shortName}
                    </p>
                    <p data-aos="fade-up">Venue: {location}</p>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener"
                      data-aos="fade-up"
                    >
                      Register Now
                    </a>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default Upcoming;
