import React from "react";
import { FcCalendar, FcCallback, FcMindMap } from "react-icons/fc";


const Contact = () => {
  return (
    <div className="bg-black text-white md:h-64 mt-28 rounded md:flex gap-16 justify-center items-center mb-14 p-8 md:p-0">
      <div className="md:flex gap-5">
        <div>
          <FcCalendar className="text-5xl"></FcCalendar>
        </div>
        <div>
          <h1>We are open monday-friday</h1>
          <h1 className="text-2xl">7:00 am - 9:00 pm</h1>
        </div>
      </div>
      <div className="md:flex gap-5">
        <div>
          <FcCallback className="text-5xl"></FcCallback>
        </div>
        <div>
          <h1>Have a question?</h1>
          <h1 className="text-2xl">+2546 251 2658</h1>
        </div>
      </div>
      <div className="md:flex gap-5">
        <div>
          <FcMindMap className="text-5xl"></FcMindMap>
        </div>
        <div>
          <h1>Need a repair? our address</h1>
          <h1 className="text-2xl">Liza Street, New York</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
