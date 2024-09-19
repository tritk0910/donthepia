import SocialMedia from "@/components/custom/SocialMedia";
import React from "react";

const data = [
  {
    title: "NFT Nodes",
    value: "0000.000",
  },
  {
    title: "Total burned",
    value: "0000.000",
  },
  {
    title: "DONP Price",
    value: "0000.000",
  },
  {
    title: "DONP Holders",
    value: "0000.000",
  },
];

export default function Desc2() {
  return (
    <div className="relative h-screen flex flex-col justify-between items-center px-12">
      <div className="absolute top-0 left-0 -z-10 w-full h-full">
        <img src="/img/img-map.png" alt="" className="object-cover size-full" />
      </div>
      <h1 className="text-6xl leading-tight pt-[98px] w-[750px]">
        Join the community to get even more benefits.
      </h1>
      <SocialMedia className="ml-auto" vertical />
      <div className="flex w-full justify-between items-end">
        <div className="flex">
          <img src="/img/img-count-days.png" alt="" />
          <img src="/img/img-count-hours.png" alt="" />
          <img src="/img/img-count-minutes.png" alt="" />
        </div>
        <div className="w-[676px] h-[83px] rounded-full bg-white flex gap-[51px] uppercase text-black justify-center items-center">
          {data.map(({ title, value }, index) => (
            <div key={index}>
              <p>{title}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
