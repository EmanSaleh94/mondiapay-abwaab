import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../../assets/Logo.svg";
import Styles from "./styles.module.css";

const{logoPositionInMobile,responsiveLogo,navStyle}= Styles

function Nav() {
  return (
    <>
      <Navbar className={navStyle}>
        <Container fluid className={logoPositionInMobile}>
          <Navbar.Brand href="#home" >
            <img
              src={Logo}
              className={`d-inline-block align-top ${responsiveLogo}`}
              alt="Abwaab Logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;
