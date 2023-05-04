import React from "react";
import Image from "./Image";
import "./images.css"

const ImageList = ({ images }) => {// list of all the images
  return (
    <div className="image-list">
      {images.map((image) => (
        <Image key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
