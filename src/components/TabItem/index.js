import { MdStars } from "react-icons/md";
import { GiAlliedStar } from "react-icons/gi";
import "./index.css";

const TabItem = () => {
  return (
    <div className="tab-container">
      <div className="tab-item">
        <button className="tab-button">
          <MdStars className="star-icon" />
        </button>
        <h1>Home</h1>
      </div>
      <div className="tab-item">
        <button className="tab-button">
          <GiAlliedStar className="star-icon" />
        </button>
        <h1>My List</h1>
      </div>
    </div>
  );
};

export default TabItem;
