import React, { useRef, useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import ReactFlagsSelect from "react-flags-select";
import axios from "axios";
import { getName } from "country-list";
import inst from "../assets/Certificates/Standard-Ins.jpg";
import instElite from "../assets/Certificates/Elite-Ins.jpg";
import logo from "/logo.png";
import { useNavigate } from "react-router-dom";
import { toaster } from "evergreen-ui";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Seo } from "../components/seo";

const InstitutionalMembership = () => {
  const navigate = useNavigate();
  const InstitutionalRef = useRef();
  const [Number, setNumber] = useState();
  const [Country, setCountry] = useState();
  const [countryCode, setCountryCode] = useState("");
  const [Amount, setAmount] = useState();
  const [Type, setType] = useState(false);
  const [futureDate, setFutureDate] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);
  const [generatePDF, setGeneratePDF] = useState(false);
  const [generatePDFElite, setGeneratePDFElite] = useState(false);
  const [Collage, setCollage] = useState();
  const [CheckAdmin, setCheckAdmin] = useState(null);
  const [Loading, setLoading] = useState(false);

  const handleCountrySelect = (value) => {
    const checkedInput = InstitutionalRef.current.querySelector(
      "input[name='formtype']:checked"
    );
    const Type = checkedInput ? checkedInput.value : "";
    console.log(Type);
    setCountryCode(value);
    const fullCountryName = getName(value);
    setCountry(fullCountryName);

    const isIndia = fullCountryName === "India";
    const eliteAmount = isIndia ? 121539.79 : 2118.94;
    const standardAmount = isIndia ? 60768.78 : 1058.94;

    setAmount(
      Type === "Elite" ? eliteAmount.toFixed(2) : standardAmount.toFixed(2)
    );
  };

  useEffect(() => {
    const Check = localStorage.getItem("CONFWORLD_AUTH");
    if (Check) {
      setCheckAdmin(true);
      console.log("success");
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
          pdf.text(`${Collage}`, 140, 348);
          pdf.text(`CIME${randomNumber}`, 250, 510);
          pdf.text(`${Country}`, 140, 540);
          pdf.text(`${futureDate}`, 170, 572);
          pdf.save(`CIME${randomNumber}.pdf`);
        } catch (error) {
          console.error("Error generating PDF:", error);
        }
      }
    };

    if (generatePDFElite) {
      createPDF();
      setGeneratePDF(false);
      setNumber("");
      setCountry("");
      setCountryCode("");
      InstitutionalRef.current.reset();
      if (!CheckAdmin) {
        navigate("/Payment_Success");
      }
    }
  }, [generatePDFElite, instElite]);

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
          pdf.text(`${Collage}`, 95, 348);
          pdf.text(`CIMS${randomNumber}`, 250, 510);
          pdf.text(`${Country}`, 140, 540);
          pdf.text(`${futureDate}`, 170, 572);
          pdf.save(`CIMS${randomNumber}.pdf`);
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
      InstitutionalRef.current.reset();
      if (!CheckAdmin) {
        navigate("/Payment_Success");
      }
    }
  }, [generatePDF, inst]);

  function openRazorPay(id, order_id, order, valuee) {
    return new Promise((resolve) => {
      const instance = new Razorpay({
        key: import.meta.env.VITE_RAZORPAY_KEY,
        order_id: order_id,
        name: "Confworld Educational Research and Development Association",
        image: logo,
        handler: async (value) => {
          try {
            console.log("Request/Callback : ", value);
            const response = await fetch(
              `${import.meta.env.VITE_API_URL}/Api/Payment/Membership`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...value, id, order }),
              }
            );

            if (!response.ok) {
              throw new Error("Something went wrong with the server response");
            }
            const newData = await response.json();
            if (valuee === "Elite") {
              setGeneratePDFElite(true);
            } else {
              setGeneratePDF(true);
            }
          } catch (error) {
            console.log("handler error", error);
          }
          resolve();
        },
        // prefill: {
        // name: account.getFirstName(),
        // email: account.getEmail(),
        // },
        theme: {
          color: "#00C4AC",
        },
        modal: {
          ondismiss: async () => {
            try {
              const response = await fetch(
                `${import.meta.env.VITE_API_URL}/Api/Request/Membership/Cancel`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ order: order }),
                }
              );

              if (!response.ok) {
                throw new Error("Failed to update order status");
              }
              const data = await response.json();
              toaster.danger(data.message);
            } catch (error) {
              console.log("Cancel request error", error);
            }
            resolve();
          },
        },
      });
      instance.open();
    });
  }

  const HandleInstitution = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      SelectPlan: InstitutionalRef.current.querySelector(
        "input[name='formtype']:checked"
      ).value,
      firstName: InstitutionalRef.current["firstName"].value,
      lastName: InstitutionalRef.current["lastName"].value,
      email: InstitutionalRef.current["email"].value,
      mobile: Number,
      country: Country,
      qualification: InstitutionalRef.current["qualification"].value,
      university: InstitutionalRef.current["university"].value,
      department: InstitutionalRef.current["department"].value,
      Amount: Amount,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/Institutional-Membership-Form`,
        formData
      );
      if (!CheckAdmin && response) {
        await openRazorPay(
          response.data.id,
          response.data.order_id,
          response.data.Razor_Pay_Order
        );
      } else if (CheckAdmin && response) {
        if (Type === "Elite") {
          setGeneratePDFElite(true);
        } else {
          setGeneratePDF(true);
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response.data);
      toaster.danger(error.response.data.message);
    }
  };

  useEffect(() => {
    const number = Math.floor(100000000 + Math.random() * 900000000);
    const CertificateID = number;
    setRandomNumber(CertificateID);
  }, [HandleInstitution]);

  return (
    <>
      <div id="certificate-container">
        <Seo
          title="Institutional Membership | CERADA - Empower Academic Institutions & Universities"
          description="Join CERADA Institutional Membership to empower your college, university, or research institute. Access collaboration, visibility, and academic development opportunities."
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
            src={Type === "Elite" ? instElite : inst}
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
      <section className="Institutional-form-section">
        <img
          className="absolute object-center z-[-10] h-full w-full object-cover"
          src="/images/institutional-membership-form-background.svg"
          alt="institutional-membership-form-background"
          width={800}
          height={400}
          loading="lazy"
        />
        <div></div>
        <form
          ref={InstitutionalRef}
          onSubmit={HandleInstitution}
          className="register-container"
        >
          <h1>Institutional Membership</h1>
          <div className="register-row">
            <label htmlFor="firstName" className="register-label">
              Select Plan Type
            </label>
            <div className="formtype-options">
              <div className="formtype-option">
                <input
                  type="radio"
                  id="standard"
                  name="formtype"
                  value="Standard"
                  onChange={(e) => setType(e.target.value)}
                  required
                />
                <label htmlFor="standard">Standard</label>
              </div>

              <div className="formtype-option">
                <input
                  type="radio"
                  id="elite"
                  required
                  name="formtype"
                  onChange={(e) => setType(e.target.value)}
                  value="Elite"
                />
                <label htmlFor="elite">Elite</label>
              </div>
            </div>
          </div>
          <div className="register-row">
            <label htmlFor="firstName" className="register-label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="register-input"
              required
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
              College/University Name
            </label>
            <input
              type="text"
              required
              onChange={(e) => setCollage(e.target.value)}
              id="university"
              className="register-input"
            />
          </div>

          <div className="register-row">
            <label htmlFor="department" className="register-label">
              Department
            </label>
            <input
              type="text"
              id="department"
              required
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

export default InstitutionalMembership;
