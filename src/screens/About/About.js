import React from "react";
import "./About.css"; // Import the CSS file
import Power from "../../assets/img/power.png";
const About = () => {
  return (
    <div className="about-us-container">
      <div className="banner-container">
        <div className="about-us-banner"></div>
      </div>
      <div className="about-us-content">
        <div className="d-flex mb-3">
          <div className="mr-4">
            <img className="about-img" src={Power} alt="power" />
          </div>
          <div className="mt-n1">
            <h3 className="about-title fw-600">
              Empowering Traders, One Trade at a Time
            </h3>
            <div className="devider"></div>
            <ul className="center-align">
              <li className="why-desc mt-1">
                At I Trade Tech, we are more than just a trading academy – we
                are a community dedicated to transforming the way you approach
                the financial markets. Founded by experienced traders and
                financial experts, our academy is built on the belief that with
                the right knowledge and tools, anyone can achieve success in
                trading.
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex mb-3">
          <div className="mt-n1">
            <h3 className="about-title fw-600">Our Mission </h3>
            <div className="devider"></div>
            <ul className="center-align">
              <li className="why-desc mt-1">
                To provide accessible, high-quality trading education that
                empowers individuals to take control of their financial futures.
                We are committed to delivering a comprehensive learning
                experience that equips you with the skills, strategies, and
                confidence to trade effectively in any market environment.
              </li>
            </ul>
          </div>
          <div className="mr-4">
            <img className="about-img" src={Power} alt="power" />
          </div>
        </div>

        <div className="d-flex mb-3">
          <div className="mr-4">
            <img className="about-img" src={Power} alt="power" />
          </div>
          <div className="mt-n1">
            <h3 className="about-title fw-600">Our Approach</h3>
            <div className="devider"></div>
            <ul className="center-align">
              <li className="why-desc mt-1">
                We offer a unique blend of theoretical knowledge and hands-on
                experience. Our curriculum is designed to cater to traders of
                all levels - from beginners just starting out, to seasoned
                professionals looking to refine their strategies. Each course is
                structured to provide a balanced mix of lectures, practical
                exercises, and real-time trading simulations.
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex mb-3">
          <div className="mt-n1">
            <h3 className="about-title fw-600">Our Values </h3>
            <div className="devider"></div>
            <ul className="center-align">
              <li className="why-desc mt-1">
                <b>Excellence in Education:</b> We strive to offer the most
                relevant and up-to-date content, designed and delivered by
                industry professionals. Our courses are meticulously crafted to
                ensure you gain practical, real-world trading skills.
              </li>
              <li className="why-desc mt-1">
                <b>Integrity &amp; Transparency:</b> We believe in teaching
                trading in a way that is honest, transparent, and free from
                unrealistic promises. Our focus is on sustainable growth and
                long-term success, not quick fixes or get-rich-quick schemes.
              </li>
              <li className="why-desc mt-1">
                <b>Community &amp; Support:</b> Trading can be a solitary
                pursuit, but it doesn't have to be. At I Trade Tech, you'll find
                a supportive community of like-minded individuals. We foster an
                environment where students can share insights, ask questions,
                and grow together.
              </li>
              <li className="why-desc mt-1">
                <b>Continuous Improvement:</b> The financial markets are
                constantly evolving, and so are we. We regularly update our
                courses and resources to reflect the latest market trends and
                trading techniques, ensuring you stay ahead of the curve.
              </li>
            </ul>
          </div>
          <div className="mr-4">
            <img className="about-img" src={Power} alt="power" />
          </div>
        </div>

        <div className="d-flex mb-3">
          <div className="mr-4">
            <img className="about-img" src={Power} alt="power" />
          </div>
          <div className="mt-n1">
            <h3 className="about-title fw-600">Why Choose Us?</h3>
            <div className="devider"></div>
            <ul className="center-align">
              <li className="why-desc mt-1">
                <b>Expert Instructors:</b> Learn from seasoned traders with
                22+years of experience in various financial markets. Our
                instructors are passionate about teaching and are committed to
                helping you succeed.
              </li>
              <li className="why-desc mt-1">
                <b>Integrity &amp; Transparency:</b> We believe in teaching
                trading in a way that is honest, transparent, and free from
                unrealistic promises. Our focus is on sustainable growth and
                long-term success, not quick fixes or get-rich-quick schemes.
              </li>
              <li className="why-desc mt-1">
                <b>Community &amp; Support:</b> Trading can be a solitary
                pursuit, but it doesn't have to be. At I Trade Tech, you'll find
                a supportive community of like-minded individuals. We foster an
                environment where students can share insights, ask questions,
                and grow together.
              </li>
              <li className="why-desc mt-1">
                <b>Continuous Improvement:</b> The financial markets are
                constantly evolving, and so are we. We regularly update our
                courses and resources to reflect the latest market trends and
                trading techniques, ensuring you stay ahead of the curve.
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex mb-3">
          <div className="mt-n1">
            <h3 className="about-title fw-600">Join Us</h3>
            <div className="devider"></div>
            <ul className="center-align">
              <li className="why-desc mt-1">
                Are you ready to take the first step towards mastering the
                markets? Join I TRADE TECH today and start your journey to
                becoming a confident, successful trader. Together, we’ll
                navigate the complexities of the financial markets and unlock
                your full trading potential.
              </li>
            </ul>
          </div>
          <div className="mr-4">
            <img className="about-img" src={Power} alt="power" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
