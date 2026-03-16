import React, { useState } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import {
  Autoplay,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  EffectFlip,
  Navigation,
} from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";
import "swiper/css/effect-coverflow";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Vinay Kumar",
      role: "Assistant Professor",
      img: "/images/review/vinay_kumar.webp",
      text: `I had the privilege of participating in the International Conference on Sustainable Agriculture Practices and Climate Change Impacts (ICSAPCI) held on 8–9 May 2025 in Manila, Philippines. The conference, themed "Innovative Approaches to Mitigate Climate Change through Sustainable Agriculture," brought together researchers, academicians, and practitioners from around the world to exchange ideas and present groundbreaking work in the field. \n\n

      The event was excellently organized by Confworld Educational Research and Development Association, in collaboration with Nueva Ecija University of Science and Technology (NEUST), Philippines, and Keladi Shivappa Nayaka University of Agricultural and Horticultural Sciences (KSNUAHS), India. The sessions were well-structured, the speakers were highly knowledgeable, and the overall atmosphere was intellectually stimulating and collaborative.\n\n

      Kudos to Confworld for their professional coordination and commitment to promoting academic dialogue on critical global issues like climate change and sustainable agriculture. I look forward to attending more such impactful events in the future.`,
      stars: 5,
    },
    {
      name: "Johnedel Peralta",
      role: "Assistant Professor",
      img: "/images/review/johnedel_peralta.webp",
      text: "CERADA is committed to delivering exceptional services, earning a reputation as a trusted association. By upholding its values and maintaining high standards, it fosters trust and reliability.",
      stars: 5,
    },
    {
      name: "Rudragoud Channagouda",
      role: "Professor",
      img: "/images/review/rudragoud.webp",
      text: `Sir, The Conducting of international workshop is excellent and also the way of arrangment with respect to technical sessions and food is good
Thank you for your institute and our kSNUHAS, Shivamogga for giving opportunity to participated in the conference
Thank you`,
      stars: 5,
    },
    {
      name: "Rumi Dhar",
      role: "Assistant Professor",
      img: "/images/review/rumi_dhar.jpg",
      text: `Hello everyone, feel privileged to give review. I am one of the participants from India who attended APCEESH 2025 conference which was held on Bangkok Thailand.
It was wonderful experience I had ever. The hospitality, time management and the programme schedule everything was fully arranged by the organisers. First time I attended and presented paper under Confworld Education association and their cooperation made me so easy .I suggest all of you to participate. A very good institution who helps you to nurture your academic development in International level like APCEESH 2025 did.
Thank you.`,
      stars: 5,
    },
//     {
//       name: "Angelou Ramos",
//       role: "Assistant Professor",
//       img: "/images/review/angelou_ramos.webp",
//       text: `CERADA makes sure that they stay true to their words and deliver the best quality of services to their clientele.

