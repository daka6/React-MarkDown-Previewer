import React from "react";
import { useState } from "react";
import Markdown from "react-markdown";
/*instalada la libreria npm install react-markdown*/
const MarkDownPrev = () => {
  const defaultT =
    "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\nYou can also make text **bold**... whoa!\n\nOr _italic_.\n\nOr... wait for it... **_both!_**\n\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org),\n\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n\n------------ | ------------- | -------------\n\nYour content can | be here, and it | can be here....\n\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n\n  - Some are bulleted.\n\n- With different indentation levels.\n\n        - That look like this.\n\n1. And there are numbered lists too.\n\n1. Use just 1s if you want!\n\n1. And last but not least, let's not forget embedded images:\n\n\n\n";
  const [text, setText] = useState(defaultT);

  const handleInput = (e) => {
    setText(e.target.value);
  };
  //   const handleChange = (e) => {
  //     setText(e.target.value);
  //   };

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
          value={text}
          onInput={handleInput}
        ></textarea>
      </section>
      <section className="preview">
        <label htmlFor="preview" className="label-preview">
          Preview
          <img
            src="./src/img/html.png"
            alt="html Icon"
            width={24}
            height={24}
          />
        </label>

        <div className="preview-text" name="preview" id="preview">
          <Markdown children={text} />
        </div>
      </section>
    </>
  );
};

export default MarkDownPrev;
