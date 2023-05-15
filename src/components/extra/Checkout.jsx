import React, { useContext } from "react";
import Swal from "sweetalert2";
import { Link, useLoaderData } from "react-router-dom";
import { DataProvider } from "../Providers/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const {user} = useContext(DataProvider)
  console.log(user);
  const { _id, img, description, title, price, service_id } = service;

  // console.log(service);
  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const amount = form.amount.value;

    const order = {
      service_id: _id,
      customerName: name,
      email,
      img,
      service_title : title,
      date,
      payingAmount: amount,
      service_price: price,
    };

    console.log(order);
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your order has been placed",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="mb-12">
      <div
        className="hero h-[18.7rem] mb-32"
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
      <div>
        <div className="card  w-full shadow-2xl bg-base-100">
          <form
            onSubmit={handleOrder}
            className="card-body md:grid md:grid-cols-2 md:gap-6"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                defaultValue={user ? user.email : 'your mail'}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Paying Amount</span>
              </label>
              <input
                type="text"
                name="amount"
                placeholder="00"
                defaultValue={price}
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6 md:col-span-2 ">
              <input
                className="btn btn-outline text-orange-700 hover:bg-orange-700 hover:border-none hover:text-white"
                type="submit"
                value="Order Confirm"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
