import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../../assets/Logo.svg";
import Styles from "./styles.module.css";

function Nav() {
  return (
    <>
      <Navbar className={Styles.navStyle}>
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              className={`d-inline-block align-top ${Styles.responsiveLogo}`}
              alt="Abwaab Logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;
