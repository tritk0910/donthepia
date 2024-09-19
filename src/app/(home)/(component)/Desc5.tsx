import React from "react";

export default function Desc5() {
  return (
    <div className="relative h-screen px-[220px] flex justify-between">
      <div className="text-[100px]">
        <div className="flex items-center gap-2 text-[#f1302f]">
          <h1>Free Characters</h1>
          <img src="/svg/asterisk.svg" alt="" className="block" />
        </div>
        <h1>Interest farming</h1>
        <h1>Platform</h1>
        <h1>Governance</h1>
      </div>
      <div className="flex flex-col justify-between">
        <p className="w-[420px]">
          DONQ NFT NODE 보유자는 DonThePia (Donquixote The Utopia) 생태계에서
          생성되는 다양한 NFT 캐릭터들을 무상으로 받을 수 있습니다. 보유한 NFT의
          가치가 상승하면, NFT 거래소를 통해서 거래를 할 수 있습니다.
        </p>
        <span className="text-muted-foreground pb-[140px]">
          DONQ NFT Nodes Holder’s Benefits
        </span>
      </div>
    </div>
  );
}
