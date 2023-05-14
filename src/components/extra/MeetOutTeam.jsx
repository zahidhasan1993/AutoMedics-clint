import React from "react";
import img1 from '../../assets/images/team/1.jpg'
import img2 from '../../assets/images/team/2.jpg'
import img3 from '../../assets/images/team/3.jpg'

const MeetOutTeam = () => {
  return (
    <div className="my-32">
        <h1 className="text-orange-700 text-center text-2xl font-bold mb-5">Team</h1>
        <h1 className="text-5xl mb-5 font-bold text-center">Meet Our Team</h1>
        <p className="text-center text-[#737373] mb-12">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
      <div className="md:flex gap-12">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={img1}
            alt="TeamMember Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Car Engine Plug</h2>
          <p>Engine Expert</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={img2}
            alt="TeamMember Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Car Engine Plug</h2>
          <p>Engine Expert</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={img3}
            alt="TeamMember Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Car Engine Plug</h2>
          <p>Engine Expert</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MeetOutTeam;
