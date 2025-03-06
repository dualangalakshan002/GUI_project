import React from 'react';
import styled from 'styled-components';
import Navbar from '../../Components/Navbar/Navbar';
import ContactImg from '../../assets/contact-img.jpg'; // Ensure the path is correct
// import './Contact.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <ImageWrapper>
          <img src={ContactImg} alt="Contact" />
        </ImageWrapper>
        <DescriptionWrapper>
          <div className="contact-container">
            <div className="contact-head">
              <h1>Contact Us</h1>
            </div>
            <div className="contact-form-container">
              <h2>Contact Form</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <Button type="submit">Send Message</Button>
              </form>
              <div className="company-details">
                <h2>Our Office</h2>
                <p>
                  <strong>Address:</strong> 71, Yatawatta, Matale, Sri Lanka
                </p>
                <p>
                  <strong>Phone:</strong> (071) 4931978
                </p>
                <p>
                  <strong>Email:</strong> support@Keerthi_Furniture.com
                </p>
              </div>
            </div>
          </div>
        </DescriptionWrapper>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;
  padding: 3rem;
  padding-top: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap; /* Ensures responsiveness on smaller screens */
`;

const ImageWrapper = styled.div`
  flex: 1;
  img {
    width: 100%;
    max-width: 500px; /* Adjust based on your design needs */
    height: 50rem;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const DescriptionWrapper = styled.div`
  flex: 1;
  max-width: 600px; /* Adjust for text area size */
  .contact-head h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  .contact-form-container h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color:rgb(199, 68, 8);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color:rgb(15, 15, 15);
  }
`;

export default Contact;
