import React from "react";
import "./Contact.css";
import { TiArrowForwardOutline } from "react-icons/ti";
import EnquiryForm from "./EnquiryForm";
import { Seo } from "../components/seo";

const Contact = () => {
  return (
    <>
      <div className="Contact" data-aos="fade-up">
        <Seo
          title="Contact Us | CERADA - Academic Support, Conferences & Membership Enquiry"
          description="Get in touch with CERADA for academic research support, international conferences, and membership queries. Call us or email for assistance today."
        />
        <section className="contact-us">
          <h2>Contact Us</h2>
          <p>
            <span>
              <TiArrowForwardOutline />
            </span>
            Ready to take your research to the next level? Contact us today to
            learn more about our services and how we can support your academic
            endeavors.
          </p>
          <p>
            <span>
              <TiArrowForwardOutline />
            </span>
            Stay connected with us on social media for the latest updates,
            conference announcements and research insights.
          </p>
          <p style={{ marginBottom: "30px" }}>
            <span>
              <TiArrowForwardOutline />
            </span>
            At Confworld Educational Research and Development Association
            (CERADA), we are dedicated to assist students, professionals and
            research scholars excel in their academic pursuits. "Join us in our
            mission to advance research excellence"
          </p>
          <section className="contact-details">
            <div>
              <div>
                <img
                  src="/images/call.webp"
                  alt="call-icon"
                  width={35}
                  height={50}
                  loading="lazy"
                />
                <p>Call Us</p>
              </div>
              <p>
                Helpline Number : <a>(+91)8610656424</a>
              </p>
            </div>
            <div>
              <div>
                <img
                  src="/images/mail.webp"
                  alt="email-icon"
                  width={35}
                  height={50}
                  loading="lazy"
                />
                <p>Email Us</p>
              </div>
              <p>
                For Support & Queries : <a>info@confworld.org</a>
              </p>
            </div>
          </section>
        </section>
        <section className="contact-details">
          <div>
            <div>
              <img
                src="/images/google-map-logo.webp"
                alt="google-map-logo"
                width={35}
                height={50}
                loading="lazy"
              />
              <p>Google Map</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.487995454426!2d80.22352681825146!3d13.11691798517616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264519a1bab9b%3A0x114ad374857f4b72!2s147%2C%20SRP%20Colony%202nd%20St%2C%20SRP%20Colony%2C%20Perambur%2C%20Chennai%2C%20Tamil%20Nadu%20600082%2C%20India!5e0!3m2!1sen!2sus!4v1749117282250!5m2!1sen!2sus"
              className="google-map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
      <div className="form-contact">
        {/* <img
          src="/images/contact-us-form-background.webp"
          alt="contact-us-form-background"
          width={850}
          height={850}
          loading="lazy"
        /> */}
        <EnquiryForm />
      </div>
    </>
  );
};

export default Contact;
