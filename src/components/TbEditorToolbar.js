import React from "react";

// Modules object for setting up the Quill editor
export const modules = {
  toolbar: {
    container: "#toolbar",
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "underline",
  "strike",
  "blockquote",
  "background",
  "image",
  "color",
];

// Quill Toolbar component
export const TbEditorToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <button className="ql-header" value="1"></button>
      <button className="ql-header" value="2"></button>
      <select className="ql-color" />
      <select className="ql-background" />
      <button className="ql-underline" />
      <button className="ql-strike" />
      <button className="ql-image" />
    </span>
  </div>
);

export default TbEditorToolbar;
