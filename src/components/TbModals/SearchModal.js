import React, { useRef } from "react";
import styled from "styled-components";
import { Grid, Text } from "../../elements/TbIndex";
import { history } from "../../redux/configureStore";
import { ReactComponent as Arrow } from "../../static/icons/arrow.svg";
import { ReactComponent as SearchIcon } from "../../static/icons/icon_search.svg";
import { ReactComponent as SearchIconOrange } from "../../static/icons/icon_Search_Orange.svg";
import { actionCreators as cardActions } from "../../redux/modules/card";
import { useDispatch } from "react-redux";

const SearchModal = ({ setModal }) => {
  const dispatch = useDispatch();
  const searchInputRef = useRef(null);

  const cancelButtonClick = () => {
    dispatch(cardActions.getCardListDB());
    setModal(false);
  };

  const searchIconClick = () => {
    dispatch(cardActions.findCardDB(searchInputRef.current.value));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchIconClick();
    }
  };

  return (
    <SearchArea>
      <SearchInput
        ref={searchInputRef}
        onKeyDown={handleKeyDown}
        placeholder="제목이나 내용을 검색하세요"
      ></SearchInput>
      <SearchIconIn>
        <SearchWrap>
          <SearchIconOrange onClick={searchIconClick} />
        </SearchWrap>
      </SearchIconIn>
      <DeleteArea>
        <DeleteButton
          onClick={() => {
            cancelButtonClick();
          }}
        >
          <Text color="white">취소</Text>
        </DeleteButton>
      </DeleteArea>
    </SearchArea>
  );
};

const SearchWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SearchArea = styled.div`
  width: 375px;
  height: 50px;
  position: absolute;
  right: 2px;
`;

const SearchInput = styled.input`
  width: 70%;
  height: 60%;
  position: absolute;
  left: 10%;
  top: 20%;
  background-color: #333333;
  border: none;
  color: white;
  font-family: "KOTRAHOPE";
  src: url("../static/fonts/KOTRA_HOPE.ttf");
  font-size: 20px;
`;

const SearchIconIn = styled.div`
  width: 10%;
  height: 100%;
  background-color: #333333;
  position: absolute;
  left: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteArea = styled.div`
  width: 10%;
  height: 100%;
  background-color: #333333;
  position: absolute;
  left: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteButton = styled.button`
  width: 90%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #333333;
  cursor: pointer;
`;

export default SearchModal;