// They get back to you the soonest possible time which gives you the security that they will really get things done just like what they have committed to do to you and the services you availed of🙂`,
//       stars: 5,
//     },
    {
      name: "Rachel Rodriguez",
      role: "Associate Professor V",
      img: "/images/review/rachel_rodriguez.webp",
      text: `My first time to attend as a Session Chair. 'Twas an incredible journey and experience. Thanks`,
      stars: 5,
    },
    {
      name: "Angelou Ramos",
      role: "Assistant Professor",
      img: "/images/review/angelou_ramos.webp",
      text: `Very satisfied client here💪. CERADA really delivers professional services. Special mention to Ms. Suhana who never falters to keep me posted🙂`,
      stars: 5,
    },
    {
      name: "Lindiwe Ndaba",
      role: "Assistant Professor",
      img: "/images/review/lindiwe_ndaba.png",
      text: `The conference was exceptional and I learnt a lot from all the speakers. It was such a privilege to share my Integrated Leadership Effectiveness Framework at a global conference. This will contribute towards enhancing leadership effectiveness in the VICA world we are living in.`,
      stars: 5,
    },
    {
      name: "Rania Lampou",
      role: "STEM Instructor & Researcher",
      img: "/images/review/rania_lampou.png",
      text: `Confworld Educational Research and Development Association is an excellent platform for researchers, academicians, and students. The organization provides well-structured conferences, valuable learning opportunities, and strong academic support. Their team is professional, responsive, and committed to promoting quality research and innovation. I have the honor to be a part of their events as Keynote speaker and I truly appreciate their efforts in creating a global network for knowledge sharing and professional growth. Highly recommended for anyone looking to advance their academic and research journey.`,
      stars: 5,
    },
    {
      name: "Sudarshan Rao K ",
      role: "Assistant Professor",
      img: "/images/review/sud.png",
      text: `We had the privilege of hosting the conference in collaboration with CERADA as academic partner.
The CERADA authorities organized the conference efficiently, released the conference proceedings, and distributed the certificates on time.
I am very grateful to CERADA for the opportunity to collaborate.`,
      stars: 5,
    },
    {
      name: "Preexcy Bacus ",
      role: "Assistant Professor",
      img: "/images/review/preexcy_bacus.png",
      text: `ICABMET 2025 was a good experience overall. I had the chance to be a session chair and comment on different research presentations, which made the discussions more meaningful and engaging. It was a great space to exchange ideas and connect with researchers from various fields. Looking forward to seeing it improve and grow in the coming years!`,
      stars: 5,
    },
    {
      name: "Maitri S ",
      role: "Assistant Professor",
      img: "/images/review/maitri.png",
      text: `Great opportunity for researchers to come together and share ideas! Such a lovely learning environment!`,
      stars: 5,
    },
    {
      name: "Dr. Jimmy Gupta ",
      role: "Assistant Professor",
      img: "/images/review/jimmy_gupta.png",
      text: `Excellent Job done by CERADA.`,
      stars: 5,
    },
    
  ];

  const TestimonialCard = ({ name, role, img, text, stars, index }) => {
    const [expanded, setExpanded] = useState(false);
    const charLimit = 100; // Adjust based on how much you want to show initially

    const toggleExpanded = () => setExpanded(!expanded);
    const isLong = text.length > charLimit;
    const displayText = expanded
      ? text
      : text.slice(0, charLimit) + (isLong ? "..." : "");

    return (
      <div
        className={`flex flex-col justify-between  bg-white min-h-65 rounded-xl mt-10 shadow-md p-6 w-full max-w-sm mx-auto text-center `}
        data-aos="fade-up"
      >
        <div>
          <img
            src={img}
            alt={name}
            width={400}
            height={400}
            loading="lazy"
            className="w-16 h-16 rounded-full mx-auto -mt-12 border-4 border-white shadow"
            data-aos="fade-up"
          />
          <div className="space-y-4 text-gray-700 text-sm ">
            {displayText.split("\n").map((paragraph, idx) => (
              <p
                className="text-gray-600 text-sm mt-4 mb-0 text-justify"
                key={idx}
                data-aos="fade-up"
              >
                {paragraph}
              </p>
            ))}
            {isLong && (
              <button
                data-aos="fade-up"
                onClick={toggleExpanded}
                className="text-blue-400 hover:underline ml-1 mt-1"
              >
                {expanded ? "Show Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
        <div>
          <h3 data-aos="fade-up" className="text-gray-800 font-semibold mt-5">
            {name}
          </h3>
          <p data-aos="fade-up" className="text-gray-500 text-sm">
            {role}
          </p>
          <div data-aos="fade-up" className="text-red-500 mt-2">
            {"★".repeat(stars)}
            {"☆".repeat(5 - stars)}
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className=" py-30 px-4  relative " data-aos="fade-up">
      <div
        className="z-0 absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/backgrounds/19366.jpg')" }}
      ></div>
      {/* <div className="absolute inset-0 bg-black/2"></div> */}
      <div className="relative z-5 ">
        <h2
          className="z-1 mb-10 text-center text-4xl px-10 font-semibold text-[#00cec8] text-shadow-md"
          data-aos="fade-up"
        >
          What People Say About Confworld Educational Research and Development
          Association (CERADA)
        </h2>
        <div className="  ">
          <Swiper
            modules={[
              Autoplay,
              EffectFade,
              EffectCube,
              EffectCoverflow,
              EffectFlip,
              Navigation,
            ]}
            spaceBetween={0}
            slidesPerView={3}
            loop
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            effect="slide"
            fadeEffect={{ crossFade: true }}
            style={{ zIndex: 1 }}
            breakpoints={{
              1200: {
                slidesPerView: 3,
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
            className="min-h-80"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard index={index} {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
