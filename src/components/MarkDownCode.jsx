import React, { useState } from "react";

const MarkDownCode = () => {
  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };
 
  return (
    <>
      <h1>MarkDown Previewer</h1>
      <section className="editor">
        <label htmlFor="editor" className="label-editor">
          Editor
          <img
            src="./src/img/markdown-icon-size_24.png"
            alt="Md Icon"
            className="md-icon"
          />
        </label>
        <textarea
          className="editor-text"
          name="editor"
          id="editor"
          placeholder="Write here you MarkDown code"
          //onChange={handleChange}
          onInput={handleInput}
          value={text}
        ></textarea>
      </section>
    </>
  );
};

export default MarkDownCode;
