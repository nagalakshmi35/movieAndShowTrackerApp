import { BiSortAlt2 } from "react-icons/bi";
import { LuFilter } from "react-icons/lu";
import "./index.css";

const SortFilterFeatures = (props) => {
  const {sortItemsList} = props

  const sortAlphabetically = () => {
    sortItemsList()
  }

  return (
    <div className="sort-container">
      <button className="icon-container" type='button' onClick={sortAlphabetically}>
        <BiSortAlt2 className="sort-icon"/>
        <span className="para-name">Sort</span>
      </button>
      <div className="icon-container">
        <LuFilter className="filter-icon"/>
        <p className="para-name">Filter</p>
      </div>
    </div>
  );
};

export default SortFilterFeatures;
