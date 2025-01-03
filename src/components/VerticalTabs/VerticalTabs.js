import React, { useEffect, useState } from "react";
import "./VerticalTabs.css";

const VerticalTabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    setTabs(tabsData);
  }, [tabsData]);

  return (
    <div className="vertical-tabs-container">
      <div className="tabs">
        {tabs?.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs?.length>0 && <div className="tab-content">{tabs[activeTab]?.content}</div>}
    </div>
  );
};

export default VerticalTabs;
