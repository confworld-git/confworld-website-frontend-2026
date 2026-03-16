import React from "react";
import "./Assistance.css";
import { Seo } from "../components/seo";

const Assistance = () => {
  const research_assistance = [
    {
      heading: "Topic Selection",
      description:
        "Selection of PhD topics is one of the most important stages of the entire research process. We guide you to choose an appropriate topic for your selected domain of research process. The topic for the research is selected based on the expected end result. We assure you that the selected topic will accomplish the standard of examiners expectation and contain novelty in the specified research domain.",
      image: "/gifImages/topic-selection.svg",
    },
    {
      heading: "Novel concept",
      description:
        "Our professional team will provide novel research concepts for your entire research process. Also our trained professionals select novel concepts in three stages. The first stage is selecting novel concepts with specific outcome, the second stage of novelty is related to specific subjects to identify research problems and research questions. The third stage of the novel concept is applying new methodology to your selected topic which is ever used in any research.",
      image: "/gifImages/novel-concept.svg",
    },
    {
      heading: "Research proposal writing / editing",
      description:
        "We assess you to write an effective research proposal in order to meet the potential supervisor’s expectation with excellent feasibility, critical thinking and ideas of your research project. Our well experienced professionals evaluate the specific problem of the research domain through review of existing literature to obtain background knowledge in specified research domain. We assure that proposals provided by our professionals have significant syntax and grammar in well-structured order.",
      image: "/gifImages/research-proposal-writing.svg",
    },
    {
      heading: "Implementation / Simulation",
      description:
        "The research implementation component of the PhD research project is being built using tools like MATLAB, SIMULINK, NS2, NS3, JAVA, PYTHON, Xilinx and others. We can turn your study fantasies into reality in a unique and cutting-edge manner. We offer implementation for practicing activity or program of the known dimensions of the research. Our implementation team will provide you a purposeful output for your research process. The results for your research will be taken based on intervention outcome and implementation-level outcome for your research process.",
      image: "/gifImages/implementation-simulation.svg",
    },
    {
      heading: "Research Paper writing / editing",
      description:
        "PhD research process varies based on the research domain and topic to write a research paper. Our expert team will provide well written research papers in order to publish in standard reputed journals. Research papers provided by our professionals will gain attraction with effective research skills.",
      image: "/gifImages/research-paper-writing.svg",
    },
    {
      heading: "Synopsis writing / editing",
      description:
        "In the PhD research process the most crucial stage is completing a thesis in stipulated time which contains a detailed report of the entire research process. Before starting with your thesis, writing a synopsis in the preliminary stage to get approval from committee members for your research is just like a summary of a research thesis. We guarantee that our professional technical writers will provide effective appealing fashion and concise synopsis of your research.",
      image: "/gifImages/synopsis-writing-editing.svg",
    },
    {
      heading: "Thesis writing / editing",
      description:
        "In the PhD research process the most crucial stage is completing a thesis in stipulated time which contains a detailed report of the entire research process. Before starting with your thesis, writing a synopsis in the preliminary stage to get approval from committee members for your research is just like a summary of a research thesis. We guarantee that our professional technical writers will provide effective appealing fashion and concise synopsis of your research.",
      image: "/gifImages/thesis-writing-editing.svg",
    },
    {
      plagiarism: [
        {
          heading: "Plagiarism free writing / editing",
          list: [
            {
              description:
                "Originality of research is an important task for the completion of the research, hence our professional writers progress your document in a well-written manner by their own technical writing. In order to provide support for your originality of the research we evaluate with plagiarism free software which will support your mind in peace in the area of research.",
            },
          ],
        },
        {
          heading: "Our Plagiarism Support",
          list: [
            {
              description:
                "Plagiarism scans entire books, websites, journals and document availability on the internet.",
            },
            {
              description:
                "The Plagiarism tool will provide color coding for possible areas. We ensure our professionals will provide 100% plagiarism free content written documents to complete academic research. Also, our technical team will provide documents with proper citation to ensure a citation process with plagiarism free report.",
            },
          ],
        },
      ],
      image: "/gifImages/plagiarism-free-writing-editing.svg",
    },
    {
      heading: "Journal Formatting",
      description:
        "We provide high quality journal formatting for your research/review paper with highly qualified professionals. We offer assistance for remarkable journal formatting with excellent quality demand by the editorials.",
      image: "/gifImages/journal-formatting.svg",
    },
    {
      heading: "Proof reading",
      description:
        "We offer you proofreading service with highly qualified proof-readers, editors and well-educated experts. To submit your thesis with 100% confidence, our proof-reading expertise will improve your thesis quality through analyzing the punctuation, grammar, content flow and technical content of the document.",
      image: "/gifImages/proof-reading.svg",
    },
  ];
  return (
    <div>
      <Seo
        title="Research Assistance | CERADA - PhD Topic Selection, Proposal, Thesis & Paper Support"
        description="Get expert research assistance from CERADA for PhD topic selection, novel concepts, proposal writing, implementation, thesis editing, plagiarism-free papers, journal formatting, and proofreading."
      />
      <div className="top-img rnd" data-aos="fade-up">
        <img
          className="absolute object-center z-[-10] h-full w-full object-cover"
          src="/images/research-assistance-banner.webp"
          alt="research-assistance-banner"
          width={800}
          height={400}
          loading="lazy"
        />
        <h1>
          <svg
            viewBox="0 0 500 60"
            className="svgs"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="50%"
              dominant-baseline="middle"
              text-anchor="middle"
              className="outline-draw"
              font-size="60"
            >
              Research Assistance
            </text>
          </svg>
        </h1>
      </div>

      {research_assistance.map(
        ({ heading, description, image, plagiarism }, index) => (
          <div className={`about-main align ${index % 2 != 0 ? "change" : ""}`}>
            <div data-aos="fade-right" data-aos-anchor-placement="top-bottom">
              <h4>{heading && heading}</h4>
              <p>{description && description}</p>
              {plagiarism?.map(({ heading, list }, index) => (
                <>
                  <h4>{heading}</h4>
                  <ul className="list-disc">
                    {list.map(({ description }, index) => (
                      <li className="ms-5 text-justify font-[450] text-[15px]">
                        {description}
                      </li>
                    ))}
                  </ul>
                </>
              ))}
            </div>
            <img
              data-aos="fade-left"
              src={image}
              id="phd"
              alt={heading}
              width={450}
              height={450}
              loading="lazy"
            />
          </div>
        )
      )}
    </div>
  );
};

export default Assistance;
