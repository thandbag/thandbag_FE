import { useState } from "react";
import "../shared/style.css";
import { ReactComponent as FilterIcon } from "../static/icons/filter_alt.svg";

const TbListModal = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("필터");

  const options = ["필터", "터트림", "터트리는 중"];

  return (
    <div className="dropdown" id="ListFilter">
      <div
        className="dropdown-btn"
        id="ListFilter-btn"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {selected} <FilterIcon width="23.5" height="23.5" />
      </div>
      {isActive && (
        <div className="dropdown-content" id="ListFilter-content">
          {options.map((option, index) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
              id="ListFilter-item"
              key={index}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TbListModal;
