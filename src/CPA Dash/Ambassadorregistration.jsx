import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import ReactFlagsSelect from "react-flags-select";
import axios from "axios";
import { toaster } from "evergreen-ui";
import { useNavigate } from "react-router-dom";

const PHILIPPINES_REGIONS = [
  "NCR - National Capital Region",
  "CAR - Cordillera Administrative Region",
  "Region I - Ilocos Region",
  "Region II - Cagayan Valley",
  "Region III - Central Luzon",
  "Region IV-A - CALABARZON",
  "Region IV-B - MIMAROPA",
  "Region V - Bicol Region",
  "Region VI - Western Visayas",
  "Region VII - Central Visayas",
  "Region VIII - Eastern Visayas",
  "Region IX - Zamboanga Peninsula",
  "Region X - Northern Mindanao",
  "Region XI - Davao Region",
  "Region XII - SOCCSKSARGEN",
  "Region XIII - Caraga",
  "BARMM - Bangsamoro Autonomous Region in Muslim Mindanao",
];

const INDONESIA_REGIONS = [
  "Sumatra",
  "Java",
  "Kalimantan",
  "Nusa Tenggara (Lesser Sunda Islands)",
  "Sulawesi",
  "Maluku Islands",
  "Papua (Western New Guinea)",
];

const TITLE_OPTIONS = ["Mr", "Mrs", "Ms", "Dr", "Prof", "Rev", "Hon"];

const AmbassadorRegistration = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const isPhilippines = country === "PH";
  const isIndonesia = country === "ID";
  const showRegionField = isPhilippines || isIndonesia;

  // Get the appropriate regions based on country
  const getRegions = () => {
    if (isPhilippines) return PHILIPPINES_REGIONS;
    if (isIndonesia) return INDONESIA_REGIONS;
    return [];
  };

  // Get country-specific helper text
  const getRegionHelperText = () => {
    if (isPhilippines) {
      return "ℹ️ Select the region only if you belong to Philippines";
    }
    if (isIndonesia) {
      return "ℹ️ Select the province only if you belong to Indonesia";
    }
    return "";
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toaster.danger("File size must be less than 5MB");
        return;
      }
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toaster.danger("Please upload an image file");
        return;
      }
      
      setProfilePhoto(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!profilePhoto) {
      toaster.danger("Please upload a profile photo");
      return;
    }

    if (!title) {
      toaster.danger("Please select a title");
      return;
    }
    
    // Validate region for Philippines and Indonesia users
    if (showRegionField && !region) {
      const countryName = isPhilippines ? "Philippines" : "Indonesia";
      toaster.danger(`Please select your region/province for ${countryName}`);
      return;
    }
    
    setLoading(true);
    
    try {
      const formData = new FormData(formRef.current);
      formData.append("title", title);
      formData.append("phoneNumber", phoneNumber);
      formData.append("country", country);
      formData.append("region", region || ""); // Always append region
      formData.append("profilePhoto", profilePhoto);

      console.log("Form data being sent:");
      console.log("- Title:", title);
      console.log("- Phone:", phoneNumber);
      console.log("- Country:", country);
      console.log("- Region:", region);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/ambassador/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toaster.success(response.data.message);
      formRef.current.reset();
      setTitle("");
      setPhoneNumber("");
      setCountry("");
      setRegion("");
      setProfilePhoto(null);
      setPhotoPreview("");
      
      // Navigate to login after 2 seconds
      setTimeout(() => {
        navigate("/ambassador/login");
      }, 2000);
    } catch (error) {
      console.error("Registration error:", error);
      toaster.danger(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ambassador-registration-container">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="enquiry-form-container"
        data-aos="zoom-in-up"
      >
        <div className="contact-head">
          <h2>Professional Ambassador Registration</h2>
          <p style={{ fontSize: "14px", color: "#666", marginTop: "10px" }}>
            Join our ambassador program and earn credit points
          </p>
        </div>

        {/* Profile Photo Upload */}
        <div className="enquiry-form-row">
          <div className="enquiry-form-field" style={{ width: "100%" }}>
            <label htmlFor="profilePhoto">Profile Photo (Passport Size)</label>
            <input
              type="file"
              id="profilePhoto"
              accept="image/*"
              onChange={handlePhotoChange}
              className="enquiry-form-input"
              required
            />
            {photoPreview && (
              <div style={{ marginTop: "10px", textAlign: "center" }}>
                <img
                  src={photoPreview}
                  alt="Preview"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    border: "2px solid #ddd",
                  }}
                />
              </div>
            )}
          </div>
        </div>

        <div className="enquiry-form-row">
          <div className="enquiry-form-field">
            <label htmlFor="title">Title *</label>
            <select
  id="title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  required
  className="enquiry-form-input"
  style={{
    padding: "10px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #00CEC8",
    color: "#000",          // 👈 THIS fixes it
    backgroundColor: "#fff" // 👈 ensure contrast
  }}
>
              <option value="" className="text-black">Select title</option>
              {TITLE_OPTIONS.map((titleOption) => (
                <option key={titleOption} value={titleOption} className="text-black">
                  {titleOption}
                </option>
              ))}
            </select>
          </div>
          <div className="enquiry-form-field">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="enquiry-form-input"
              required
            />
          </div>
        </div>

        <div className="enquiry-form-row">
          <div className="enquiry-form-field">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="enquiry-form-input"
            />
          </div>
          <div className="enquiry-form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              minLength="6"
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
              value={phoneNumber}
              onChange={(value) => setPhoneNumber(value)}
              required
            />
          </div>
          <div className="enquiry-form-field">
            <label>Country</label>
            <ReactFlagsSelect
              selected={country}
              onSelect={(code) => {
                setCountry(code);
                // Reset region when country changes
                setRegion("");
              }}
              className="flag-select"
              searchable
              required
            />
          </div>
        </div>

        <div className="enquiry-form-row">
          {/* Region Dropdown - Shown for Philippines and Indonesia */}
          {showRegionField && (
            <div className="enquiry-form-field">
              <label htmlFor="region">
                {isPhilippines ? "Region" : "Province"} *
              </label>
              <select
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="enquiry-form-input"
                required
                style={{
                  padding: "10px",
                  fontSize: "14px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
              >
                <option value="">
                  {isPhilippines ? "Select your region" : "Select your province"}
                </option>
                {getRegions().map((reg) => (
                  <option key={reg} value={reg}>
                    {reg}
                  </option>
                ))}
              </select>
              <p style={{ 
                fontSize: "12px", 
                color: "#0066cc", 
                marginTop: "5px",
                fontStyle: "italic" 
              }}>
                {getRegionHelperText()}
              </p>
            </div>
          )}
        </div>

        <div className="enquiry-form-button-container">
          <button
            type="submit"
            className="enquiry-form-submit-button"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register as Ambassador"}
          </button>
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Already have an account?{" "}
            <a
              href="/ambassador/login"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Login here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default AmbassadorRegistration;