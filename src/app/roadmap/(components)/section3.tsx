import React from "react";

interface Partner {
  path: string;
}

const partners: Partner[] = [
  {
    path: "/img/logo-partner-01.png",
  },
  {
    path: "/img/logo-partner-02.png",
  },
  {
    path: "/img/logo-partner-03.png",
  },
  {
    path: "/img/logo-partner-04.png",
  },
  {
    path: "/img/logo-partner-05.png",
  },
  {
    path: "/img/logo-partner-06.png",
  },
  {
    path: "/img/logo-partner-07.png",
  },
];

export default function Section3() {
  return (
    <div className="h-[900px] flex flex-nowrap items-center">
      {partners.map((partner, index) => (
        <img
          key={index}
          src={partner.path}
          alt="partner"
          className="mx-4 h-[108px]"
        />
      ))}
    </div>
  );
}
