import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../../assets/Logo.svg";
import Styles from "./styles.module.css";
import {useLocation, useNavigate} from "react-router-dom";


const{logoPositionInMobile,responsiveLogo,navStyle,  backButtonWrapper}= Styles

function Nav() {
  const navigate = useNavigate();

  const handleBackBtnNavigate= ()=>{
    navigate(-1)
  }

  const location = useLocation();
  const [showBackBtn , setShowBackBtn]=useState(true)

  useEffect(() => {
    (location.pathname ==='/selectclass' || location.pathname ==='/')
        ? setShowBackBtn(false)
        : setShowBackBtn(true)
  });
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
        {showBackBtn? (<div className={backButtonWrapper} onClick={handleBackBtnNavigate}>
        </div>): ''}
      </Navbar>
    </>
  );
}

export default Nav;
