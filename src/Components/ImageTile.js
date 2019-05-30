import React from "react";

const ImageTile = props => {
  return (
    <figure className="tile">
      <img src={props.source} alt={props.altText} />
      <figcaption>{props.caption}</figcaption>
    </figure>
  );
};

export default ImageTile;
