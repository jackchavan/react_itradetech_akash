import React from "react";
import Routing from "./router";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Loader from "./components/Loader/Loader";

function App() {
  const { loading } = useSelector((state) => state.common);

  return (
    <div>
      <Routing />
      <ToastContainer />
      {loading && <Loader />}
    </div>
  );
}

export default App;
