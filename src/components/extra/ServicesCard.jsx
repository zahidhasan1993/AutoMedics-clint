import React from "react";

const ServicesCard = ({ data }) => {
  const { img, price, title } = data;
//   console.log(data);
  return (
    <div className="card w-full bg-base-100 shadow">
      <figure className="px-10 pt-10 rounded-lg">
        <img
          src={img}
          alt="Services pic"
          className="rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-orange-700">Price : ${price}</p>
        
      </div>
    </div>
  );
};

export default ServicesCard;
