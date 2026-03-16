import React from "react";
import "./Blog.css";
import Blogright from "./Blogright";
import { Seo } from "../components/seo";

const Blog5 = () => {
  return (
    <div className="blog">
      <Seo
        title="How to Check Web of Science (SCIE, ESCI, SSCI) Indexed Journals Online | CERADA"
        description="Learn easy steps to verify if a journal is indexed in Web of Science SCIE, ESCI, or SSCI using Clarivate’s Master Journal List, JCR, and publisher websites."
      />
      <div className="blog-left">
        <img
          src="/images/scie1.webp"
          alt="scie-esci-ssci"
          width={450}
          height={450}
          loading="lazy"
        />
        <div className="blog-title-one">
          <h1>
            How to check Web of Science (SCIE, ESCI, SSCI) indexed journals
            online?
          </h1>
          <p>
            To check if a journal is indexed in Clarivate's SCIE, ESCI or SSCI,
            you need to access Clarivate's Web of Science database. Here's how
            you can do it:
          </p>
          <h3>1. Access Web of Science</h3>
          <ul>
            <li style={{ marginBottom: "10px" }}>
              <b style={{ color: " #ef750b" }}>Option 1: Institution Access</b>
              <br /> Most universities and research institutions provide access
              to Web of Science.
              <br /> Log in through your institution’s library portal.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <b style={{ color: " #ef750b" }}>
                Option 2: Individual Subscription
              </b>{" "}
              <br />
              Subscribe directly to Clarivate’s Web of Science service if you
              don’t have institutional access.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <b style={{ color: " #ef750b" }}>
                Option 3: Free Journal Citation Reports (JCR) Access
              </b>{" "}
              <br />
              Clarivate offers free tools like Master Journal List (MJL) and
              limited access to JCR for journal searches.
            </li>
          </ul>
          <h3>2. Use the Web of Science </h3>
          <p>
            Visit:{" "}
            <a href="https://mjl.clarivate.com/home" target="_blank">
              https://mjl.clarivate.com/home
            </a>
          </p>
          <ul>
            <li>
              Search by Journal Title or ISSN: Enter the journal's name or ISSN
              in the search bar.
            </li>
            <li>
              Use advanced filters to narrow down results by index (SCIE, ESCI,
              SSCI, etc.).
            </li>
            <li>
              Check Indexing: The journal's profile will indicate which index
              (SCIE, SSCI, or ESCI) it is included in.
            </li>
          </ul>
          <h3>3. Search Directly on Web of Science</h3>
          <ul>
            <li>Log in to the Web of Science portal.</li>
            <li>Navigate to the "Search" page.</li>
            <li>
              Enter the journal’s name, ISSN or keywords in the search bar.
            </li>
            <li>
              <b>Filter Results:</b> <br />
              Use filters to check its indexing status in SCIE, SSCI or ESCI.
            </li>
          </ul>
          <h3>4. Use Journal Citation Reports (JCR)</h3>
          <ul>
            <li>Visit: Journal Citation Reports.</li>
            <li>Search for the journal name or ISSN.</li>
            <li>Search for the journal name or ISSN.</li>
            <li>
              View the journal profile to check its indexing and metrics, such
              as impact factor.
            </li>
          </ul>
          <h3>5. Verify on the Publisher's Website</h3>
          <p>
            Many publishers specify the indexing status of their journals. Visit
            the journal's official webpage and look for:
          </p>
          <ul>
            <li>"Indexing and Abstracting" section.</li>
            <li>
              Mention of Web of Science categories like SCIE, SSCI or ESCI.
            </li>
          </ul>
          <h3>Tips for Accuracy</h3>
          <p style={{ margin: "10px 0px 0px 0px" }}>
            Cross-check the journal's ISSN or title, as similar-sounding
            journals may lead to confusion.
          </p>
          <p style={{ margin: "5px 0px" }}>
            Be cautious of fraudulent claims. Always confirm on the Web of
            Science Master Journal List.
          </p>
        </div>
      </div>
      <Blogright />
    </div>
  );
};

export default Blog5;
