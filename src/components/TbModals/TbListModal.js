import { useState } from "react";
import "../../shared/style.css";
import { ReactComponent as FilterIcon } from "../../static/icons/filter_alt.svg";
import { actionCreators as cardActions } from "../../redux/modules/card";
import { useDispatch } from "react-redux";

const TbListModal = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("전체");
  const options = ["전체", "터트림", "터트리는 중"];

  const clickFilter = (e) => {
    if (e.target.innerText == "터트림") {
      setIsActive(false);
      setSelected("터트림");
      dispatch(cardActions.searchCard(true));
    } else if (e.target.innerText == "터트리는중") {
      setIsActive(false);
      setSelected("터트리는중");
      dispatch(cardActions.searchCard(false));
    } else {
      setSelected("전체");
      setIsActive(false);
      dispatch(cardActions.searchCard("전체"));
    }
  };

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
          <div
            onClick={clickFilter}
            className="dropdown-item"
            id="ListFilter-item"
          >
            전체
          </div>
          <div
            onClick={clickFilter}
            className="dropdown-item"
            id="ListFilter-item"
          >
            터트림
          </div>
          <div
            onClick={clickFilter}
            className="dropdown-item"
            id="ListFilter-item"
          >
            터트리는중
          </div>
        </div>
      )}
    </div>
  );
};

export default TbListModal;
