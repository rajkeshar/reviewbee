// import CallToActions from "@/components/common/CallToActions";
// import DefaultHeader from "@/components/common/DefaultHeader";
// import Partner from "@/components/common/Partner";
// import Footer from "@/components/common/default-footer";
// import MobileMenu from "@/components/common/mobile-menu";
// import Agents from "@/components/pages/about/Agents";
// import Features from "@/components/pages/about/Features";
// import FunFact from "@/components/pages/about/FunFact";
// import Mission from "@/components/pages/about/Mission";
"use client"
import Footer from "@/components/common/default-footer";
import Header from "@/components/home/home-v1/Header";
import { getBlogDetails } from "@/services";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// export const metadata = {
//   title: "Blog-ReviewBee",
// };

const BlogPage = ({params}) => {
  const [blogDetails, setBlogDetails]=useState([])
  useEffect(()=>{
    const list = getBlogDetails(params.blogId).then((res)=>{
      console.log(res.data.data)
      setBlogDetails(res.data.data);
    })
  },[params.blogId])
  return (
    <>
    <Header />
  <section className="main">
    <div className="content-bg section-space">
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center justify-content-center justify-content-md-between">
          <div className="col-3 col-md-4 col-xl-2 text-center text-md-end">
            <img src="assets/imgs/bee.png" className="img-fluid mb-4" alt=""/>
          </div>
          <div className="col-12 col-md-6 col-xl-5">
            <div className="slider-caption text-center text-md-start">
              <h1 className="section-title text-uppercase">
               {blogDetails.title}
              </h1>
              <p className="details-text text-white">
                Just sit back, relax, and see your revenue &
                online reputation get the boost that it needs!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-space">
    <div className="container">
      <div className="row text-center text-lg-start justify-content-center">
        <div className="col-10 col-md-6 col-lg-6 col-xl-5">
          <img src={`http://174.138.3.35/collect_review/public/image/${blogDetails.image}`} alt="" className="img-fluid my-4"/>
        </div>
        <div className="col-12 col-lg-6 col-xl-7">
          <h2 className="section-title">
            The Incredible Features of
            Our Review Generation Software
          </h2>
          <p className="details-text">
          {blogDetails.description}
          </p>
          <div className="my-3">
            <span className="features-label">
              <img src="assets/imgs/f-icon1.png" alt=""/>
              Customisable Templates
            </span>
            <span className="features-label">
              <img src="assets/imgs/f-icon2.png" alt=""/>
              Email & SMS Capabilities
            </span>
          </div>
          <a href="" className="btn btn-secondary">
            Get Started for Free
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="section-space review-section">
    <div className="container d-flex justify-content-center justify-content-lg-between flex-wrap align-items-center">
      <div className="d-flex align-items-center">
        <img src="assets/imgs/google-icon.png" alt="" className="img-fluid google-icon"/>
        <div>
          <h2 className="section-title">Google Reviews</h2>
          <p className="details-text">Collect and display Google reviews.</p>
        </div>
      </div>
      <a href="" className="btn btn-secondary mt-4 my-lg-2">
        Get Started Now with Our Free Trial!
      </a>
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

export default BlogPage;
