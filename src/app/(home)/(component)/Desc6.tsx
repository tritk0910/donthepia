import React from "react";

interface Data {
  title: string;
  value: string;
}

const data1: Data[] = [
  {
    title: "Taken Information",
    value: "Node",
  },
  {
    title: "Taken symbol",
    value: "Node",
  },
  {
    title: "Blockchain",
    value: "BNB Chain",
  },
  {
    title: "Total Supply",
    value: "1,000,000,000",
  },
];

const data2: Data[] = [
  {
    title: "Eco-System (40%)",
    value: "400,000,000",
  },
  {
    title: "Marketing (20%)",
    value: "200,000,000",
  },
  {
    title: "Ciculation (10%)",
    value: "100,000,000",
  },
  {
    title: "Company Reserves (10%)",
    value: "100,000,000",
  },
  {
    title: "Team / Advisor (10%)",
    value: "100,000,000",
  },
  {
    title: "Contributor (10%)",
    value: "100,000,000",
  },
];

export default function Desc6() {
  return (
    <div className="relative bg-[#161616] flex flex-col items-center px-[202px]">
      <h1 className="text-6xl leading-tight pt-[98px] w-[750px] pb-[80px]">
        DONQ Token Information
      </h1>
      <div className="h-[1px] bg-[#686868] w-full my-6" />
      <div className="flex justify-between w-full">
        {data1.map(({ title, value }, index) => (
          <div className="uppercase" key={index}>
            <p className="text-muted-foreground">{title}</p>
            <p>{value}</p>
          </div>
        ))}
      </div>
      <div className="h-[1px] bg-[#686868] w-full mt-6 mb-[100px]" />
      <div className="flex gap-[192px]">
        <div>
          <img src="/img/img-token-info.png" alt="" />
        </div>
        <div>
          <div className="grid grid-cols-2 grid-rows-3 gap-x-[115px] gap-y-[80px]">
            {data2.map(({ title, value }, index) => (
              <div key={index}>
                <p className="text-5xl">{value}</p>
                <p className="text-muted-foreground text-base">{title}</p>
              </div>
            ))}
          </div>
          <div className="h-[1px] bg-[#686868] w-full mb-[152px] mt-[100px]" />
        </div>
      </div>
    </div>
  );
}
