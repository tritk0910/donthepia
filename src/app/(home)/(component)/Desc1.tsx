import React from "react";

export default function Desc1() {
  const text = [
    "돈키호테 유토피아에 오신 것을 환영합니다.",
    "옛날 옛적, 돈키호테 유토피아 세계에 전염병이 발생하며",
    "모든 곳이 중앙집권식으로 오염되고 말았습니다.",
    "이 오염된 세계에서 우리는 새로운 모험을 시작합니다.",
    "돈키호테는 크루즈를 타고 세계 데이터의 바다를",
    "항해합니다. 이 여정을 통해 분산화된 친구, 돈통 유저",
    "서버노드를 모아 최후의 보물섬으로 떠나는 것, 이는",
    "돈키호테의 여정이자 우리의 목표입니다. 이를 통해",
    "블록체인의 탈중앙화의 의미를 다시 찾아가려 합니다.",
    "돈키호테와 함께 새로운 세계를 세우고, 미래의 예술과",
    "기술을 효과적으로 활용해보세요.",
    "언제든 글로벌 DONQ NFT노드 구성에 합류할 수",
    "있습니다. 지금 함께하시겠습니까?",
  ];

  return (
    <div className="relative h-screen">
      <h1 className="text-6xl leading-tight w-[839px] pt-36 pl-11 pb-[54px]">
        A digital adventure with Donthepia, The beginning of a decentralized art
        That connects the world.
      </h1>
      <div className="text-muted-foreground pl-[202px] font-semibold text-base leading-7">
        {text.map((line, index) => (
          <div key={index} className="">
            {line}
          </div>
        ))}
      </div>
      <div className="absolute top-[456px] right-[585px]">
        <img src="img/img-about-01.png" alt="" />
      </div>
      <div className="absolute top-[300px] right-[139px]">
        <img src="img/img-about-02.png" alt="" />
      </div>
    </div>
  );
}
