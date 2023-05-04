import React from "react";
import "./Popup.css"

const Popup = ({ image, onClose }) => {//show all the data of the image
  const {webformatURL, tags, user, downloads, collections,comments, id, imageHeight, imageWidth, largeImageURL, likes, pageURL, previewHeight, previewWidth, type, user_id, userImageURL, views, webformatHeight, webformatWidth} = image;
  const handleClose = () => {onClose()}

  return (
    <div className="pop-up" onClick={onClose}>
      <div className="pop-up__content" onClick={(e) => e.stopPropagation()}>
        <img src={webformatURL} alt={tags} />
        <div>
          <h3>tags:{tags}</h3>
          <p>Uploaded by: {user}</p>
          <p>Downloads: {downloads}</p>
          <p>Collections: {collections}</p>
          <p>Downloads: {downloads}</p>
          <p>comments: {comments}</p>
          <p>id: {id}</p>
          <p>imageHeight: {imageHeight}</p>
          <p>imageWidth: {imageWidth}</p>
          <p>largeImageURL: {largeImageURL}</p>
          <p>likes: {likes}</p>
          <p>pageURL: {pageURL}</p>
          <p>previewHeight: {previewHeight}</p>
          <p>previewWidth: {previewWidth}</p>
          <p>type: {type}</p>
          <p>userImageURL: {userImageURL}</p>
          <p>user_id: {user_id}</p>
          <p>views: {views}</p>
          <p>webformatHeight: {webformatHeight}</p>
          <p>webformatURL: {webformatURL}</p>
          <p>webformatWidth: {webformatWidth}</p>
        </div>
        <button onClick={handleClose} className="pop-up__close">Close</button>
      </div>
    </div>
  );
};

export default Popup;