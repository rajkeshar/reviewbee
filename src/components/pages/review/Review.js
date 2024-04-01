"use client"

// import React from 'react'
// import '../style/home.css'

import { useState, useRef, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { AiFillStar } from "react-icons/ai";
import { BiSolidLike } from "react-icons/bi";
import Rating from '@mui/material/Rating';
import { Avatar } from "@mui/material";
import "../../../../public/css/home.css";
// import EditIcon from '@mui/icons-material/Edit';
import { Edit } from "@mui/icons-material";
import Button from '@mui/material/Button';
import { TextareaAutosize } from '@mui/base';
import { sendReview,getReview} from "@/services";
import toast, { Toaster } from "react-hot-toast";

function Home() {

  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState([]);
  const [img, setImg] = useState("https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243831-stock-photo-letter-s-logo.jpg")
  const [imgFile, setImgFile] = useState(null)
 
  const [isDisable, setIsDisable] = useState(true)
  const [url, setUrl] = useState("")
  const [previewTitle, setPreviewTitle] = useState("")
  const [rating, setRating] = useState(2)
  const [fileName, setFileName] = useState("");
  const [textEditorData, setTextEditorData] = useState("How was your experience with Amp Mortgages?")
  const hiddenFileInput = useRef(null);

  const handleFile = (file) => {
    setFileName(file.name);
  };
  console.log('kdss', selected)

  const handleImgClick = (event) => {
    // hiddenFileInput.current.click();
    console.log(event.target.files[0], "jkl")
    const file = event.target.files[0];
    setImgFile(event.target.files[0])
    const reader = new FileReader();

    reader.onloadend = () => {
      // After the file is read, set it as the selected image
      setImg(reader.result);
    };

    if (file) {
      // Read the selected file as a data URL
      reader.readAsDataURL(file);
    }
  };

  const saveData = ()=>{

    let form = new FormData()
    form.append("review_link_url",url)
    form.append("logo",imgFile)
    form.append("link_preview_title",previewTitle)
    form.append("Choose_initial_page",1)
    form.append("title",textEditorData)
    form.append("rating",rating)
    sendReview(form).then((res)=>{
      console.log(res)
      toast.success("successfully added review")
    })




  }

  const handleImgChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

  const customStylesRating = {
    fontSize: 50,
  };

  useEffect(() => {
    console.log(img, "img")
    getReview().then((res)=>{
      console.log(res)
    })
  }, [img])

  return (
    <>
      <div className="container">
        <div className="form-box">
          <h3 className='form-headline'>Edit your Review Link</h3>
          <p className='form-para'>This is the link your coustomers will visit to leave you a review.
            Customize the page by changing texts and images.</p>
          <div className="form-box-form">
            <form action="">
              <label className='input-label' htmlFor="">Edit Review Link URL</label>
              <div className="form-inputbox">
                <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)}placeholder='http://go.simpleycollectivereview.com/ample-' />
                <p className='input-support-1'>15/40</p>
                <p className='input-support-2'>Edit</p>
              </div>

              <label className='input-label' htmlFor="">Edit the link preview title</label>
              <div className="form-inputbox">
                <input type="text" value={previewTitle} onChange={(e)=>setPreviewTitle(e.target.value)} placeholder='Do you want to leave us a review?' />
                <p className='input-support-2'>Edit</p>
              </div>

              <label className='input-label' htmlFor="">Choose the initial page</label>
              <div className="form-inputbox form-dropdown-box">
                <p className='dropdown-support-text'>1</p>

                <div className="dropdown">
                  <div
                    onClick={(e) => {
                      setIsActive(!isActive);
                    }}
                    className="dropdown-btn"
                  >
                    {
                      selected.length === 0
                        ?
                        <div className="default-item">
                          Start filter enabled
                          <AiFillStar style={{ fontSize: '25px' }} />
                        </div>
                        :
                        <div className="default-item">
                          {selected.map((item, index) => {
                            return item;
                          })}
                        </div>
                    }
                    <span
                      className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
                    />
                  </div>
                  <div
                    className="dropdown-content"
                    style={{ display: isActive ? "block" : "none" }}
                  >
                    <div
                      onClick={(e) => {
                        // setIsSelected([e.target.textContent,<AiFillStar style={{fontSize:'25px'}} />]);
                        setIsActive(!isActive);
                      }}
                      className="item"
                    >
                      Start filter enabled
                      <AiFillStar style={{ fontSize: '25px' }} />
                    </div>
                    <div
                      className="item"
                      onClick={(e) => {
                        // setIsSelected([e.target.textContent,<BiSolidLike style={{fontSize:'25px'}} />]);
                        setIsActive(!isActive);
                      }}
                    >
                      Start filter disabled
                      <BiSolidLike style={{ fontSize: '25px' }} />
                    </div>
                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>
        <div className="home-box">
          <button className='edit-button'>
            <IoMdMenu style={{ fontSize: '22px' }} />
            <p className='edit-btn-text'>Edit</p>
          </button>

          <div className="home-box-detail">
            <div className='home-box-detail-1'>
               <Avatar sx={{ width: 140, height: 140 }} variant="square" src={img} />
             
              <label className="edit-icon" htmlFor="imageUpload"><Edit /></label>

              <input id="imageUpload" type="file" onChange={handleImgClick} style={{ display: "none" }} />

            </div>
            <div className='home-box-detail-2' style={{alignItems:"flex-start"}}>
              <div class="container-editor">
                <div class="expandable-textarea">
                  <textarea style={{ fontSize: '22px', border:0,fontWeight:"bold", padding: '8px', width: '100%',textAlign:"center" }} className='home-box-detail-heading' placeholder="Type anything..." value={textEditorData} onChange={(e)=>setTextEditorData(e.target.value)}   disabled={isDisable}></textarea>
                </div>
              </div>
              <button className="edit-icon" onClick={()=>setIsDisable(false)}>
                <MdEdit style={{ fontSize: '20px' }} />
              </button>
            </div>
            <div className='home-box-detail-3'>
              <Rating
                sx={{
                  '& .MuiRating-iconEmpty': {
                    color: 'black',
                  },
                }}
                value={rating}
                onChange={(event, newValue) => {
                  console.log(newValue,"jkl")
                  setRating(newValue);
                }}
                style={customStylesRating}  />
             
            </div>
            <div class="btn-container">
            <button className="edit-icon">
                <MdEdit style={{ fontSize: '20px' }} />
              </button>

              <button className="edit-icon">
              <HelpOutlineIcon/>

              </button>
            </div>

            <div>
            <br />
             <Button variant="contained" onClick={saveData}>Save</Button>
            </div>
          </div>

        </div>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
      </div>
    </>
  )
}

export default Home