"use client"
import { useEffect, useRef, useState } from 'react';
import { InstaModel } from '@/components/common/insta_model';
import { addSocialTemplate, getSocialTemplate } from '@/services';
import { Toaster } from 'react-hot-toast';
import { Facebook } from '@/components/integration/website';

 const Social = () => {
  // const { login, status, isLoading, error} = useLogin();
   const [brandColorEditable, setBrandColorEditable]=useState(false)
   const [backgroundColorEditable, setBackgroundColorEditable]=useState(false)
   const [templateData, setTemplateData]=useState({bgColor:"", brandColor: "", templateName:""})
  //  const [value, setValue] = useState('');
   const [postTemplate, setPostTemplate]=useState("")
  console.log(templateData)

const handleOnSocialTemplateSubmit=()=>{
  const data={
    image_template_type: 0,
    bgColor: templateData.bgColor||"",
    color: templateData.brandColor||"",
    text_template_type: postTemplate||""
}
  addSocialTemplate(data)
}
const fetchSocialTemplate=()=>{
  getSocialTemplate().then((res)=>{
    console.log(res?.data?.data)
    setTemplateData({...templateData, bgColor:res?.data?.data?.bgColor,brandColor: res?.data?.data?.color})
    setPostTemplate(res?.data?.data?.text_template_type)
  })
}
useEffect(()=>{
  fetchSocialTemplate()
  // closeElement.current.click()
},[])

  const handlePostTemplate=(e)=>{
   setPostTemplate(e.target.value)
  }

  console.log(postTemplate)
  const [value, setValue] = useState('');
  const quillRef = useRef(null);

  const handleInsertSpan = () => {
    const cursorPosition = quillRef.current.getEditor().getLength();
    const spanText = 'Sample Text';
    quillRef.current.getEditor().insertText(cursorPosition, spanText, { span: true });
  };

  console.log(value)
    return (
      <div>
                <Toaster
        position="top-center"
        reverseOrder={false}
        />
        <main className="main-content">
    <div className="container-fluid">
      <div className="mb-3">
        <h2 className="page-title my-3">
          Share reviews on Social Media
        </h2>
        <div className="col-12 col-lg-8 px-0">
          <p className="secondary-color">
            Connect your Facebook and Instagram accounts, customize the post template and start sharing reviews from the
            Reviews section by clicking Share on Social.
          </p>
        </div>
      </div>
      <div className="row pt-3">
        <Facebook/>
      </div>
      <div className="row pt-3">
        <div className="col-12 col-md-7 col-lg-7">
          <div className="card p-4 mb-3">
            <div className="mb-3">
              <label className="form-label">Brand color</label>
              <div className="d-flex align-items-center border color-picker">
                <div className="d-flex align-items-center col">
                  <input type="color"value={templateData.brandColor} className="form-control border-0" placeholder="Search" disabled={!brandColorEditable} onChange={(e)=>setTemplateData({...templateData,brandColor:e.target.value})}/>
                  <h6 className="m-2">{templateData.brandColor}</h6>
                </div>
             {   brandColorEditable?<section><button className="btn" onClick={()=>setBrandColorEditable(!brandColorEditable)}>
                  <i className="fa fa-close" ></i>
                </button>
                <button className="btn" onClick={()=>{setBrandColorEditable(!brandColorEditable);handleOnSocialTemplateSubmit()}}>
                  save
                </button></section>:<button className="btn" onClick={()=>setBrandColorEditable(!brandColorEditable)}>
                  Edit
                </button>}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Background  color</label>
              <div className="d-flex align-items-center border color-picker">
                <div className="d-flex align-items-center col">
                  <input type="color" value={templateData.bgColor} className="form-control border-0" placeholder="Search" disabled={!backgroundColorEditable} onChange={(e)=>setTemplateData({...templateData,bgColor:e.target.value})}/>
                  <h6 className="m-2">{templateData.bgColor}</h6>
                </div>
                {   backgroundColorEditable?<section><button className="btn" onClick={()=>setBackgroundColorEditable(!backgroundColorEditable)}>
                  <i className="fa fa-close" ></i>
                </button>
                <button className="btn" onClick={()=>{setBackgroundColorEditable(!backgroundColorEditable);handleOnSocialTemplateSubmit()}}>
                  save
                </button></section>:<button className="btn" onClick={()=>setBackgroundColorEditable(!backgroundColorEditable)}>
                  Edit
                </button>}
                {/* <button className="btn">
                  <i className="fa fa-close"></i>
                </button>
                <button className="btn">
                  Edit
                </button> */}
              </div>
            </div>
            <div className="mb-3">
              <div className="">
                <label className="form-label">Text of the post
                </label>
            
                <textarea rows="6" className="form-control text-start" onChange={handlePostTemplate}
                 value={postTemplate}
                 >
                  {/* Thank you for taking the time to write such a wonderful review about our service. We are delighted to hear that you had a positive experience with our team and that we could meet your expectations. Your feedback means a lot to us, and we appreciate your support. */}
                  {/* value={`${postTemplate}`} */}
                </textarea>
                <div className="d-flex justify-content-between mt-3 align-items-start">
                  <div className="d-flex gap-2 flex-wrap">
                    <button className="btn p-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add Variable" >
                      <span className="badge badge-lg rounded-pill bg-secondary">Name</span>
                    </button>
                    <button className="btn p-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add Variable">
                      <span className="badge badge-lg rounded-pill bg-secondary">Source</span>
                    </button>
                    <button className="btn p-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add Variable">
                      <span className="badge badge-lg rounded-pill bg-secondary">Text</span>
                    </button>
                    <button className="btn p-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add Variable">
                      <span className="badge badge-lg rounded-pill bg-secondary">Review URL</span>
                    </button>
                  </div>
                  <button className="btn p-0">
                    <span className="badge badge-lg bg-secondary">
                      <i className="fa fa-smile"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-4" onClick={()=>handleOnSocialTemplateSubmit()}>
              <button className="btn btn-secondary px-3 py-2 w-100">
               Save
              </button>
            </div>

            {/* <div className='my-3'>
            <button onClick={handleInsertSpan}>Insert Span</button>
      <ReactQuill
        ref={quillRef}
        theme="snow"
      />
            </div> */}
  
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-5">
          <InstaModel templateData={templateData}/>
        </div>
      </div>
    </div>
  </main>

      </div>

    )
}
export default Social