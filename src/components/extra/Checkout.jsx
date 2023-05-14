import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  const { _id,img,description,title,price } = service;

//   console.log(service);

  return (
    <div>
      <div
        className="hero h-[18.7rem] mb-14"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Checkout</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
