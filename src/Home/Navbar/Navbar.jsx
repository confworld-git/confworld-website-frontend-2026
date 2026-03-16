import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const translateElementRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (
        translateElementRef.current &&
        window.google &&
        window.google.translate
      ) {
        translateElementRef.current.innerHTML = ""; // Clear existing widget

        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,de,zh",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          translateElementRef.current
        );
      }
    };

    if (!document.querySelector('script[src*="translate_a/element.js"]')) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (
      window.google &&
      window.google.translate &&
      window.google.translate.TranslateElement
    ) {
      window.googleTranslateElementInit();
    }

    return () => {
      if (translateElementRef.current) {
        translateElementRef.current.innerHTML = "";
      }
    };
  }, []);

  const isOpenSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    document.documentElement.classList.toggle("overflow-hidden");
  };

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const navbarData = [
    {
      title: "home",
      link: "/",
    },
    {
      title: "about",
      sub_menu: [
        {
          sub_title: "about us",
          sub_link: "/about-us",
          sub_icon: "/images/icons/star.webp",
        },
        {
          sub_title: "our history",
          sub_link: "/history",
          sub_icon: "/images/icons/clock.webp",
        },
        {
          sub_title: "our associates and partners",
          sub_link: "/our-associates-and-partners",
          sub_icon: "/images/icons/handshake.webp",
        },
      ],
    },
    {
      title: "conferences",
      sub_menu: [
        {
          sub_title:
            "CERADA’s Contributions to Sustainable Development Goals (SDGs)",
          sub_link: "/sdg",
          sub_icon: "/images/icons/goal.webp",
        },
        {
          sub_title: "upcoming international conferences",
          sub_link: "/conference",
          sub_icon: "/images/icons/coming-soon.webp",
        },
        {
          sub_title: "past conferences",
          sub_link: "/past-conferences",
          sub_icon: "/images/icons/past.webp",
        },
        {
          sub_title: "host a conference",
          sub_link: "/host-conference",
          sub_icon: "/images/icons/cloud-computing.webp",
        },
        {
          sub_title: "advertise, exhibit, sponsor",
          sub_link: "/advertise",
          sub_icon: "/images/icons/digital-marketing.webp",
        },
        {
          sub_title: "presentation",
          sub_link: "/presentation",
          sub_icon: "/images/icons/presentation.webp",
        },
        {
          sub_title: "cerada awards",
          sub_link: "/awards",
          sub_icon: "/images/icons/medal.webp",
        },
      ],
    },
    {
      title: "advisory board",
      link: "/advisory-board",
    },
    {
      title: "Professional Ambassadors",
      link: "/cpa-members",
    },
    {
      title: "journals & publications",
      link: "/journals",
    },
    {
      title: "membership",
      sub_menu: [
        {
          sub_title: "student membership",
          sub_link: "/student",
          sub_icon: "/images/icons/alumni.webp",
        },
        {
          sub_title: "professional membership",
          sub_link: "/professional",
          sub_icon: "/images/icons/briefcase.webp",
        },
        {
          sub_title: "institutional membership",
          sub_link: "/institutional",
          sub_icon: "/images/icons/government.webp",
        },
        {
          sub_title: "corporate membership",
          sub_link: "/corporate",
          sub_icon: "/images/icons/business.webp",
        },
        {
          sub_title: "membership enquiry form",
          sub_link: "/membership-enquire-form",
          sub_icon: "/images/icons/form.webp",
        },
      ],
    },
    {
      title: "research assistance",
      link: "/assistance",
    },
    {
      title: "payment",
      sub_menu: [
        {
          sub_title: "payment gateway",
          sub_link: "/payment",
          sub_icon: "/images/icons/secure-payment.webp",
        },
        {
          sub_title: "terms and conditions",
          sub_link: "/terms-and-condition",
          sub_icon: "/images/icons/terms-and-conditions.webp",
        },
      ],
    },
    {
      title: "careers",
      link: "/careers",
    },
    {
      title: "contact us",
      link: "/contact",
    },
  ];

  const moreButton = [
    {
      title: "Register",
      link: "/register",
      icon: "/images/icons/written-paper.webp",
    },
    {
      title: "Blog",
      link: "/blog",
      icon: "/images/icons/blogger.webp",
    },
    {
      title: "Admin Login",
      link: "/login",
      icon: "/images/icons/user.webp",
    },
    {
      title: "CPA Login",
      link: "/ambassador/login",
      icon: "/images/icons/user1.png",
    },
  ];

  return (
    <>
      {/* Google Translate widget CSS */}
      <style>
        {`
          .goog-logo-link {
            display: inline-block !important;
            visibility: visible !important;
            opacity: 1 !important;
            height: 20px !important;
          }
          .goog-te-combo {
            padding: 4px 10px;
            border-radius: 6px;
            border: 1px solid #ccc;
            cursor: pointer;
            background-color: white;
            font-size: 0.9rem;
            color: #333;
          }
          .goog-te-banner-frame.skiptranslate {
            display: none !important;
          }
          body {
            top: 0 !important;
            position: static !important;
          }
          .goog-te-gadget {
            white-space: nowrap;
            overflow: visible !important;
          }
        `}
      </style>

      <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-[10]">
        {/* Top bar with translate and more buttons */}
        <div className="hideShow">
          <ul className="flex justify-around items-center p-2 bg-[#36c7d1] text-sm font-semibold text-white flex-wrap">
            {/* <li className="flex items-center gap-2">
              <img
                src="/images/icons/translate.webp"
                alt="translate-icon"
                width={32}
                height={32}
                loading="lazy"
                className="bg-white rounded-full"
              />
              <div
                id="google_translate_element"
                ref={translateElementRef}
                style={{ minWidth: "120px" }}
              />
            </li> */}

            {moreButton.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.link}
                  className="px-3 text-white flex items-center gap-2 whitespace-nowrap"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    width={32}
                    height={32}
                    loading="lazy"
                    className="bg-white rounded-full"
                  />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Navigation */}
        <nav
          role="navigation"
          aria-label="Main"
          className="flex justify-between 2xl:px-20 px-10 p-1 items-center"
        >
          <Link to="/">
            <img
              className="w-[50px] max-h-[50px] sm:w-[80px] sm:max-h-[80px]"
              src="/logo/cerada-logo.webp"
              alt="CERADA Logo"
            />
          </Link>

          <div className="navBarMenu">
            <ul className="flex text-sm justify-center items-center w-full h-full gap-1">
              {navbarData.map((item, idx) => (
                <li
                  key={idx}
                  className="capitalize cursor-pointer rounded-xl p-0 group hover:bg-gray-100 hover:text-black text-gray-500 relative"
                >
                  <div className="flex justify-center items-center py-2 px-3">
                    {item.link ? (
                      <Link className="rounded-xl" to={item.link}>
                        {item.title}
                      </Link>
                    ) : (
                      item.title
                    )}
                    {item.sub_menu && (
                      <RiArrowDropDownLine
                        size={18}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    )}
                  </div>

                  {item.sub_menu && (
                    <ul
                      className={`p-2 border-2 border-gray-200 invisible opacity-0 scale-95 group-hover:visible group-hover:scale-100 duration-300 ease-in-out group-hover:opacity-100 transition-2 absolute top-9.5 left-1/2 -translate-x-2/4 bg-white shadow-lg rounded-2xl text-black grid ${
                        item.sub_menu.length > 3 ? "grid-cols-2 w-150" : "w-70"
                      } gap-2`}
                    >
                      {item.sub_menu.map((sub_item, sub_idx) => (
                        <li
                          key={sub_idx}
                          className={`rounded-lg ${
                            [0, 3, 4, 7].includes(sub_idx) ? "hover:bg-[#00c0ce]" : "hover:bg-[#ffe607]"
                          }`}
                        >
                          <Link
                            to={sub_item.sub_link}
                            className="flex p-4 items-center"
                          >
                            <img
                              src={sub_item.sub_icon}
                              alt={sub_item.sub_title}
                              width={50}
                              height={50}
                              loading="lazy"
                              className="w-6 me-2"
                            />
                            <span className="text-sm">{sub_item.sub_title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <i
            className="menuIcon cursor-pointer"
            onClick={isOpenSidebar}
            aria-label="Toggle menu"
          >
            <LuMenu size={30} />
          </i>
        </nav>

        {/* Mobile overlay */}
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } w-screen h-screen bg-black opacity-40 transition-transform duration-300 ease-in-out fixed top-0 left-0 z-40`}
          onClick={isOpenSidebar}
        ></div>

        {/* Mobile sidebar */}
        <div
          className={`fixed top-0 right-0 w-80 h-screen bg-gray-100 z-50 shadow-lg overflow-auto p-5 transform transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <i
            className="menuIcon cursor-pointer"
            onClick={isOpenSidebar}
            aria-label="Close menu"
          >
            <LuMenu size={30} />
          </i>

          <ul className="mt-5">
            {navbarData.map((item, idx) => (
              <li
                key={idx}
                className="capitalize p-2 justify-between items-center cursor-pointer"
                {...(item.sub_menu && { onClick: () => toggleDropdown(idx) })}
              >
                <div className="flex items-center justify-between">
                  {item.link ? <Link to={item.link}>{item.title}</Link> : item.title}
                  {item.sub_menu && (
                    <RiArrowDropDownLine
                      size={30}
                      className={`transition-transform duration-200 ${
                        activeIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
                {item.sub_menu && (
                  <ul
                    className={`transition-all duration-300 ease-in-out space-y-2 overflow-hidden ${
                      activeIndex === idx ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    {item.sub_menu.map((sub_item, sub_idx) => (
                      <li
                        key={sub_idx}
                        className="hover:bg-gray-200 p-2 rounded-lg"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <Link to={sub_item.sub_link} className="flex items-center">
                          <img
                            src={sub_item.sub_icon}
                            alt={sub_item.sub_title}
                            width={50}
                            height={50}
                            loading="lazy"
                            className="w-6 max-h-6 me-2"
                          />
                          <span className="text-sm capitalize">{sub_item.sub_title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <ul className="flex flex-col justify-around gap-2 text-sm font-semibold flex-wrap mt-8">
            {moreButton.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 hover:bg-gray-200 rounded-lg"
                onClick={() => setSidebarOpen(false)}
              >
                <Link
                  to={item.link}
                  className="capitalize flex items-center gap-2 p-2 w-full"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
                    loading="lazy"
                    className="w-7 max-h-7 bg-white rounded-full"
                  />
                  <span className="text-sm capitalize">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
