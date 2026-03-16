import React, { useEffect, useState } from "react";
import "./Login.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Seo } from "../components/seo";

const Login = () => {
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  useEffect(() => {
    const LoginDetails = localStorage.getItem("CONFWORLD_AUTH");
    if (LoginDetails) {
      navigate("/Admin-Dashboard qPv71759AG93PB7a3q06H8EV");
    }
  }, []);

  const HandleLogin = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/login`,
        {
          email: Email,
          password: Password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const { message, success, token } = response.data;
        if (success) {
          localStorage.setItem("CONFWORLD_AUTH", token);
          window.location.href = "/Admin-Dashboard qPv71759AG93PB7a3q06H8EV";
        } else {
          alert(message);
        }
      });
  };

  return (
    <div className="login">
      <Seo
        title="Login to Your CERADA Account | Access Research & Membership Services"
        description="Log in to your CERADA account to access research support, membership benefits, conference registrations, and academic services. Secure & easy access."
      />
      <section>
        <section>
          <div className="input-form">
            <h2>Sign up</h2>
            <div>
              <label>
                <BsFillPersonFill />
              </label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label>
                <FaUnlockKeyhole />
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="check-remember">
              <input id="check" type="checkbox" />
              <label style={{ margin: "0px 0px 0px 6px" }} htmlFor="check">
                Remember me
              </label>
            </div>
            <button onClick={HandleLogin}>Log in</button>
          </div>
          <div>
            <img
              src="/images/login-image.webp"
              alt="login-image"
              width={450}
              height={450}
              loading="lazy"
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Login;
