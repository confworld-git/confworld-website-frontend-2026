import React from "react";
import "./Payment.css";
import { TiArrowForwardOutline } from "react-icons/ti";
import PaymentGatewayForm from "./PaymentGatewayForm";
import { Seo } from "../components/seo";

const Payment = () => {
  const payment_methods = [
    {
      title: "Online payment using Debit/Credit card",
      image: "/images/payment-using-debit-credit.webp",
    },
    {
      title: "Net Banking",
      image: "/images/net-banking.webp",
    },
    {
      title: "Paypal",
      image: "/images/paypal.webp",
    },
    {
      title: "Bank transfer (TT)",
      image: "/images/bank-transfer.webp",
    },
  ];
  const bank_details = [
    {
      title: "Beneficiary Name",
      text: "Confworld Educational Research And Development Association",
    },
    {
      title: "Bank Name",
      text: "HDFC Bank",
    },
    {
      title: "Account Number",
      text: "50200097123575",
    },
    {
      title: "IFSC Code",
      text: "HDFC0000124",
    },
    {
      title: "Swift Code",
      text: "HDFCINBBCHE",
    },
    {
      title: "Branch",
      text: "Kilpauk, Chennai, Tamil Nadu, India",
    },
  ];
  return (
    <div style={{ overflowX: "clip" }}>
      <Seo
        title="Payment Methods | CERADA - Secure Online Payment & Bank Transfer Options"
        description="Make payments easily with CERADA via Debit/Credit cards, Net Banking, PayPal, or Bank Transfer. Secure online gateway and clear bank details provided for hassle-free transactions."
      />
      <section className="about-main center">
        <div>
          <h1
            style={{ height: "auto", background: "none" }}
            data-aos="fade-right"
          >
            Available Payment methods
          </h1>
          {payment_methods.map(({ title, image }, index) => (
            <div className="flex p-5 gap-3 items-center border-2 border-gray-200 my-3 rounded-xl hover:scale-105 ms-5 duration-100 ease-in-out ">
              <img
                src={image}
                alt={title}
                width={40}
                height={40}
                loading="lazy"
              />
              <h4 className="font-semibold">{title}</h4>
            </div>
          ))}
        </div>
        <img
          data-aos="fade-left"
          src="/gifImages/available-payment-methods.svg"
          alt="Payment methods"
          width={450}
          height={450}
          loading="lazy"
        />
      </section>
      <section>
        <PaymentGatewayForm />
      </section>
      <section className="about-main change bank-details" data-aos="fade-up">
        <div>
          <h2>Bank Details (For Bank Transfer)</h2>
          {bank_details.map(({ title, text }, index) => (
            <div className="flex-col sm:flex-row flex bank mb-2 warp">
              <h4 className="w-full sm:w-1/3 flex gap-2 items-center">
                <TiArrowForwardOutline className="bank-icon" />
                {title}
              </h4>
              <p className="font-semibold w-full sm:w-2/3 ">{text}</p>
            </div>
          ))}
        </div>
        <img
          src="/gifImages/bank-details.svg"
          alt="bank-details"
          width={450}
          height={450}
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default Payment;
