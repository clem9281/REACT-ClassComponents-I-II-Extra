import React from "react";
import ImageTile from "./ImageTile";
import ImageForm from "./ImageForm";

class Gallery extends React.Component {
  render() {
    return (
      <section className="gallery">
        {/* Add the ImageForm back AFTER you have the tiles rendering */}
        {/* <ImageForm /> */}
        <div className="tiles">
          {/* Iterate over the images and render an ImageTile for each image */}
        </div>
      </section>
    );
  }
}

export default Gallery;
