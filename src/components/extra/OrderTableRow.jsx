import React from "react";

const OrderTableRow = ({data}) => {
//   console.log(data);
  const {img,payingAmount,service_price,service_title,date,email} = data;

  const dueAmount = Number(service_price) - Number(payingAmount); 
 


    return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="/tailwind-css-component-profile-2@56w.png"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{service_title}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        ${payingAmount}
      </td>
      <td>${dueAmount}</td>
      <th>
        <button className="btn btn-ghost btn-xs">{date}</button>
      </th>
    </tr>
  );
};

export default OrderTableRow;
