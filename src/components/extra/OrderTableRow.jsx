import React from "react";

const OrderTableRow = ({ data , handleDelete }) => {
  //   console.log(data);
  const { _id,img, payingAmount, service_price, service_title, date, email } = data;

  const dueAmount = Number(service_price) - Number(payingAmount);

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service_title}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>${payingAmount}</td>
      <td>${dueAmount}</td>
      <th>
        <button className="btn btn-ghost btn-xs">{date}</button>
      </th>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline text-orange-700 hover:bg-orange-700 hover:text-white hover:border-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
    </tr>
  );
};

export default OrderTableRow;
