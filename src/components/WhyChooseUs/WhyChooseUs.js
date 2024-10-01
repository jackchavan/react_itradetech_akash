import React from "react";
import "./WhyChooseUs.css";
import whyImg from "../../assets/img/why.png";
import Expert from "../../assets/img/ExpertIcon.png";
import Practical from "../../assets/img/PracticalIcon.png";
import Community from "../../assets/img/CommunityIcon.png";
import Flexible from "../../assets/img/FlexibleIcon.png";
import CuttingEdge from "../../assets/img/CuttingEdgeIcon.png";
import DeviderGray from "../../assets/img/deviderGrey.png";
const WhyChooseUs = () => {
  const data = [
    {
      icon: Expert,
      class: "d-flex mb-2",
      bgClass: "bg-secondary",
      title: "Expert-Led Courses",
      description:
        "Our courses are designed and taught by seasoned traders with years of experience in the financial markets. Learn the techniques and strategies that have proven successful in real-world trading.",
    },
    {
      icon: Practical,
      class: "d-flex mb-2",
      bgClass: "bg-orange",
      title: "Practical Learning Approach",
      description:
        "We believe in hands-on learning. Our programs include live trading sessions, case studies, and simulations that replicate actual market conditions, ensuring you gain practical experience.",
    },
    {
      icon: Community,
      class: "d-flex mb-2",
      bgClass: "bg-green",
      title: "Community of Traders",
      description:
        "Join a vibrant community of like-minded individuals. Share insights, strategies, and experiences with fellow traders, and benefit from continuous support and mentorship.",
    },
    {
      icon: Flexible,
      class: "d-flex mb-2",
      bgClass: "bg-warning",
      title: "Flexible Learning Options",
      description:
        "Learn at your own pace with our flexible online courses or join our immersive in-person workshops. We cater to all learning styles and schedules.",
    },
    {
      icon: CuttingEdge,
      class: "d-flex",
      bgClass: "bg-blue",
      title: "Cutting-Edge Resources",
      description:
        "Gain access to the latest trading tools, market analysis, and proprietary research to stay ahead of the curve. Our resources are designed to give you a competitive edge in the market.",
    },
  ];

  const listItem = (item, i) => {
    return (
      <div className={item.class} key={i}>
        <img src={item.icon} className="btn-icon mr-4" alt="icon" />
        <div className="mx-4">
          <h3 className="why-title fw-600">{item.title}</h3>
          <p className="why-desc">{item.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="why-div">
      <img className="why-devider" src={DeviderGray} alt="devider" />
      <h1>Reasons</h1>
      <div className="mb-4">
        <h2 className="display-4 text-uppercase">TO CHOOSE US</h2>
      </div>

      <div className="why-row">
        <div className="why-list">
          {data.map((item, index) => listItem(item, index))}
        </div>
        <img className="obj-fit" src={whyImg} alt="img" />
      </div>
      {/* <div className="why-container">
        <div className="why-row">
          {/* <div className="why-list">{data.map((item, index) => listItem(item, index))}</div> 
          <div className="col-lg-5" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <img className="w-100 h-100 obj-fit" src={whyImg} />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default WhyChooseUs;
