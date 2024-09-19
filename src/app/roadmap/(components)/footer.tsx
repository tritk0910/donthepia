import SocialMedia from "@/components/custom/SocialMedia";
import React from "react";

export default function Footer() {
  return (
    <div className="flex pb-[47px] justify-between items-center px-[48px] uppercase text-[15.5px]">
      <span className="flex-1">
        Copyright 2024. Donthepia INC. All rights reserved.
      </span>
      <span className="flex-[2_1]">Mail@donthepia.com</span>
      <SocialMedia />
    </div>
  );
}
