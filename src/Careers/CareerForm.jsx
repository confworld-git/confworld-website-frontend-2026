import axios from "axios";
import React, { useRef } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { toaster } from "evergreen-ui";

const CareerForm = ({ handlePopup }) => {
  const CareerFormRef = useRef();

  const HandleCareerForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(CareerFormRef.current);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/Career-Form`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      CareerFormRef.current.reset();
      toaster.success(response.data.message);
    } catch (error) {
      console.error("Error submitting form:", error);
      toaster.danger("Something Wrong");
    } finally {
      CareerFormRef.current.reset();
      handlePopup(false);
    }
  };

  return (
    <section className="career-home-form">
      <form
        className="career-form"
        ref={CareerFormRef}
        onSubmit={HandleCareerForm}
      >
        <i onClick={() => handlePopup(false)}>
          <HiMiniXMark />
        </i>
        <h1>Apply Job</h1>
        <div className="name-field">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="name-input"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="number-field">
          <label htmlFor="number">Contact Number</label>
          <input
            type="text"
            id="number"
            name="number"
            className="number-input"
            required
            placeholder="Enter your number"
          />
        </div>

        <div className="email-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="email-input"
            placeholder="Enter your email"
          />
        </div>

        <div className="cv-field">
          <label htmlFor="cv">Upload Your CV Here</label>
          <input
            type="file"
            name="file"
            id="cv"
            className="cv-input"
            accept=".pdf"
            required
          />
        </div>

        <div className="message-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="message-textarea"
            placeholder="Write your message"
            required
          ></textarea>
        </div>

        <button className="submit-button">Submit</button>
      </form>
    </section>
  );
};

export default CareerForm;
