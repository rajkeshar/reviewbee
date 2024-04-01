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
import { Avatar, Card, Grid, Popover, TextField, Typography } from "@mui/material";
import "../../../../public/css/home.css";
// import EditIcon from '@mui/icons-material/Edit';
import { Edit } from "@mui/icons-material";
import Button from '@mui/material/Button';
import { TextareaAutosize } from '@mui/base';
import { sendReview,getReview} from "@/services";
import toast, { Toaster } from "react-hot-toast";
import { RedirectType } from "next/navigation";
import { Icon } from '@iconify/react';
import { ChromePicker, SketchPicker } from 'react-color'
import { useSession, signIn, signOut } from "next-auth/react";

function Home() {

  // const { data: session } = useSession();

  const social_embed=[
    {
      name:"FaceBook",
      img:"instagram.jpg"
    },
    {
      name:"Instagram",
      img:"instagram.jpg"
    }
  ]
  const SocialCard=({name, img})=>{
    return(
      <>
      <div style={{backgroundColor:"white",height:"200px", width:"250px",borderRadius:"13px", border:"1px solid lightgray"}}>
        <div className="d-flex justify-content-between py-2 px-2">
          <Icon icon="fluent:share-48-regular" width={25} height={25}></Icon>
          <Icon icon="icons8:checked" width={25} height={25}></Icon>
        </div>
        <div  className='d-flex  flex-column align-items-center'>
           <img alt="" style={{width:"80px", height:"80px"}} src={`/assets/images/${img}`}/>
           <h5>{name}</h5>
        </div>
        <div className="d-flex align-items-center  justify-content-center"><Button style={{width:"80%", borderRadius:"20px", color:"black", fontWeight:"bold"}} variant="outlined" size="small">Edit</Button></div>

      </div>
      </>
    )
  }
const [sketchPickerColor, setSketchPickerColor] = useState({
  r: '241',
  g: '112',
  b: '19',
  a: '1'
})
const [sketchPickerColorBackground, setSketchPickerColorBackground] = useState({
  r1: '241',
  g1: '112',
  b1: '19',
  a1: '1'
})
console.log(sketchPickerColorBackground)
const { r, g, b, a } = sketchPickerColor
const { r1, g1, b1, a1 } = sketchPickerColorBackground
// console.log(sketchPickerColorBackground.r1)
// const [open, setOpen] = useState(false)
const [anchorEl1, setAnchorEl1] = useState(null);
const [anchorEl2, setAnchorEl2] = useState(null);

const handleClick1 = (event) => {
  setAnchorEl1(event.currentTarget);
};

const handleClick2 = (event) => {
  setAnchorEl2(event.currentTarget);
};

const handleClose1 = () => {
  setAnchorEl1(null);
};

const handleClose2 = () => {
  setAnchorEl2(null);
};

const open1 = Boolean(anchorEl1);
const open2 = Boolean(anchorEl2);
const id1 = open1 ? 'simple-popover-1' : undefined;
const id2 = open2 ? 'simple-popover-2' : undefined;

  return (
    <>
        <div style={{backgroundColor:"#dee5ec", padding:"10% 15%", width:"100%"}}>
        <div>
        <button onClick={() => signIn("github")}>
      Sign in with GitHub
    </button>
    </div>
        <Grid container spacing={2}>

 {social_embed.map((item,index)=><Grid item key={index} xs={12} sm={6} md={4}>
    <SocialCard name={item.name} img={item.img}/>
  </Grid>)}
  <Grid item xs={12} sm={6} md={4}>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
  </Grid>
</Grid>

<Grid container spacing={2}>
  <Grid item xs={12} sm={6} md={7}>
  <Card style={{minHeight:"500px"}} variant="outlined" >
    <div style={{padding:"15px 20px"}}>
      <h6>Brand Color</h6>
      <div style={{width:"95%", border:"1px solid lightgray", height:"35px",margin:"5px", borderRadius:"15px"}}>
        <div style={{width:"25px", height:"25px",backgroundColor:`rgba(${r},${g},${b},${a})`, borderRadius:"50%", margin:" 4px  0 0px 10px"}}  aria-describedby={id1} variant="contained" onClick={handleClick1}></div>
        {/* <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
              >
                <Typography sx={{ p: 2 }}>
                  {' '}
                  <SketchPicker
                    onChange={color => {
                      setSketchPickerColor(color.rgb)
                    }}
                    color={sketchPickerColor}
                  />
                </Typography>
              </Popover> */}
              <Popover
        id={id1}
        open={open1}
        anchorEl={anchorEl1}
        onClose={handleClose1}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div>
        <SketchPicker
                    onChange={color => {
                      setSketchPickerColor(color.rgb)
                    }}
                    color={sketchPickerColor}
                  />
        </div>
      </Popover>
      </div>
    </div>
    <div style={{padding:"15px 20px"}}>
      <h6>Background color</h6>
      <div style={{width:"95%", border:"1px solid lightgray", height:"35px",margin:"5px", borderRadius:"15px"}}>
        <div style={{width:"25px", height:"25px",backgroundColor:`rgba(${r1},${g1},${b1},${a1})`, borderRadius:"50%", margin:" 4px  0 0px 10px"}} aria-describedby={id2} variant="contained" onClick={handleClick2}>
        </div>
        <Popover
        id={id2}
        open={open2}
        anchorEl={anchorEl2}
        onClose={handleClose2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div>
        <SketchPicker
                    onChange={color => {
                      setSketchPickerColorBackground(color.rgb)
                    }}
                    color={sketchPickerColorBackground}
                  />
        </div>
      </Popover>
      </div>
    </div>
    <div style={{width:"90%", margin:"15px 20px"}}>
    <h6>Text of the post</h6>
    <TextField fullWidth rows={4} multiline defaultValue='' id='textarea-outlined-static' />
    </div>
    <div style={{width:"90%", margin:"15px 20px"}}>
   <Button style={{width:"100%", border:"1px solid gray", color:"black", borderRadius:"20px"}}>Save</Button >
    </div>
  </Card>
  </Grid>
  <Grid item xs={12} sm={6} md={5}>
  <Card style={{minHeight:"500px"}} variant="outlined">
    <div>
    <img alt="" style={{width:"150px", height:"60px"}} src="/assets/images/instagram_template.jpg"/>
    <div>
      <Icon icon="system-uicons:button-add" width="32" height="32"/>
      <Icon icon="ph:heart-light" width="32" height="32"/>
      <Icon icon="ph:telegram-logo-light" width="32" height="32"/>
    </div>
    </div></Card>
  </Grid>
</Grid>
        </div>
    </>
  )
}

export default Home