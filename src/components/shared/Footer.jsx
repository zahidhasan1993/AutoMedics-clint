import React from "react";
import { FcBiohazard } from "react-icons/fc";


const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#151515] text-white">
      <div>
        <FcBiohazard className="text-8xl"></FcBiohazard>
        <p>
          AutoMedics Industries Ltd.
          <br />
          Providing reliable car repiring since 1992 <br />
          All Rights Reserved By Z@hid
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
