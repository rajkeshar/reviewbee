import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, Chip, Grid, Switch, TextField} from '@mui/material';
import { getSocialTemplate } from '@/services';
import { Icon } from "@iconify/react";
import html2canvas from 'html2canvas';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function ReviewPostModel({open, setOpen,imageData,selectedPageToken}) {
    const [templateData, setTemplateData]=React.useState({bgColor:"", brandColor: "", templateName:""})
    const [socialPostValue,setSocialPostValue]=React.useState("")
    const [isLoading, setIsLoading]=React.useState(true)
    const fetchSocialTemplate=()=>{
        getSocialTemplate().then((res)=>{
          console.log(res.data.data)
          setTemplateData({...templateData, bgColor:res?.data?.data?.bgColor,brandColor: res?.data?.data?.color})
        //   setPostTemplate(res.data.data.text_template_type)
        })
      }
      React.useEffect(()=>{
        fetchSocialTemplate()
      },[])

      React.useEffect(()=>{
        getSocialTemplate().then((res)=>{
       console.log(res.data.data)
       setSocialPostValue(res?.data?.data?.text_template_type)
       })
      },[])
      console.log(imageData)
      const componentRef = React.useRef(null);

      const handleDownload = () => {
        html2canvas(componentRef.current).then((canvas) => {
          const link = document.createElement('a');
          link.download = 'image.png';
          link.href = canvas.toDataURL();
          link.click();
        });
      };
    //   const handleSendToServer = () => {
    //     html2canvas(componentRef.current).then((canvas) => {
    //       const imageData = canvas.toDataURL(); // This is the base64 image data
    //       // Send imageData to the server using fetch or any other method
    //       console.log(imageData)
    //       axios.post(`https://graph.facebook.com/v19.0/${localStorage.getItem("selectedPage")}/photos`
    //       ,{},{
    //         params: {
    //           message: socialPostValue,
    //         //   url: "https://img.freepik.com/free-photo/business-women-signature-document_1388-90.jpg?size=626&ext=jpg",
    //         source: imageData,
    //           access_token:selectedPageToken
    //         }
    //       }
    //       ).then((res)=>{
    //         console.log(res,"mlk69")
    //         toast.success("Post Uploaded Successfully")
    //       }).catch((err)=>{
    //         console.log(err,"mlk72")
    //       })
    //     });
    //   };
    //   const handleSendToServer = () => {
    //     html2canvas(componentRef.current).then((canvas) => {
    //       canvas.toBlob((blob) => {
    //         const formData = new FormData();
    //         formData.append('source', blob, 'image.png'); // 'source' should match the field name expected by Facebook API
      
    //         axios.post(
    //           `https://graph.facebook.com/v19.0/${localStorage.getItem("selectedPage")}/photos`,
    //           formData,
    //           {
    //             params: {
    //               message: socialPostValue,
    //               access_token: selectedPageToken
    //             },
    //             headers: {
    //               'Content-Type': 'multipart/form-data'
    //             }
    //           }
    //         ).then((res) => {
    //           console.log(res, "mlk69");
    //           toast.success("Post Uploaded Successfully");
    //           setOpen(!open)
    //         }).catch((err) => {
    //           console.log(err, "mlk72");
    //         });
    //       });
    //     });
    //   };
      const handleSendToServer = () => {
        const quality = 1; // Specify the quality between 0 and 1 (1 being the best quality)
        const format = 'image/jpeg'; // Specify the image format ('image/png' or 'image/jpeg')
        setIsLoading(!isLoading)
        html2canvas(componentRef.current).then((canvas) => {
          canvas.toBlob((blob) => {
            const formData = new FormData();
            formData.append('source', blob, 'image.jpg'); // 'source' should match the field name expected by Facebook API
      
            axios.post(
              `https://graph.facebook.com/v19.0/${localStorage.getItem("selectedPage")}/photos`,
              formData,
              {
                params: {
                  message: socialPostValue,
                  access_token: selectedPageToken
                },
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
            ).then((res) => {
              // console.log(res, "mlk69");
              toast.success("Post Uploaded Successfully");
              setIsLoading(true)
              setOpen(!open)
            }).catch((err) => {
              console.log(err, "mlk72");
            });
          }, format, quality);
        });
      };
      
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
          toast.success("somthing  went wrong!")

        })
      }
  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
                <Toaster
    position="top-right"
    reverseOrder={false}
    />
      <Dialog
        onClose={()=>setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="md"
        fullWidth 
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         Post Review
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={()=>setOpen(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent >
        <Grid container spacing={2}>
  <Grid item xs={6}>
    <Box>  Facebook<Switch  defaultChecked />Instagram<Switch  defaultChecked /></Box>
   <Box style={{width:""}}>
    
   <TextField
          id="outlined-multiline-static"
        //   label="Multiline"
          multiline
          rows={10}
          fullWidth
          value={socialPostValue}
        //   defaultValue="Default Value"d
        />
   </Box>
  </Grid>
  <Grid item xs={6} style={{display:"flex", justifyContent: "center", alignItems: "center" }}>
  
    <Box >
        <div className='d-flex justify-content-between'>
        <Chip label="Preview" />
    {/* <Button onClick={handleDownload} variant="contained">Download</Button> */}
    <button class="download-button" href="#" onClick={handleDownload} >
    <svg class="icons-download"  xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"/></svg>
  <span class="texts-download">
    <span class="text-2-download">Download</span>
  </span>
</button>
    
    </div>
    <div class="card p-4 mb-3">
           {/* <div className="d-flex justify-content-between"><img src="/assets/dashboard/insta_template.jpg" style={{width:"100px", height:"40px"}}/><div><Icon icon="basil:add-outline" width="26" height="26"/><Icon icon="ph:heart" width="26" height="26"/><Icon icon="mingcute:telegram-line" width="26" height="26"/></div></div>
           <div className="d-flex justify-content-between"><div style={{border:"2px solid #fda085",display: "inline-block",borderRadius:"50%"}}><img src="/assets/dashboard/story_img_1.jpg" style={{width:"60px", height:"60px",borderRadius:"50%", margin:"2px"}}/></div>
           <div style={{border:"2px solid #fda085",display: "inline-block",borderRadius:"50%"}}><img src="/assets/dashboard/story_img_2.jpg" style={{width:"60px", height:"60px",borderRadius:"50%", margin:"2px",objectFit:"cover"}}/></div>
           <div style={{border:"2px solid #fda085",display: "inline-block",borderRadius:"50%"}}><img src="/assets/dashboard/story_img_3.jpg" style={{width:"60px", height:"60px",borderRadius:"50%", margin:"2px",objectFit:"cover"}}/></div>
           <div style={{border:"2px solid #fda085",display: "inline-block",borderRadius:"50%"}}><img src="/assets/dashboard/story_img_4.jpg" style={{width:"60px", height:"60px",borderRadius:"50%", margin:"2px",objectFit:"cover"}}/></div>
           </div> */}
           {/* <div className="my-3">  <div style={{border:"2px solid #fda085",display: "inline-block",borderRadius:"50%"}}><img src="/assets/dashboard/story_img_3.jpg" style={{width:"30px", height:"30px",borderRadius:"50%", margin:"2px",objectFit:"cover"}}/></div><span className="fw-bold mx-2">Ample Mortgages</span></div> */}
           <div ref={componentRef}>
            <div style={{ backgroundColor: templateData.bgColor ? templateData.bgColor : "gray", borderRadius: "15px" }} className="p-3">
                <div style={{backgroundColor:"white",borderRadius:"20px"}} >
              
                    <div className="p-3">
                    <p className="fw-bold h6">{imageData.text}</p>
                    <div className="d-flex">
                    <div class="d-flex justify-content-start my-2">
            <span class="fa fa-star fa-1x primary-color"></span>
            <span class="fa fa-star fa-1x primary-color"></span>
            <span class="fa fa-star fa-1x primary-color"></span>
            <span class="fa fa-star fa-1x primary-color"></span>
            <span class="fa fa-star fa-1x primary-color"></span>
          </div> 
          <div style={{display: "inline-block",marginLeft:"5px", marginTop:"3px"}}><img alt="" src="/assets/dashboard/story_img_3.jpg" style={{width:"18px", height:"18px",borderRadius:"50%",objectFit:"cover"}}/><span className="fw-bold mx-1" style={{fontSize:"10px"}}>{imageData?.author_name}</span></div>
          </div>
                    </div>
                <div style={{backgroundColor:templateData.brandColor?templateData.brandColor:"rgb(15, 144, 234)",borderRadius:"0 0 20px 20px"}}>
                <div  className="pt-3 px-2 d-flex"><img alt='' src="/assets/dashboard/story_img_3.jpg" style={{width:"40px", height:"40px",objectFit:"cover"}} className="rounded"/><div className="mx-2 "><span className="fw-bold text-white">Ample Mortgages</span><p className="text-white fw-bold" style={{fontSize:"10px"}}>364 Reviews</p></div>
                <div className="" style={{marginLeft:"22px"}}><span className="fw-bold text-white">5.0/5</span><p className="text-white"><img alt='' src="/assets/dashboard/story_img_3.jpg" style={{width:"18px", height:"18px",objectFit:"cover"}} className="rounded-circle me-1"/><img alt='' src="/assets/dashboard/story_img_3.jpg" style={{width:"18px", height:"18px",objectFit:"cover"}} className="rounded-circle"/></p></div>
                </div>
                </div>
                </div>
              
                </div>
           </div>

           {/* <div className="d-flex justify-content-between my-2"><div><Icon icon="radix-icons:heart" width="26" height="26"  color="red"/><Icon icon="iconamoon:comment" width="26" height="26"/><Icon icon="mingcute:telegram-line" width="26" height="26"/></div><div><Icon icon="material-symbols:bookmark-outline" width="26" height="26"/></div></div> */}
           <div className="border-top my-1"></div>
           {/* <div className="d-flex justify-content-between my-2 "><Icon icon="ant-design:home-filled" width="26" height="26"/><Icon icon="uil:search" width="26" height="26"/><Icon icon="basil:add-outline" width="26" height="26"/><Icon icon="mage:video-player" width="26" height="26"/><div style={{border:"1px solid #fda085",display: "inline-block",borderRadius:"50%"}}><img src="/assets/dashboard/story_img_1.jpg" style={{width:"30px", height:"30px",borderRadius:"50%", margin:"2px"}}/></div></div> */}
           
          </div>
    </Box>
  </Grid>
</Grid>
{/* <Button onClick={handleSendToServer}>Post</Button> */}
        </DialogContent>
        <DialogActions>
        <button class="playstore-button" href="#" onClick={handleSendToServer}>
{ isLoading?<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15q.425 0 .713.288T6 16v2h12v-2q0-.425.288-.712T19 15q.425 0 .713.288T20 16v2q0 .825-.587 1.413T18 20zm5-12.15L9.125 9.725q-.3.3-.712.288T7.7 9.7q-.275-.3-.288-.7t.288-.7l3.6-3.6q.15-.15.325-.212T12 4.425q.2 0 .375.063t.325.212l3.6 3.6q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L13 7.85V15q0 .425-.288.713T12 16q-.425 0-.712-.288T11 15z"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.9"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity="0.3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></g></svg>}
  <span class="texts-play">
    <span class="text-2-play">Post</span>
  </span>
</button>
{/* <Button variant="contained" onClick={handleSendToServer}>Post</Button> */}
          <Button autoFocus onClick={()=>setOpen(false)}>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
