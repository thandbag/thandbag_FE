import React from "react";
import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import quillEmoji from "react-quill-emoji";
import "react-quill-emoji/dist/quill-emoji.css";
import "../shared/style.css";
import { Grid } from "../elements/TbIndex";

// Modules object for setting up the Quill editor
export const modules = {
  toolbar: {
    container: "#toolbar",
  },
  "emoji-toolbar": true,
};

// Formats objects for setting up the Quill editor
export const formats = [
  "emoji",
  "underline",
  "strike",
  "video",
  "background",
  "color",
];

// Quill Toolbar component
export const TbEditorToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <Grid flex="flex" justify="flex-end">
        <button className="ql-emoji" />
      </Grid>
      <Grid flex="flex" justify="flex-end">
        <select className="ql-color" />
      </Grid>
      <Grid flex="flex" justify="flex-end">
        <select className="ql-background" />
      </Grid>
      <Grid flex="flex" justify="flex-end">
        <button className="ql-underline" />
      </Grid>
      <Grid flex="flex" justify="flex-end">
        <button className="ql-strike" />
      </Grid>
      <Grid flex="flex" justify="flex-end">
        <button className="ql-video" />
      </Grid>
    </span>
  </div>
);

export default TbEditorToolbar;
