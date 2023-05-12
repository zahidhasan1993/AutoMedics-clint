import React from "react";
import img1 from "../../assets/images/about_us/person.jpg";
import img2 from "../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row justify-center lg:gap-16 lg:pl-24 lg:relative">
        <div className="">
          <img
            src={img1}
            className="max-w-sm rounded-lg shadow-2xl w-[28rem]"
          />
          <img
            src={img2}
            className="max-w-sm rounded-lg shadow-2xl w-[20rem] lg:absolute lg:-bottom-20 lg:left-[22rem]"
          />
        </div>
        <div className="lg:pl-36 ">
          <h1 className="text-orange-600 text-xl font-bold">About Us</h1>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6 text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. <br /> <br />
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-orange-600 hover:bg-orange-700 hover:text-black border-none ">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
