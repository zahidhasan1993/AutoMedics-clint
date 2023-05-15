import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id,img,description,title,price } = service;
//   console.log(service);
  return (
    <div>
      <div>
        <div
          className="hero h-[18.7rem]"
          style={{
            backgroundImage: `url("${img}")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full"></div>
          <div className="hero-content text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Services Details</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="my-32">
        <div className="card md:card-side bg-base-200 shadow-xl">
          <figure>
            <img
              src={img}
              alt="Movie"
              className="rounded-lg"
            />
          </figure>
          <div className="card-body md:w-1/2">
            <h2 className="card-title text-orange-700">{title}</h2>
            <p>{description}</p>
            <p className="text-orange-700">Price : ${price}</p>
            <div className="card-actions justify-end">
              <Link to={`/checkout/${_id}`} className="btn btn-outline text-orange-700 hover:bg-orange-500 hover:text-white">Check Out</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
