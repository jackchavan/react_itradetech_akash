import React from "react";
import "./WhyChooseUs.css";
import whyImg from "../../assets/img/why.jpg";
const WhyChooseUs = () => {
  const data = [
    {
      icon: "fa fa-2x fa-graduation-cap text-white",
      class: "d-flex mb-2",
      bgClass: "bg-secondary",
      title: "Expert-Led Courses",
      description:
        "Our courses are designed and taught by seasoned traders with years of experience in the financial markets. Learn the techniques and strategies that have proven successful in real-world trading.",
    },
    {
      icon: "fa fa-2x fa-desktop text-white",
      class: "d-flex mb-2",
      bgClass: "bg-orange",

      title: "Practical Learning Approach",
      description:
        "We believe in hands-on learning. Our programs include live trading sessions, case studies, and simulations that replicate actual market conditions, ensuring you gain practical experience.",
    },
    {
      icon: "fa fa-2x fa-users text-white",
      class: "d-flex mb-2",
      bgClass: "bg-green",

      title: "Community of Traders",
      description:
        "Join a vibrant community of like-minded individuals. Share insights, strategies, and experiences with fellow traders, and benefit from continuous support and mentorship.",
    },
    {
      icon: "fa fa-2x fa-exchange text-white",
      class: "d-flex mb-2",
      bgClass: "bg-warning",
      title: "Flexible Learning Options",
      description:
        "Learn at your own pace with our flexible online courses or join our immersive in-person workshops. We cater to all learning styles and schedules.",
    },
    {
      icon: "fa fa-2x fa-arrows text-white",
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
        <div className={`btn-icon ${item.bgClass} mr-4`}>
          <i className={item.icon}></i>
        </div>
        <div className="mt-n1">
          <h3 className="why-title fw-600">{item.title}</h3>
          <p className="why-desc">{item.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="why-container">
      <div className="row">
        <div className="">
          <div className="mb-4">
            <h1 className="display-4 text-uppercase">Why Choose Us?</h1>
          </div>
          {data.map((item, index) => listItem(item, index))}
        </div>
        <div className="col-lg-5" style={{ minHeight: "500px" }}>
          <div className="position-relative h-100">
            <img className="w-100 h-100 obj-fit" src={whyImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
