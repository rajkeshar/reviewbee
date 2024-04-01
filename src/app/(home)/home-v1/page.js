
import Footer from "@/components/common/default-footer";
import Header from "@/components/home/home-v1/Header";
import Image from "next/image";
import Link from "next/link";
// import { useEffect } from 'react';

// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
export const metadata = {
  title: "Home-Review",
};

const Home_V1 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}
      <section className="main">
    <div className="home-slider">
      <div className="swiper home-main-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="container">
              <div className="row flex-lg-row-reverse align-items-center">
                <div className="col-12 col-lg-6">
                  <img src="assets/imgs/banner-img.png" className="img-fluid slide-img" alt=""/>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="slider-caption">
                    <div className="content">
                      <span className="text-uppercase slider-taglinge">
                        get Features
                      </span>
                      <h1 className="slide-name">
                         When Your 
                        <span className="d-block">
                        Opinion Matters</span>
                      </h1>
                      <p className="mb-4">
                      We understand the significance of customer feedback, and &quot;When Your Opinion Matters&quot; is not just a slogan for us; it&lsquo;s the foundation of our commitment to helping businesses thrive through the power of authentic reviews.
                      </p>
                      <a href="#" className="btn btn-default me-3">
                        Get Started For Free
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="container">
              <div className="row flex-lg-row-reverse align-items-center">
                <div className="col-12 col-lg-6">
                  <img src="assets/imgs/banner-img.png" className="img-fluid slide-img" alt=""/>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="slider-caption">
                    <div className="content">
                      <span className="text-uppercase slider-taglinge">
                        get Features
                      </span>
                      <h1 className="slide-name">
                        Discover Our
                        <span className="d-block">
                          Amazing Features</span>
                      </h1>
                      <p className="mb-4">
                        Our innovative review management software offers a host of fantastic features that make it
                        easier than ever to improve your brand reputation and maximise your revenue.
                      </p>
                      <a href="#" className="btn btn-default me-3">
                        Get Started For Free
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  </section>
      {/* Home Banner Style V1 */}
      <section className="section-space">
    <div className="container">
      <div className="row text-center text-lg-start">
        <div className="col-12 col-lg-6">
          <h2 className="section-title">
            One Solution for All Platforms
          </h2>
          <a href="" className="btn btn-secondary">
            Get Started for Free
          </a>
        </div>
        <div className="col-12 col-lg-6">
          <p className="details-text">
          Say goodbye to the hassle of navigating through multiple review platforms. Review Bee provides a seamless and single solution for managing reviews across various channels. Whether it&apos;s Facebook, Trustpilot, Google Reviews, or others, you can access and respond to all your reviews in one centralized location.
          </p>
        </div>
      </div>
      <div className="row justify-content-center text-lg-start">
        <div className="col-12 col-sm-6 col-lg-4 mt-5 position-relative">
          <img src="assets/imgs/cate-img.png" className="img-fluid cover-img rounded" alt=""/>
          <img src="assets/imgs/rate-icon.png" className="img-fluid rate-icon" alt=""/>
        </div>
        <div className="col-12 col-sm-6 col-lg-5 mt-5">
          <img src="assets/imgs/cate-img-2.png" className="img-fluid cover-img rounded" alt=""/>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mt-5">
          <img src="assets/imgs/bee-icon-large.png" className="img-fluid index-bee-icon" alt=""/>
        </div>
      </div>
    </div>
  </section>

  <section className="video-player">
    <img src="assets/imgs/video-img.png" className="video-img" alt="" />
    <button className="btn player-control" data-bs-toggle="modal" data-bs-target="#videoplayermodal">
      <img src="assets/imgs/video-btn.png" className="img-fluid" alt="" />
    </button>
  </section>
      {/* End Home Banner Style V1 */}

      <section className="section-space scroll-hidden">
    <div className="container text-center position-relative">
      <div className="angle-icon d-none d-md-block">
        <img src="assets/imgs/angle-icon.png" className="img-fluid" alt=""/>
      </div>
      <h2 className="section-title">
         Invitations Made Easy
      </h2>
      <p className="details-text mt-lg-4">
      With Review Bee, reaching out to your customers for their valuable opinions is a breeze. Our platform allows you to send invitations to your customers, making it convenient for them to share their experiences with your business.
      </p>
      <div className="row">
        <div className="col-12 col-sm-6 col-xl-3 d-flex">
          <div className="cate-conent-box">
            <img src="assets/imgs/cate-icon-1.png" alt="" className="img-fluid cate-icon"/>
            <h3 className="md-section-title">
              {/* Customisable Templates */}
              Track Status with Ease
            </h3>
            <p className="details-text">
              {/* As reviews are one of the best ways of establishing trust in your business, boosting the reputation of
              your brand, and improving your SEO in one fell swoop, they’re a great way of increasing your sales. */}
              Keep tabs on the status of your reviews effortlessly. Review Bee provides a user-friendly interface that enables you to track the progress of your customer reviews in real-time. Stay informed and engaged with your audience without the need to switch between platforms.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-xl-3 d-flex">
          <div className="cate-conent-box">
            <img src="assets/imgs/cate-icon-4.png" alt="" className="img-fluid cate-icon"/>
            <h3 className="md-section-title">
              {/* An Automated Process */}
              Automated Social Media Integration
            </h3>
            <p className="details-text">
              {/* Generating an ongoing stream of fresh customer reviews has never been easier thanks to our automated
              collection process. */}
              Harness the power of social media by automatically posting positive reviews on your business profiles. In today&apos;s digital age, social media is as crucial as customer reviews. Let Review Bee amplify your online presence by seamlessly sharing positive feedback on various social media platforms. More reviews mean more trust!
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-xl-3 d-flex">
          <div className="cate-conent-box">
            <img src="assets/imgs/cate-icon-2.png" alt="" className="img-fluid cate-icon"/>
            <h3 className="md-section-title">
              {/* Seamless Connection */}
              Focus on What Matters
            </h3>
            <p className="details-text">
              {/* Import your brand’s existing reviews from Google, linking seamlessly to this famous review source for
              effortless connection. */}
              By automating the review management process, Review Bee allows you to concentrate on other critical aspects of your business. Spend your time enhancing your products and services while we take care of showcasing your positive customer experiences.
            </p>
          </div>
        </div>
   
        <div className="col-12 col-sm-6 col-xl-3 d-flex">
          <div className="cate-conent-box">
            <img src="assets/imgs/cate-icon-3.png" alt="" className="img-fluid cate-icon"/>
            <h3 className="md-section-title">
              Email & SMS Capabilities
            </h3>
            <p className="details-text">
              With automated request campaigns, you can send a feedback page to your customers using SMS or email,
              making it a breeze to collect valuable customer feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bee-border d-none d-md-block">
      <img src="assets/imgs/bee-border.png" className="img-fluid" alt=""/>
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
  <section className="section-space scroll-hidden">
    <div className="container position-relative">
      <div className="text-center">
        <h2 className="section-title">
          News & Article
        </h2>
        <p className="details-text mt-lg-4">
          As reviews are one of the best ways of establishing trust in your business, boosting the reputation of your
          brand, and improving your SEO in one fell swoop, they’re a great way of increasing your sales.
        </p>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-xl-4 d-flex">
          <a href="#">
            <div className="news-box">
              <div className="news-img-wrapper">
                <div className="plus-icon">
                  <i className="fas fa-plus"></i>
                </div>
                <img src="assets/imgs/new-img-1.png" alt="" className="img-fluid"/>
                <img src="assets/imgs/angle-news-icon.png" alt="" className="angle-news-icon"/>
              </div>
              <div className="hover-space">
                <h3 className="md-section-title">
                  review generating software
                </h3>
                <p className="details-text">
                  Engagement: A Guide to Embedding Google Reviews with Simply Collect Reviews.Your brand’s customers
                  will always be your greatest advocates, and that means you can harness the power of this key marketing
                  tool.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-sm-6 col-xl-4 d-flex">
          <a href="#">
            <div className="news-box">
              <div className="news-img-wrapper">
                <div className="plus-icon">
                  <i className="fas fa-plus"></i>
                </div>
                <img src="assets/imgs/new-img-2.png" alt="" className="img-fluid"/>
                <img src="assets/imgs/angle-news-icon.png" alt="" className="angle-news-icon"/>
              </div>
              <div className="hover-space">
                <h3 className="md-section-title">
                  review generating software
                </h3>
                <p className="details-text">
                  Engagement: A Guide to Embedding Google Reviews with Simply Collect Reviews.Your brand’s customers
                  will always be your greatest advocates, and that means you can harness the power of this key marketing
                  tool.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-sm-6 col-xl-4 d-flex">
          <a href="#">
            <div className="news-box">
              <div className="news-img-wrapper">
                <div className="plus-icon">
                  <i className="fas fa-plus"></i>
                </div>
                <img src="assets/imgs/new-img-3.png" alt="" className="img-fluid"/>
                <img src="assets/imgs/angle-news-icon.png" alt="" className="angle-news-icon"/>
              </div>
              <div className="hover-space">
                <h3 className="md-section-title">
                  review generating software
                </h3>
                <p className="details-text">
                  Engagement: A Guide to Embedding Google Reviews with Simply Collect Reviews.Your brand’s customers
                  will always be your greatest advocates, and that means you can harness the power of this key marketing
                  tool.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="section-space stream-section">
    <img src="assets/imgs/stream-bee.png" alt="" className="img-fluid stream-bee"/>
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-12 col-lg-5 col-lg-4">
          <img src="assets/imgs/stream-img.png" alt="" className="img-fluid gstream-img"/>
        </div>
        <div className="col-12 col-lg-7 col-lg-7">
          <h2 className="section-title">
            Social Proof In An Ongoing Stream
          </h2>
          <p className="details-text">
            Your brand’s customers will always be your greatest advocates, and that means you can harness the power of
            this key marketing tool. Collecting reviews through email or SMS thanks to our automated review generating
            software saves you time and effort, allowing you to benefit from more helpful reviews with just a couple of
            clicks.
          </p>
          <a href="" className="btn btn-secondary mt-4 my-lg-2">
            Get Started Now with Our Free Trial!
          </a>
        </div>
      </div>
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
  <div className="modal fade" id="videoplayermodal" tabIndex="-1" role="dialog" aria-labelledby="videoplayermodalTitle"
    aria-hidden="true">
    <button type="button" className="modal-close-btn" data-bs-dismiss="modal" aria-label="Close">
      <i className="fas fa-close"></i>
    </button>
    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div className="modal-content">
        <video autoPlay muted loop playsInline preload="metadata" className="w-100">
          <source src="http://www.adrianparr.com/download/keyboard-video.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  </div>
    </>
  );
};

export default Home_V1;
