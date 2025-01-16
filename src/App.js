import React, { useEffect } from "react";
import Routing from "./router";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import TagManager from "react-gtm-module";
import { useLocation } from "react-router-dom"; // Import React Router Hook

function App() {
  const { loading } = useSelector((state) => state.common);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    // Initialize Google Tag Manager
    const tagManagerArgs = {
      gtmId: "GTM-NR6VFVV9", // Replace with your GTM Container ID
    };
    TagManager.initialize(tagManagerArgs);
  }, []); // Run once when the app starts

  useEffect(() => {
    // Track Page Views on Route Change
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        pagePath: location.pathname,
      },
    });
  }, [location]); // Runs every time the route changes

  return (
    <div className="d-flex flex-column vh-100 overflow-x-hidden">
      <Header />
      <Routing />
      <ToastContainer />
      {loading && <Loader />}
    </div>
  );
}

export default App;
