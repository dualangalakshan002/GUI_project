import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Login.css';
import Navbar from "../../Components/Navbar/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
  
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        setError(data.error || "Login failed");
      } else {
        alert("Login successful!");
        localStorage.setItem("userEmail", email); // Store email in localStorage
        navigate("/home");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };
  
  

  return (
    <div>
      <Navbar/>
      <h2
  style={{
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: "34px",
    letterSpacing: "1px",
    marginBottom: "15px",
    paddingTop:"50px"
  }}
>
  Login
</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit">Login</button>
        <Link to="/register">
        <button type="button">Register</button>
      </Link>
      </form>
    </div>
  );
};

export default Login;







// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../../Components/Navbar/Navbar";
// import CoverImg from "../../assets/cover_img.jpg";
// import GOOGLE_ICON from "../../assets/google-icon.png";
// import InputField from "./InputField";
// import styled from "styled-components";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//     // Function to handle email input change
//     const handleEmailChange = (e) => {
//       setEmail(e.target.value);
//     };
  
//     // Function to handle password input change
//     const handlePasswordChange = (e) => {
//       setPassword(e.target.value);
//     };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

   

//     console.log("Form data:", { email, password }); // Debugging log

//     if (!email || !password) {
//       setError("Please enter email and password");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       console.log("Response from server:", data); // Debugging log

//       if (!response.ok) {
//         setError(data.error || "Login failed");
//       } else {
//         alert("Login successful!");
//         navigate("/home");
//       }
//     } catch (err) {
//       setError("Network error. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <Wrapper>
//         <ImageWrapper>
//           <img src={CoverImg} className="cover-image" alt="Community Offers" />
//         </ImageWrapper>
//         <DescriptionWrapper>
//           <div className="container">
//             <div className="form-container">
//               <div className="form-header">
//                 <h3 className="form-title">Login</h3>
//                 <p className="form-subtitle">
//                   Welcome Back! Please enter your details.
//                 </p>
//               </div>

//               {error && <p className="error-message">{error}</p>}

//               <form onSubmit={handleLogin}>
//                 <div className="input-group">
//                   <InputField
//                     type="email"
//                     placeholder="Email"
//                     id="email"
//                     aria-label="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)} // Ensure onChange is set
//                   />
//                   <InputField
//                     type="password"
//                     placeholder="Password"
//                     id="password"
//                     aria-label="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)} // Ensure onChange is set
//                   />
//                 </div>

//                 <div className="options">
//                   <div className="remember-me">
//                     <input type="checkbox" id="remember-me" className="checkbox" />
//                     <label htmlFor="remember-me" className="remember-label">
//                       Remember me
//                     </label>
//                   </div>
//                   <button
//                     type="button"
//                     className="forgot-password"
//                     onClick={() => alert("Redirecting to reset password")}
//                   >
//                     Forgot Password?
//                   </button>
//                 </div>

//                 <div className="action-buttons">
//                   <button type="submit" className="login-button">Log in</button>
//                 </div>
//               </form>

//               <div className="divider">
//                 <div className="line"></div>
//                 <p className="divider-text">or</p>
//                 <div className="line"></div>
//               </div>

//               <button className="google-login" onClick={() => alert("Google Login Coming Soon!")}>
//                 <img src={GOOGLE_ICON} alt="Sign in with Google" className="google-icon" />
//                 Sign In With Google
//               </button>
//             </div>
//           </div>
//         </DescriptionWrapper>
//       </Wrapper>
//     </div>
//   );
// };






// const Wrapper = styled.div`
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
//   gap: 3rem;
//   padding: 3rem;
//   padding-top: 4rem;
//   max-width: 1200px;
//   margin: 0 auto;
//   flex-wrap: wrap;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     gap: 2rem;
//   }
// `;

// const ImageWrapper = styled.div`
//   flex: 1;
//   img {
//     width: 100%;
//     max-width: 500px;
//     height: 33rem;
//     border-radius: 20px;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   }

//   .subheading {
//     margin-top: 1rem;
//     font-size: 1.1rem;
//     color: #666;
//     text-align: center;
//   }
// `;

// const DescriptionWrapper = styled.div`
//   flex: 1;
//   max-width: 600px;

//   .container {
//     text-align: left;
//   }

//   .brand-title {
//     font-size: 2rem;
//     color: #333;
//     margin-bottom: 1rem;
//   }

//   .form-header {
//     margin-bottom: 1.5rem;
//   }

//   .form-title {
//     font-size: 1.5rem;
//     color: #333;
//     margin-bottom: 0.5rem;
//   }

//   .form-subtitle {
//     font-size: 1rem;
//     color: #666;
//   }

//   .input-group {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     margin-bottom: 1.5rem;
//   }

//   .options {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 1.5rem;

//     .remember-me {
//       display: flex;
//       align-items: center;
//     }

//     .checkbox {
//       margin-right: 0.5rem;
//     }

//     .forgot-password {
//       background: none;
//       border: none;
//       color: #007bff;
//       cursor: pointer;
//       font-size: 0.9rem;
//       text-decoration: underline;
//     }

//     .forgot-password:hover {
//       color: #0056b3;
//     }
//   }

//   .action-buttons {
//     display: flex;
//     gap: 1rem;
//     margin-bottom: 1.5rem;

//     .login-button,
//     .register-button {
//       padding: 0.8rem 1.5rem;
//       border: none;
//       border-radius: 8px;
//       cursor: pointer;
//       font-size: 1rem;
//       transition: all 0.3s ease;
//     }

//     .login-button {
//       background-color:rgb(7, 7, 7);
//       color: white;
//     }

//     .login-button:hover {
//       background-color:rgb(179, 72, 0);
//     }

//     .register-button {
//       background-color:rgb(7, 7, 7);
//       color: white;
//     }

//     .register-button:hover {
//       background-color: rgb(179, 72, 0);
//     }
//   }

//   .divider {
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;
//     margin-bottom: 1.5rem;

//     .line {
//       height: 1px;
//       background: #ccc;
//       flex: 1;
//     }

//     .divider-text {
//       font-size: 0.9rem;
//       color: #666;
//     }
//   }

//   .google-login {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 0.8rem 1.5rem;
//     border: 1px solid #ccc;
//     border-radius: 8px;
//     background: white;
//     cursor: pointer;
//     font-size: 1.1rem;
//     transition: all 0.3s ease;
//     color: black;

//     .google-icon {
//       width: 30px;
//       height: 30px;
//       margin-right: 0.5rem;
//     }

//     &:hover {
//       background-color: chocolate;
//     }
//   }
// `;

// export default Login;
