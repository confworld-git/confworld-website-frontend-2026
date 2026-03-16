import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import ReactFlagsSelect from "react-flags-select";
import axios from "axios";
import { toaster } from "evergreen-ui";
import { Seo } from "../components/seo";

const StudentMembershipForm = () => {
  const MembershipRef = useRef();
  const [MobileValue, setMobileValue] = useState();
  const [CountryValue, setCountryValue] = useState();
  const [Select, setSelect] = useState();

  const HandleMembershipEnquire = async (e) => {
    e.preventDefault();
    const formData = new FormData(MembershipRef.current);

    const data = {
      membership: formData.get("Membership"),
      firstName: formData.get("first name"),
      lastName: formData.get("last name"),
      email: formData.get("email"),
      mobile: MobileValue,
      country: CountryValue,
      qualification: formData.get("qualification"),
      college: formData.get("College/University"),
      company: formData.get("Company/Organization"),
      department: formData.get("Department"),
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/Membership-Form`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      setMobileValue("");
      setCountryValue("");
      MembershipRef.current.reset();
      toaster.success(response.data.message);
    } catch (error) {
      console.error("Error submitting form:", error);
      toaster.danger("Something Wrong");
    }
  };

  return (
    <div className="s-m-f">
      <Seo
        title="Membership Enquiry Form | CERADA - Join Student & Professional Membership"
        description="Submit your membership enquiry to CERADA for Student or Professional Membership. Provide details like name, email, country, qualification, and institution to join our global research community."
      />
      <form
        ref={MembershipRef}
        onSubmit={HandleMembershipEnquire}
        className="student-membership-container"
      >
        <h2>Membership Enquiry Form</h2>
        <div className="form-groups">
          <label htmlFor="qualification">Select Membership:</label>
          <select
            id="qualification"
            name="Membership"
            onChange={(e) => setSelect(e.target.value)}
            className="input-qualification"
            required
          >
            <option value="Student membership<">Student membership</option>
            <option value="Professional Membership">
              Professional Membership
            </option>
            <option value="Institutional Membership">
              Institutional Membership
            </option>
            <option value="Corporate Membership">Corporate Membership</option>
          </select>
        </div>
        <div className="form-groups">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="first name"
            id="firstName"
            className="input-firstname"
            required
          />
        </div>
        <div className="form-groups">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="last name"
            id="lastName"
            className="input-lastname"
            required
          />
        </div>
        <div className="form-groups">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            name="email"
            required
            id="email"
            className="input-email"
          />
        </div>
        <div className="form-groups">
          <label htmlFor="mobile">Mobile Number:</label>
          <PhoneInput
            defaultCountry="US"
            value={MobileValue}
            onChange={(value) => setMobileValue(value)}
            className="input-mobile"
            required
          />
        </div>
        <div className="form-groups">
          <label htmlFor="country">Country:</label>
          <ReactFlagsSelect
            selected={CountryValue}
            onSelect={(value) => setCountryValue(value)}
            className="input-flag"
            required
          />
        </div>
        <div className="form-groups">
          <label htmlFor="qualification">
            Educational Qualification (UG/PG):
          </label>
          <div className="input-qualification">
            <label>
              <input
                type="radio"
                required
                name="qualification"
                value="UG"
                id="ug"
              />
              UG
            </label>
            <label>
              <input
                type="radio"
                required
                name="qualification"
                value="PG"
                id="pg"
              />
              PG
            </label>
          </div>
        </div>
        {Select === "Corporate Membership" ? (
          <div className="form-groups">
            <label htmlFor="college">Company/Organization Name:</label>
            <input
              type="text"
              name="Company/Organization"
              id="college"
              className="input-college"
              required
            />
          </div>
        ) : (
          <div className="form-groups">
            <label htmlFor="college">College/University Name:</label>
            <input
              type="text"
              name="College/University"
              id="college"
              className="input-college"
              required
            />
          </div>
        )}
        <div className="form-groups">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            name="Department"
            id="department"
            className="input-department"
            required
          />
        </div>
        <button className="submit-button-btn">Submit</button>
      </form>
    </div>
  );
};

export default StudentMembershipForm;
