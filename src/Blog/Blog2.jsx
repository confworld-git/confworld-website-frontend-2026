import React from "react";
import "./Blog.css";
import Blogright from "./Blogright";
import { Seo } from "../components/seo";

const Blog2 = () => {
  const scopusInstructions = [
    {
      title: "1. Access the Scopus Website:",
      linkText:
        "https://www.scopus.com/sources.uri?zone=TopNavBar&origin=searchbasic",
      description:
        "Scopus may require an institutional subscription, so if you’re affiliated with a university or research institution, you might access it through their library portal.",
    },
    {
      title: "2. Use the Scopus Title List:",
      description:
        "Elsevier provides a downloadable list of all Scopus-indexed journals, updated regularly. Visit the Scopus content coverage guide and download the latest “Scopus Source List” (typically available as an Excel or CSV file). This list contains details like ISSN, subject area, and publisher for each indexed journal.",
    },
    {
      title: "3. Use the Scopus Journal Search Tool:",
      description:
        "On the Scopus website, use the “Sources” section to search for journals by name, ISSN, publisher, or subject area. This tool will confirm if the journal is currently indexed in Scopus and provide relevant details about its indexing status.",
    },
    {
      title: "4. Check SCImago Journal Rank (SJR):",
      linkText: "https://www.scimagojr.com",
      description:
        "SCImago uses Scopus data to rank journals, and it’s freely accessible. Visit SCImago and enter the journal name or ISSN to see if it’s Scopus-indexed. This site provides details like journal rank, quartile, and indexing history.",
    },
    {
      title: "5. Cross-Check on Journal Websites:",
      description:
        "Many journals will state if they are Scopus-indexed directly on their official websites. Look for sections like “Indexing” or “Abstracting and Indexing” for confirmation, but always cross-verify on Scopus or SCImago for accuracy. These methods ensure you're looking at up-to-date information for Scopus indexing in the current year.",
    },
  ];
  return (
    <div className="blog">
      <Seo
        title="How to Check Scopus Indexed Journals Online | Step-by-Step Guide – CERADA"
        description="Learn how to verify if a journal is indexed in Scopus with easy steps including using the official Scopus website, downloadable title lists, SCImago, and journal websites."
      />
      <div className="blog-left">
        <img
          src="/images/scopus1.webp"
          alt=" scopus-indexed-journals"
          width={450}
          height={450}
          loading="lazy"
        />
        <div className="blog-title-one">
          <h1>How to check scopus indexed journals online?</h1>
          <p>
            To check if a journal is indexed in Scopus, you can follow these
            steps:
          </p>

          <h3>1. Access the Scopus Website:</h3>
          <ul>
            <li style={{ textAlign: "left" }}>
              Go to the official Scopus website:{" "}
              <a
                style={{ fontWeight: "550" }}
                href="https://www.scopus.com/sources.uri?zone=TopNavBar&origin=searchbasic"
                target="_blank"
              >
                https://www.scopus.com/sources.uri?zone=TopNavBar&origin=searchbasic
              </a>
            </li>
            <li>
              Scopus may require an institutional subscription, so if you’re
              affiliated with a university or research institution, you might
              access it through their library portal.
            </li>
          </ul>
          <h3>2. Use the Scopus Title List:</h3>
          <ul>
            <li>
              Elsevier provides a downloadable list of all Scopus-indexed
              journals, updated regularly.
            </li>
            <li>
              Visit the Scopus content coverage guide and download the latest
              “Scopus Source List” (typically available as an Excel or CSV
              file).
            </li>
            <li>
              This list contains details like ISSN, subject area, and publisher
              for each indexed journal.
            </li>
          </ul>
          <h3>3. Use the Scopus Journal Search Tool:</h3>
          <ul>
            <li>
              On the Scopus website, use the “Sources” section to search for
              journals by name, ISSN, publisher, or subject area.{" "}
              <a href="https://www.scopus.com/sources.uri?zone=TopNavBar&origin=searchbasic">
                journals
              </a>
            </li>
            <li>
              This tool will confirm if the journal is currently indexed in
              Scopus and provide relevant details about its indexing status.
            </li>
          </ul>
          <h3>4. Check SCImago Journal Rank (SJR):</h3>
          <ul>
            <li>
              SCImago uses Scopus data to rank journals, and it’s freely
              accessible. Visit{" "}
              <a href="https://www.scimagojr.com">https://www.scimagojr.com</a>{" "}
              and enter the journal name or ISSN to see if it’s Scopus-indexed.
            </li>
            <li>
              This site provides details like journal rank, quartile, and
              indexing history.
            </li>
          </ul>
          <h3>5. Cross-Check on Journal Websites:</h3>
          <ul>
            <li>
              Many journals will state if they are Scopus-indexed directly on
              their official websites. Look for sections like “Indexing” or
              “Abstracting and Indexing” for confirmation, but always
              cross-verify on Scopus or SCImago for accuracy.
            </li>
          </ul>
          <p>
            These methods ensure you're looking at up-to-date information for
            Scopus indexing in the current year.
          </p>
        </div>
      </div>
      <Blogright />
    </div>
  );
};

export default Blog2;
