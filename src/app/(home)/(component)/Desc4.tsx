import React from "react";

export default function Desc4() {
  return (
    <div className="relative h-screen px-12">
      <div>
        <h1 className="text-6xl pb-[45px] leading-tight w-[622px]">
          What is an <p>Eco-System DONQ?</p>
        </h1>
        <p className="text-muted-foreground text-xl leading-relaxed w-[571px]">
          DONQ는 NFT와 T2E Trading , P2E Game을 결합하여 어떠한 거래에 대해서도
          중앙 기관이나 제3자에 의한 허가가 필요없는 DAO 조직을 형성하여
          유저들이 자율적으로 판단하고 투표하여 생태계를 이끌고 확장할 수 있도록
          합니다.
        </p>
      </div>
      <div className="mx-auto pt-[102px] text-[80px] w-[1516px] overflow-hidden">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-muted-foreground">What does DAO stand for</h1>
          <div className="h-[1px] bg-[#686868] w-full my-4" />
          <div className="flex justify-between items-center gap-24 text-nowrap text-center">
            <h1>What is T2E?</h1>
            <h1>What is T2E?</h1>
            <h1>What is T2E?</h1>
          </div>
          <div className="h-[1px] bg-[#686868] w-full my-4" />
          <h1 className="text-muted-foreground">Know about P2E</h1>
        </div>
      </div>
      <div className="absolute bottom-[216px] left-[1246px]">
        <div className="relative">
          <img src="/img/img-eco-system-box.png" alt="" />
          <div className="absolute top-0 left-0 flex flex-col justify-center items-center text-black text-center px-12">
            <img src="/svg/chart.svg" alt="" className="pt-[76px] pb-[51px]" />
            <h1 className="pb-[22px] text-2xl">T2E</h1>
            <p className="text-base">
              T2E Trading 은 코인 거래차트에 대한 교육, 트레이더들의 노하우나
              투자기법에 대한 교육, 디지털 자산에 대한 전문적인 지식에 대한 교육
              상품입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
