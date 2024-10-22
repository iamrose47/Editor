import React from "react";
import Editor from "./MarkdownEditor/Editor";

function MarkdownEditor() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
      <Editor />
    </div>
  );
}

export default MarkdownEditor;
