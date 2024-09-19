import React from "react";
import { CiGlobe } from "react-icons/ci";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center h-[108px] px-12 fixed w-full backdrop-blur-sm">
      <div>
        <img src={"/img/logo.png"} alt="logo" />
      </div>
      <div>
        <ul className="flex gap-16 uppercase">
          <li>Donquixote</li>
          <li>About</li>
          <li>Donquixote NFT</li>
          <li>Ecosystem</li>
          <li>Token</li>
          <li>Roadmap</li>
          <li>Team & Partners</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-5">
        <CiGlobe size={30} />
        <Button
          size="lg"
          variant="destructive"
          className="rounded-full bg-[#f1302f] text-black flex justify-between gap-2"
        >
          NFT 구매
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}
