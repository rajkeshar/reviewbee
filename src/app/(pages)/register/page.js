"use client"
import { RegisterUser, addContact } from "@/services";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Toaster } from "react-hot-toast";
import { useRouter } from 'next/navigation';

// export const metadata = {
//   title: "Contact-ReviewBee",
// };
const schema = yup
  .object({
    first_name: yup.string().required("First Name is Required"),
    last_name: yup.string().required("Last Name is Required"),
    email: yup.string().required("Email is Required").email("Invalid email format"),
    phone: yup.string().length(10, "Phone number must be at least 10 digits").required("Phone number is required"),
    company: yup.string().required("Company is Required "),
    password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
    conform_password: yup.string().required("Confirm password is required").oneOf([yup.ref('password'), null], "Passwords must match"),
  })
  .required();
const Register = () => {
const router =useRouter()
  const {register,handleSubmit,setValue, formState: { errors } , reset,
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const onSubmit=async(data)=>{
    const form_data={
      first_name: data.first_name,
    last_name: data.last_name,
      email: data.email,
    password: data.password,
      phone_no: data.phone,
      company: data.company,
      status: 1
    }
     try {
       await RegisterUser(form_data).then((res)=>{
        console.log(res)
        if(res.status===200){
          reset()
          router.push('/login');
        }

       })
     } catch (err) {
      console.log(err)
     }
  console.log(data)
  }
  return (
    <>
     <Toaster
      position="top-center"
      reverseOrder={false}
      />
   <img src="assets/imgs/login-bg.png" className="login-bg-img d-none d-lg-flex" alt=""/>
  <section className="section-space login-form-section register-form-section">
    <div className="container">
      <div className="row justify-content-center justify-content-xl-start align-items-center">

        <div className="col-12 col-md-8 col-xl-5 pb-4 pb-xl-0">
          <form action="" className="ct-form login-form"  onSubmit={handleSubmit(onSubmit)}>
            <h1 className="h1 mb-0">
              Sign Up
            </h1>
            <h3 className="md-section-title fw-bold">
              Create your Simply Collect Reviews account.
            </h3>
            <div className="mb-4">
              <div className="form-group">
                <span>
                  <img src="assets/imgs/user.png" alt="" className="img-fluid" />
                </span>
                <input type="text" className="form-control" placeholder="First Name*"   {...register("first_name")}/>
              </div>
                {errors.first_name && (<p className="error" style={{ color: "red" }}>{errors.first_name.message}</p>)}
            </div>
            <div className="mb-4" >
              <div className="form-group">
                <span>
                  <img src="assets/imgs/user.png" alt="" className="img-fluid"/>
                </span>
                <input type="text" className="form-control" placeholder="Last Name*"   {...register("last_name")}/>
              </div>
              {errors.last_name && (<p className="error" style={{ color: "red" }}>{errors.last_name.message}</p>)}
            </div>
            <div className="mb-4">
              <div className="form-group">
                <span>
                  <img src="assets/imgs/login-email-icon.png" alt="" className="img-fluid" />
                </span>
                <input type="text" className="form-control" placeholder="Email*"   {...register("email")}/>
              </div>
              {errors.email && (<p className="error" style={{ color: "red" }}>{errors.email.message}</p>)}
            </div>
            <div className="mb-4">
              <div className="form-group">
                <span>
                  <img src="assets/imgs/call.png" alt="" className="img-fluid" />
                </span>
                <input type="text" className="form-control" placeholder="Phone No*"   {...register("phone")}/>
              </div>
              {errors.phone && (<p className="error" style={{ color: "red" }}>{errors.phone.message}</p>)}
            </div>
            <div className="mb-4">
              <div className="form-group">
                <span>
                  <img src="assets/imgs/company.png" alt="" className="img-fluid"/>
                </span>
                <input type="text" className="form-control" placeholder="Company*"   {...register("company")}/>
              </div>
              {errors.company && (<p className="error" style={{ color: "red" }}>{errors.company.message}</p>)}
            </div>
            <div className="mb-4">
              <div className="form-group">
                <span>
                  <img src="assets/imgs/password-icon.png" alt="" className="img-fluid" />
                </span>
                <input type="password" className="form-control" placeholder="Password*"  {...register("password")}/>
              </div>
              {errors.password && (<p className="error" style={{ color: "red" }}>{errors.password.message}</p>)}
            </div>
            <div className="mb-4">
              <div className="form-group">
                <span>
                  <img src="assets/imgs/password-icon.png" alt="" className="img-fluid" />
                </span>
                <input type="password" className="form-control" placeholder="Confirm Password*"   {...register("conform_password")}/>
              </div>
              {errors.conform_password && (<p className="error" style={{ color: "red" }}>{errors.conform_password.message}</p>)}
            </div>
            <div className="d-flex align-items-center flex-wrap justify-content-between mb-4">
              <div>
                <div className="form-check d-flex align-items-center">
                  <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckIndeterminate"/>
                  <label className="form-check-label pt-1" for="flexCheckIndeterminate">
                    I agree with the terms of use
                  </label>
                </div>
              </div>
            </div>
            <button className="btn btn-secondary w-100"  type="submit">
              Sign Up
            </button>
            <div className="mt-3 text-center">
              <span className="details-text">
                Already have an Account? <Link href="/login">Sign In</Link>
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

export default Register;
