import React, { useRef, useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import ReactFlagsSelect from "react-flags-select";
import axios from "axios";
import logo from "/logo.png";
import { useNavigate } from "react-router-dom";
import { toaster } from "evergreen-ui";

const PaymentGatewayForm = () => {
  const navigate = useNavigate();
  const PaymentRef = useRef();
  const [Number, setNumber] = useState();
  const [Country, setCountry] = useState();
  const [gstAmount, setGstAmount] = useState();
  const [getConvenience, setConvenience] = useState();
  const [getTotalAmount, setTotalAmount] = useState();
  const [currency, setCurrency] = useState("");

  function openRazorPay(id, order_id) {
    return new Promise((resolve) => {
      const instance = new Razorpay({
        key: import.meta.env.VITE_RAZORPAY_KEY,
        order_id: order_id,
        name: "Confworld Educational Research and Development Association",
        image: logo,
        handler: async (value) => {
          try {
            console.log(value);
            const response = await fetch(
              `${import.meta.env.VITE_API_URL}/Request/Callback`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...value, id }),
              }
            );

            if (!response.ok) {
              throw new Error("Something went wrong with the server response");
            }
            const newData = await response.json();
            console.log(newData);
            navigate("/Payment_Success");
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
                `${import.meta.env.VITE_API_URL}/Request/Cancel`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ order_id: order_id }),
                }
              );

              if (!response.ok) {
                throw new Error("Failed to update order status");
              }
              const responseData = await response.json();
              if (responseData && responseData.message) {
                toaster.danger(responseData.message);
              } else {
                console.log("No message in response data");
              }
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
  let gst = 0;
  let totalWithGST = 0;
  let convenienceFee = 0;
  let totalAmount = 0;
  const paymentCalculate = () => {
    const formData = new FormData(PaymentRef.current);
    const am = parseFloat(formData.get("amount"));
    setCurrency(formData.get("currency"));
    if (formData.get("currency") === "INR") {
      gst = (am * 0.18).toFixed(2);
      setGstAmount(gst);
      totalWithGST = parseFloat(am) + parseFloat(gst);
      convenienceFee = (totalWithGST * 0.03).toFixed(2);
      setConvenience(convenienceFee);
      totalAmount = parseFloat(totalWithGST) + parseFloat(convenienceFee);
      setTotalAmount(totalAmount);
    } else {
      convenienceFee = (am * 0.060).toFixed(2);
      setConvenience(convenienceFee);
      totalAmount = parseFloat(am) + parseFloat(convenienceFee);
      setTotalAmount(totalAmount);
    }
  };

  const HandlePayment = async (e) => {
    e.preventDefault();
    const formData = new FormData(PaymentRef.current);
    // const am = parseFloat(formData.get("amount"));
    // if (formData.get("currency") === "INR") {
    //   gst = am * 0.18;
    //   totalWithGST = am + gst;
    //   convenienceFee = totalWithGST * 0.03;
    //   totalAmount = totalWithGST + convenienceFee;
    // } else {
    //   convenienceFee = am * 0.058;
    //   totalAmount = am + convenienceFee;
    // }

    const data = {
      mode_of_participate: formData.get("mode_of_participate"),
      currency: formData.get("currency"),
      amount: getTotalAmount,
      name: formData.get("name"),
      email: formData.get("email"),
      phoneNumber: Number,
      country: Country,
      serviceRequired: formData.get("service"),
      city: formData.get("city"),
      state: formData.get("state"),
      zip: formData.get("zip"),
      address: formData.get("address"),
      terms: formData.get("terms"),
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/Payment`,
        data
      );
      if (response) {
        // console.log(response.data.id, response.data.order_id);
        openRazorPay(response.data.id, response.data.order_id);
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    <form
      className="payment-gateway-container"
      onSubmit={HandlePayment}
      ref={PaymentRef}
      data-aos="fade-up"
    >
      <h2>Online Payment Gateway Form</h2>
      <div className="payment-gateway-row">
        <div className="payment-gateway-field">
          <label htmlFor="mode_of_participate">
            Select Mode of Participation:
          </label>
          <select
            id="mode_of_participate"
            name="mode_of_participate"
            className="payment-gateway-select"
            required
          >
            <option>Select</option>
            <option value="Conference Physical (Onsite) presentation with Scopus publication">
              Conference Physical (Onsite) presentation with Scopus publication
            </option>
            <option value="Conference Physical (Onsite) presentation">
              Conference Physical (Onsite) presentation
            </option>
            <option value="Conference Virtual (Online) presentation with Scopus publication">
              Conference Virtual (Online) presentation with Scopus publication
            </option>
            <option value="Conference Virtual (Online) presentation">
              Conference Virtual (Online) presentation
            </option>
            <option value="In-Person Attendance (Listener)">
              In-Person Attendance (Listener)
            </option>
            <option value="Virtual Attendance (Listener)">
              Virtual Attendance (Listener)
            </option>
            <option value="Student Membership">Student Membership</option>
            <option value="Professional Membership">
              Professional Membership - 1 Year
            </option>
            <option value="Professional Membership">
              Professional Membership - 3 Years
            </option>
            <option value="Professional Membership">
              Professional Membership - 5 Years
            </option>
            <option value="Professional Membership">
              Professional Membership - Lifetime
            </option>
            <option value="Institutional Membership">
              Institutional Membership
            </option>
            <option value="Corporate Membership">Corporate Membership</option>
            <option value="Sponsorship">Sponsorship</option>
            <option value="Journal Publication">Journal Publication</option>
            <option value="Workshop">Workshop</option>
            <option value="Symposium">Symposium</option>
            <option value="CERADA Guest Lectures">CERADA Guest Lectures</option>
            <option value="Writing Assistance">Writing Assistance</option>
            <option value="Research Assistance">Research Assistance</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="payment-gateway-field">
          <label htmlFor="currency">Choose Currency</label>
          <div className="currency-radio-group">
            <div>
              <input
                type="radio"
                id="currency-inr"
                name="currency"
                value="INR"
                className="payment-gateway-radio"
                required
                onChange={() => paymentCalculate()}
              />
              <label htmlFor="currency-inr">INR</label>
            </div>
            <div>
              <input
                type="radio"
                id="currency-usd"
                name="currency"
                value="USD"
                className="payment-gateway-radio"
                required
                onChange={() => paymentCalculate()}
              />
              <label htmlFor="currency-usd">USD</label>
            </div>
          </div>
        </div>
      </div>

      <div className="payment-gateway-row">
        <div className="payment-gateway-field">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="payment-gateway-input"
            required
            autoComplete="off"
            onChange={() => paymentCalculate()}
          />
        </div>
        <div className="payment-gateway-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="payment-gateway-input"
            required
          />
        </div>
      </div>
      <div className="payment-gateway-row">
        {getConvenience > 0 && currency && (
          <div className="payment-gateway-field">
            <div>
              {currency == "INR" && (
                <p>
                  <span>GST 18% :</span> {gstAmount}
                </p>
              )}
              <p>
                <span>Bank Convenience :</span> {getConvenience}
              </p>
            </div>
            <p style={{marginTop :"10px"}}>
              <span>Total Payment :</span> {getTotalAmount}
            </p>
          </div>
        )}
        <div className="payment-gateway-field"></div>
      </div>

      <div className="payment-gateway-row">
        <div className="payment-gateway-field">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="payment-gateway-input"
            required
          />
        </div>
        <div className="payment-gateway-field">
          <label htmlFor="mobile">Mobile with country code:</label>
          <PhoneInput
            className="new-input"
            value={Number}
            onChange={(value) => setNumber(value)}
            defaultCountry="US"
          />
        </div>
      </div>

      <div className="payment-gateway-row">
        <div className="payment-gateway-field">
          <label htmlFor="country">Select country:</label>
          <ReactFlagsSelect
            selected={Country}
            onSelect={(value) => setCountry(value)}
            className="new-input-2"
          />
        </div>
        <div className="payment-gateway-field">
          <label htmlFor="service">Service required:</label>
          <select
            id="service"
            name="service"
            className="payment-gateway-select"
            required
          >
            <option>Select Service</option>
            <option value="Conference Physical (Onsite) presentation with Scopus publication">
              Conference Physical (Onsite) presentation with Scopus publication
            </option>
            <option value="Conference Physical (Onsite) presentation">
              Conference Physical (Onsite) presentation
            </option>
            <option value="Conference Virtual (Online) presentation with Scopus publication">
              Conference Virtual (Online) presentation with Scopus publication
            </option>
            <option value="Conference Virtual (Online) presentation">
              Conference Virtual (Online) presentation
            </option>
            <option value="In-Person Attendance (Listener)">
              In-Person Attendance (Listener)
            </option>
            <option value="Virtual Attendance (Listener)">
              Virtual Attendance (Listener)
            </option>
            <option value="Student Membership">Student Membership</option>
            <option value="Professional Membership">
              Professional Membership - 1 Year
            </option>
            <option value="Professional Membership">
              Professional Membership - 3 Years
            </option>
            <option value="Professional Membership">
              Professional Membership - 5 Years
            </option>
            <option value="Professional Membership">
              Professional Membership - Lifetime
            </option>
            <option value="Institutional Membership">
              Institutional Membership
            </option>
            <option value="Corporate Membership">Corporate Membership</option>
            <option value="Sponsorship">Sponsorship</option>
            <option value="Journal Publication">Journal Publication</option>
            <option value="Workshop">Workshop</option>
            <option value="Symposium">Symposium</option>
            <option value="CERADA Guest Lectures">CERADA Guest Lectures</option>
            <option value="Writing Assistance">Writing Assistance</option>
            <option value="Research Assistance">Research Assistance</option>
            <option value="Others">Others</option>
          </select>
        </div>
      </div>

      <div className="payment-gateway-row">
        <div className="payment-gateway-field">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            className="payment-gateway-input"
            required
          />
        </div>
        <div className="payment-gateway-field">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            className="payment-gateway-input"
            required
          />
        </div>
      </div>

      <div className="payment-gateway-field">
        <label htmlFor="zip">Zip / Postal Code:</label>
        <input
          type="text"
          id="zip"
          name="zip"
          style={{ marginBottom: "15px" }}
          className="payment-gateway-input"
          required
        />
      </div>

      <div className="payment-gateway-row">
        <div className="payment-gateway-field full-width">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            className="payment-gateway-input"
            rows="3"
            required
          ></textarea>
        </div>
      </div>

      <div className="payment-gateway-row">
        <div className="payment-gateway-field full-width">
          <label htmlFor="terms">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="payment-gateway-checkbox"
              required
            />
            I accept the{" "}
            <a href="terms.pdf" download="Terms and Condition">
              terms and conditions
            </a>
          </label>
        </div>
      </div>

      <div className="payment-gateway-button-container">
        <button type="submit" className="payment-gateway-submit-button">
          Pay Now
        </button>
      </div>
    </form>
  );
};

export default PaymentGatewayForm;
