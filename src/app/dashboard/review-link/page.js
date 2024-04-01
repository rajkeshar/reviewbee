"use client"
import { getIntegraton, getReviewLink, updateReviewLink } from "@/services";
import { Rating } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react"
import { Form } from "react-bootstrap";
import { Toaster } from "react-hot-toast";

const ReviewLink=()=>{
  const [experienceEditable, setExprienceEditable]=useState(false)
  const [desktopImageEditable, setDesktopImageEditable]=useState(true)
  const [experienceSection,setExperienceSection]=useState("")
  const [url, setUrl] = useState(null);
  const [domain, setDomain] = useState(`http://localhost:3000/go/${url}`);
  const [urlEdit, setUrlEdit] = useState(true);
  const [desktopImagePreview, setDesktopImagePreview]=useState(null)
  const [logoUpload, setLogoUpload]=useState(null)
  const [linkData, setLinkData]=useState(null)
  const [previewTitleEditable, setPreviewTitleEditable]=useState(true)
  const [preveiwTitle, setPreviewTitle]=useState("")
  const [chooseInitialPage, setChooseInitialPage]=useState("")
  const [chooseInitialPageCheck, setChooseInitialPageCheck]=useState(null)
  const [rating, setRating]=useState(null)
  const [ratingEditable, setRatingEditable]=useState(true)
  const handleUrl = (e) => {
    setUrl(e.target.value);
  };
  const handleSaveUrl = () => {
    setUrlEdit(!urlEdit);
    handleReviewLinkSubmit()
  };
  useEffect(() => {
    setDomain(`http://localhost:3000/go/${url}`);
  }, [url]);
  console.log(domain)

  useEffect(() => {
    if (logoUpload !== null) {
      handleReviewLinkSubmit();
    }
  }, [logoUpload]);

  useEffect(() => {
    if (desktopImagePreview !== null) {
      handleReviewLinkSubmit();
    }

  }, [desktopImagePreview]);

  const handleDesktopUpload = (e) => {
    const imageFile = e.target.files[0];
    setDesktopImagePreview(imageFile);
  };
const handleLogoUpload=(e)=>{
  const imageFile = e.target.files[0];
setLogoUpload(imageFile)
  }

  const handleReviewLinkSubmit=()=>{
    console.log(desktopImagePreview,"hii")
        let form = new FormData()
    form.append("review_link_url",url)
    form.append("logo",logoUpload?logoUpload:"")
    form.append("desktop_image",desktopImagePreview?desktopImagePreview:"")
    form.append("link_preview_title",preveiwTitle)
    form.append("Choose_initial_page",chooseInitialPage)
    form.append("title",experienceSection)
    form.append("rating",rating)
    updateReviewLink(form).then((res)=>{
      console.log(res)
      // toast.success("successfully added review")
    })
  }
  useEffect(()=>{
    getReviewLink().then((response)=> {
      // console.log(response.data.data)
      setLinkData(response?.data?.data);
      setUrl(response?.data?.data?.review_link_url?response?.data?.data?.review_link_url:"");
      setExperienceSection(response?.data?.data?.title?response?.data?.data?.title: "");
      setPreviewTitle(response?.data?.data?.link_preview_title?response?.data?.data?.link_preview_title:"");
      setChooseInitialPage(response?.data?.data?.Choose_initial_page?response?.data?.data?.Choose_initial_page:"");
      setRating(response?.data?.data?.rating?response?.data?.data?.rating:"");
    })
  },[])
  console.log(linkData)
  console.log(experienceSection)
  const handlePreviewTitleChange =(e)=>{
    setPreviewTitle(e.target.value)
  }
  const handleChooseInitialPage=(e)=>{
    console.log(e.target.value)
    setChooseInitialPage(e.target.value)
    setChooseInitialPageCheck(e.target.value)
  }
  useEffect(()=>{
    if(chooseInitialPageCheck !==null){
      handleReviewLinkSubmit()
    }
  },[chooseInitialPageCheck])

console.log(rating)


    return(
        <>
             <Toaster
        position="top-right"
        reverseOrder={false}
        />
          <main className="main-content">
    <div className="container-fluid">
      <div className="mb-3">
        <h2 className="page-title my-3">
          Edit your Review Link
        </h2>
        <p className="secondary-color">This is the link your customers will visit to leave you a review. Customize the page
          by changing texts and images</p>
      </div>
      <div className="row pt-3">
        <div className="col-12 col-md-7 col-lg-8">
          <div className="card p-4 mb-3">
            <div className="mb-3">
              <label className="form-label">Edit Review Link URL</label>
              <div className="input-group border">
                <input type="text" className="form-control border-0" placeholder="Search" value={urlEdit?domain:url} onChange={handleUrl} disabled={urlEdit}/>
                {urlEdit?<button className="btn" onClick={()=>setUrlEdit(false)}>
                  Edit
                </button>:
             <><button className="btn" onClick={()=>setUrlEdit(true)}>
                  close
                </button>
                   <button className="btn" onClick={handleSaveUrl}>
                   save
                 </button></> }
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Edit the link preview title</label>
              <div className="input-group border">
                <input type="text" className="form-control border-0" value={preveiwTitle} disabled={previewTitleEditable} onChange={handlePreviewTitleChange}/>
         { previewTitleEditable?<button className="btn"  onClick={() => setPreviewTitleEditable(!previewTitleEditable)} >
                Edit
              </button>:<><button className="btn" onClick={()=>{handleReviewLinkSubmit();setPreviewTitleEditable(!previewTitleEditable)}}>
                save
              </button><button className="btn" onClick={() => setPreviewTitleEditable(!previewTitleEditable)}>
                close
              </button></>}
              </div>
            </div>
            <div className="mb-3">
              <div className="dropdown mb-4">
                <label className="form-label">Choose the initial page</label>
                <Form.Select aria-label="Default select example" onChange={handleChooseInitialPage} value={chooseInitialPage}>
                <option>Open this select menu</option>
                <option value="1">Star filter enabled</option>
                <option value="2">Star filter disabled</option>
              </Form.Select>
                {/* <button className="form-control d-flex justify-content-between align-items-center" type="button"
                  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Star filter disabled
                  <div className="d-inline-flex gap-2">
                    <span className="fa fa-thumbs-up"></span>
                    <i className="fa fa-bars me-2"></i>
                  </div>
                </button>
                <ul className="dropdown-menu border-0 shadow w-100" aria-labelledby="dropdownMenuButton1">
                  <li className="py-1">
                    <a className="dropdown-item" href="#">
                      <span className="fa fa-star"></span>
                      Star filter enabled
                    </a>
                  </li>
                  <li className="py-1"><a className="dropdown-item" href="#">
                      <span className="fa fa-thumbs-up"></span>
                      Star filter disabled
                    </a></li>
                </ul> */}
              </div>
            </div>
          </div>
          <div className="text-center mb-4">
            <Link href={domain} target="_blank">
            <button className="btn btn-secondary px-3 py-2">
             Visit The Link
            </button>
            </Link>
    {  desktopImageEditable?<button className="btn btn-primary px-3 py-2 border-rounded" onClick={()=>setDesktopImageEditable(false)}>
              Desktop Image
            </button>: <button className="btn btn-primary px-3 py-2 border-rounded" onClick={()=>setDesktopImageEditable(true)}>
              Go Back
            </button>}
          </div>
        </div>
     { desktopImageEditable?<div className="col-12 col-md-5 col-lg-4">
        <div className="card p-4 mb-3">
          <div className="dropdown mb-4">
            <button className="btn btn-secondary px-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
              aria-expanded="false">
              <i className="fa fa-bars me-2"></i>
              Edit
            </button>
            <ul className="dropdown-menu border-0 shadow" aria-labelledby="dropdownMenuButton1">
              <li className="py-1"><a className="dropdown-item" href="#">
                  <span className="1 badge bg-dark">1</span>
                  Filter
                </a></li>
              <li className="py-1"><a className="dropdown-item" href="#">
                  <span className="1 badge bg-dark">2</span>
                  Positive Experience
                </a></li>
              <li className="py-1"><a className="dropdown-item" href="#">
                  <span className="1 badge bg-dark">3A</span>
                  Negative Experience
                </a></li>
              <li className="py-1"><a className="dropdown-item" href="#">
                  <span className="1 badge bg-dark">3B</span>
                  Private Feedback
                </a></li>
            </ul>
          </div>
          <div className="mb-3 position-relative uploded-logo text-center">
            <img src={logoUpload?URL.createObjectURL(logoUpload):`http://174.138.3.35/collect_review/public/your_review_link/${linkData?.logo}`} alt="" className="uploded-logo-img" style={{width:"80%"}}/>
            <input type="file" id="edit" hidden onChange={handleLogoUpload}/>
            <label className="btn-upload" for="edit">
              <span className="fa fa-pencil"></span>
            </label>
          </div>
          <div className="mb-3 position-relative ">
            <textarea rows="3" className="form-control text-center edit-area" disabled={experienceEditable?false:true}  onChange={(e)=>setExperienceSection(e.target.value)} value={experienceSection} >
            {/* {experienceSection} */}
            </textarea>
           { experienceEditable?<><button className="btn-upload" onClick={()=>{handleReviewLinkSubmit();setExprienceEditable(!experienceEditable)}}>
              <span className="fa fa-save"></span>
            </button><button className="btn-upload" onClick={(e)=>setExprienceEditable(!experienceEditable)} style={{marginRight:"32px"}}>
              <span className="fa fa-close"></span>
            </button></>:<button className="btn-upload" onClick={(e)=>setExprienceEditable(!experienceEditable)}>
              <span className="fa fa-pencil"></span>
            </button>}
          </div>
          <div className="d-flex justify-content-center my-2">
            {/* <span className="fa fa-star fa-2x primary-color"></span>
            <span className="fa fa-star fa-2x primary-color"></span>
            <span className="fa fa-star text-secondary fa-2x"></span>
            <span className="fa fa-star text-secondary fa-2x"></span>
            <span className="fa fa-star text-secondary fa-2x"></span> */}
            <Rating
  name="simple-controlled"
  readOnly={ratingEditable}
  size="large"
  value={rating}
  onChange={(event, newValue) => {
    setRating(newValue);
  }}
/>
          </div>
          <div className="d-flex justify-content-center mt-3 gap-2 align-items-center">
          {/* <button className="btn-upload position-relative" onClick={handleReviewLinkSubmit}>
              save
            </button> */}
       {    ratingEditable? <button className="btn-upload position-relative" onClick={()=>setRatingEditable(!ratingEditable)}>
              <span className="fa fa-pencil"></span>
            </button>:<><button className="btn-upload position-relative" onClick={()=>{handleReviewLinkSubmit();setRatingEditable(!ratingEditable)}}>
              <span className="fa fa-save"></span>
            </button><button className="btn-upload position-relative" onClick={()=>setRatingEditable(!ratingEditable)}>
              <span className="fa fa-close"></span>
            </button></>}
            <i className="fa fa-info-circle fa-2x"></i>
          </div>
          <div className="d-flex align-items-center gap-2 mt-4">
            <p className="m-0">Powered by</p>
            <img alt="" src="/assets/dashboard/logo.png" className="powered-logo"/>
            <div className="btn btn-outline-secondary d-inline-flex align-items-center gap-2 p-1">
              <i className="fa fa-eye-slash"></i>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
              </div>
            </div>
          </div>
        </div>
      </div>:
      <div className="col-12 col-md-5 col-lg-4">
        <div className="card p-0">
          <div className=" position-relative uploded-logo text-center">
            <img src={desktopImagePreview?URL.createObjectURL(desktopImagePreview):`http://174.138.3.35/collect_review/public/your_review_link/${linkData?.desktop_image}`} alt="" className="" style={{width:"100%", height:"80vh",borderRadius:"5px"}}/>
            <input type="file" id="edit" hidden  onChange={handleDesktopUpload} className="m-4" />
            <label className="btn-upload" for="edit" style={{top:"10px", right:"10px"}}>
              <span className="fa fa-pencil"></span>
            </label>
          </div>
        </div>
      </div>}
      </div>
    </div>
  </main>
        </>
    )
}

export default ReviewLink