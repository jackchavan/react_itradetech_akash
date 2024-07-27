import React from 'react';
import './About.css'; // Import the CSS file
import Img from '../../assets/img/photo.jpg'
const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-banner">
        <h1>About Us</h1>
      </div>
      <div className="about-us-content">
        <p>
          Welcome to ITradeTech, your trusted source for learning and mastering the art of trading. Our mission is to provide top-notch educational resources and training programs to help you succeed in the financial markets.
        </p>
        <p>
          Our team of experienced professionals is dedicated to bringing you the latest insights, strategies, and tools needed to navigate the complex world of trading. Whether you're a beginner or an experienced trader, we have courses and resources tailored to meet your needs.
        </p>
        <p>
          Join us on this journey to financial mastery and take your trading skills to the next level with ITradeTech.
        </p>
      </div>
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={Img} alt="Team Member 1" className="team-member-image" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={Img} alt="Team Member 2" className="team-member-image" />
            <h3>Jane Smith</h3>
            <p>Chief Technical Analyst</p>
          </div>
          <div className="team-member">
            <img src={Img} alt="Team Member 3" className="team-member-image" />
            <h3>Mike Johnson</h3>
            <p>Senior Financial Advisor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
