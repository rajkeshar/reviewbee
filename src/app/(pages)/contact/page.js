"use client"
import Footer from "@/components/common/default-footer";
import Header from "@/components/home/home-v1/Header";
import { addContact } from "@/services";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react"

// export const metadata = {
//   title: "Contact-ReviewBee",
// };

const Features = () => {
  const [contactForm, setContactForm]= useState({name:"", email:"", message:""})
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  // Function to handle form submission
  const handleContactForm =async (event) => {
    event.preventDefault();
    console.log("Form submitted:", contactForm);
     await addContact(contactForm);
    setContactForm({ name: "", email: "", message: "" });
  };
  return (
    <>
       <Header/>
      <section className="main">
    <div className="content-bg section-space">
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center justify-content-center justify-content-md-between">
          <div className="col-3 col-md-4 col-xl-2 text-center text-md-end">
            <img src="assets/imgs/bee.png" className="img-fluid mb-4" alt=""/>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="slider-caption text-center text-md-start">
              <h1 className="section-title text-uppercase">
                Contact Us
              </h1>
              <p className="details-text text-white">
                Please fill up the form below and we’ll
                get back to you shortly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-space scroll-hidden">
    <div className="container text-center position-relative">
      <div className="col-xl-10 mx-auto p-0">
        <div className="row justify-content-between">
          <div className="col-12 col-md-4 col-xl-4">
            <a href="tel: +91 1538606074">
              <div className="cate-conent-box contact-box">
                <img src="assets/imgs/call-icon.png" alt="" className="img-fluid cate-icon" />
                <h3 className="md-section-title">
                  Talk to Us
                </h3>
                <p className="details-text">
                  +91 1538606074
                </p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-4 col-xl-4">
            <a href="mailto:info@reviewbee.com">
              <div className="cate-conent-box contact-box">
                <img src="assets/imgs/email-icon.png" alt="" className="img-fluid cate-icon"/>
                <h3 className="md-section-title">
                  Email to Us
                </h3>
                <p className="details-text">
                  info@reviewbee.com
                </p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-4 col-xl-4">
            <div className="cate-conent-box contact-box">
              <img src="assets/imgs/location-icon.png" alt="" className="img-fluid cate-icon"/>
              <h3 className="md-section-title">
                Come to Us
              </h3>
              <p className="details-text">
                lorem Vermont 78
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bee-border d-none d-md-block">
      <img src="assets/imgs/bee-border.png" className="img-fluid" alt=""/>
    </div>
  </section>
  <section className="section-space contact-form-section">
    <div className="container">
      <div className="row justify-content-between flex-xl-row-reverse align-items-center">
        <div className="col-12 col-md-12 col-xl-5">
          <div className="text-center text-xl-start my-4">
            <img src="assets/imgs/form-icon.png" alt="" className="img-fluid col-8 col-md-8 mb-3"/>
            <h2 className="section-title">
              Your Simple And Innovative
              Solution For Review Management
            </h2>
            <p className="details-text">
              Let your customers showcase your business success! Our simple and innovative solution for review
              management improves all of your business’ metrics by allowing you to automatically and easily request,
              display, and monitor your top customer reviews.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-12 col-xl-7 pb-4 pb-xl-0">
          <form action="" className="ct-form">
            <h3 className="md-section-title fw-bold">
              Send us a Message
            </h3>
            <div className="mb-4">
              <input type="text" className="form-control" placeholder="Full Name" name="name" value={contactForm.name} onChange={handleInputChange}/>
            </div>
            <div className="mb-4">
              <input type="text" className="form-control" placeholder="Email Address" name="email" value={contactForm.email} onChange={handleInputChange}/>
            </div>
            <div className="mb-4">
              <textarea rows="4" className="form-control" placeholder="How can i help" name="message" value={contactForm.message} onChange={handleInputChange}></textarea>
            </div>
            <a href="" className="btn btn-secondary" onClick={handleContactForm}>
              Get Started Now
            </a>
            <img src="assets/imgs/angle-icon.png" className="form-angle-icon" alt="" />
          </form>
        </div>
      </div>
    </div>
  </section>
  <section className="section-space scroll-hidden pb-2">
    <div className="container position-relative">
      <iframe  className="map-iframe" src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  </section>

  <section className="section-space">
    <div className="container">
      <div className="newsletter-wrapper">
        <div className="section-title">
          <h2 className="section-title text-uppercase">
            Get started for free with a 14 day trial
          </h2>
          <p className="details-text">
            No Credit Card Required
          </p>
          <a href="" className="btn btn-secondary">
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  </section>
  <Footer />
    </>
  );
};

export default Features;
