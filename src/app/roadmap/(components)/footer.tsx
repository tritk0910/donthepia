import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex pb-[47px] justify-between items-center px-[48px] uppercase text-[15.5px]">
      <span className="flex-1">
        Copyright 2024. Donthepia INC. All rights reserved.
      </span>
      <span className="flex-[2_1]">Mail@donthepia.com</span>
      <div className="flex gap-2">
        <div className="border border-[#868686] p-2 rounded-full">
          <FaXTwitter size={20} />
        </div>
        <div className="border border-[#868686] p-2 rounded-full">
          <FaFacebookF size={20} />
        </div>
        <div className="border border-[#868686] p-2 rounded-full">
          <FaInstagram size={20} />
        </div>
        <div className="border border-[#868686] p-2 rounded-full">
          <FaYoutube size={20} />
        </div>
      </div>
    </div>
  );
}
