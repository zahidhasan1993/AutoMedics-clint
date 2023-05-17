import React from "react";
import pic1 from "../../assets/images/banner/1.jpg"
import pic2 from "../../assets/images/banner/2.jpg"
import pic3 from "../../assets/images/banner/3.jpg"
import pic4 from "../../assets/images/banner/4.jpg"
import pic5 from "../../assets/images/banner/5.jpg"
import pic6 from "../../assets/images/banner/6.jpg"

const Header = () => {
  return (
    <div className="carousel w-full h-[37.5rem]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={pic1}
          className="w-full"
        />
        <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full p-7 md:p-0">
            <div className="md:pl-24 md:pt-24">
            <h1 className="text-6xl text-white font-bold">
            Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="text-white mt-8">
            There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form
            </p>
            <button className="btn bg-orange-500 border-none hover:bg-orange-700 hover:text-black mt-8">Discover More</button>
            <button className="btn btn-outline text-white ml-5 hover:bg-white hover:text-black">Latest Project</button>
            </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle opacity-70 hover:bg-orange-900 mr-3">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle hover:bg-orange-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={pic2}
          className="w-full"
        />
        <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  p-7 md:p-0">
            <div className="md:pl-24 md:pt-24">
            <h1 className="text-6xl text-white font-bold">
            Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="text-white mt-8">
            There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form
            </p>
            <button className="btn bg-orange-500 border-none hover:bg-orange-700 hover:text-black mt-8">Discover More</button>
            <button className="btn btn-outline text-white ml-5 hover:bg-white hover:text-black">Latest Project</button>
            </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle opacity-70 hover:bg-orange-900  mr-3">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle hover:bg-orange-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={pic3}
          className="w-full"
        />
        <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  p-7 md:p-0">
            <div className="md:pl-24 md:pt-24">
            <h1 className="text-6xl text-white font-bold">
            Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="text-white mt-8">
            There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form
            </p>
            <button className="btn bg-orange-500 border-none hover:bg-orange-700 hover:text-black mt-8">Discover More</button>
            <button className="btn btn-outline text-white ml-5 hover:bg-white hover:text-black">Latest Project</button>
            </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle opacity-70 hover:bg-orange-900  mr-3">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle hover:bg-orange-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={pic4}
          className="w-full"
        />
       <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  p-7 md:p-0">
            <div className="md:pl-24 md:pt-24">
            <h1 className="text-6xl text-white font-bold">
            Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="text-white mt-8">
            There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form
            </p>
            <button className="btn bg-orange-500 border-none hover:bg-orange-700 hover:text-black mt-8">Discover More</button>
            <button className="btn btn-outline text-white ml-5 hover:bg-white hover:text-black">Latest Project</button>
            </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle opacity-70 hover:bg-orange-900  mr-3">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle hover:bg-orange-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img
          src={pic5}
          className="w-full"
        />
       <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  p-7 md:p-0">
            <div className="md:pl-24 md:pt-24">
            <h1 className="text-6xl text-white font-bold">
            Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="text-white mt-8">
            There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form
            </p>
            <button className="btn bg-orange-500 border-none hover:bg-orange-700 hover:text-black mt-8">Discover More</button>
            <button className="btn btn-outline text-white ml-5 hover:bg-white hover:text-black">Latest Project</button>
            </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle opacity-70 hover:bg-orange-900  mr-3">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle hover:bg-orange-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img
          src={pic6}
          className="w-full"
        />
       <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  p-7 md:p-0">
            <div className="md:pl-24 md:pt-24">
            <h1 className="text-6xl text-white font-bold">
            Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="text-white mt-8">
            There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form
            </p>
            <button className="btn bg-orange-500 border-none hover:bg-orange-700 hover:text-black mt-8">Discover More</button>
            <button className="btn btn-outline text-white ml-5 hover:bg-white hover:text-black">Latest Project</button>
            </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle opacity-70 hover:bg-orange-900  mr-3">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle hover:bg-orange-600">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
