import React, { useEffect, useRef, useState } from "react";
import UploadCardNav from "../../components/upload-card-nav/UploadCardNav";
import { useNavigate } from "react-router-dom";

const UploadCard = () => {
  const navigate = useNavigate();

  //
  const getUploadFile = (e) => {
    const file = e.target.files[0];

    let reader = new FileReader();

    reader.onload = (e) => {
      const fileImg = e.target.result;
      localStorage.setItem("uploaded_card_img", fileImg);
      navigate("/preview-uploaded-card");
    };
    reader.readAsDataURL(file);
  };

  //
  return (
    <div className="upload-card">
      <div className="upload-card-nav flex-between g-3">
        <button onClick={() => navigate("/upload-card-cover-birthday")}>
          Cancel
        </button>
        <div className="edit_and_continue">
          <button
            className="primary-button"
            onClick={() => navigate("/preview-uploaded-card")}
          >
            Continue
          </button>
        </div>
      </div>
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
            <i className="bx bx-images"></i>
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
