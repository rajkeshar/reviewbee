"use client"
import { LoginUser, addContact, getIntegraton, getViewUrl } from "@/services";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from 'next/navigation';
import { Rating,makeStyles  } from "@mui/material";

// export const metadata = {
//   title: "Contact-ReviewBee",
// };

const Features = ({params}) => {
 const [rememerme, setRememberMe]=useState(false)
 const [viewData, setViewData]=useState("")
 const [interationData, setInterationData]=useState(null)
 const [rating, setRating]=useState(null)
 const [InteragationPage, setIntegrationPage]=useState("")

console.log(params)

  const fetchPageDetails=()=>{
    getViewUrl({review_link_url:params.reviewId}).then((res)=>{
    console.log(res);
    setViewData(res.data.data)
    setIntegrationPage(res.data.data.Choose_initial_page)
    })
  }
useEffect(()=>{
  fetchPageDetails()
},[])
console.log(viewData)
useEffect(()=>{
  getIntegraton({source:"google"}).then((res)=>{
    // console.log(res.data.data,"data")
    setInterationData(res?.data?.data)
  })
},[])
console.log(interationData)
useEffect(()=>{
if(rating>=4){
  setIntegrationPage("2" )
}else if(rating<4 && rating!= null){
  setIntegrationPage("3")
}
},[rating])
console.log(InteragationPage)
const getStepContent = (step) => {
  console.log(step)
  switch (step) {
    case "1":
      return (<>

        <form action="" className="ct-form login-form">
            {/* <h1 className="h1 mb-0">
              Welcome
            </h1> */}
            <h6 className="my-4" style={{textAlign:"center",fontWeight: "bold",fontSize:"30px"}} >
            {viewData.title}
            </h6>
            <div className="mb-4">
            {/* <button className="btn btn-secondary w-100" onClick={()=>  window.open("https://www.google.com", "_blank")}>
             Video Testimonial
            </button> */}
            </div>
            <div className="d-flex justify-content-center">
            <Rating
  name="simple-controlled"
  // readOnly={ratingEditable}
  size="large"
  value={rating}
  onChange={(event, newValue) => {
    setRating(newValue);
  }}
  // sx={{ '& .MuiRating-iconFilled': { fontSize: '14rem' }}}
  sx={{
    '& .MuiRating-iconFilled': { fontSize: '4rem'}, // Adjust font size and color for filled icons
    '& .MuiRating-iconEmpty': { fontSize: '4rem',color: 'gray'}, // Adjust font size and color for empty icons
  }}
/>
</div>
        {/* { interationData?.map((item)=>{
          return(<>
           <div className="mb-4">
            <button className="btn btn-secondary w-100" onClick={()=>  window.open(`${item.review_url}`, "_blank")} >
              Google
            </button>
            </div>
          </>)
        })  } */}
            {/* <button className="btn btn-secondary w-100" onClick={()=>  window.open("https://search.google.com/local/writereview?placeid=ChIJA2-OHvDncUgRe0u68DWn5nE", "_blank")} >
              Google
            </button>
            <button className="btn btn-secondary w-100"onClick={()=>  window.open("https://uk.trustpilot.com/evaluate/amplemortgages.co.uk", "_blank")} >
              Trustpilot
            </button> */}
            {/* <div className="mt-3 text-center">
              <span className="details-text">
                Don&apos;t have an account? <Link href="/register">Sign Up</Link>
              </span>
            </div> */}
          </form>
      </>)
      case "2":
        return (<>
                  <form action="" className="ct-form login-form">
          {/* <h1 className="h1 mb-0">
            Welcome
          </h1> */}
          <h6 className="my-4" style={{textAlign:"center",fontWeight: "bold"}} >
          Your review matters! It will contribute to our growth and our ability to provide better service to customers like you.
          </h6>
          <div className="mb-4">
          {/* <button className="btn btn-secondary w-100" onClick={()=>  window.open("https://www.google.com", "_blank")}>
           Video Testimonial
          </button> */}
          </div>
          
      { interationData?.map((item)=>{
        return(<>
         <div className="mb-4">
          <button className="btn btn-secondary w-100" onClick={()=>  window.open(`${item.review_url}`, "_blank")} >
            Google
          </button>
          </div>
        </>)
      })  }
          {/* <button className="btn btn-secondary w-100" onClick={()=>  window.open("https://search.google.com/local/writereview?placeid=ChIJA2-OHvDncUgRe0u68DWn5nE", "_blank")} >
            Google
          </button>
          <button className="btn btn-secondary w-100"onClick={()=>  window.open("https://uk.trustpilot.com/evaluate/amplemortgages.co.uk", "_blank")} >
            Trustpilot
          </button> */}
          {/* <div className="mt-3 text-center">
            <span className="details-text">
              Don&apos;t have an account? <Link href="/register">Sign Up</Link>
            </span>
          </div> */}
        </form>
        </>)
        case "3":
          return (<>
            <form action="" className="ct-form login-form" >
            {/* <h1 className="h1 mb-0">
              Welcome
            </h1> */}
            <h6 className="" style={{textAlign:"start",fontWeight: "bold"}}>
            We want our customers to be 100% satisfied. Please let us know why you had a bad experience, so we can improve our service. Leave your email to be contacted.
            </h6>
            
            <div className="mb-4">
              <div className="form-group">
                <span>
                  <img src="assets/imgs/login-email-icon.png" alt="" className="img-fluid" />
                </span>
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
                {/* {errors.email && (<p className="error" style={{ color: "red" }}>{errors.email.message}</p>)} */}
            </div>
            <div className="mb-4">
              <div className="form-group">
                <span>
                  <img src="assets/imgs/password-icon.png" alt="" className="img-fluid"/>
                </span>
                <input type="text" className="form-control" placeholder="Email" />
              </div>
              {/* {errors.password && (<p className="error" style={{ color: "red" }}>{errors.password.message}</p>)} */}
            </div>
            <div className="mb-4">
              <div className="form-group">
                <span>
                  <img src="assets/imgs/password-icon.png" alt="" className="img-fluid"/>
                </span>
                <input type="text" className="form-control" placeholder="Phone with area code" />
              </div>
              {/* {errors.password && (<p className="error" style={{ color: "red" }}>{errors.password.message}</p>)} */}
            </div>
            <div className="mb-4">
              <div className="form-group">
                <span>
                  <img src="assets/imgs/password-icon.png" alt="" className="img-fluid"/>
                </span>
                <input type="text" className="form-control" placeholder="Review" />
              </div>
              {/* {errors.password && (<p className="error" style={{ color: "red" }}>{errors.password.message}</p>)} */}
            </div>
            {/* <div className="d-flex align-items-center flex-wrap justify-content-between mb-4">
              <div>
                <div className="form-check d-flex align-items-center">
                  <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckIndeterminate"/>
                  <label className="form-check-label pt-1" for="flexCheckIndeterminate" >
                    Remember me
                  </label>
                </div>
              </div>
              <a href="">
                Forgot Password?
              </a>
            </div> */}
            <button className="btn btn-secondary w-100" type="submit">
              Send
            </button>
       
            <img src="assets/imgs/angle-icon.png" className="form-angle-icon" alt="" />
          </form>
          <div className="mt-3 text-center">
              <span className="details-text">
              If you do not wish to address your concerns privately and prefer to post a review, <span style={{cursor:"pointer"}} onClick={()=>setIntegrationPage("2")}>Click Here</span>
              </span>
            </div>
          </>)
    }
    
    }
  return (
    <>
  <img src={`http://174.138.3.35/collect_review/public/your_review_link/${viewData.desktop_image}`} className="login-bg-img d-none d-lg-flex" alt="" />
  <section className="section-space login-form-section">
    <div className="container">
    <img src={`http://174.138.3.35/collect_review/public/your_review_link/${viewData.logo}`} className="" style={{marginLeft:"110px",width:"200px", height:"100px"}} alt=""/>
     
      <div className="row justify-content-center justify-content-xl-start align-items-center">

        <div className="col-12 col-md-8 col-xl-5 pb-4 pb-xl-0">
          {getStepContent(InteragationPage)}
        </div>
      </div>
    </div>
  </section>
    </>
  );
};

export default Features;
