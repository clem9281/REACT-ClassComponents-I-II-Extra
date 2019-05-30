import React from "react";
import ImageTile from "./ImageTile";

// check out data.js to see the structure of images
import images from "../data/data";

class Gallery extends React.Component {
  // Needs state, also need to change values of inputs
  handleChanges = () => {};
  handleSubmit = () => {};
  render() {
    return (
      <section className="gallery">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="source">Image Source</label>
          <input
            type="text"
            name="source"
            id="source"
            placeholder="Image Source"
            onChange={this.handleChanges}
            value=""
          />
          <label htmlFor="caption">Image Caption</label>
          <input
            type="text"
            name="caption"
            id="caption"
            placeholder="Image Caption"
            onChange={this.handleChanges}
            value=""
          />
          <label htmlFor="altText">Alt Text</label>
          <input
            type="text"
            name="altText"
            id="altText"
            placeholder="Alt Text"
            onChange={this.handleChanges}
            value=""
          />
          <button>Submit</button>
        </form>
        <div className="tiles">
          {/* Iterate over the images and render an ImageTile for each image */}
        </div>
      </section>
    );
  }
}

export default Gallery;
