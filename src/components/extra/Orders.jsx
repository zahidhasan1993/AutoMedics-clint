import React, { useContext, useEffect, useState } from "react";
import img from "../../assets/images/banner/6.jpg";
import { DataProvider } from "../Providers/AuthProvider";
import OrderTableRow from "./OrderTableRow";
import Swal from "sweetalert2";

import { data } from "autoprefixer";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user,logout } = useContext(DataProvider);
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`,{
      method: 'GET',
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('user-access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) =>{
        if (!data.error) {
          setOrders(data);
        }
        navigate('/')
        logout()
      }
      );
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

  const handleConfirm = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/orders/${id}`,{
          method: "PATCH",
          headers:{
            "Content-Type": "application/json"

          },
          body: JSON.stringify({status : "Confirmed"})
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.acknowledged) {
            const remaining = orders.filter(order => order._id !== id);
            const updated = orders.find(order => order._id === id);

            updated.status ='Confirmed';

            const newOrders = [updated,...remaining];

            setOrders(newOrders)
          }
        })
      }
    });
  }

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
              <th>
                Confirm Order
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderTableRow
                key={order._id}
                data={order}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></OrderTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
