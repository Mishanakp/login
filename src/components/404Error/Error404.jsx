import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./Error404.css";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const handleClick = () => {
    navigate("/home");
  };
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img
        className="error-img"
        src="/assets/images/Error404.svg"
        alt="404 error"
      />
      <div className="error-btn" style={{ paddingTop: "3rem" }}>
        <CustomButton name="Go Home" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Error404;
