import React, { useRef, useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import ReactFlagsSelect from "react-flags-select";
import axios from "axios";
import { getName } from "country-list";
import corporate from "../assets/certificates/Corporate.jpg";
import { toaster } from "evergreen-ui";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Seo } from "../components/seo";

const CorporateMembership = () => {
  const CorporateMembershipRef = useRef();
  const [Number, setNumber] = useState();
  const [Country, setCountry] = useState();
  const [countryCode, setCountryCode] = useState("");
  // const [Amount, setAmount] = useState();
  const [futureDate, setFutureDate] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);
  const [generatePDF, setGeneratePDF] = useState(false);
  const [Company, setCompany] = useState();
  const [CheckAdmin, setCheckAdmin] = useState(null);
  const [Loading, setLoading] = useState(false);

  const handleCountrySelect = (value) => {
    setCountryCode(value);
    const fullCountryName = getName(value);
    setCountry(fullCountryName);
    // if (fullCountryName == "India") {
    //   setAmount("600");
    // } else {
    //   setAmount("16");
    // }
  };

  useEffect(() => {
    const Check = localStorage.getItem("Login-Admin-Confworld");
    if (Check) {
      setCheckAdmin(true);
    } else {
      setCheckAdmin(false);
    }
  }, []);

  useEffect(() => {
    const now = new Date();

    const futureDateObj = new Date(now);
    futureDateObj.setFullYear(now.getFullYear() + 1);

    const futureFormattedDate = `${futureDateObj.getFullYear()}-${String(
      futureDateObj.getMonth() + 1
    ).padStart(2, "0")}-${String(futureDateObj.getDate()).padStart(2, "0")}`;

    setFutureDate(futureFormattedDate);
  }, []);

  const generateRandomNumber = () => {
    const number = Math.floor(100000000 + Math.random() * 900000000);
    const CertificateID = number;
    setRandomNumber(CertificateID);
  };

  useEffect(() => {
    const createPDF = async () => {
      const input = document.getElementById("certificate-container");

      if (input) {
        try {
          const canvas = await html2canvas(input, { scale: 3 });
          const imgData = canvas.toDataURL("image/jpeg");

          const pdf = new jsPDF("portrait", "pt", "letter");

          pdf.addImage(
            imgData,
            "JPEG",
            0,
            0,
            pdf.internal.pageSize.getWidth(),
            pdf.internal.pageSize.getHeight()
          );

          pdf.setFont("Helvetica", "bold");
          pdf.setFontSize(16);
          pdf.text(`${Company}`, 105, 348);
          pdf.text(`CCM${randomNumber}`, 250, 510);
          pdf.text(`${Country}`, 140, 540);
          pdf.text(`${futureDate}`, 170, 572);
          pdf.save(`CCM${randomNumber}.pdf`);
        } catch (error) {
          console.error("Error generating PDF:", error);
        }
      }
    };

    if (generatePDF) {
      createPDF();
      setGeneratePDF(false);
      setNumber("");
      setCountry("");
      setCountryCode("");
      CorporateMembershipRef.current.reset();
    }
  }, [generatePDF]);

  const HandleCorporateMembership = async (e) => {
    e.preventDefault();
    setLoading(true);
    generateRandomNumber();

    const formData = {
      firstName: CorporateMembershipRef.current["firstName"].value,
      lastName: CorporateMembershipRef.current["lastName"].value,
      email: CorporateMembershipRef.current["email"].value,
      mobile: Number,
      country: Country,
      qualification: CorporateMembershipRef.current["qualification"].value,
      Company: CorporateMembershipRef.current["Company"].value,
      department: CorporateMembershipRef.current["department"].value,
      // Amount: Amount,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/Corporate-Membership-Form`,
        formData
      );
      if (response && !CheckAdmin) {
        setNumber("");
        setCountry("");
        CorporateMembershipRef.current.reset();
      }
      if (CheckAdmin) {
        setGeneratePDF(true);
      }
      setLoading(false);
      toaster.success(response.data.message);
    } catch (error) {
      setLoading(false);
      toaster.warning(error.response.data.message);
    }
  };

  return (
    <>
      <div id="certificate-container">
        <Seo
          title="Corporate Membership | CERADA - Collaborate with Academic & Research Networks"
          description="Join CERADA Corporate Membership to boost brand visibility, collaborate with academic and research professionals, and access exclusive partnership benefits."
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            position: "relative",
          }}
        >
          <img
            src={corporate}
            alt="Student Certificate"
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
      <section className="Corporate-form-section">
        <img
          className="absolute object-center z-[-10] h-full w-full object-cover"
          src="/images/corporate-member-ship-banner.svg"
          alt="corporate-member-ship-banner"
          width={800}
          height={400}
          loading="lazy"
        />
        <div></div>
        <form
          ref={CorporateMembershipRef}
          onSubmit={HandleCorporateMembership}
          className="register-container"
        >
          <h1>Corporate Membership</h1>
          <div className="register-row">
            <label htmlFor="firstName" className="register-label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              required
              className="register-input"
            />
          </div>

          <div className="register-row">
            <label htmlFor="lastName" className="register-label">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="register-input"
              required
            />
          </div>

          <div className="register-row">
            <label htmlFor="email" className="register-label">
              Email
            </label>
            <input
              type="email"
              required
              id="email"
              className="register-input"
            />
          </div>

          <div className="register-row">
            <label htmlFor="mobile" className="register-label">
              Mobile
            </label>
            <PhoneInput
              style={{ width: "calc(100% - 20px)" }}
              defaultCountry="IN"
              id="number"
              onChange={(value) => setNumber(value)}
              value={Number}
            />
          </div>

          <div className="register-row">
            <label htmlFor="country" className="register-label">
              Country
            </label>
            <ReactFlagsSelect
              selected={countryCode}
              id="flag"
              onSelect={handleCountrySelect}
              className="member-country"
            />
          </div>

          <div className="register-row">
            <label htmlFor="qualification" className="register-label">
              Educational Qualification
            </label>
            <input
              type="text"
              required
              id="qualification"
              className="register-input"
            />
          </div>

          <div className="register-row">
            <label htmlFor="university" className="register-label">
              Company/Organization Name
            </label>
            <input
              type="text"
              onChange={(e) => setCompany(e.target.value)}
              required
              id="Company"
              className="register-input"
            />
          </div>

          <div className="register-row">
            <label htmlFor="department" className="register-label">
              Department
            </label>
            <input
              type="text"
              required
              id="department"
              className="register-input"
            />
          </div>

          <button type="submit" disabled={Loading} className="register-btn">
            {Loading ? "Loading..." : "Register"}
          </button>
        </form>
      </section>
    </>
  );
};

export default CorporateMembership;
