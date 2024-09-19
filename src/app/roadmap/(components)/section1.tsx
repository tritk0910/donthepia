import React from "react";

export default function Section1() {
  return (
    <div className="h-screen relative overflow-hidden">
      <div className="pt-36 w-[571px] pl-12">
        <h1 className="text-6xl pb-[45px] leading-tight">Roadmap for DONQ NFT Nodes</h1>
        <span className="text-muted-foreground text-xl leading-relaxed">
          DONQ는 NFT와 T2E Trading , P2E Game을 결합하여 어떠한 거래에 대해서도
          중앙 기관이나 제3자에 의한 허가가 필요 없는 DAO 조직을 형성하여
          유저들이 자율적으로 판단하고 투표하여 생태계를 이끌고 확장할 수 있도록
          합니다.
        </span>
      </div>
      <img
        className="absolute top-[20.1%] left-[55.2%]"
        src="/img/img-loadmap.png"
        alt="loadmap"
      />
    </div>
  );
}
