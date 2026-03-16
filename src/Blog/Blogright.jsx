import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";



const Blogright = () => {
  const internal_links = [
    {
      title: "Introduction",
      link: "/blog",
    },
    {
      title: "Understanding Scopus Indexed Journals",
      link: "#understanding",
    },
    {
      title: "Tips to Successfully Publish Your Research",
      link: "#tips",
    },
    {
      title: "Leveraging CERADA for Publication Success",
      link: "#leveraging",
    },
    {
      title: "Key services offered by CERADA",
      link: "#services",
    },
    {
      title: "Conclusion",
      link: "#conclusion",
    },
  ];
  const more_blog_link = [
    {
      title: "How to Get Your Research Published in Scopus Indexed Journals?",
      link: "/blog",
    },
    {
      title: "How to check scopus indexed journals online?",
      link: "/check-scopus-indexed-journals-online",
    },
    {
      title:
        "What is the importance of Continuing Professional Development Program or Faculty Development Program?",
      link: "/importance-of-continuing-professional-development-program",
    },
    {
      title:
        "Why do you want to attend a CERADA International conference in 2026?",
      link: "/attend-a-cerada-international-conference-in-2026",
    },
    {
      title:
        "How to check Web of Science (SCIE, ESCI, SSCI) indexed journals online?",
      link: "/how-to-check-web-of-science-indexed-journals-online",
    },
    {
      title: "How to write and publish a scientific paper?",
      link: "/how-to-write-and-publish-a-scientific-paper",
    },
    {
      title: "Writing case studies:Science of delivery",
      link: "/writing-case-studies-science-of-delivery",
    },
    {
      title: "How to write a successful research paper?",
      link: "/how-to-write-a-successful-research-paper",
    },
    {
      title: "How to write a research proposal?",
      link: "/how-to-write-a-research-proposal",
    },
  ];

  const upcomingConferences = [
    
   
   
    
    
    
     {
      title:
        "International Conference on Applied Science, Business and Management, Engineering & Technology ( ICABMET-2026 )",
      shortName: "( ICABMET-2026 )",
      date: "30-31 Mar, 2026",
      location: "Dubai, UAE",
      link: "https://icabmet.com",
      theme:"Driving Innovation and Sustainable Solutions: Interdisciplinary Approaches in Applied Sciences, Business and Technology",
      image: "/logo/icabmet-logo.webp",
      count: "2",
    },
    {
      title:
        "International Conference on Sustainable Agriculture Practices and Climate Change Impacts ( ICSAPCI-2026 )",
      shortName: "( ICSAPCI-2026 )",
      date: "16-17 Apr, 2026",
      location: "Jakarta, Indonesia",
      link: "https://icsap.co.in",
      theme:"Innovative Approaches to Mitigate Climate Change through Sustainable Agriculture",
      image: "/logo/icsap-logo.webp",
      count: "2",
    },
    {
      title:
        "International Conference on Social Sciences, Teaching and Education, Engineering and Technology ( ICSTEET-2026 )",
      shortName: "( ICSTEET-2026 )",
      date: "14-15 May, 2026",
      location: "Manila, Philippines",
      link: "https://icsteet.com",
      theme:"Bridging the Gap : Innovations and Challenges in Social Sciences, Teaching & Education, Engineering and Technology",
      image: "/logo/ICSTEET_Logo.png",
      count: "2",
    },
    
    {
      title: "International Conference on Life Sciences and Multidisciplinary Healthcare Approaches (ICLSMHA-2026)",
      shortName: "(ICLSMHA-2026)",
      date: "14-15 May, 2026",
      location: "Manila, Philippines",
      link: "https://iclsmha.cerada.in/",
      theme:"Bridging Science and Practice: Multidisciplinary Approaches to Health and Wellbeing",
      image: "/logo/iclsmha-logo.jpg",
      count: "",
    },
    {
      title: "World Conference on Multidisciplinary Research and Practices ( WCMRP-2026 )",
      shortName: "( WCMRP-2026 )",
      date: "27-28 May, 2026",
      location: "Kuala Lumpur, Malaysia",
      link: "https://wcmrp.com",
      theme:"Integrating Knowledge Across Disciplines for Global Impact: Innovations, Challenges and Sustainable Solutions",
      image: "/logo/wcmpr-logo.webp",
      count: "2",
    },
    {
      title: "International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities ( ICAEBMS-2026 )",
      shortName: "( ICAEBMS-2026 )",
      date: "27-28 Jul, 2026",
      location: "Singapore",
      link: "https://icaebms.com",
      theme:"Interdisciplinary Innovations for a Sustainable Future",
      image: "/logo/icaebmslogo.png",
      count: "1",
    },
    {
      title:
        "Asia Pacific Conference on Engineering, Education, Social Science and Humanities ( APCEESH-2026 )",
      shortName: "( APCEESH-2026 )",
      date: "28-29 Sep, 2026",
      location: "Bangkok, Thailand",
      link: "https://cerada.in",
      theme:"Redefining Futures through Education, Technology and Social Progress for Global Sustainability",
      image: "/logo/apceesh-logo1.png",
      count: "2",
    },
    {
      title:
        "International Conference on Emerging Trends in Multidisciplinary Research Studies ( ICETMRS-2026 )",
      shortName: "( ICETMRS-2026 )",
      date: "16-17 Nov, 2026",
      location: "Istanbul, Turkey",
      link: "https://icetmrs.com",
      theme:"Sustainable Learning Through Multidisciplinary Research and Technological Innovation",
      image: "/logo/icetmrs-logo.png",
      count: "2",
    },
  ];
  const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };
  return (
    <div className="blog-right my-5">
      <div className="flex flex-col gap-2">
        {internal_links.map(({ title, link }, index) => (
          <a key={index} href={link}>
            <span className="text-[#00cec8]">{"> "}</span>
            {title}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-3 mt-10 text-[#000092] font-semibold">
        {more_blog_link.map(({ title, link }) => (
          <Link to={link} >
            {title}
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="font-semibold mb-3">
          Upcoming Education and Research Conferences, You Shouldn’t Miss.
        </h2>

        {upcomingConferences.map(
          ({ count, image, link, location, date, shortName, title,theme }, index) => (
            <div
              key={index}
              className="upcoming-event-blog"
              style={{ borderColor: "#0056b3" }}
            >
              <h2>
                
                
              </h2>
              <Link to={link} target="_blank" rel="noopener">
              {count}
                {count && <sup>{getOrdinal(count)} </sup>}
              {title}<br/>
                <b className="">Theme : </b><span className="text-black">{theme}</span> 
              </Link>
              <div className="mt-2 space-y-0">
  <p className="flex items-center gap-1 text-gray-700">
    <FaCalendarAlt className="text-rose-600 text-sm" />
    {date}
  </p>

  <p className="flex items-center gap-1 text-gray-700">
    <FaMapMarkerAlt className="text-rose-600 text-sm" />
    {location}
  </p>
</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Blogright;
