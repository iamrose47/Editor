import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Footer({ author = "Soumyajit" }) { // Made author dynamic
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <Container fluid className="footer text-center py-3"> {/* Added padding and center text */}
        Copyright © {year} | Made with <i className="far fa-heart"></i> {author}
      </Container>
    </footer>
  );
}

export default Footer;
