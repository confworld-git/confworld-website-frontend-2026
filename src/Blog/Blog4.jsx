import React from "react";
import "./Blog.css";
import Blogright from "./Blogright";
import { Seo } from "../components/seo";

const Blog4 = () => {
  const conferenceBenefits2026 = {
    intro:
      "Attending an international conference in 2026 offers an invaluable opportunity to expand your knowledge, connect with experts and actively contribute to your field on a global stage. CERADA conferences are known for showcasing pioneering research in areas like agriculture, applied science, business and management studies, climate change, education, engineering, gender equality, women’s empowerment, economic growth, industry,  innovation and infrastructure, social sciences, partnership for the goals and sustainable development goals. ",
    sections: [
      {
        title: "Learning About the Latest Research",
        description:
          "International conferences are hubs for cutting-edge research and innovation. Attending the international conferences would allow us to gain insights into emerging trends, methodologies and technologies that you can apply to your work, keeping us current in a rapidly evolving field.",
      },
      {
        title: "Networking with Global Professionals",
        description:
          "Connecting with professionals from different countries and backgrounds fosters collaboration and can lead to partnerships that enhance research and project development. This network of like-minded experts could be crucial for future joint projects and knowledge exchange.",
      },
      {
        title: "Publication Opportunities",
        description:
          "One of the key benefits of attending CERADA’s conference is the opportunity to present your research and potentially, have it published in high-impact outlets. All CERADA conferences offer publication opportunities in Scopus and Web of Science (WoS) indexed journals. Publishing your work in these reputable journals would not only enhance your academic profile but also contribute to the global body of knowledge, making your research accessible to a wider audience.",
      },
      {
        title: "Gaining a Broader Perspective",
        description:
          " Exposure to diverse ideas and approaches is invaluable for gaining a well-rounded, global perspective. Understanding how professionals from other regions address challenges can inspire us to think creatively and adapt new strategies in our work.",
      },
      {
        title: "Sharing your Research and Receiving Feedback",
        description:
          "Presenting your research at an international conference allows us to share our findings with a broader audience, gather constructive feedback and refine your work based on diverse perspectives.",
      },
      {
        title: "Motivation and Inspiration",
        description:
          " Conferences offer a unique environment that inspires and motivates. Witnessing groundbreaking projects and meeting passionate individuals reminds us of the broader impact of our work, encouraging us to strive for greater contributions to the field.",
      },
    ],
  };

  return (
    <div className="blog">
      <Seo
        title="CERADA International Conference 2026 | Research, Networking & Publication Opportunities"
        description="Join CERADA International Conference 2026 to explore cutting-edge research, network globally, publish in Scopus/WoS journals, and gain inspiration for impactful work."
      />
      <div className="blog-left">
        <img
          src="/images/attend1.webp"
          alt="attend-a-cerada-international"
          width={450}
          height={450}
          loading="lazy"
        />
        <div className="blog-title-one">
          <h1>
            Why do you want to attend a CERADA International conference in 2026?
          </h1>
          <div>
            <p>{conferenceBenefits2026.intro}</p>
            {conferenceBenefits2026.sections.map((section, index) => (
              <div key={index} className="mt-5">
                <h4 className="font-bold">{section.title}</h4>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Blogright />
    </div>
  );
};

export default Blog4;
