

const MarkDownPreview = () => {
  return (
    <>
      <section>
        <label htmlFor="preview" className="label-preview">
          Preview
          <img
            src="./src/img/html.png"
            alt="html Icon"
            width={24}
            height={24}
          />
        </label>
        <p
          className="preview-text"
          name="preview"
          id="preview"
          placeholder="Look what happens..."
        ></p>
      </section>
    </>
  );
};

export default MarkDownPreview;
