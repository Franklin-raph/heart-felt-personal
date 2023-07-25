import React from "react";
import { useNavigate } from "react-router-dom";

const Occasions = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "0 3rem" }}>
      <div className="parent-container-padding flex-between occasion-tab">
        <button className="occasions flex-between g-1">
          <p>Occasions</p>
          <i className="ri-arrow-down-s-line"></i>
        </button>
        <ul className="flex-between g-3">
          <li onClick={()=> navigate("/upload-card-cover")}>Birthday</li>
          <li>Annivasary</li>
          <li>Goodwill</li>
          <li>Festival</li>
          <li>Sympathy</li>
          <li>Love</li>
          <li>Relationship</li>
        </ul>
        <button className="occasions" onClick={() => navigate("/try-demo")}>
          Try Demo
        </button>
      </div>
    </div>
  );
};

export default Occasions;
