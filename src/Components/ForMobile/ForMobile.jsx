import React from "react";
import Navbar from "../Navbar/Navbar";
const ForMobile = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <Navbar />
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            This Website is not avaiable for mobile devices
          </p>
          <h2 className="text-2xl font-bold">Not Responsive yet !</h2>
          <br></br>
          <button className="btn btn-primary">Please switch to desktop</button>
        </div>
      </div>
    </div>
  );
};

export default ForMobile;
