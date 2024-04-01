"use client"
import { newletterSubscription } from "@/services";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import ContactMeta from "./ContactMeta";
// import AppWidget from "./AppWidget";
// import Social from "./Social";
// import Subscribe from "./Subscribe";
// import MenuWidget from "./MenuWidget";
// import Copyright from "./Copyright";

const Footer = () => {
  const [newletters, setNewsLetter]=useState("")
  console.log(newletters)
  const handleSubscribeNewsLetter=async()=>{
    if (newletters === "") {
      return alert('Please enter your email address')
    } else {
      const  response = await newletterSubscription({email:newletters});
        console.log(response); 
        setNewsLetter("")
        if(response.status==200){
        toast.success('Subscribed to newsletter')
      }else{
        toast.error('Error in Subscribing  newsletter')
      }
      } 
   console.log("newsLetter")
  }
  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
     <footer className="footer">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-12 col-xl-4 col-xxl-4">
          <h3 className="ft-title">
            About us
          </h3>
          <p className="details-text">
            With our customisable widget, you’ll find it quick and simple to embed your customers’ Google reviews into
            your website with just a couple of clicks, increasing conversions and building up customer trust in your
            brand.
          </p>
        </div>
        <div className="col-12 col-xl-4 col-xxl-3">
          <div className="row">
            <div className="col-6">
              <h3 className="ft-title">
                Resource
              </h3>
              <div className="mb-3">
                <Link href="/blog" className="ft-links">
                  Blog
                </Link>
              </div>
              <div className="mb-3">
                <Link href="/pricing" className="ft-links">
                  Pricing
                </Link>
              </div>
              <div className="mb-3">
                <Link href="/contact" className="ft-links">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-6">
              <h3 className="ft-title">
                Support
              </h3>
              <div className="mb-3">
                <a href="" className="ft-links">
                  Help Center
                </a>
              </div>
              <div className="mb-3">
                <a href="" className="ft-links">
                  Privacy Policy
                </a>
              </div>
              <div className="mb-3">
                <a href="" className="ft-links">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-4 col-xxl-3">
          <h3 className="ft-title">
            Stay In Touch
          </h3>
          <form action="" className="d-flex email-form mb-2">
            <input type="text" className="form-control" placeholder="Email address" value={newletters} onChange={(e)=>{setNewsLetter(e.target.value)}}/>
            <button className="btn" type="button" onClick={handleSubscribeNewsLetter}>
              <img src="assets/imgs/email-ic.png" alt="" className="img-fluid"/>
            </button>
          </form>
          <p className="details-text">Stay tuned for our latest reviews</p>
        </div>
      </div>
    </div>
    <img src="assets/imgs/footer-bee-bg.png" className="footer-bee-img mt-4 d-none d-lg-block" alt=""/>
    <div className="container">
      <div className="row justify-content-between align-items-end footer-bee-bg">
        <div className="col-12 col-lg-4">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link ps-0" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ps-0" href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ps-0" href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-4 text-center  d-none d-lg-block">
          <a href="">
            <img src="assets/imgs/footer-bee.png" className="footer-bee" alt=""/>
          </a>
        </div>
        <div className="col-12 col-lg-4">
          <p className="details-text m-0">
            © 2024 review bee Reviews | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
    </>
  );
};

export default Footer;
