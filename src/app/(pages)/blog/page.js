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
import { getListBlog } from "@/services";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// export const metadata = {
//   title: "Blog-ReviewBee",
// };

const Features = () => {
   const [blogList, setBlogList]=useState([])
   const [isLoading, setIsLoading]=useState(true)
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPages] = useState("");
  useEffect(()=>{
    const list = getListBlog({page:currentPage,page_size:6}).then((res)=>{
      // console.log(res.data.data)
      setBlogList(res.data);
      setIsLoading(false)
      setTotalPages(res?.data?.pagination.total_pages)
    })
  },[currentPage])
  // console.log(blogList.pagination.total_pages)
  // const totalPages = blogList?.pagination?.total_pages;
  console.log(totalPages)

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const renderPaginationItems = () => {
    const paginationItems = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        // <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
        //   <a className="page-link" href="#" onClick={() => handlePageChange(i)}>
        //     {i}
        //   </a>
        // </li>
           <li style={{cursor:"pointer"}} key={i}  className="page-item"><a  className={`page-link  ${currentPage === i ? 'active' : ''}`} onClick={() => handlePageChange(i)}>{i}</a></li>
      );
    }

    return paginationItems;
  };
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
                Our Blog
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
  <section className="section-space scroll-hidden">
    <div className="container position-relative">
      <div className="row">
          {isLoading? [0,1,2,3,4,5,6].map((_, index)=>{
            return(<>
            <div className="col-12 col-sm-6 col-xl-4 d-flex"><Skeleton count={5} height={400} width={300} /> </div>
            </>)
          })   
          :blogList?.data.map((singleItem)=>{
            return(<>
            <div className="col-12 col-sm-6 col-xl-4 d-flex">
          <a href="#">
            <div className="news-box position-relative">
              <div className="news-img-wrapper">
                <div className="plus-icon">
                  <i className="fas fa-plus"></i>
                </div>
                <img src={`http://174.138.3.35/collect_review/public/image/${singleItem.image}`}alt="" className="img-fluid"/>
                <img src="assets/imgs/angle-news-icon.png" alt="" className="angle-news-icon"/>
              </div>
              <div className="hover-space">
                <h3 className="md-section-title">
                   {singleItem.title}
                </h3>
                <p className="details-text">
                  {singleItem.description}
                </p>
                <Link href={`/blog/${singleItem.uuid}`}>
                  <span className="btn btn-secondary mt-3">
                  Read More
                </span></Link>
              
              </div>
            </div>
          </a>
        </div>
            </>)
          })}
        {/* <div className="col-12 col-sm-6 col-xl-4 d-flex">
          <a href="#">
            <div className="news-box position-relative">
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
                <span className="btn btn-secondary mt-3">
                  Read More
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-sm-6 col-xl-4 d-flex">
          <a href="#">
            <div className="news-box position-relative">
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
                <span className="btn btn-secondary mt-3">
                  Read More
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-sm-6 col-xl-4 d-flex">
          <a href="#">
            <div className="news-box position-relative">
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
                <span className="btn btn-secondary mt-3">
                  Read More
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-sm-6 col-xl-4 d-flex">
          <a href="#">
            <div className="news-box position-relative">
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
                <span className="btn btn-secondary mt-3">
                  Read More
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-sm-6 col-xl-4 d-flex">
          <a href="#">
            <div className="news-box position-relative">
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
                <span className="btn btn-secondary mt-3">
                  Read More
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-sm-6 col-xl-4 d-flex">
          <a href="#">
            <div className="news-box position-relative">
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
                <span className="btn btn-secondary mt-3">
                  Read More
                </span>
              </div>
            </div>
          </a>
        </div> */}
      </div>
    </div>
    <div className="bee-border flip-border d-none d-md-block">
      <img src="assets/imgs/bee-border.png" className="img-fluid" alt=""/>
    </div>
    <nav>
      <ul className="pagination justify-content-center align-items-center">
        <li className="page-item" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          <a className="page-link" href="#">
            <i className="fas fa-angle-left"></i>
          </a>
        </li>
        {/* <li className="page-item"><a className="page-link active" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li> */}
         {renderPaginationItems()}
        <li className="page-item" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          <a className="page-link" href="#">
            <i className="fas fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </nav>
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
