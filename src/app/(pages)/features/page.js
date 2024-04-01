// import CallToActions from "@/components/common/CallToActions";
// import DefaultHeader from "@/components/common/DefaultHeader";
// import Partner from "@/components/common/Partner";
// import Footer from "@/components/common/default-footer";
// import MobileMenu from "@/components/common/mobile-menu";
// import Agents from "@/components/pages/about/Agents";
// import Features from "@/components/pages/about/Features";
// import FunFact from "@/components/pages/about/FunFact";
// import Mission from "@/components/pages/about/Mission";
import Footer from "@/components/common/default-footer";
import Header from "@/components/home/home-v1/Header";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Feature-ReviewBee",
};

const Features = () => {
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
          <div className="col-12 col-md-8">
          {/* <div className="col-12 col-md-6"> */}
            <div className="slider-caption text-center text-md-start">
              <h1 className="section-title text-uppercase">
              Why Choose Review Bee?
              </h1>
              <p className="details-text text-white">
                {/* Discover Our Amazing Features */}
                Simplicity: A user-friendly platform designed to streamline your review management process.<br/>
                Comprehensive: Manage reviews from multiple platforms all in one place.<br/>
                Efficiency: Send invitations, track status, and automate social media sharing effortlessly.<br/>
                Trust: Build credibility by showcasing authentic customer feedback.
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
          <img src="assets/imgs/feature-img.png" alt="" className="img-fluid my-4"/>
        </div>
        <div className="col-12 col-lg-6 col-xl-7">
          <h2 className="section-title">
            The Incredible Features of
            Our Review Generation Software
          </h2>
          <p className="details-text">
            Our innovative review generation software has been designed to tap into the valuable potential of your customers’ opinions. Take advantage of your brand’s best advocates with intuitive software that offers a host of fantastic features to simplify the process of obtaining and displaying your top customer reviews.
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
  <section className="video-player">
    <img src="assets/imgs/video-img.png" className="video-img" alt="" />
    <button className="btn player-control" data-bs-toggle="modal" data-bs-target="#videoplayermodal" s>
      <img src="assets/imgs/video-btn.png" className="img-fluid" alt=""/>
    </button>
  </section>
  <section className="section-space scroll-hidden">
    <div className="container text-center position-relative">
      <div className="angle-icon d-none d-md-block">
        <img src="assets/imgs/angle-icon.png" className="img-fluid" alt=""/>
      </div>
      <h2 className="section-title">
        {/* Tap into your most valuable resource and let your customers’
        opinions do your marketing for you */}
        Join Review Bee today and witness the transformative power of customer reviews. When your opinion matters, Review Bee is here to make it count.
      </h2>
      <p className="details-text mt-lg-4">
        It’s never been simpler to request customer reviews for your brand and to display them effortlessly on your
        website. As reviews are one of the best ways of establishing trust in your business, boosting the reputation of
        your brand, and improving your SEO in one fell swoop, they’re a great way of increasing your sales.
      </p>
      <div className="row">
        <div className="col-12 col-sm-6 col-xl-3 d-flex">
          <div className="cate-conent-box">
            <img src="assets/imgs/cate-icon-1.png" alt="" className="img-fluid cate-icon"/>
            <h3 className="md-section-title">
              {/* Customisable Templates */}
              Automation
            </h3>
            <p className="details-text">
            Experience the power of Review Bee&apos;s complete automation. Streamline your review management with fully automated processes. From sending invitations to tracking review status and even sharing positive feedback on social media, let Review Bee handle the details, allowing you to focus on your core business.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-xl-3 d-flex">
          <div className="cate-conent-box">
            <img src="assets/imgs/cate-icon-2.png" alt="" className="img-fluid cate-icon"/>
            <h3 className="md-section-title">
              {/* Seamless Connection */}
              Connectivity
            </h3>
            <p className="details-text">
            Harmonize your review management with Review Bee&apos;s seamless connectivity. Consolidate reviews from various platforms like Facebook, Trustpilot, and Google Reviews into a centralized location. Simplify your workflow by accessing and responding to all reviews in one cohesive platform.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-xl-3 d-flex">
          <div className="cate-conent-box">
            <img src="assets/imgs/cate-icon-03.png" alt="" className="img-fluid cate-icon"/>
            <h3 className="md-section-title">
            Customization
            </h3>
            <p className="details-text">
            Tailor your communication with customers using Review Bee&apos;s customization features. Craft unique invitations and responses with personalized templates that reflect your brand&apos;s voice. Maintain a consistent and personalized approach to customer interactions, enhancing the authenticity of your feedback.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-xl-3 d-flex">
          <div className="cate-conent-box">
            <img src="assets/imgs/cate-icon-04.png" alt="" className="img-fluid cate-icon"/>
            <h3 className="md-section-title">
            Simplicity
            </h3>
            <p className="details-text">
            Navigate your review management effortlessly with Review Bee&apos;s user-friendly design. Embrace simplicity in functionality, making it easy to send invitations, track review status, and engage with customers. The intuitive interface ensures a smooth and enjoyable experience in managing your reviews.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-xl-3 d-flex">
          <div className="cate-conent-box">
            <img src="assets/imgs/cate-icon-05.png" alt="" className="img-fluid cate-icon"/>
            <h3 className="md-section-title">
            Integration
            </h3>
            <p className="details-text">
            Integrate seamlessly without the need for coding with Review Bee. Connect your review platforms and essential tools effortlessly, simplifying the technical aspects of review management. Enjoy a hassle-free experience that allows you to focus on what matters most – your customer feedback.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-xl-3 d-flex">
          <div className="cate-conent-box">
            <img src="assets/imgs/cate-icon-6.png" alt="" className="img-fluid cate-icon"/>
            <h3 className="md-section-title">
            Capabilities
            </h3>
            <p className="details-text">
            Expand your engagement with Review Bee&apos;s versatile capabilities. Utilize email and SMS functionalities to reach your customers through multiple channels. Enhance your communication strategy, making it convenient for customers to share their opinions and fostering a stronger connection with your audience.
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
  <div className="modal fade" id="videoplayermodal" tabindex="-1" role="dialog" aria-labelledby="videoplayermodalTitle"
    aria-hidden="true">
    <button type="button" className="modal-close-btn" data-bs-dismiss="modal" aria-label="Close">
      <i className="fas fa-close"></i>
    </button>
    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div className="modal-content">
        <video autoplay muted loop playsinline preload="metadata" className="w-100">
          <source src="http://www.adrianparr.com/download/keyboard-video.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  </div>
    </>
  );
};

export default Features;
