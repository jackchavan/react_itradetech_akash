import React from "react";
import Routing from "./router";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";

function App() {
  const { loading } = useSelector((state) => state.common);

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
