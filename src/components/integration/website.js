"use client"

import React, { useEffect, useState, useRef } from 'react';
import { getIntegraton } from '@/services';
// import Autocomplete from 'react-google-autocomplete';
import {LoadScript, Autocomplete } from '@react-google-maps/api';

import Dialog from '@mui/material/Dialog';

import { addIntegration, deleteIntegration } from '@/services';
import { Toaster } from 'react-hot-toast';
import Link from 'next/link';


import { useFacebook } from 'react-facebook';
import axios from 'axios';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import { addSocialTemplate } from '@/services';

import "react-quill/dist/quill.snow.css";


export const Google = ({ googleData, setRefetch, refetch }) => {

  const [place, setPlace] = useState(null);
  const autocompleteRef = useRef(null);
  const handlePlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place && place.geometry) {
        console.log('Selected place:', place);
        // Do something with the selected place, like set it to state
        setPlace(place);
      }
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOnSubmit = () => {
    let data =
    {
      "action_refresh_access": "0",
      "average_reviews": 5,
      "created_on": "2024-03-27T09:41:12.680000",
      "credits_used": 0,
      "landing_page": "1",
      "place_id": place.place_id,
      "place_name": place.name,
      "position": 4,
      "review_url": `https://search.google.com/local/writereview?placeid=${place.place_id}`,
      "source": "google",
      "source_url": place.url
    }
    addIntegration(data).then((res) => {
      setOpen(false)
      setRefetch(!refetch)
    })
    console.log(data)
  }
  console.log(place)
  const [location, setLocation] = useState('');
  const autoCompleteRef = useRef(null);

  const handlePlaceSelected = (place) => {
    setLocation(place.formatted_address);
  };

  // Replace YOUR_API_KEY with your actual Google Maps API key
  const options = {
    types: ['geocode'], // Limit suggestions to geocodes (addresses)
  };
  const [isMapsLoaded, setIsMapsLoaded] = useState(false);

  const handleLoad = () => {
    setIsMapsLoaded(true);
  };
  const deleteGoogleIntegration = () => {
    deleteIntegration({ "source": "google" }).then((res) => {
      setRefetch(!refetch)
      window.location.reload()
    }
    )
  }
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      {/* <div style={{marginBottom:"150px"}}> */}
      {/* <LoadScript googleMapsApiKey="AIzaSyBkYwtFCpBpbeIxdMrAkkRvIFVklyO4uaA"  libraries={['places']}>
                <Autocomplete
                    // onLoad={(autocomplete) => console.log('Autocomplete loaded:', autocomplete)}
                    onLoad={(autocomplete) => autocompleteRef.current = autocomplete}
                    // onPlaceChanged={() => handlePlaceChanged(autocomplete.getPlace())}
                    onPlaceChanged={handlePlaceChanged}
                >
                    <input
                        type="text"
                        placeholder="Enter a location"
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                            // position: 'absolute',
                            // left: '50%',
                            // marginLeft: '-120px'
                        }}
                    />
                </Autocomplete>
        </LoadScript> */}
      {/* <button onClick={handleOnSubmit}>integrate</button> */}
      {/* </div> */}
      <div class="col-12 col-sm-6 col-md-4 col-xl-3">
        {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
        <div class="card mb-3 p-3">
          <div class="d-flex justify-content-between">
            {/* {googleData.googleData.source_url } */}
            {googleData?.source && <Link href={googleData?.source_url} class="primary-color" target="_blank">
              <i class="fa fa-arrow-up-right-from-square large-icon"></i>
            </Link>}

            {googleData?.source && <i class="fa fa-circle-check text-success large-icon"></i>}
          </div>
          <div class="text-center">
            <span class="social-icon">
              <img alt="" src="/assets/dashboard/google.webp" />
            </span>
            <h6>Google</h6>
          </div>
          {googleData?.source ? <button class="btn btn-outline-secondary btn-block mt-2"
            data-bs-toggle="modal" data-bs-target="#disconnectGoogle"
          // onClick={handleClickOpen}
          >
            Edit
          </button> : <button class="btn btn-outline-secondary btn-block mt-2"
            // data-bs-toggle="modal" data-bs-target="#EditModalGoogle"
            onClick={handleClickOpen}
          >
            Integrate
          </button>}
        </div>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{ zIndex: 999 }}
      >
        {/* <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton> */}
        <div class="modal-content">
          <div class="modal-header justify-content-end border-0 pb-0">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
          </div>
          <div class="modal-body">
            <div class=" text-center">
              <span class="social-icon me-3">
                <img alt="" src="/assets/dashboard/google.webp" />
              </span>
              <h5 class="my-2 secondary-color">Link your page</h5>
              <p class="detail-text">
                Insert the page link of Tripadvisor (only for hotels, restaurants or attractions)
                Importing reviews could take up to 5 minutes.
                Examples:
              </p>
            </div>
            <div class="my-3">
              <div >
                <LoadScript googleMapsApiKey="AIzaSyBkYwtFCpBpbeIxdMrAkkRvIFVklyO4uaA" libraries={['places']}>
                  <Autocomplete
                    // onLoad={(autocomplete) => console.log('Autocomplete loaded:', autocomplete)}
                    onLoad={(autocomplete) => autocompleteRef.current = autocomplete}
                    // onPlaceChanged={() => handlePlaceChanged(autocomplete.getPlace())}
                    onPlaceChanged={handlePlaceChanged}
                  >
                    <input
                      type="text"
                      placeholder="Enter a location"
                      // style={{
                      //     boxSizing: `border-box`,
                      //     border: `1px solid transparent`,
                      //     width: `240px`,
                      //     height: `32px`,
                      //     padding: `0 12px`,
                      //     borderRadius: `3px`,
                      //     boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                      //     fontSize: `14px`,
                      //     outline: `none`,
                      //     textOverflow: `ellipses`,
                      // }}
                      class="form-control shadow-none p-3"
                    />
                  </Autocomplete>
                </LoadScript>
              </div>
              {/* <input type="text" class="form-control shadow-none p-3"
              placeholder="Enter a Location"/> */}
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-secondary" onClick={handleOnSubmit}>Integrate Google</button>
          </div>
        </div>
        {/* <DialogContent >
        <Typography gutterBottom>
           Link your page
          </Typography>
          <Typography gutterBottom>
          Insert the page link of Tripadvisor (only for hotels, restaurants or attractions) Importing reviews could take up to 5 minutes. Examples:
          </Typography>
          <div style={{zIndex: 1000}}>
       <LoadScript googleMapsApiKey="AIzaSyBkYwtFCpBpbeIxdMrAkkRvIFVklyO4uaA"  libraries={['places']}>
       <Autocomplete
                    // onLoad={(autocomplete) => console.log('Autocomplete loaded:', autocomplete)}
                    onLoad={(autocomplete) => autocompleteRef.current = autocomplete}
                    // onPlaceChanged={() => handlePlaceChanged(autocomplete.getPlace())}
                    onPlaceChanged={handlePlaceChanged}
                >
                    <input
                        type="text"
                        placeholder="Enter a location"
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `540px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                            // position: 'absolute',
                            // left: '50%',
                            // marginLeft: '-120px'
                        }}
                    />
                </Autocomplete>
        </LoadScript>
        </div>
        </DialogContent> */}
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </Dialog>
      {/* <!-- Modal --> */}
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{zIndex: 999}}
        maxWidth="md"
      >
        <div style={{width:"200px", height:"200px",zIndex: 1000,}}>
       <LoadScript googleMapsApiKey="AIzaSyBkYwtFCpBpbeIxdMrAkkRvIFVklyO4uaA"  libraries={['places']}>
       <Autocomplete
                    // onLoad={(autocomplete) => console.log('Autocomplete loaded:', autocomplete)}
                    onLoad={(autocomplete) => autocompleteRef.current = autocomplete}
                    // onPlaceChanged={() => handlePlaceChanged(autocomplete.getPlace())}
                    onPlaceChanged={handlePlaceChanged}
                >
                    <input
                        type="text"
                        placeholder="Enter a location"
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                            position: 'absolute',
                            left: '50%',
                            marginLeft: '-120px'
                        }}
                    />
                </Autocomplete>
        </LoadScript>
        </div>
      </Dialog> */}
      <div class="modal fade" id="EditModalGoogle" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header justify-content-end border-0 pb-0">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class=" text-center">
                <span class="social-icon me-3">
                  <img alt="" src="/assets/dashboard/google.webp" />
                </span>
                <h5 class="my-2 secondary-color">Link your page</h5>
                <p class="detail-text">
                  Insert the page link of Tripadvisor (only for hotels, restaurants or attractions)
                  Importing reviews could take up to 5 minutes.
                  Examples:
                </p>
              </div>
              <div class="my-3">
                <div >
                  {/* <LoadScript googleMapsApiKey="AIzaSyBkYwtFCpBpbeIxdMrAkkRvIFVklyO4uaA"  libraries={['places']}>
                <Autocomplete
                    // onLoad={(autocomplete) => console.log('Autocomplete loaded:', autocomplete)}
                    onLoad={(autocomplete) => autocompleteRef.current = autocomplete}
                    // onPlaceChanged={() => handlePlaceChanged(autocomplete.getPlace())}
                    onPlaceChanged={handlePlaceChanged}
                >
                    <input
                        type="text"
                        placeholder="Enter a location"
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                        }}
                    />
                </Autocomplete>
        </LoadScript> */}
                </div>
                <input type="text" class="form-control shadow-none p-3"
                  placeholder="Enter a Location" />
              </div>
            </div>
            <div class="modal-footer justify-content-center">
              <button type="button" class="btn btn-secondary">Integrate Google</button>
            </div>
          </div>
        </div>
      </div>
      {/* model Disconnect */}

      {/* <!-- Modal --> */}
      <div class="modal fade" id="disconnectGoogle" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header px-3">
              <h5 class="modal-title secondary-color">Google</h5>
              <button type="button" class="btn">
                <span class="fa fa-rotate-right large-icon"></span>
              </button>
            </div>
            <div class="modal-body">
              <div class="d-flex justify-content-between align-items-center pe-3">
                <div class="d-flex align-items-center">
                  <span class="social-icon me-3">
                    <img alt="" src="/assets/dashboard/google.webp" />
                  </span>
                  <h5 class="my-2 secondary-color">Google</h5>
                </div>
                <Link href={googleData?.source_url ? googleData.source_url : ""} class="secondary-color" target='_blank'>
                  <i class="fa fa-arrow-up-right-from-square large-icon"></i>
                </Link>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Back</button>
              <button type="button" class="btn btn-primary" onClick={() => deleteGoogleIntegration()} data-bs-dismiss="modal">Disconnect</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const Facebook = () => {
  const [connectedFb, setConnectedFb] = useState(false)
  const { isLoading, init, error } = useFacebook();
  const [brandColorEditable, setBrandColorEditable] = useState(false)
  const [backgroundColorEditable, setBackgroundColorEditable] = useState(false)
  const [templateData, setTemplateData] = useState({ bgColor: "", brandColor: "", templateName: "" })
  const [postTemplate, setPostTemplate] = useState("")
  const [fbUser, setFbUser] = useState({
    token: "",
    userId: ""
  })
  const [pages, setPages] = useState([])
  const [selectedPage, setSelectedPage] = useState("")
  const closeElement = useRef()
  const [fb, setFb] = useState(null)

  const deleteFacebook = () => {
    deleteIntegration({ "source": "facebook" }).then((res) => {
      window.location.reload()
    }
    )
  }

  const [interationData, setInterationData] = useState([])
  const [refetch, setRefetch] = useState(false)
  useEffect(() => {
    getIntegraton({ sorce: "facebook" }).then((res) => {
      console.log(res)
      setInterationData(res?.data?.data)
    })
  }, [refetch])
  const handleLogin = async () => {
    try {
      const api = await init();
      console.log(api, "jkl")

      const response = await api.login({
        scope: 'pages_read_user_content,instagram_content_publish,business_management,instagram_manage_comments,pages_manage_posts,pages_manage_metadata,pages_show_list',
        enable_profile_selector: true
      });
      console.log(await api.getPermissions())
      const FB = await api.getFB()


      //  api?.logPageView()

      console.log(FB)
      if (FB) {
        localStorage.setItem("facebook", FB.getAccessToken())
        localStorage.setItem("fbUserId", FB.getUserID())
        setFbUser({
          token: FB.getAccessToken(),
          userId: FB.getUserID()
        })
        setConnectedFb(true)
        setFb(FB)
      }



      console.log(FB, "jkl")
    }
    catch (err) {
      console.log(err)
    }
  }

  const disconnect = () => {
    localStorage.removeItem("facebook")
    localStorage.removeItem("fbUserId")
    localStorage.removeItem("selectedPage")


    setConnectedFb(false)
    setSelectedPage("")
    deleteFacebook()
  }



  useEffect(() => {


    if (localStorage.getItem("facebook") && localStorage.getItem("fbUserId")) {
      console.log(localStorage.getItem("fbUserId"))
      console.log(localStorage.getItem("facebook"))

      setFbUser({
        token: localStorage.getItem("facebook"),
        userId: localStorage.getItem("fbUserId")
      })
      setConnectedFb(true)

    }

  }, [connectedFb])

  const getPages = async () => {
    try {

      let pagesData = await axios.get(`https://graph.facebook.com/v19.0/${fbUser.userId}/accounts?access_token=${fbUser.token}`)
      console.log(pagesData, "jkl")
      setPages(pagesData.data.data)

    }
    catch (err) {

    }
  }

  useEffect(() => {
    if (fbUser.token || fbUser.userId) {
      getPages()
    }
  }, [fbUser])

  useEffect(() => {
    if (localStorage.getItem("selectedPage")) {
      setSelectedPage(localStorage.getItem("selectedPage"))
    }
  }, [])

  console.log(templateData)

  const handleOnSocialTemplateSubmit = () => {
    const data = {
      image_template_type: 0,
      bgColor: templateData.bgColor || "",
      color: templateData.brandColor || "",
      text_template_type: postTemplate || ""
    }
    addSocialTemplate(data)
  }

  useEffect(() => {
    closeElement.current.click()
  }, [])

  const handlePostTemplate = (e) => {
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
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <div className="col-12 col-sm-6 col-md-4 col-xl-3">
        <div className="card mb-3 p-3">

          <div className="d-flex justify-content-between">

            {connectedFb ? <>  <a href="" className="primary-color">
              <i className="fa fa-arrow-up-right-from-square large-icon"></i>
            </a> <i className="fa fa-circle-check text-success large-icon"></i></> : ""}
          </div>
          <div className="text-center">
            <span className="social-icon">
              <img src="/assets/dashboard/facebook.webp" alt="" />
            </span>
            <h6>Facebook</h6>
          </div>
          {connectedFb ? <div className='d-flex justify-content-center ml-2' style={{ gap: "10px" }}> <button className="btn btn-outline-secondary btn-block mt-2" data-bs-toggle="modal" data-bs-target="#integrateModal" >
            Edit
          </button> <button className="btn btn-outline-secondary btn-block mt-2" onClick={disconnect} disabled={isLoading}>
              Disconnect
            </button></div> : <button className="btn btn-outline-secondary btn-block mt-2" data-bs-toggle="modal" data-bs-target="#integrateModal" >
            Connect
          </button>}
        </div>
      </div>

      <div ref={closeElement} className="modal fade" id="integrateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header justify-content-end border-0 pb-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className=" text-center">
                <span className="social-icon me-3">
                  <img src="/assets/dashboard/facebook.webp" alt="" />
                </span>
                <h5 className="my-2 secondary-color">Link your page</h5>
                <p className="detail-text">
                  Insert the page link of Tripadvisor (only for hotels, restaurants or attractions)
                  Importing reviews could take up to 5 minutes.
                  Examples:
                </p>
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              {connectedFb ? <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Choose Page</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedPage}
                  label="Choose Page"
                  onChange={(e) => {
                    setSelectedPage(e.target.value)
                    localStorage.setItem("selectedPage", e.target.value)
                    addIntegration({
                      page_id: e.target.value,
                      name: pages.filter((ids) => ids.id == e.target.value)[0]?.name,
                      page_access_token: pages.filter((ids) => ids.id == e.target.value)[0]?.access_token,
                      user_token: fbUser.token,
                      fb_user_id: fbUser.userId,
                      source: "facebook"

                    })

                    closeElement.current.click()
                  }}

                >
                  {
                    pages.map((page, index) => {
                      return (<MenuItem key={index} value={page.id}>{page.name}</MenuItem>)
                    })
                  }

                </Select>
              </FormControl> : <button type="button" className="btn btn-secondary" onClick={handleLogin} disabled={isLoading}>Integrate Facebook</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const Trustpilot = ({ data }) => {
  return (
    <>
      <div class="col-12 col-sm-6 col-md-4 col-xl-3">
        <div class="card mb-3 p-3">
          <div class="d-flex justify-content-between">
            {data?.source && <a href="" class="primary-color">
              <i class="fa fa-arrow-up-right-from-square large-icon"></i>
            </a>}
            {data?.source && <i class="fa fa-circle-check text-success large-icon"></i>}
          </div>
          <div class="text-center">
            <span class="social-icon">
              <img alt="" src="/assets/dashboard/trustpilot.webp" />
            </span>
            <h6>Trustpilot</h6>
          </div>
          <button class="btn btn-outline-secondary btn-block mt-2" data-bs-toggle="modal" data-bs-target="#integrateModalTrustpilot">
            Integrate
          </button>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div class="modal fade" id="integrateModalTrustpilot" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header justify-content-end border-0 pb-0">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class=" text-center">
                <span class="social-icon me-3">
                  <img alt="" src="/assets/dashboard/facebook.webp" />
                </span>
                <h5 class="my-2 secondary-color">Link your page</h5>
                <p class="detail-text">
                  Insert the page link of Tripadvisor (only for hotels, restaurants or attractions)
                  Importing reviews could take up to 5 minutes.
                  Examples:
                </p>
              </div>
              <div class="my-3">
                {/* <label className="my-2" style={{fontSize:"18px"}}>https://uk.trustpilot.com/review/xxxxxxxxxxx</label> */}
                <input type="text" class="form-control shadow-none p-3"
                  placeholder="https://uk.trustpilot.com/review/xxxxxxxxxxx" />
              </div>
            </div>
            <div class="modal-footer justify-content-center">
              <button type="button" class="btn btn-secondary">Integrate Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const Tripadvisor = ({ data }) => {
  return (
    <>
      <div class="col-12 col-sm-6 col-md-4 col-xl-3">
        <div class="card mb-3 p-3">
          <div class="d-flex justify-content-between">
            {data?.source && <a href="" class="primary-color">
              <i class="fa fa-arrow-up-right-from-square large-icon"></i>
            </a>}
            {data?.source && <i class="fa fa-circle-check text-success large-icon"></i>}
          </div>
          <div class="text-center">
            <span class="social-icon">
              <img alt="" src="/assets/dashboard/tripadvisor.webp" />
            </span>
            <h6>Tripadvisor</h6>
          </div>
          <button class="btn btn-outline-secondary btn-block mt-2" data-bs-toggle="modal" data-bs-target="#integrateModalTripadvisor">
            Integrate
          </button>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div class="modal fade" id="integrateModalTripadvisor" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header justify-content-end border-0 pb-0">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class=" text-center">
                <span class="social-icon me-3">
                  <img alt="" src="/assets/dashboard/facebook.webp" />
                </span>
                <h5 class="my-2 secondary-color">Link your page</h5>
                <p class="detail-text">
                  Insert the page link of Tripadvisor (only for hotels, restaurants or attractions)
                  Importing reviews could take up to 5 minutes.
                  Examples:
                </p>
              </div>
              <div class="my-3">
                {/* <label className="my-2" style={{fontSize:"18px"}}>https://uk.trustpilot.com/review/xxxxxxxxxxx</label> */}
                <input type="text" class="form-control shadow-none p-3"
                  placeholder="https://uk.trustpilot.com/review/xxxxxxxxxxx" />
              </div>
            </div>
            <div class="modal-footer justify-content-center">
              <button type="button" class="btn btn-secondary">Integrate Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}