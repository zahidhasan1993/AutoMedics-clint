import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesCard = ({ data }) => {
  const { _id,img, price, title } = data;
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
        <div className="card-actions justify-end">
            <Link to={`/survicedetails/${_id}`} className="hover:text-orange-700">
              <FaArrowRight></FaArrowRight>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
