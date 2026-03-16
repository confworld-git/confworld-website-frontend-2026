import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import ReactFlagsSelect from "react-flags-select";
import axios from "axios";
import { toaster } from "evergreen-ui";

const EnquiryForm = () => {
  const EnquiryFormRef = useRef();
  const [value, setValue] = useState();
  const [selected, setSelected] = useState("");

  const HandleEnquiryForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(EnquiryFormRef.current);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phoneNumber: value,
      country: selected,
      serviceRequired: formData.get("service"),
      others: formData.get("others"),
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/Enquiry-Form`,
        data
      );
      console.log("Response:", response.data);
      setValue("");
      setSelected("");
      EnquiryFormRef.current.reset();
      toaster.success(response.data.message);
    } catch (error) {
      console.error("Error submitting form:", error);
      toaster.danger("Something Wrong");
    }
  };

  return (
    <form
      ref={EnquiryFormRef}
      onSubmit={HandleEnquiryForm}
      className="enquiry-form-container"
      data-aos="zoom-in-up"
    >
      <div className="contact-head">
        <h2>Enquiry Form</h2>
      </div>
      <div className="enquiry-form-row">
        <div className="enquiry-form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="enquiry-form-input"
            required
          />
        </div>
        <div className="enquiry-form-field">
          <label htmlFor="email">Email Us</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="enquiry-form-input"
          />
        </div>
      </div>
      <div className="enquiry-form-row">
        <div className="enquiry-form-field">
          <label>Phone Number</label>
          <PhoneInput
            className="phone-number"
            defaultCountry="US"
            value={value}
            onChange={(value) => setValue(value)}
            required
          />
        </div>
        <div className="enquiry-form-field">
          <label>Country</label>
          <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => setSelected(code)}
            className="flag-select"
            required
          />
        </div>
      </div>
      <div className="enquiry-form-row">
        <div className="enquiry-form-field">
          <label htmlFor="service">Service Required</label>
          <select
            id="service"
            name="service"
            required
            className="enquiry-form-input"
          >
            <option value="Conference">Conference</option>
            <option value="Membership">Membership</option>
            <option value="Journal_publication">Journal Publication</option>
            <option value="Research_paper_writing">
              Research Paper Writing
            </option>
            <option value="Synopsis_writing_editing">
              Synopsis Writing/Editing
            </option>
            <option value="Thesis_writing_editing">
              Thesis Writing/Editing
            </option>
            <option value="Proofreading">Proofreading</option>
            <option value="Plagiarism_free_writing">
              Plagiarism-Free Writing
            </option>
            <option value="Implementation">Implementation</option>
          </select>
        </div>
        <div className="enquiry-form-field">
          <label htmlFor="others">Others</label>
          <input
            type="others"
            name="others"
            id="others"
            required
            className="enquiry-form-input"
          />
        </div>
      </div>
      <div className="enquiry-form-button-container">
        <button type="submit" className="enquiry-form-submit-button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default EnquiryForm;
