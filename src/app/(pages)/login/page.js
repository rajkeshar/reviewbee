"use client"
import { LoginUser, addContact } from "@/services";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import { getIntegraton } from "@/services";
// export const metadata = {
//   title: "Contact-ReviewBee",
// };
const schema = yup
  .object({
    email: yup.string().required("Field is Required "),
    password: yup.string().required("Field is Required "),
  }).required();
const Features = () => {
 const [rememerme, setRememberMe]=useState(false)
  const {register,handleSubmit,setValue, formState: { errors }  , reset,
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const onSubmit=async(data)=>{
    console.log(data)
    const form_data={
      email: data.email,
      password: data.password,
    }
     try {
        await LoginUser(form_data).then((res)=>{
          console.log(res.status)
        if (res.status === 200){
          console.log(res.data)
         rememerme?localStorage.setItem('userInfo', JSON.stringify(res.data)):sessionStorage.setItem('userInfo', JSON.stringify(res.data));
          // sessionStorage.setItem('userInfo', JSON.stringify(res.data));
          getIntegraton({sorce:"facebook"}).then((data)=>{
            console.log(data,"jkl")
        
            localStorage.setItem("facebook",data?.data?.data.filter((ids)=>ids.source == "facebook")[0]?.user_token)
            localStorage.setItem("fbUserId",data?.data?.data.filter((ids)=>ids.source == "facebook")[0]?.fb_user_id)
            localStorage.setItem("selectedPage",data?.data?.data.filter((ids)=>ids.source == "facebook")[0]?.place_id)
            window.location.href = "/dashboard/review";
            reset()
          })
      
        }else{
          // toast.error(`${res.message}`)
        }
       
       })
     } catch (err) {
      console.log(err)
     }
  }
  console.log(rememerme)
  return (
    <>
        <Toaster
        position="top-center"
        reverseOrder={false}
        />
  <img src="assets/imgs/login-bg.png" className="login-bg-img d-none d-lg-flex" alt="" />
  <section className="section-space login-form-section">
    <div className="container">
      <div className="row justify-content-center justify-content-xl-start align-items-center">

        <div className="col-12 col-md-8 col-xl-5 pb-4 pb-xl-0">
          <form action="" className="ct-form login-form" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="h1 mb-0">
              Welcome
            </h1>
            <h3 className="md-section-title fw-bold">
              Login into your Account.
            </h3>
            <div className="mb-4">
              <div className="form-group">
                <span>
                  <img src="assets/imgs/login-email-icon.png" alt="" className="img-fluid" />
                </span>
                <input type="text" className="form-control" placeholder="Email" {...register("email")}/>
              </div>
                {errors.email && (<p className="error" style={{ color: "red" }}>{errors.email.message}</p>)}
            </div>
            <div className="mb-4">
              <div className="form-group">
                <span>
                  <img src="assets/imgs/password-icon.png" alt="" className="img-fluid"/>
                </span>
                <input type="text" className="form-control" placeholder="Password" {...register("password")}/>
              </div>
              {errors.password && (<p className="error" style={{ color: "red" }}>{errors.password.message}</p>)}
            </div>
            <div className="d-flex align-items-center flex-wrap justify-content-between mb-4">
              <div>
                <div className="form-check d-flex align-items-center">
                  <input className="form-check-input me-2" type="checkbox" value="" checked={rememerme} id="flexCheckIndeterminate"  onClick={() => setRememberMe(!rememerme)} />
                  <label className="form-check-label pt-1" for="flexCheckIndeterminate" >
                    Remember me
                  </label>
                </div>
              </div>
              <a href="">
                Forgot Password?
              </a>
            </div>
            <button className="btn btn-secondary w-100" type="submit" disabled={!rememerme}>
              Login
            </button>
            <div className="mt-3 text-center">
              <span className="details-text">
                Don&apos;t have an account? <Link href="/register">Sign Up</Link>
              </span>
            </div>
            <img src="assets/imgs/angle-icon.png" className="form-angle-icon" alt="" />
          </form>
        </div>
      </div>
    </div>
  </section>
    </>
  );
};

export default Features;
