"use client"
import { useEffect, useState } from "react";
import About from "./(root)/website/about-page/page";
import BlogPage from "./(root)/website/blog-page/page";
import ContactForm from "./(root)/website/contact-form/page";
import FooterPage from "./(root)/website/footer-page/page";
import LandingPage from "./(root)/website/landing-page/page";
import Services from "./(root)/website/services-page/page";
import {LoaderFiveDemo } from "@/components/Application/websit/LoaderFiveDemo";


export default function Home() {

  const [isLodeing, setIsLoding] = useState(true)
  useEffect(()=>{
    const handelLodeing = () => {
      setTimeout(() => setIsLoding(false), 800);
    }

    if(document.readyState === "complete"){
      handelLodeing()
    }else{
      window.addEventListener("load", handelLodeing);
    }

    return () => window.removeEventListener("load", handelLodeing);
  },[isLodeing])
  
  return (
    <div>

{
  isLodeing ? (
    <div className="w-screen h-screen flex items-center justify-center">
      <LoaderFiveDemo/>
    </div>
    
  ) : (
    <>
    <LandingPage/>
      <About/>
      <BlogPage/>
      <Services/>
      <ContactForm/>
      <FooterPage/>
  </>
  )
}
    </div>
  );
}
