import React from "react";
import "./Footer.css";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  const socialIcons = [
    {
      icon: "/assets/images/CircleFbButton.svg",
    },
    {
      icon: "/assets/images/CircleTwitterButton.svg",
    },
    {
      icon: "/assets/images/CircleLinkedInButton.svg",
    },
    {
      icon: "/assets/images/CircleYoutubeButton.svg",
    },
  ];
  return (
    <div className="footer">
      <Row className="m-0 p-0">
        {socialIcons.map((items, idx) => {
          return (
            <Col className="ms-1" style={{ cursor: "pointer" }} key={idx}>
              <img className="w-75" src={items.icon} alt="not found" />
            </Col>
          );
        })}
      </Row>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap:".5rem"
        }}
      >
        <p className="m-0 p-0" style={{ fontSize: ".8rem" }}>
          Example@email.com
        </p>
        <p className="m-0 p-0" style={{ fontSize: ".8rem" }}>
          Copyright © 2020 Name. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
