import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div>
      <p className="f3">
        {
          "This is the Magic Brain face detector, give it a try and you will be amazed!"
        }
      </p>
      <div className="center">
        <div className="pa4 br3 shadow-5 center form">
          <input
            className="f4 pa2 w-70 center"
            type="tex"
            onChange={onInputChange}
          ></input>
          <button
            className="w-30 grow f4 link ph3 pv2 dib white"
            onClick={onPictureSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
