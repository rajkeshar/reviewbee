 "use client"
 import Link from "next/link"
import "../../../public/scss/dashboard.scss"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { FacebookProvider, useLogin } from 'react-facebook';
 const Dashboard =({children})=>{

  const path = usePathname();
  const router = useRouter();
  const [data, setData]=useState([])
useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=1069116127701174&autoLogAppEvents=1";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  const hadleRemoveLoginCrediantial=()=>{
    if (window.sessionStorage.getItem('userInfo') !== null) {
      window.sessionStorage.removeItem('userInfo')
     
      window.location.href = "/";
      // router.push('/')
  } else {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("facebook")
    localStorage.removeItem("fbUserId")
    localStorage.removeItem("selectedPage")
    window.location.href = "/";
    // router.push('/')
  } 
  }
  useEffect(() => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo")) || JSON.parse(sessionStorage.getItem("userInfo")) || {};
      const { data } = userInfo;
      if (data && data.token) {
        console.log("User is authenticated");
      } else {
        router.push('/login');
      }
    } catch (error) {
      console.error("Error parsing user info:", error);
      router.push('/login');
    }
  }, [router]);
  console.log(data)
    return(
        <FacebookProvider appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}>
          <div className="navbar navbar-expand-xl flex-column p-0 nav-sidebar">
    <div className="d-flex align-items-center justify-content-between w-100 p-3 py-md-4">
      <a href="/" className="text-decoration-none">
        <img src="/assets/dashboard/logo.png" alt="Review Bee"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu-collapse"
        aria-controls="menu-collapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="fa fa-bars"></span>
      </button>
    </div>
    <div className="collapse navbar-collapse align-items-start w-100 p-3" id="menu-collapse">
      <ul className="nav nav-pills flex-column w-100 mt-xl-3 ">
        <li className="nav-item">
          <Link href="/dashboard/review" className={`${path === `/dashboard/review` ? 'active' : ''} nav-link `}>
            <img src="/assets/dashboard/review-menu.png" className="menu-icon" alt=""/>
            Reviews
          </Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img src="/assets/dashboard/feedback.png" className="menu-icon"  alt=""/>
            Get Reviews
          </a>
        </li>
        <li className="nav-item">
          <Link href="/dashboard/review-link" className={`${path === `/dashboard/review-link` ? 'active' : ''} nav-link `}>
            <img src="/assets/dashboard/link.png" className="menu-icon"  alt=""/>
            Review Link
          </Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img src="/assets/dashboard/analisys.png" className="menu-icon"  alt=""/>
            Analytics
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img src="/assets/dashboard/settings.png" className="menu-icon"  alt=""/>
            Automate
          </a>
        </li>
        <li className="nav-item">
          <button className="nav-link btn-toggle" data-bs-toggle="collapse" data-bs-target="#home-collapse"
            aria-expanded="false">
            <div className="d-flex align-items-center">
              <img src="/assets/dashboard/settings-2.png" className="menu-icon"  alt=""/>
              Settings
            </div>
            <i className="fa fa-chevron-down"></i>
          </button>
          <div className="collapse ps-4 ms-1" id="home-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link href="/dashboard/integrations"  className={`${path === `/dashboard/integrations` ? 'active' : ''} nav-link `}>Integrations</Link></li>
              <li><Link href="/dashboard/social" className={`${path === `/dashboard/social` ? 'active' : ''} nav-link `}>Social</Link></li>
              <li><a href="#" className="nav-link">Noifications</a></li>
              <li><a href="#" className="nav-link">Account</a></li>
              <li><a href="#" className="nav-link">SMS Service</a></li>
              <li><Link href="/dashboard/company" className="nav-link">Company</Link></li>
            </ul>
          </div>
        </li>
        <li className="nav-item" onClick={hadleRemoveLoginCrediantial}>
          <Link href=""  className="nav-link" aria-current="page">  
            <img src="/assets/dashboard/logout.png" className="menu-icon"  alt=""/>
            Logout
          </Link>
        </li>
        {/* </a> */}
        {/* </li> */}
      </ul>
    </div>

          </div>
  <div>{children}</div>
        </FacebookProvider>
    )
}

export default Dashboard