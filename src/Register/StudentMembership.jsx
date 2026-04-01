import React, { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import ReactFlagsSelect from "react-flags-select";
import axios from "axios";
import Student from "../assets/certificates/Student.jpg";
import { getName } from "country-list";
import logo from "/logo.png";
import { useNavigate } from "react-router-dom";
import { toaster } from "evergreen-ui";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Seo } from "../components/seo";

const StudentMembership = () => {
  const navigate = useNavigate();
  const StudentMembershipRef = useRef();
  const [Number, setNumber] = useState();
  const [Country, setCountry] = useState();
  const [generatePDF, setGeneratePDF] = useState(false);
  const [date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [SecondName, setSecondName] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);
  const [countryCode, setCountryCode] = useState("");
  const [Amount, setAmount] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [futureDate, setFutureDate] = useState("");
  const [CheckAdmin, setCheckAdmin] = useState(null);
  const [Loading, setLoading] = useState(false);

  const handleCountrySelect = (value) => {
    setCountryCode(value);
    const fullCountryName = getName(value);
    setCountry(fullCountryName);
    if (fullCountryName === "India") {
      const baseAmount = 499;
      const gst = baseAmount * 0.18;
      const gastbase = baseAmount + gst;
      const bankConvenienceFee = gastbase * 0.03;
      const totalAmount = parseFloat(gastbase) + parseFloat(bankConvenienceFee);
      setAmount(totalAmount.toFixed(2));
    } else {
      const baseAmount = 15;
      const bankConvenienceFee = baseAmount * 0.060;
      const totalAmount =
        parseFloat(baseAmount) + parseFloat(bankConvenienceFee);
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

    const futureDateObj = new Date(now);
    futureDateObj.setFullYear(now.getFullYear() + 1);

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
  }, []);

  useEffect(() => {
    const number = Math.floor(100000000 + Math.random() * 900000000);
    const CertificateID = "CSM" + number;
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
      StudentMembershipRef.current.reset();
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

  const HandleStudentMembership = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (isSubmitting) return;
    setIsSubmitting(true);

    const formData = {
      firstName: StudentMembershipRef.current["firstName"].value,
      lastName: StudentMembershipRef.current["lastName"].value,
      email: StudentMembershipRef.current["email"].value,
      mobile: Number,
      country: Country,
      qualification: StudentMembershipRef.current["qualification"].value,
      university: StudentMembershipRef.current["university"].value,
      department: StudentMembershipRef.current["department"].value,
      certificateId: randomNumber,
      Amount: Amount,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/Student-Membership-Form`,
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
      console.log(error.response.data);
      toaster.danger(error.response.data.message);

    }
  };

  return (
    <div style={{overflow:"hidden", height:"100vh"}} className="">
      <div id="certificate-container">
        <Seo
          title="Student Membership | CERADA - Join as UG & PG Student Member"
          description="Join CERADA Student Membership exclusively for UG and PG students. Gain access to research support, academic networking, and global conference opportunities."
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
            src={Student}
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
      <section className="membership-form-section">
        <img
          className="absolute object-center z-[-10] h-full w-full object-cover"
          src="/images/student-membership-form-background.svg"
          alt="student-membership-form-background"
          width={800}
          height={400}
          loading="lazy"
        />
        <div></div>
        <form
          ref={StudentMembershipRef}
          onSubmit={HandleStudentMembership}
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
            UG and PG students only
          </p>
          <h1>Student Membership</h1>
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
              required
              className="register-input"
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
    </div>
  );
};

export default StudentMembership;
