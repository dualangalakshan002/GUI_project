import React from 'react';
import styled from 'styled-components';
import Navbar from '../../Components/Navbar/Navbar';
import aboutImg from '../../assets/about.jpg'; // Make sure the path is correct
import './About.css'

const About = () => {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <ImageWrapper>
          <img src={aboutImg} alt="Our Journey" />
        </ImageWrapper>
        <DescriptionWrapper>
          <div className="title">
            <h2>Our Journey</h2>
          </div>
          <p>
            Welcome to Keerthi_Furniture, where our story is woven with the threads of passion, dedication, and a shared love for quality products. Our journey began with a simple yet profound idea — to create an online marketplace that goes beyond transactions; it's about building connections and delivering exceptional experiences.
          </p>
          <p>
            Thank you for being part of our narrative. As we continue to grow, our dedication to providing you with a seamless and enjoyable shopping experience remains unwavering. Join us in celebrating the joy of discovering remarkable products that enhance your lifestyle and tell your story.
          </p>
        </DescriptionWrapper>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  gap: 3rem;
  padding: 3rem;
  padding-top: 9rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;  // Ensures responsiveness on smaller screens
`;

const ImageWrapper = styled.div`
  flex: 1;
  img {
    width: 100%;
    max-width: 500px; // Adjust based on your design needs
    height: auto;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const DescriptionWrapper = styled.div`
  flex: 1;
  max-width: 600px;  // Adjust for text area size
  .title h2 {
    font-size: 2rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }
`;

export default About;
