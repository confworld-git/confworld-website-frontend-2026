import React, { useRef, useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import ReactFlagsSelect, { Ye } from "react-flags-select";
import axios from "axios";
import { getName } from "country-list";
import logo from "/logo.png";
import Professional from "../assets/Certificates/Professional.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { toaster } from "evergreen-ui";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Seo } from "../components/seo";

const ProfessionalMembership = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ProfessionalMembershipRef = useRef();
  const [Number, setNumber] = useState();
  const [Country, setCountry] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const [generatePDF, setGeneratePDF] = useState(false);
  const [date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [SecondName, setSecondName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [Amount, setAmount] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [futureDate, setFutureDate] = useState("");
  const [CheckAdmin, setCheckAdmin] = useState(null);
  const [Loading, setLoading] = useState(false);

  const { Year, Currency, Professional_Amount } = location.state || {};

  const handleCountrySelect = (value) => {
    setCountryCode(value);
    const fullCountryName = getName(value);
    setCountry(fullCountryName);
    if (Currency === "INR" || fullCountryName === "India") {
      const baseAmount = Professional_Amount || 999;
      const gst = baseAmount * 0.18;
      const gastbase = parseFloat(baseAmount) + parseFloat(gst);
      const bankConvenienceFee = gastbase * 0.03;
      const totalAmount = gastbase + bankConvenienceFee;
      setAmount(totalAmount.toFixed(2));
    } else {
      const baseAmount = Professional_Amount || 20;
      const bankConvenienceFee = baseAmount * 0.060;
      const totalAmount = parseFloat(baseAmount) + parseFloat(bankConvenienceFee);
      setAmount(totalAmount.toFixed(2));
    }
  };

  useEffect(() => {
    const Check = localStorage.getItem("CONFWORLD_AUTH");
    if (Check) {
      setCheckAdmin(true);
    } else {
      setCheckAdmin(false);
    }
  }, []);

  useEffect(() => {
    const now = new Date();

    const formattedDate = `${now.getFullYear()}-${String(
      now.getMonth() + 1
    ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    const formattedTime = `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

    setDate(formattedDate);
    setTime(formattedTime);

    if (Year === 1000) {
      setFutureDate("Life Time");
    } else {
      const yearsToAdd = Year || 1;
      const futureDateObj = new Date(now);
      futureDateObj.setFullYear(now.getFullYear() + yearsToAdd);

      const futureFormattedDate = `${futureDateObj.getFullYear()}-${String(
        futureDateObj.getMonth() + 1
      ).padStart(2, "0")}-${String(futureDateObj.getDate()).padStart(2, "0")}`;
      const futureFormattedTime = `${String(futureDateObj.getHours()).padStart(
        2,
        "0"
      )}:${String(futureDateObj.getMinutes()).padStart(2, "0")}:${String(
        futureDateObj.getSeconds()
      ).padStart(2, "0")}`;

      setFutureDate(futureFormattedDate);
    }
  }, []);

  useEffect(() => {
    const number = Math.floor(100000000 + Math.random() * 900000000);
    const CertificateID = "CPM" + number;
    setRandomNumber(CertificateID);
  }, []);

  useEffect(() => {
    const createPDF = async () => {
      const input = document.getElementById("certificate-container");

      if (input) {
        try {
          const canvas = await html2canvas(input, { scale: 3 });
          const imgData = canvas.toDataURL("image/jpeg");

          const pdf = new jsPDF("landscape", "pt", "letter");

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
          pdf.text(`${FirstName} ${SecondName}`, 350, 340);
          pdf.text(`${date} To ${futureDate}`, 476, 410);
          pdf.text(`${randomNumber}`, 190, 485);
          pdf.text(`${Country}`, 110, 518);
          pdf.text(`${date}`, 150, 548);
          pdf.save(`${randomNumber}.pdf`);
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
      ProfessionalMembershipRef.current.reset();
      if (!CheckAdmin) {
        navigate("/Payment_Success");
      }
    }
  }, [
    generatePDF,
    FirstName,
    SecondName,
    date,
    futureDate,
    randomNumber,
    Country,
  ]);

  function openRazorPay(id, order_id, order) {
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
            setGeneratePDF(true);
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

  const HandleProfessional = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (isSubmitting) return;
    setIsSubmitting(true);

    const formData = {
      firstName: ProfessionalMembershipRef.current["firstName"].value,
      lastName: ProfessionalMembershipRef.current["lastName"].value,
      email: ProfessionalMembershipRef.current["email"].value,
      mobile: Number,
      country: Country,
      qualification: ProfessionalMembershipRef.current["qualification"].value,
      designation: ProfessionalMembershipRef.current["designation"].value,
      university: ProfessionalMembershipRef.current["university"].value,
      department: ProfessionalMembershipRef.current["department"].value,
      certificateId: randomNumber,
      Amount: Amount,
      Currency: Currency,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/professional-Membership-Form`,
        formData
      );

      if (!CheckAdmin && response) {
        
        await openRazorPay(
          response.data.id,
          response.data.order_id,
          response.data.Razor_Pay_Order
        );
      } else if (CheckAdmin && response) {
        setGeneratePDF(true);
      }
      setLoading(false);
      setIsSubmitting(false);
    } catch (error) {
      console.log(error.response.data.message);
      toaster.warning(error.response.data.message);
    }
  };

  return (
    <>
      <div id="certificate-container">
        <Seo
          title="Professional Membership | CERADA - Join as Researcher, Academic or Scholar"
          description="Join CERADA Professional Membership for academicians, researchers, PhD scholars and professionals. Access research resources, events, and global academic network."
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
            src={Professional}
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
      <section className="Professional-form-section">
        <img
          className="absolute object-center z-[-10] h-full w-full object-cover"
          src="/images/professional-membership-form-background.svg"
          alt="professional-membership-form-background"
          width={800}
          height={400}
          loading="lazy"
        />
        <div className="fees_details">
          <div>
            <h2>Professional Certificate</h2>
            <p>
              Duration:{" "}
              <b>
                {Year === 1000
                  ? "Life Time"
                  : `${Year ? Year : 1} year${(Year || 1) !== 1 ? "s" : ""}`}
              </b>
            </p>
            <p>
              Currency:{" "}
              <b>
                {Currency
                  ? Currency
                  : Country
                  ? Country === "India"
                    ? "INR"
                    : "USD"
                  : "Select Country"}
              </b>
            </p>
            <p>
              Amount: <b>{Professional_Amount || Amount || "Fill the Form"}</b>
            </p>
          </div>
        </div>
        <form
          ref={ProfessionalMembershipRef}
          onSubmit={HandleProfessional}
          className="register-container"
        >
          <p
            style={{
              marginTop: "0",
              marginBottom: "6px",
              fontSize: "14px",
              fontWeight: "600",
              color: "red",
            }}
          >
            Professionals / Academician / Delegates / Research Scholars /
            PhD pursuing
          </p>
          <h1>Professional Membership</h1>
          <div className="register-row">
            <label htmlFor="firstName" className="register-label">
              First Name
            </label>
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
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
              onChange={(e) => setSecondName(e.target.value)}
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
              id="email"
              required
              className="register-input"
            />
          </div>

          <div className="register-row">
            <label htmlFor="mobile" className="register-label">
              Whatsapp Number
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
            <label htmlFor="designation" className="register-label">
              Designation
            </label>
            <input
              type="text"
              required
              id="designation"
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

export default ProfessionalMembership;
