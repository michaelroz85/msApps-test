import React from "react";
import "./images.css"
import Popup from "./Popup.js";
import { useState } from "react";
const Image = ({ image }) => {
    const { webformatURL, tags} = image;

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);


    return ( //show every image
        <div className="image" >
            <img
                src={webformatURL}
                alt={tags}
                style={{
                    width: '20vw',
                    height: "30vh",
                    borderRadius: '10px'
                }}
                onClick={toggleModal}
            />
             {showModal && (<Popup image={image} onClose={toggleModal}> </Popup>)}
        </div>
    );
};

export default Image;
