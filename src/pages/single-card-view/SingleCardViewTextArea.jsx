import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const SingleCardViewTextArea = () => {
  const [value, setValue] = useState("");
  //
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", { list: "ordered" }, { list: "bullet" }, { font: [] }],
      [{ align: [] }, { color: [] }, { background: [] }],

      // [],

      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      ["clean"], // remove formatting button
    ],
  };
  //
  return (
    <ReactQuill
      modules={modules}
      theme="snow"
      value={value}
      onChange={setValue}
    />
  );
};

export default SingleCardViewTextArea;
