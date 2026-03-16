import React from "react";
import "./Board.css";
import advisoryBoardMembers from "./Members";
import { Seo } from "../components/seo";
const Board = () => {
  return (
    <div className="advisory-board" data-aos="fade-up">
      <Seo
        title="Advisory Board Members | CERADA - Leaders in Research and Education"
        description="Meet the distinguished Advisory Board Members of CERADA, including international experts and leaders in education, research, innovation, and development."
      />
      <div className="top-img ad-img relative" data-aos="fade-up">
        <img
          className="absolute z-[-10] h-full w-full object-cover"
          src="/images/advisory-board-members-banner.webp"
          alt="advisory-board-members-banner"
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
              Advisory Board Members
            </text>
          </svg>
        </h1>
      </div>
      <section className="members" data-aos="fade-up">
        {advisoryBoardMembers.map(
          ({ image, name, title, title2, title3, title4, back }, index) => {
            return (
              <div key={index} className="member">
                <img
                  src={image}
                  alt={name}
                  style={{ objectPosition: !back ? "center" : "top" }}
                  width={400}
                  height={400}
                  loading="lazy"
                />
                <h2>{name}</h2>
                <p>{title}</p>
                {title2 && <p>{title2}</p>}
                {title3 && <p>{title3}</p>}
                {title4 && <p>{title4}</p>}
              </div>
            );
          }
        )}
      </section>
    </div>
  );
};

export default Board;
