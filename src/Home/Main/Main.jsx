import React, { useEffect, useRef, useState } from "react";
import "./Main.css";
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
  Pagination,
} from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";
import "swiper/css/effect-coverflow";

const Main = () => {
  const slides = [
    {
      title: `Confworld Educational Research and Development Association (CERADA)`,
      desc: "Fostering continuous professional growth to empower individuals in advancing engineering, technology, medical sciences, arts, science, social science and education on a global scale",
      sub: "",
      image: "/images/mainBanners/banner1.webp",
      button_title: "About CERADA",
      link: "/about-us",
      logo: "",
    },
    {
      title: `Upcoming Events`,
      desc: "Multidisciplinary, cross-sector events that spark innovation, foster knowledge exchange, and drive the future of engineering and technology through groundbreaking scientific discoveries",
      sub: "",
      image: "/images/mainBanners/banner2.webp",
      button_title: "Upcoming Conferences",
      link: "/conference",
      button_title_2: "Past Conferences",
      link_2: "/past-conference-list-2025",
      logo: "",
    },
    {
      title: "About Membership",
      desc: "CERADA unites global leaders in science, engineering & technology and innovation, offering a dynamic platform for members and partners to collaborate, exchange ideas and intensify their impact. Through this network, individuals and institutions contribute meaningfully to addressing some of the world’s most pressing challenges.",
      sub: "",
      image: "/images/mainBanners/banner3.webp",
      button_title: "Membership",
      link: "/professional",
      logo: "",
    },
    {
      title: "Editing & Proofreading Services",
      desc: `Our expert services are designed to refine and polish your research work with precision.
      We help you deliver clear, accurate and publication-ready content ensuring your ideas are presented at their best!
      `,
      sub: "",
      image: "/images/mainBanners/research.webp",
      button_title: "Research Assistance",
      link: "/assistance",
      logo: "",
    },
  ];
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  useEffect(() => {
    if (
      swiperInstance &&
      swiperInstance.params &&
      swiperInstance.params.navigation
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (     
    <div className="relative mb-24" data-aos="fade-up">
      <button
        ref={prevRef}
        className="absolute top-1/2 left-1 z-10 transform -translate-y-1/2 bg-slate-800 text-white w-10 h-10 flex items-center justify-center rounded hover:bg-slate-700 cursor-pointer"
      >
        &lt;
      </button>
      <Swiper
        onSwiper={setSwiperInstance}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[
          EffectFade,
          EffectCube,
          EffectCoverflow,
          EffectFlip,
          Navigation,
          Pagination,
        ]}
        pagination={{ clickable: true }}
        className="pb-8"
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        speed={800}
        effect="slide"
        fadeEffect={{ crossFade: true }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-1 h-auto md:h-100 py-10 px-20 bg-[#00cec8]">
              <div className="w-full md:w-1/2 space-y-4  text-white">
                <h2 className="text-2xl md:text-3xl font-bold text-shadow-md">
                  {slide.title}
                </h2>
                <p>{slide.desc}</p>
                <p className="font-semibold">{slide.sub}</p>
                <div className="flex flex-col gap-2  items-start">
                  <button className="mt-4  text-white  font-bold  hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <a className="p-2 bg-orange-500 rounded" href={slide.link}>
                      {slide.button_title}
                    </a>
                  </button>
                  {slide.button_title_2 && (
                    <button className="mt-4  text-white  font-bold  hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <a
                        className="p-2 bg-orange-500 rounded"
                        href={slide.link_2}
                      >
                        {slide.button_title_2}
                      </a>
                    </button>
                  )}
                </div>
              </div>
              <div className="w-full h-auto md:w-2/5 flex justify-center bg-center ">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="max-h-[350px] w-auto h-auto"
                  width="400"
                  height="300"
                  loading="lazy"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        ref={nextRef}
        className="absolute top-1/2 right-1 z-10 transform -translate-y-1/2 bg-slate-800 text-white w-10 h-10 flex items-center justify-center rounded hover:bg-slate-700 cursor-pointer"
      >
        &gt;
      </button>
    </div>
  );
};

export default Main;
