import React from "react";
import { FiCheck } from "react-icons/fi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="success">
      <div>
        <span></span>
        <span></span>
        <p>
          <FiCheck className="check-icon" />
        </p>
        <span></span>
        <h1>Payment Successful!</h1>
        <h2>
          Thank you for making your payment,
          <br /> one of our team members will get in touch with you soon.
        </h2>
      </div>
      <i onClick={() => navigate("/")}>
        <HiOutlineArrowNarrowLeft />
      </i>
    </div>
  );
};

export default Success;
