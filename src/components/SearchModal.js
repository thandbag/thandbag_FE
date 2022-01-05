import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements/TbIndex";
import { history } from "../redux/configureStore";
import { ReactComponent as Arrow } from "../static/icons/arrow.svg";
import { ReactComponent as SearchIcon } from "../static/icons/icon_search.svg";
import { ReactComponent as SearchIconBlack } from "../static/icons/icon_search_black.svg";

const SearchModal = (setModal) => {
  return (
    <SearchArea>
      <SearchInput placeholder="제목이나 내용을 검색하세요"></SearchInput>
      <SearchIconIn>
        <SearchWrap>
          <SearchIconBlack />
        </SearchWrap>
      </SearchIconIn>
      <DeleteArea>
        <DeleteButton
          onClick={() => {
            setModal(false);
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
  width: 400px;
  height: 50px;
  background-color: #333333;
  position: absolute;
  right: 2px;
`;

const SearchInput = styled.input`
  width: 80%;
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
