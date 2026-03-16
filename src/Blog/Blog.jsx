import React from "react";
import "./Blog.css";
import Blogright from "./Blogright";
import { Link, useNavigate } from "react-router-dom";
import { Seo } from "../components/seo";

const Blog = () => {
  const navigate = useNavigate();

  const internal_links = [
    {
      title: "Introduction",
      link: "#",
    },
    {
      title: "Understanding Scopus Indexed Journals",
      link: "#Understanding",
    },
    {
      title: "Tips to Successfully Publish Your Research",
      link: "#Tips",
    },
    {
      title: "Leveraging CERADA for Publication Success",
      link: "#Leveraging",
    },
    {
      title: "Key services offered by CERADA",
      link: "#Services",
    },
    {
      title: "Conclusion",
      link: "#Conclusion",
    },
  ];

  const blog_topic = [
    {
      title: "How to check scopus indexed journals online?",
      description:
        "To check if a journal is indexed in Scopus, you can follow these steps...",
      image: "/images/scopus1.webp",
      link: "/check-scopus-indexed-journals-online",
    },
    {
      title:
        "What is the importance of Continuing Professional Development Program or Faculty Development Program?",
      description:
        "Continuing Professional Development (CPD) Programs and Faculty Development Programs (FDP)...",
      image: "/images/continuing1.webp",
      link: "/importance-of-continuing-professional-development-program",
    },
    {
      title:
        "Why do you want to attend a CERADA International conference in 2026?",
      description:
        "Attending an international conference in 2026 offers an invaluable opportunity to expand your knowledge...",
      image: "/images/attend1.webp",
      link: "/attend-a-cerada-international-conference-in-2026",
    },
    {
      title:
        "How to check Web of Science (SCIE, ESCI, SSCI) indexed journals online?",
      description:
        "To check if a journal is indexed in Clarivate's SCIE, ESCI or SSCI, you need to...",
      image: "/images/scie1.webp",
      link: "/how-to-check-web-of-science-indexed-journals-online",
    },
    {
      title: "How to write and publish a scientific paper?",
      description:
        "Writing and publishing a scientific paper is a systematic process. Here's a step-by-step guide...",
      image: "/images/publish1.webp",
      link: "/how-to-write-and-publish-a-scientific-paper",
    },
    {
      title: "Writing case studies:Science of delivery",
      description: `Writing a case study focused on the "science of delivery" involves analyzing real-world challenges...`,
      image: "/images/studies1.webp",
      link: "/writing-case-studies-science-of-delivery",
    },
    {
      title: "How to write a successful research paper?",
      description: `Writing a successful research paper requires careful planning, a clear structure and attention to detail...`,
      image: "/images/successful1.webp",
      link: "/how-to-write-a-successful-research-paper",
    },
    {
      title: "How to write a research proposal?",
      description: `Writing a research proposal involves outlining your planned study in a way that convinces your audience of its significance...`,
      image: "/images/research1.webp",
      link: "/how-to-write-a-research-proposal",
    },
  ];

  return (
    <div className="blog">
      <Seo
        title="Research & Academic Blog | Tips for Scopus Journals, Publishing & Conferences – CERADA"
        description="Explore CERADA’s academic blog featuring expert tips on Scopus-indexed journal publishing, research writing, conferences, and career development for scholars."
      />
      <div className="blog-left">
        {/* {blog_topic.map(()=>(
          
        ))} */}
        <div className="p-a">
          {internal_links.map(({ title, link }, index) => (
            <Link key={index} to={link} rel="noopener">
              {"> "}
              {title}
            </Link>
          ))}
        </div>
        <div className="blog-title-one">
          <h1 id="introduction" style={{ background: "none", height: "auto" }}>
            How to Get Your Research Published in Scopus Indexed Journals?
          </h1>
          <h2>Introduction</h2>
          <p>
            Are you an aspiring researcher looking to get your work published in
            prestigious Scopus indexed journals? Look no further! In this blog
            post, we will provide you with insider tips on how to make your
            stand out and get noticed in the academic community.
          </p>
          <p>
            At CERADA, we understand the challenges that researchers face when
            it comes to getting their work published. That's why we offer
            research assistance, publication guidance, and opportunities to
            present your work at international conferences. CERADA is an
            exclusive pillar in advancing your research career, uniting scholars
            and advancing research.
          </p>
          <h2 id="understanding">Understanding Scopus Indexed Journals</h2>
          <p>
            Scopus indexed journals are prestigious platforms that showcase
            high-quality research from various disciplines. Getting your work
            featured in these journals can significantly boost your academic
            profile and credibility as a researcher. However, the process of
            publication in Scopus indexed journals can be challenging and
            competitive.
          </p>
          <h2 id="tips">Tips to Successfully Publish Your Research</h2>
          <div className="tips">
            <div>
              <img
                src="/images/quality-over-quantity.webp"
                alt="Quality Over Quantity"
                width={350}
                height={350}
                loading="lazy"
              />
              <p>
                <b>Quality Over Quantity</b> Focus on producing high-quality
                research that adds value to your field of study.
              </p>
            </div>
            <div>
              <img
                src="/images/follow-submission-guidelines.webp"
                alt="Follow Submission Guidelines"
                width={350}
                height={350}
                loading="lazy"
              />
              <p>
                <b>Follow Submission Guidelines</b> Carefully read and adhere to
                the submission guidelines provided by the journal.
              </p>
            </div>
            <div>
              <img
                src="/images/engage-in-peer-review.webp"
                alt="engage-in-peer-review"
                width={350}
                height={350}
                loading="lazy"
              />
              <p>
                <b>Engage in Peer Review</b> Solicit feedback from peers and
                experts to improve the quality of your research.
              </p>
            </div>
            <div>
              <img
                src="/images/highlight-significance.webp"
                alt="highlight-significance"
                width={350}
                height={350}
                loading="lazy"
              />
              <p>
                <b>Highlight Significance</b> Clearly communicate the
                significance and impact of your research in your manuscript.
              </p>
            </div>
            <div>
              <img
                src="/images/stay-persistent.webp"
                alt="stay-persistent"
                width={350}
                height={350}
                loading="lazy"
              />
              <p>
                <b>Stay Persistent</b> Don't get discouraged by rejection. Keep
                refining and resubmitting your work.
              </p>
            </div>
          </div>
          <h2 id="leveraging">Leveraging CERADA for Publication Success</h2>
          <p>
            CERADA also known as Confworld Educational Research And Development
            Association, is an exclusive pillar in advancing your research
            career. By uniting scholars, advancing research and providing
            publication assistance, CERADA offers a holistic approach to help
            researchers navigate the publication process effectively.
          </p>
          <h2 id="services">Key services offered by CERADA</h2>
          <ul>
            <li>Research assistance</li>
            <li>Publication guidance</li>
            <li>International conference opportunities</li>
          </ul>
          <p>
            For more information, visit{" "}
            <a
              style={{ color: "blue" }}
              href="https://confworld.org"
              target="_blank"
              rel="noopener"
            >
              https://confworld.org
            </a>{" "}
            or contact CERADA at{" "}
            <a
              style={{ color: "blue" }}
              target="_blank"
              rel="noopener"
              href="mailto:info@confworld.org"
            >
              info@confworld.org
            </a>{" "}
            or{" "}
            <a
              style={{ color: "blue" }}
              target="_blank"
              rel="noopener"
              href="tel:+918610656424"
            >
              +91 8610656424
            </a>
          </p>
          <h2 id="conclusion">Conclusion</h2>
          <p>
            In conclusion, getting your research published in Scopus indexed
            journals requires dedication, perseverance and strategic planning.
            By following the insider tips provided in this blog post and
            leveraging the resources offered by CERADA, you can enhance your
            chances of publication success. Remember, the journey to becoming a
            published researcher is a rewarding one, so stay focused and keep
            striving for excellence in your work.
          </p>
        </div>

        {blog_topic.map(({ link, image, description, title }, index) => (
          <div key={index} className="blog-topic" style={{ marginTop: "50px" }}>
            <img
              src={image}
              alt={title}
              width={350}
              height={350}
              loading="lazy"
            />
            <div>
              <h2 style={{ background: "none", height: "auto" }}>{title}</h2>
              <p>{description}</p>
              <button>
                <Link to={link} rel="noopener">
                  Know More
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Blogright />
    </div>
  );
};

export default Blog;
