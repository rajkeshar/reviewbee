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
import { getPricePlan } from "@/services";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// export const metadata = {
//   title: "Pricing-ReviewBee",
// };

const Features = () => {
  const [priceList, setPriceList]=useState([])
  const [isLoading, setIsLoading]=useState(true)
 useEffect(()=>{
   const list = getPricePlan().then((res)=>{
    setPriceList(res.data.data);
     setIsLoading(false)
   })
 },[])
 const convertReviewToArray = (review) => {
  return review.split(',');
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
          <div className="col-12 col-md-6 col-xl-5">
            <div className="slider-caption text-center text-md-start">
              <h1 className="section-title text-uppercase">
                Pricing
              </h1>
              <p className="details-text text-white">
                Nothing should come between you and
                authentic reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-space scroll-hidden">
    <div className="container position-relative">
      <div className="text-center">
        <h2 className="section-title">
          Choose A Plan That’s Right For You
        </h2>
        <p className="details-text mt-lg-4">
          Nothing should come between you and authentic reviews. That’s why our newest features- including video
          reviews,
          social proof and influencer sourcing are your at no additional cost.
        </p>
      </div>
      <div className="row">
          {priceList.map((singlePrice,index)=>{
            console.log(singlePrice)
            return(
              <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <div className="px-xl-3">
                <div className="pricing-box">
                  <h3 className="h3 fw-bold">{singlePrice.titile}</h3>
                  <p className="md-section-title">
                    <span className="h3">{singlePrice.offer_price}</span> monthly review invites
                  </p>
                  <div className="d-flex align-items-center justify-content-center my-4">
                    <span className="h1 fw-bold price">${singlePrice.price}</span>
                    <span className="h4 ms-2">/mo</span>
                  </div>
                  <p className="details-text">
                   {singlePrice.short_description}
                  </p>
                  <div>
                  {convertReviewToArray(singlePrice.review).map((review, index) => (
                      <p key={index} className="details-text d-flex align-items-center justify-content-center">
                      <i className="fas fa-check me-2"></i>
                      {review}
                    </p>
                  ))}
                    {/* <p className="details-text d-flex align-items-center justify-content-center">
                      <i className="fas fa-check me-2"></i>
                      Company Reviews
                    </p>
                    <p className="details-text d-flex align-items-center justify-content-center">
                      <i className="fas fa-check me-2"></i>
                      Product Reviews
                    </p>
                    <p className="details-text d-flex align-items-center justify-content-center">
                      <i className="fas fa-check me-2"></i>
                      Video Reviews
                    </p>
                    <p className="details-text d-flex align-items-center justify-content-center">
                      <i className="fas fa-check me-2"></i>
                      Google Seller Ratings
                    </p>
                    <p className="details-text d-flex align-items-center justify-content-center">
                      <i className="fas fa-check me-2"></i>
                      Google Rich Snippets
                    </p> */}
                  </div>
                  <a href="#" className="btn btn-secondary my-3">
                    free trial! 
                  </a>
                </div>
              </div>
            </div>
            )
           
          })}
        {/* <div className="col-12 col-sm-6 col-lg-4">
          <div className="px-xl-3">
            <div className="pricing-box">
              <h3 className="h3 fw-bold">Essential</h3>
              <p className="md-section-title">
                <span className="h3">50</span> monthly review invites
              </p>
              <div className="d-flex align-items-center justify-content-center my-4">
                <span className="h1 fw-bold price">$30</span>
                <span className="h4 ms-2">/mo</span>
              </div>
              <p className="details-text">
                Display stars in Google organic search results
                and showcase reviews on your website.
              </p>
              <div>
                <p className="details-text d-flex align-items-center justify-content-center">
                  <i className="fas fa-check me-2"></i>
                  Company Reviews
                </p>
                <p className="details-text d-flex align-items-center justify-content-center">
                  <i className="fas fa-check me-2"></i>
                  Product Reviews
                </p>
                <p className="details-text d-flex align-items-center justify-content-center">
                  <i className="fas fa-check me-2"></i>
                  Video Reviews
                </p>
                <p className="details-text d-flex align-items-center justify-content-center">
                  <i className="fas fa-check me-2"></i>
                  Google Seller Ratings
                </p>
                <p className="details-text d-flex align-items-center justify-content-center">
                  <i className="fas fa-check me-2"></i>
                  Google Rich Snippets
                </p>
              </div>
              <a href="#" className="btn btn-secondary my-3">
                free trial! 
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="px-xl-3">
            <div className="pricing-box">
              <h3 className="h3 fw-bold">Small Business</h3>
              <p className="md-section-title">
                <span className="h3">500</span> monthly review invites
              </p>
              <div className="d-flex align-items-center justify-content-center my-4">
                <span className="h1 fw-bold price">$99</span>
                <span className="h4 ms-2">/mo</span>
              </div>
              <p className="details-text">
                Display stars in Google organic search results
                and showcase reviews on your website.
              </p>
              <div>
                <p className="details-text d-flex align-items-center justify-content-center">
                  <i className="fas fa-check me-2"></i>
                  Company Reviews
                </p>
                <p className="details-text d-flex align-items-center justify-content-center">
                  <i className="fas fa-check me-2"></i>
                  Product Reviews
                </p>
                <p className="details-text d-flex align-items-center justify-content-center">
                  <i className="fas fa-check me-2"></i>
                  Video Reviews
                </p>
                <p className="details-text d-flex align-items-center justify-content-center">
                  <i className="fas fa-check me-2"></i>
                  Google Seller Ratings
                </p>
                <p className="details-text d-flex align-items-center justify-content-center">
                  <i className="fas fa-check me-2"></i>
                  Google Rich Snippets
                </p>
              </div>
              <a href="#" className="btn btn-secondary my-3">
                free trial! 
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="px-xl-3">
            <div className="pricing-box">
              <h3 className="h3 fw-bold">Growing Business</h3>
              <p className="md-section-title">
                <span className="h3">2500</span> monthly review invites
              </p>
              <div className="d-flex align-items-center justify-content-center my-4">
                <span className="h1 fw-bold price">$180</span>
                <span className="h4 ms-2">/mo</span>
              </div>
              <p className="details-text">
                Display stars in Google organic search results
                and showcase reviews on your website.
              </p>
              <div>
                <p className="details-text d-flex align-items-center justify-content-center">
                  <i className="fas fa-check me-2"></i>
                  Company Reviews
                </p>
                <p className="details-text d-flex align-items-center justify-content-center">
                  <i className="fas fa-check me-2"></i>
                  Product Reviews
                </p>
                <p className="details-text d-flex align-items-center justify-content-center">
                  <i className="fas fa-check me-2"></i>
                  Video Reviews
                </p>
                <p className="details-text d-flex align-items-center justify-content-center">
                  <i className="fas fa-check me-2"></i>
                  Google Seller Ratings
                </p>
                <p className="details-text d-flex align-items-center justify-content-center">
                  <i className="fas fa-check me-2"></i>
                  Google Rich Snippets
                </p>
              </div>
              <a href="#" className="btn btn-secondary my-3">
                free trial! 
              </a>
            </div>
          </div>
        </div> */}
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

export default Features;
