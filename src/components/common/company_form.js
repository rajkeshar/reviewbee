import { Icon } from "@iconify/react";
export const CompanyForm =({templateData})=>{
    const context = {
        name: "Ample Mortgages",
        rating: "5.0",
        reviews: "364",
        text: "Here will be the text of the review.",
        instagram: <i className="fab fa-instagram" />,
      };
    return(
        <>
            <div class="card p-4 mb-3">
           <div className="d-flex justify-content-between"><img  alt="" src="/assets/dashboard/insta_template.jpg" style={{width:"100px", height:"40px"}}/><div><Icon icon="basil:add-outline" width="26" height="26"/><Icon icon="ph:heart" width="26" height="26"/><Icon icon="mingcute:telegram-line" width="26" height="26"/></div></div>
           <div className="d-flex justify-content-between"><div style={{border:"2px solid #fda085",display: "inline-block",borderRadius:"50%"}}><img  alt="" src="/assets/dashboard/story_img_1.jpg" style={{width:"60px", height:"60px",borderRadius:"50%", margin:"2px"}}/></div>
           <div style={{border:"2px solid #fda085",display: "inline-block",borderRadius:"50%"}}><img  alt="" src="/assets/dashboard/story_img_2.jpg" style={{width:"60px", height:"60px",borderRadius:"50%", margin:"2px",objectFit:"cover"}}/></div>
           <div style={{border:"2px solid #fda085",display: "inline-block",borderRadius:"50%"}}><img  alt="" src="/assets/dashboard/story_img_3.jpg" style={{width:"60px", height:"60px",borderRadius:"50%", margin:"2px",objectFit:"cover"}}/></div>
           <div style={{border:"2px solid #fda085",display: "inline-block",borderRadius:"50%"}}><img  alt="" src="/assets/dashboard/story_img_4.jpg" style={{width:"60px", height:"60px",borderRadius:"50%", margin:"2px",objectFit:"cover"}}/></div>
           </div>
           <div className="my-3">  <div style={{border:"2px solid #fda085",display: "inline-block",borderRadius:"50%"}}><img  alt="" src="/assets/dashboard/story_img_3.jpg" style={{width:"30px", height:"30px",borderRadius:"50%", margin:"2px",objectFit:"cover"}}/></div><span className="fw-bold mx-2">Ample Mortgages</span></div>
           <div>
            <div style={{ backgroundColor: templateData.bgColor ? templateData.bgColor : "gray", borderRadius: "15px" }} className="p-3">
                <div style={{backgroundColor:"white",borderRadius:"20px"}} >
              
                    <div className="p-3">
                    <p className="fw-bold h3">“Here will be the text of the review.”</p>
                    <div className="d-flex">
                    <div class="d-flex justify-content-start my-2">
            <span class="fa fa-star fa-1x primary-color"></span>
            <span class="fa fa-star fa-1x primary-color"></span>
            <span class="fa fa-star fa-1x primary-color"></span>
            <span class="fa fa-star fa-1x primary-color"></span>
            <span class="fa fa-star fa-1x primary-color"></span>
          </div> 
          <div style={{display: "inline-block",marginLeft:"5px", marginTop:"3px"}}><img  alt="" src="/assets/dashboard/story_img_3.jpg" style={{width:"18px", height:"18px",borderRadius:"50%",objectFit:"cover"}}/><span className="fw-bold mx-1" style={{fontSize:"10px"}}>Name & Surname</span></div>
          </div>
                    </div>
                <div style={{backgroundColor:templateData.brandColor?templateData.brandColor:"rgb(15, 144, 234)",borderRadius:"0 0 20px 20px"}}>
                <div  className="pt-3 px-2 d-flex"><img  alt="" src="/assets/dashboard/story_img_3.jpg" style={{width:"40px", height:"40px",objectFit:"cover"}} className="rounded"/><div className="mx-2 "><span className="fw-bold text-white">Ample Mortgages</span><p className="text-white fw-bold" style={{fontSize:"10px"}}>364 Reviews</p></div>
                <div className="" style={{marginLeft:"22px"}}><span className="fw-bold text-white">5.0/5</span><p className="text-white"><img  alt="" src="/assets/dashboard/story_img_3.jpg" style={{width:"18px", height:"18px",objectFit:"cover"}} className="rounded-circle me-1"/><img  alt="" src="/assets/dashboard/story_img_3.jpg" style={{width:"18px", height:"18px",objectFit:"cover"}} className="rounded-circle"/></p></div>
                </div>
                </div>
                </div>
              
                </div>
           </div>

           <div className="d-flex justify-content-between my-2"><div><Icon icon="radix-icons:heart" width="26" height="26"  color="red"/><Icon icon="iconamoon:comment" width="26" height="26"/><Icon icon="mingcute:telegram-line" width="26" height="26"/></div><div><Icon icon="material-symbols:bookmark-outline" width="26" height="26"/></div></div>
           <div className="border-top my-1"></div>
           <div className="d-flex justify-content-between my-2 "><Icon icon="ant-design:home-filled" width="26" height="26"/><Icon icon="uil:search" width="26" height="26"/><Icon icon="basil:add-outline" width="26" height="26"/><Icon icon="mage:video-player" width="26" height="26"/><div style={{border:"1px solid #fda085",display: "inline-block",borderRadius:"50%"}}><img  alt="" src="/assets/dashboard/story_img_1.jpg" style={{width:"30px", height:"30px",borderRadius:"50%", margin:"2px"}}/></div></div>
           
          </div>
        </>
    )
}