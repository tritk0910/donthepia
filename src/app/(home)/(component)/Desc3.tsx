import React from "react";

export default function Desc3() {
  return (
    <div className="h-[1220px] relative">
      <div className="translate-x-[973px] w-fit">
        <h1 className="text-6xl leading-tight pt-[98px] w-[716px] pb-11">
          About the antipathy of DONQ NFT Nodes
        </h1>
        <p className="text-muted-foreground w-[660px] font-bold leading-7">
          DONQ NFT Node는 20번의 반감기가 있습니다. 반감기에는 DONQ NFT NODE가
          100ea ~ 500ea 생성될 때마다 DONQ가 자동소각됩니다. 탈중앙화 방식으로
          DONQ 코인 가격은 시장 유동성에 의해서 자유롭게 결정됩니다.
        </p>
      </div>
      <div className="absolute translate-x-1/2 top-[526px] z-20">
        <img src="/img/img-donq-nft-nodes.png" alt="" />
      </div>
      <div className="absolute right-[21px] size-[120%] top-0 -z-10">
        <img src="/img/bg-donq-nft-nodes.png" alt="" />
      </div>
    </div>
  );
}
