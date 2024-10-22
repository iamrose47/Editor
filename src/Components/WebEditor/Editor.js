import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/matchtags";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";

function Editor(props) {
  // Validate the mode to prevent unsupported languages
  const validModes = ["xml", "javascript", "css"];
  const mode = validModes.includes(props.launguage) ? props.launguage : "text/plain";

  return (
    <div>
      <CodeMirror
        value={props.value}
        options={{
          mode: mode,
          theme: "material",
          lineNumbers: true,
          scrollbarStyle: "null",
          lineWrapping: true,
          autoCloseTags: true,
          matchTags: true,
          autoCloseBrackets: true,
          matchBrackets: true,
        }}
        onBeforeChange={(editor, data, value) => {
          props.onChange(value);
        }}
      />
    </div>
  );
}

// Prop Types for validation
Editor.propTypes = {
  value: PropTypes.string.isRequired,
  launguage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Editor;
