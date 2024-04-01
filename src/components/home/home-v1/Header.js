"use client";

// import MainMenu from "@/components/common/MainMenu";
// import SidebarPanel from "@/components/common/sidebar-panel";
// import LoginSignupModal from "@/components/common/login-signup-modal";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";


const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [data, setData]=useState([])

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  useEffect(()=>{
    const { data } = JSON.parse(localStorage.getItem("userInfo"))?JSON.parse(localStorage.getItem("userInfo")):JSON.parse(sessionStorage.getItem("userInfo"))||{};
     setData(data)
  },[])
  console.log(data)
  const hadleRemoveLoginCrediantial=()=>{
    if (window.sessionStorage.getItem('userInfo') !== null) {
      window.sessionStorage.removeItem('userInfo')
  } else {
    localStorage.removeItem("userInfo");
  } 
  }
  return (
    <>
      {/* End Header */}
      <div className="top-header d-none d-sm-block"> 
    <div className="container d-flex flex-wrap">
      <ul className="nav me-auto align-items-center">
        <li className="nav-item d-flex">
          <span className="nav-link">
            Call Us:
            <a href="tel:+91 1538606074">
              +91 1538606074
            </a>
          </span>
        </li>
        <li className="nav-item d-none d-lg-flex">
          <span className="hori-devider"></span>
        </li>
        <li className="nav-item d-flex">
          <span className="nav-link">
            Mail Us:
            <a href="mailto:info@reviewbee.com">
              info@reviewbee.com
            </a>
          </span>
        </li>
      </ul>
      <ul className="nav align-items-center">
        <li className="nav-item pe-md-2">
          <a className="nav-link">
            Follow Us
          </a>
        </li>
        <li className="nav-item d-none d-lg-flex">
          <span className="hori-devider"></span>
        </li>
        <li className="nav-item">
          <a className="nav-link pe-0" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link pe-0" href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link pe-0" href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <header className="header" id="navbar">
    <nav className="navbar navbar-expand-lg p-0">
      <div className="container">
        <Link className="navbar-brand p-0" href="/">
          <img src="assets/imgs/logo.png" alt="" className="img-fluid" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link   className="nav-link" href="/features"> Features </Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/pricing"> Pricing </Link>
              </li>
              <li className="nav-item">
                {data?<Link className="nav-link" href="/login" onClick={hadleRemoveLoginCrediantial}>
                  <i className="fas fa-user secondary-color me-2"></i>
                 Logout
                </Link>:
                <Link className="nav-link" href="/login">
                  <i className="fas fa-user secondary-color me-2"></i>
                  Login
                </Link>}
                
            
              </li>
              {/* <li className="nav-item">
                {data?<Link className="nav-link" href="/review"> Review </Link>:""}
              </li> */}
              <li className="nav-item" >
                <Link className="btn btn-secondary text-uppercase" href="/register"> Try For Free </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
    </>
  );
};

export default Header;
