import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import CoverImg from "../../assets/cover_img.jpg";
import GOOGLE_ICON from "../../assets/google-icon.png";
import InputField from "./InputField";
// import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      setMessage("Login successful!");
      navigate("/home"); // Redirect to home page after login
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <Navbar />
      <Wrapper>
        <ImageWrapper>
          <img src={CoverImg} className="cover-image" alt="Community Offers" />
        </ImageWrapper>
        <DescriptionWrapper>
          <div className="container">
            <div className="form-container">
              <div className="form-header">
                <h3 className="form-title">Login</h3>
                <p className="form-subtitle">Welcome Back! Please enter your details.</p>
              </div>

              {/* Input Fields */}
              <form onSubmit={handleLogin}>
                <div className="input-group">
                  <InputField
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <InputField
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Options Section */}
                <div className="options">
                  <div className="remember-me">
                    <input type="checkbox" id="remember-me" className="checkbox" />
                    <label htmlFor="remember-me" className="remember-label">
                      Remember me
                    </label>
                  </div>
                  <button className="forgot-password" onClick={() => alert("Redirecting to reset password")}>
                    Forgot Password?
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="action-buttons">
                  <button type="submit" className="login-button">Log in</button>
                </div>
              </form>

              <p>{message}</p>

              {/* Google Login Button */}
              <button className="google-login" onClick={() => alert("Google Login Coming Soon!")}>
                <img src={GOOGLE_ICON} alt="Sign in with Google" className="google-icon" />
                Sign In With Google
              </button>
            </div>
          </div>
        </DescriptionWrapper>
      </Wrapper>
    </div>
  );
};

export default Login;
