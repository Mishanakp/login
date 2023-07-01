import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomInput from "../../components/CustomInput/CustomInput";
import "./SignIn.css"
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate()
  const inpData = [
    {
      type: "email",
      placeholder: "Username or email",
    },
    {
      type: "password",
      placeholder: "Password",
    },
  ];
  const socialIcons = [
    {
      icon:"/assets/images/CircleButton.svg"
    },
    {
      icon:"/assets/images/CircleFbButton.svg"
    },
    {
      icon:"/assets/images/CircleLinkedInButton.svg"
    },
    {
      icon:"/assets/images/CircleTwitterButton.svg"
    },
  ];

 const  handleClick = () =>{
  navigate('/home')
 }
  return (
    <Container>
      <Row className="m-0 p-0">
        <Col
          style={{
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "90vh",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "column",
              gap:"1rem"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
                gap:".8rem",
                fontSize:".8rem"
              }}
            >
              <h3 className="m-0 p-0 fw-bold">Sign In</h3>
              <p className="m-0 p-0 fw-bold">
                New user?{" "}
                <span style={{ color: "#69c8ff" }}>Create an account</span>
              </p>
            </div>
            <div
              style={{ display: "flex", gap: "1rem", flexDirection: "column" }}
            >
              {inpData.map((item, idx) => {
                return (
                  <CustomInput
                    type={item.type}
                    placeholder={item.placeholder}
                  />
                );
              })}
            </div>
            <div style={{display:"flex",gap:".7rem"}} >
              <input className="checkBox" type="checkbox"  />
              <p className="m-0 p-0 fw-bold" style={{fontSize:".7rem"}} >Keep me signed in</p>
            </div>
            <div style={{display:"flex",gap:".7rem",alignItems:"center",justifyContent:"center",width:"100%"}} >
              <CustomButton name="Sign In" handleClick={handleClick}/>
            </div>
            <div style={{display:"flex",gap:".7rem",alignItems:"center",justifyContent:"center",width:"100%"}} >
              <div style={{width:"5rem",height:".1rem",backgroundColor:"rgba(218, 218, 218, 0.801)"}}/> 
              <p className="m-0 p-0 fw-bold" style={{fontSize:".7rem"}}>Or Sign In With</p> 
              <div style={{width:"5rem",height:".1rem",backgroundColor:"rgba(218, 218, 218, 0.801)"}}/>
            </div>
            <div>
              <Row className="m-0 p-0" >
              {
                socialIcons.map((items,idx)=>{
                  return(
                  <Col className="ms-1" style={{cursor:"pointer"}} key={idx} >
                    <img className="w-75" src={items.icon} alt="not found" />
                  </Col>
                )
                })
              }
              </Row>
            </div>
          </div>
        </Col>

        <Col
          className="imgbox"
          style={{ height: "90vh" }}
        >
          <img
            style={{ width: "270px" }}
            src="/assets/images/Illustration.svg"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
