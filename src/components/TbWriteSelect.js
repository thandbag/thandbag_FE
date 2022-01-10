import { useState } from "react";
import "../shared/style.css";

const TbWriteSelect = ({ category, setCategory }) => {
  const [isActive, setIsActive] = useState(false);

  const options = ["공부", "진로고민", "대인관계", "가정문제", "연애", "기타"];

  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {category}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <div
              onClick={(e) => {
                setCategory(option);
                setIsActive(false);
              }}
              className="dropdown-item"
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

export default TbWriteSelect;
