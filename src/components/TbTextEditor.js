import React from "react";
import ReactQuill from "react-quill";
import TbEditorToolbar, { modules, formats } from "./TbEditorToolbar";
import "react-quill/dist/quill.snow.css";
import { Grid } from "../elements/TbIndex";
import styled from "styled-components";
import "../shared/style.css";

export const TbTextEditor = ({
  checkState,
  setCheckState,
  setContent,
  content,
}) => {
  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div className="text-editor">
      <Box>
        <EboxOne>
          <Grid width="20%" height="100%" flex="flex">
            <input
              onChange={(e) => {
                setCheckState(!e.target.checked);
              }}
              type="checkbox"
              id="check"
              className="checkcss"
            />
          </Grid>
          <Grid width="80%" height="100%" flex="flex">
            <label htmlFor="check" className="labelcss">
              나만 볼래요
            </label>
          </Grid>
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
  padding: 0 20px;
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
`;

const EboxTwo = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Box2 = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eee;
`;

export default TbTextEditor;
