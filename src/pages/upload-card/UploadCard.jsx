import React, { useEffect, useRef, useState } from "react";
import UploadCardNav from "../../components/upload-card-nav/UploadCardNav";
import { useNavigate } from "react-router-dom";

const UploadCard = ({baseUrl}) => {
  const navigate = useNavigate();
  const [imgFile, setImgFile] = useState(null)
  console.log(baseUrl)
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)

  //
  const getUploadFile = async (e) => {
    // const file = e.target.files[0];
    // setImgFile(e.target.files[0])

    // console.log(file)
    console.log(imgFile)

    // let reader = new FileReader();

    // reader.onload = (e) => {
    //   const fileImg = e.target.result;
    //   localStorage.setItem("uploaded_card_img", fileImg);
    //   navigate("/preview-uploaded-card");
    // };
    // reader.readAsDataURL(file);

    const fd = new FormData();
    fd.append('image', imgFile)
    const response = await fetch(`${baseUrl}/upload`,{
      method:"POST",
      body: fd,
      headers:{
        Authorization: `Bearer ${user.accessToken}`
      }
    })
    const data = await response.json()
    console.log(data)

  };

  //
  return (
    <div className="upload-card">
      
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
          <input type="file" id="upload_card_input" onChange={(e) => setImgFile(e.target.files[0])} />
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
      <div className="upload-card-nav flex-between g-3">
        <button onClick={() => navigate("/upload-card-cover-birthday")}>
          Cancel
        </button>
        <div className="edit_and_continue">
          <button
            className="primary-button"
            // onClick={() => navigate("/preview-uploaded-card")}
            onClick={getUploadFile}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadCard;
