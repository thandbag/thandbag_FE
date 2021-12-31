import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../shared/style.css";

const Editor = () => {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data="<p>내용을 작성하세요</p>"
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
        }}
      />
    </div>
  );
};

export default Editor;
