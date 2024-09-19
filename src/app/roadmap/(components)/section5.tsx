import { Button } from "@/components/ui/button";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Footer from "./footer";
export default function Section5() {
  return (
    <div className="relative h-screen flex flex-col justify-between overflow-x-hidden bg-[#232323]">
      <div className="flex flex-col justify-center items-center z-10">
        <h1 className="uppercase font-semibold text-[129px] mt-[304px]">
          Donthepia
        </h1>
        <span className="text-xl text-muted-foreground mb-[81px]">
          더 많은 혜택을 받고 싶다면 DONTHEPIA 커뮤니티에 가입하세요.
        </span>
        <div className="flex gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full text-black font-semibold flex justify-between gap-2"
          >
            NFT 구매
            <FaArrowRight />
          </Button>
          <Button
            size="lg"
            variant="destructive"
            className="rounded-full bg-[#f1302f] text-black font-semibold flex justify-between gap-2"
          >
            NFT 구매
            <FaArrowRight />
          </Button>
        </div>
      </div>
      <div className="absolute -top-12 left-[11.9%]">
        <img src="/img/img-bottom-01.png" alt="" />
      </div>
      <div className="absolute top-[475.3px] -left-60">
        <img src="/img/img-bottom-02.png" alt="" />
      </div>
      <div className="absolute top-96 right-[244.6px]">
        <img src="/img/img-bottom-03.png" alt="" />
      </div>
      <Footer />
    </div>
  );
}
