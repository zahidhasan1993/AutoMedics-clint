import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  const { _id, img, description, title, price } = service;

  //   console.log(service);
  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const amount = form.amount.value;

    const order = {
      customerName: name,
      email,
      date,
      payingAmount: amount,
    };

    console.log(order);
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
