import React, { useRef } from "react";
import ReactQuill from "react-quill";
import TbEditorToolbar, { modules, formats } from "./TbEditorToolbar";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import { Button } from "../elements/TbIndex";
import { ReactComponent as CheckBox } from "../static/icons/checkBox.svg";

import "../shared/style.css";

export const TbTextEditor = ({
  checkState,
  setCheckState,
  setContent,
  content,
}) => {
  const handleChange = (value) => {
    setContent(value);
    console.log(checkState);
    console.log(content);
  };

  return (
    <div className="text-editor">
      <Box>
        <EboxOne>
          {/* 룡태님 버전 */}
          {/* <CheckBox width="23" height="23" />
          <Button
            margin="0 0 0 5px"
            text="나만 볼래요"
            bg="transparent"
            width="auto"
            ref={sharedCheckBoxRef}
          /> */}
          <input
            onChange={(e) => {
              setCheckState(e.target.checked);
            }}
            type="checkbox"
            id="check"
            className="checkcss"
          ></input>
          <label htmlFor="check" className="labelcss">
            나만 볼래요
          </label>
        </EboxOne>
        <EboxTwo>
          <TbEditorToolbar />
        </EboxTwo>
      </Box>
      <Box2>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={handleChange}
          placeholder={"텍스트를 입력하세요"}
          modules={modules}
          formats={formats}
        />
      </Box2>
    </div>
  );
};

const Box = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const EboxOne = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  margin-right: 10px;
`;

const EboxTwo = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box2 = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eee;
`;

export default TbTextEditor;
