import React from "react";
import terms_conditions from "./termsAndConditions";
import { Seo } from "../components/seo";

const TermsCondition = () => {
  return (
    <div className="terms-container" data-aos="fade-up">
      <Seo
        title="Terms and Conditions | CERADA - Payment, Privacy & Refund Policies"
        description="Read CERADA's Terms and Conditions covering payment methods, privacy policy, refund and cancellation rules, and security measures for a secure user experience."
      />
      {terms_conditions.map(
        ({ image, main_title, subtitles, description }, main_index) => (
          <div key={main_index}>
            <img
              src={image}
              alt={main_title}
              height={660}
              width={660}
              loading="lazy"
            />
            <h2>{main_title}</h2>
            {description && <p>{description}</p>}
            {subtitles?.map(({ title, list }, sub_index) => (
              <div>
                <h2>{title}</h2>
                <ul>
                  {list?.map(({ text }, index) => (
                    <li>{text}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default TermsCondition;
