import React from "react";

const ImageForm = props => {
  // The inputs need their values set, and they need an onchange handler
  // The form needs a submit handler
  return (
    <form>
      <label htmlFor="source">Image Source</label>
      <input
        type="text"
        name="source"
        id="source"
        placeholder="Image Source"
        value=""
      />
      <label htmlFor="caption">Image Caption</label>
      <input
        type="text"
        name="caption"
        id="caption"
        placeholder="Image Caption"
        value=""
      />
      <label htmlFor="altText">Alt Text</label>
      <input
        type="text"
        name="altText"
        id="altText"
        placeholder="Alt Text"
        value=""
      />
      <button>Submit</button>
    </form>
  );
};

export default ImageForm;
