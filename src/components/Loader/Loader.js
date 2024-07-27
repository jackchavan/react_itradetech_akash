import { BeatLoader } from "react-spinners";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="loading-container">
      <div className="pos-center">
        <BeatLoader color="#ffffff" margin={20} size={30} />
      </div>
    </div>
  );
};

export default Loader;
