import React, { useState } from "react";
import axios from "axios";
import { toaster } from "evergreen-ui";
import { useNavigate } from "react-router-dom";

const AmbassadorLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/ambassador/login`,
        { email, password },
      );

      // Store token in localStorage
      localStorage.setItem("ambassadorToken", response.data.token);
      localStorage.setItem(
        "ambassadorData",
        JSON.stringify(response.data.ambassador),
      );

      toaster.success(response.data.message);

      // Navigate to dashboard
      navigate("/ambassador/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      toaster.danger(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ambassador-login-container">
      <form
        onSubmit={handleLogin}
        className="enquiry-form-container"
        data-aos="zoom-in-up"
        style={{ maxWidth: "500px", margin: "50px auto" }}
      >
        <div className="contact-head">
          <h2>Ambassador Login</h2>
          <p style={{ fontSize: "14px", color: "#666", marginTop: "10px" }}>
            Access your dashboard and manage your credit points
          </p>
        </div>

        <div className="enquiry-form-field">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="enquiry-form-input"
            required
          />
        </div>

        <div className="enquiry-form-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="enquiry-form-input"
            required
          />
        </div>
        

        <div className="enquiry-form-button-container">
          <button
            type="submit"
            className="enquiry-form-submit-button"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }} className="">
          <p style={{ fontSize: "14px", color: "#666" }}>
            Don't have an account?{" "}
            <a
              href="/ambassador/register"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Register here
            </a>
          </p>
          {/* Add this RIGHT AFTER the password field */}
<div style={{ textAlign: "right", marginTop: "-10px", marginBottom: "15px" }} className="inline-block">
  <a
    href="/ambassador/forgot-password"
    style={{ 
      color: "#007bff", 
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "500"
    }}
    onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
    onMouseLeave={(e) => e.target.style.textDecoration = "none"}
  >
    Forgot Password?
  </a>
</div>
          
        </div>
      </form>
    </div>
  );
};

export default AmbassadorLogin;
