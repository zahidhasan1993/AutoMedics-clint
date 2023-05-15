import React, { useContext, useEffect, useState } from "react";
import img from "../../assets/images/banner/6.jpg";
import { DataProvider } from "../Providers/AuthProvider";
import OrderTableRow from "./OrderTableRow";
import Swal from "sweetalert2";

import { data } from "autoprefixer";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(DataProvider);


  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/orders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              const remaining = orders.filter(order => order._id !== id);
              // console.log(remaining);
              setOrders(remaining)
            }
          });
      }
    });
  };

  // console.log(orders);

  return (
    <div>
      <div
        className="hero h-[18.7rem] mb-32"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full"></div>
        <div className="hero-content text-neutral-content">
          <div className="w-full">
            <h1 className="mb-5 text-5xl font-bold">Orders</h1>
          </div>
        </div>
      </div>

      {/* table */}
      <div className="overflow-x-auto w-full mb-32">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              
              <th>Service Name</th>
              <th>paying Amount</th>
              <th>Due Amount</th>
              <th>Date</th>
              <th>
                Delete Order
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderTableRow
                key={order._id}
                data={order}
                handleDelete={handleDelete}
              ></OrderTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
