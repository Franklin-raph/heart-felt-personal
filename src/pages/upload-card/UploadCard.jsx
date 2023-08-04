import React, { useEffect, useRef, useState } from "react";
import UploadCardNav from "../../components/upload-card-nav/UploadCardNav";
import { useNavigate } from "react-router-dom";

const UploadCard = () => {
  const navigate = useNavigate();

  //
  useEffect(() => {
    setImageUploaded(localStorage.getItem("uploaded_card_img"));
  }, []);

  // states
  const [imageUploaded, setImageUploaded] = useState(
    localStorage.getItem("uploaded_card_img")
  );

  //
  const getUploadFile = (e) => {
    const file = e.target.files[0];

    let reader = new FileReader();

    reader.onload = (e) => {
      const fileImg = e.target.result;
      localStorage.setItem("uploaded_card_img", fileImg);
      setImageUploaded(fileImg);
    };
    reader.readAsDataURL(file);
  };

  //
  return (
    <div className="upload-card">
      <UploadCardNav />
      <div className="upload-card-container flex-center">
        <div className="header">
          <h2>What card cover will you use?</h2>
          <div className="flex-center g-2">
            <p onClick={() => navigate("/upload-card")}>Upload</p>
            <p onClick={() => navigate("/saved-card")}>Saved Covers</p>
          </div>
        </div>
        <div className="body">
          <label
            className="first_upload_card_label"
            htmlFor="upload_card_input"
          >
            {imageUploaded && (
              <img src={`${imageUploaded}`} className="uploaded_img" />
            )}
            {!imageUploaded && <i className="bx bx-images"></i>}
          </label>
          <input type="file" id="upload_card_input" onChange={getUploadFile} />
          <p>
            Please upload and image or,{" "}
            <label
              className="second_upload_card_label"
              htmlFor="upload_card_input"
            >
              Browse
            </label>{" "}
          </p>
          <p>Maximum 5mb file size. 440px width and 550px height recommended</p>
          <p>
            <span></span>Animated Gifs
          </p>
          <p>
            <span></span>Files should contain 50 frames or less
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadCard;
