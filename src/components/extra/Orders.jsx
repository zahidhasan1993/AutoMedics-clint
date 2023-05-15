import React, { useContext, useEffect, useState } from "react";
import img from "../../assets/images/banner/6.jpg"
import { DataProvider } from "../Providers/AuthProvider";
import OrderTableRow from "./OrderTableRow";

const Orders = () => {
    const [orders,setOrders] = useState([])
    const {user} = useContext(DataProvider); 

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

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
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Service Name</th>
        <th>paying Amount</th>
        <th>Due Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {
        orders.map(order => <OrderTableRow key={order._id} data={order}></OrderTableRow>)
      }
      
    </tbody>
  
    
  </table>
</div>
    </div>
  );
};

export default Orders;
