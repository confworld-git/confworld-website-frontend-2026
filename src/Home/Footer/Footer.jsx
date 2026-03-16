import React from "react";
import "./Footer.css";
import {
  FacebookSvg,
  YoutubeSvg,
  InstagramSvg,
  TwitterSvg,
  LinkedinSvg,
  WhatsappSvg,
} from "./icons";
import { Link } from "react-router-dom";

const footerDetails = [
  {
    title: "Service",
    links: [
      {
        link_name: "International Conference",
        link_address: "/conference",
      },
      {
        link_name: "Journals & Publication",
        link_address: "/journals",
      },
      {
        link_name: "Student Membership",
        link_address: "/student",
      },
      {
        link_name: "Professional Membership",
        link_address: "/professional",
      },
      {
        link_name: "Institutional Membership",
        link_address: "/institutional",
      },
      {
        link_name: "Corporate Membership",
        link_address: "/corporate",
      },
    ],
  },
  {
    title: "Useful Links",
    links: [
      {
        link_name: "Publication",
        link_address: "/journals",
      },
      {
        link_name: "Membership",
        link_address: "/register",
      },
      {
        link_name: "Host A Conference",
        link_address: "/host-conference",
      },
      {
        link_name: "Research Assistance",
        link_address: "/assistance",
      },
      {
        link_name: "Online Payment",
        link_address: "/payment",
      },
    ],
  },
  {
    title: "Get In Touch",
    links: [
      {
        link_name:
          "Address: No.147/383A, Second Floor, Paper Mills Road, Peravallur, Chennai-600082 , Tamil Nadu, India.",
      },
      {
        link_name: "Phone : +91 8610656424",
        link_address: "tel:+918610656424",
      },
      {
        link_name: "Email : info@confworld.org",
        link_address: "mailto:info@confworld.org",
      },
    ],
  },
  {
    title: "Social Media",
    links: [
      {
        link_name: "Facebook",
        link_address: "https://www.facebook.com/profile.php?id=61560894663027",
        Link_icon: FacebookSvg,
      },
      {
        link_name: "YouTube",
        link_address: "http://www.youtube.com/@Confworld",
        Link_icon: YoutubeSvg,
      },
      {
        link_name: "Instagram",
        link_address: "https://www.instagram.com/infoconfworld/?hl=en",
        Link_icon: InstagramSvg,
      },
      {
        link_name: "Twitter",
        link_address: "https://x.com/infoconfworld",
        Link_icon: TwitterSvg,
      },
      {
        link_name: "Linkedin",
        link_address:
          "https://www.linkedin.com/company/confworld-educational-research-and-development-association/",
        Link_icon: LinkedinSvg,
      },
      {
        link_name: "Whatsapp",
        link_address: "https://whatsapp.com/channel/0029VbCQG5z4inos7Mt6r61W",
        Link_icon: WhatsappSvg,
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer aria-label="Copyright info" className="footer">
      <video autoPlay muted loop playsInline>
        <source src="videos/footer_animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="footer-wrapper">
        <div className="footer-container">
          <div
            className="footer-section"
            data-aos-anchor-placement="top-bottom"
          >
            <div>
              <img
                src="/logo/cerada-logo.webp"
                alt="Confworld Educational Research and Development Association (CERADA)"
                width={400}
                height={400}
                loading="lazy"
              />
            </div>
          </div>

          {footerDetails.map(({ title, links }, title_index) => (
            <div
              className="footer-section "
              data-aos-anchor-placement="top-bottom"
              key={title_index}
            >
              <h3>{title}</h3>
              <ul>
                {links.map(
                  ({ link_name, link_address, Link_icon }, link_index) => (
                    <li key={link_index}>
                      {}{" "}
                      <Link
                        className="flex gap-2 align-center"
                        to={link_address}
                        rel={title == "social media" ? "noopener" : ""}
                        target={title == "social media" ? "_blank" : ""}
                      >
                        {Link_icon && (
                          <Link_icon
                            loading="lazy"
                            className="w-[20px] h-[20px]"
                          />
                        )}
                        {link_name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom" data-aos-anchor-placement="top-bottom">
          <p>Copyright &copy; 2026 CERADA. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
