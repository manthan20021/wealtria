"use client";
import { Button } from "@/components/ui/button";
import { InputGroup} from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";
import {useState } from "react";


export default function UpdateLanding() {
  let [landingData, setLandingData] = useState({
    title: "",
    subtext: "",
  });


  const hendlingInputChange = (e) => {
    let { value, name } = e.target;
    setLandingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function landingPageDataPost(e) {
      e.preventDefault();
    try {
   const res =  await fetch("/api/landing-api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(landingData),
      });
      const responces = res.json()
      if(responces.ok){
        setLandingData(responces)
        
      }
      
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full  flex items-center justify-center flex-col h-screen">
      <form className="sm:w-[380px] " onSubmit={landingPageDataPost}>
        <div className="grid mb-6 max-w-sm gap-4">
          <h1 className="font-bold text-2xl">Edit Landing</h1>

          <InputGroup className="w-full sm:h-12">
           <Textarea
              placeholder="add Tiatle"
              name="title"
              value={landingData.title}
              onChange={hendlingInputChange}
           />
          </InputGroup>

          <InputGroup className="sm:h-[100px] w-full">
            <Textarea
            name="subtext"
              value={landingData.subtext}
              onChange={hendlingInputChange}
              id="email-2"
              placeholder="add Subtext"
              rows={5}
            />
          </InputGroup>
        </div>
        <Button className="w-full sm:h-12">Update</Button>
      </form>
    </div>
  );
}
