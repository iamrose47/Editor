import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import sh1 from "../Assets/shape-1.svg";
import sh2 from "../Assets/shape-2.svg";
import sh3 from "../Assets/shape-3.svg";
import sh6 from "../Assets/shape-6.svg";
import homeImg from "../Assets/hero-img.png";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const wrapper = {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    position: "relative",
  };

  const btnStyle = {
    backgroundColor: "#5c4389",
    border: 0,
  };

  return (
    <div
      style={{ backgroundColor: "#2a283e", minHeight: "100vh", height: "auto" }}
    >
      <Container style={wrapper}>
        <img src={sh1} alt="decorative shape 1" style={{ left: 0, right: 0, margin: "auto", top: "90px", position: "absolute" }} className="shape" />
        <img src={sh2} alt="decorative shape 2" style={{ right: "380px", top: "280px", position: "absolute" }} className="shape" />
        <img src={sh3} alt="decorative shape 3" style={{ right: "88px", top: "230px", position: "absolute" }} className="shape" />
        <img src={sh6} alt="decorative shape 6" style={{ right: "272px", bottom: "0px", position: "absolute" }} className="shape" />
        
        <Row
          className="text-center"
          style={{
            alignItems: "center",
            paddingTop: "100px",
            paddingBottom: "50px",
          }}
        >
          <Col md={6}>
            <img
              src={homeImg}
              className="img-fluid"
              alt="hero representation of website coding"
              style={{ justifyContent: "center", padding: "30px" }}
            />
          </Col>
          <Col md={6}>
            <h2 style={{ color: "#f0c19e" }}>Code Websites From Anywhere</h2>
            <h5
              style={{
                textAlign: "justify",
                color: "rgb(154 179 205)",
                paddingTop: "10px",
              }}
            >
              With this online code editor, you can edit HTML, CSS, and
              JavaScript code, and preview your site instantly.
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/web">
              Web Editor
            </Button>

            <h2 style={{ color: "#f0c19e", paddingTop: "70px" }}>
              Generate README in Seconds
            </h2>
            <h5
              style={{
                textAlign: "justify",
                color: "rgb(154 179 205)",
                paddingTop: "10px",
              }}
            >
              Use our online markdown editor with a custom toolbar to make your
              README easily.
            </h5>
            <Button
              variant="primary"
              style={btnStyle}
              as={Link}
              to="/markdown"
            >
              Markdown Editor
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
