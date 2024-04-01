"use client"
import { getAllReview, storeGoogleReview } from "@/services"
import { Rating } from "@mui/material"
import { useEffect, useState } from "react"
import { Toaster } from "react-hot-toast"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { Switch, TextareaAutosize } from '@mui/material';
import Link from 'next/link';
import toast from "react-hot-toast"
import ReviewPostModel from "@/components/review_post_model/page"


 const Review = () => {
  const [reviews, setReviews]=useState([])
  // const [open, setOpen] = React.useState(false);
  const [imageData, setImageData]=useState("")
  const [refetch,setRefetch]=useState(false)
  const [open, setOpen] = React.useState(false);
  const [selectedPageToken, setSelectedPageToken] = React.useState("")
  const [connected, setConnected] = React.useState(false)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [post, setPost] =  React.useState({
    url:"https://img.freepik.com/free-photo/business-women-signature-document_1388-90.jpg?size=626&ext=jpg",
    message:"Thank you for taking the time to write such a wonderful review about our service. We are delighted to hear that you had a positive experience with our team and that we could meet your expectations. Your feedback means a lot to us, and we appreciate your support."
  })

  const updateReview=()=>{
    storeGoogleReview().then((res)=>{
      setRefetch(!refetch)
    })
  }

  const fetchAllReview=()=>{
    getAllReview({source:""}).then((res)=>{
    console.log(res,"40")
    setReviews(res?.data?.data?res?.data?.data:[]);
    })
  }
    useEffect(()=>{
     fetchAllReview()
    },[refetch])
  console.log(reviews)

  const getPages = async ()=>{
    try{
   
    let pagesData = await axios.get(`https://graph.facebook.com/v19.0/${ localStorage.getItem("fbUserId")}/accounts?access_token=${localStorage.getItem("facebook")}`)
     console.log(pagesData,"jkl")
      let id = localStorage.getItem("selectedPage")
      if(id)
      {
      let selectedPageData = pagesData?.data?.data.filter((page)=>page?.id == id)
      console.log(selectedPageData,"mlk")
      setSelectedPageToken(selectedPageData[0]?.access_token)
      }
      else{
        setSelectedPageToken("")
      }

    //  setPages(pagesData.data.data)

  }
  catch(err)
  {

  }
  }

  const postData = ()=>{
    axios.post(`https://graph.facebook.com/v19.0/${localStorage.getItem("selectedPage")}/photos`
    ,{},{
      params: {
        message: post.message,
        url: post.url,
        access_token:selectedPageToken
      }
    }
    ).then((res)=>{
      console.log(res,"mlk69")
      toast.success("Post Uploaded Successfully")
    }).catch((err)=>{
      console.log(err,"mlk72")
    })
  }
  React.useEffect(()=>{
     if(localStorage.getItem("facebook") && localStorage.getItem("fbUserId"))
     {
      setConnected(true)
      getPages()
     }
  },[])
    return (
         <main className="main-content">
          <Toaster
    position="top-right"
    reverseOrder={false}
    />
    <div className="container-fluid">
      <div className="row flex-md-row-reverse">
        <div className="col-12 col-md-5 col-lg-4">
          <div className="card p-4 mb-3 filter-card">
            <div className="form-check form-switch mb-3">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" for="flexSwitchCheckDefault">
                All Businesses
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">Review</label>
              <div className="input-group border">
                <input type="text" className="form-control border-0" placeholder="Search"/>
                <span className="input-group-text border-0 bg-transparent" >
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Assessment</label>
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <button className="btn btn-outline-secondary px-4">
                  <i className="fa fa-thumbs-up"></i>
                </button>
                <button className="btn btn-outline-secondary px-4">
                  <i className="fa fa-thumbs-down"></i>
                </button>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Review</label>
              <select className="form-select">
                <option value="">All</option>
                <option value="">All</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Answer</label>
              <select className="form-select">
                <option value="">All</option>
                <option value="">All</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Date</label>
              <select className="form-select">
                <option value="">All</option>
                <option value="">All</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-8">
          <div className="title-control mb-3">
            <h2 className="page-title my-3">
              Your reviews
              <i className="fa fa-info-circle"></i>
            </h2>
            <button className="btn btn-default" onClick={()=>updateReview()}>
              Updates
              <i className="fa fa-repeat ms-2"></i>
            </button>
          </div>
          {/* <Button variant="outlined" onClick={()=>setOpen(true)}>
        Open dialog
      </Button> */}
         { reviews?.map((single_review,index)=>{
          return(
            <div key={index} className="card mb-3">
            <div className="card-header border-0 bg-transparent py-4 px-4 d-flex justify-content-between flex-wrap">
              <div className="d-flex align-items-center flex-wrap gap-2">
                <div className="d-flex align-items-center gap-2">
                  <span className="user-icon">
                    <img src={single_review.source==="google"?"/assets/dashboard/google.webp":"/assets/dashboard/facebook.webp"}  alt=""/>
                  </span>
                  <h3 className="usr-name my-1" style={{textTransform:"capitalize"}}>{single_review.source}</h3>
                </div>
                <div className="d-flex">
                  {/* <span className="fa fa-star primary-color"></span>
                  <span className="fa fa-star primary-color"></span>
                  <span className="fa fa-star primary-color"></span>
                  <span className="fa fa-star primary-color"></span>
                  <span className="fa fa-star primary-color"></span> */}
                  <Rating name="read-only" value={single_review.rating} readOnly />
                </div>
                <p className="detail-text">Mar 15, 2024</p>
              </div>
              <p className="detail-text">
                <span className="fa fa-location-dot me-2"></span>Mar 15, 2024
              </p>
            </div>
            <div className="card-body pt-0 pb-4 px-4">
              <h5 className="card-title secondary-color" style={{textTransform:"capitalize"}}>
                <span className="fa fa-user" style={{marginRight:"5px"}}></span>
               {single_review.author_name}
              </h5>
              <p className="card-text">
               {single_review.text}
              </p>
              <div className="d-flex align-items-center gap-3 pt-2 flex-wrap">
                <a href="#" className="btn btn-outline-secondary">Reply</a>
                <a href="#" className="btn btn-outline-secondary">Mark as replied</a>
                <a href="#" className="btn btn-outline-secondary" >Remove from Widgets</a>
                <button className="btn btn-outline-secondary"  onClick={()=>{setOpen(true);setImageData(single_review)}} >Share on Social</button>
              </div>
            </div>
          </div>
          )
         })}
          {/* <div className="card mb-3">
            <div className="card-header border-0 bg-transparent py-4 px-4 d-flex justify-content-between flex-wrap">
              <div className="d-flex align-items-center flex-wrap gap-2">
                <div className="d-flex align-items-center gap-2">
                  <span className="user-icon">
                    <img src="/assets/dashboard/user-icon.png"/>
                  </span>
                  <h3 className="usr-name my-1">Trustpilot</h3>
                </div>
                <div className="d-flex">
                  <span className="fa fa-star primary-color"></span>
                  <span className="fa fa-star primary-color"></span>
                  <span className="fa fa-star primary-color"></span>
                  <span className="fa fa-star primary-color"></span>
                  <span className="fa fa-star primary-color"></span>
                </div>
                <p className="detail-text">Mar 15, 2024</p>
              </div>
              <p className="detail-text">
                <span className="fa fa-location-dot me-2"></span>Mar 15, 2024
              </p>
            </div>
            <div className="card-body pt-0 pb-4 px-4">
              <h5 className="card-title secondary-color">
                <span className="fa fa-user"></span>
                Nisar Adappadathil
              </h5>
              <p className="card-text">
                Great experience with Ample mortgage The experience with Ample mortgage was seamless. The mortgage got
                approved in 2 weeks. Hanna supported well during the process.
              </p>
              <div className="d-flex align-items-center gap-3 pt-2 flex-wrap">
                <a href="#" className="btn btn-outline-secondary">Reply</a>
                <a href="#" className="btn btn-outline-secondary">Mark as replied</a>
                <a href="#" className="btn btn-outline-secondary">Remove from Widgets</a>
                <a href="#" className="btn btn-outline-secondary">Share on Social</a>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header border-0 bg-transparent py-4 px-4 d-flex justify-content-between flex-wrap">
              <div className="d-flex align-items-center flex-wrap gap-2">
                <div className="d-flex align-items-center gap-2">
                  <span className="user-icon">
                    <img src="/assets/dashboard/user-icon.png"/>
                  </span>
                  <h3 className="usr-name my-1">Trustpilot</h3>
                </div>
                <div className="d-flex">
                  <span className="fa fa-star primary-color"></span>
                  <span className="fa fa-star primary-color"></span>
                  <span className="fa fa-star primary-color"></span>
                  <span className="fa fa-star primary-color"></span>
                  <span className="fa fa-star primary-color"></span>
                </div>
                <p className="detail-text">Mar 15, 2024</p>
              </div>
              <p className="detail-text">
                <span className="fa fa-location-dot me-2"></span>Mar 15, 2024
              </p>
            </div>
            <div className="card-body pt-0 pb-4 px-4">
              <h5 className="card-title secondary-color">
                <span className="fa fa-user"></span>
                Nisar Adappadathil
              </h5>
              <p className="card-text">
                Great experience with Ample mortgage The experience with Ample mortgage was seamless. The mortgage got
                approved in 2 weeks. Hanna supported well during the process.
              </p>
              <div className="d-flex align-items-center gap-3 pt-2 flex-wrap">
                <a href="#" className="btn btn-outline-secondary">Reply</a>
                <a href="#" className="btn btn-outline-secondary">Mark as replied</a>
                <a href="#" className="btn btn-outline-secondary">Remove from Widgets</a>
                <a href="#" className="btn btn-outline-secondary">Share on Social</a>
              </div>
            </div>
          </div> */}
          <div className="text-center">
            <button className="btn btn-outline-secondary px-3 py-2">
              Load More
              <i className="fa fa-repeat ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* <div className="modal fade" id="integrateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
    
      <div className="modal-content" style={{padding:"10px"}}>
        {connected?
          <>
        <div className="modal-header justify-content-between border-0 pb-0">
          Facebook<Switch  defaultChecked />
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <img  alt="" style={{width:"100%"}} src="https://img.freepik.com/free-photo/business-women-signature-document_1388-90.jpg?size=626&ext=jpg"/>
        <br/>
        <textarea rows="6" value={post.message} onChange={(e)=>setPost({...post,message:e.target.value})} className="form-control text-start mt-2">
      </textarea>
        </div>
        
        <div className="modal-footer justify-content-center">
        <button type="button" className="btn btn-secondary" onClick={postData} >Post</button>
        </div></>:<Link type="button" className="btn btn-secondary" href="/dashboard/social">Integrate Facebook</Link> }
      </div>
    </div>
  </div> */}
  <ReviewPostModel open={open} setOpen={setOpen} imageData={imageData} selectedPageToken={selectedPageToken}/>
          </main>
    )
}
export default Review