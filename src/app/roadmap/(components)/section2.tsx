import MessageBox from "@/components/custom/MessageBox";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Message {
  id: number;
  content: string;
  author: string;
}

export default function Section2() {
  const messages: Message[] = [
    {
      id: 1,
      content:
        "T2E Trading 은 코인 거래자들에 대한 교육, 트레이더들의 노하우나 투자기법에 대한 교육, 디지털 자산에 대한 전문적인 지식에 대한 교육 상품입니다.",
      author: "홍길동",
    },
    {
      id: 2,
      content:
        "T2E Trading 은 코인 거래자들에 대한 교육, 트레이더들의 노하우나 투자기법에 대한 교육, 디지털 자산에 대한 전문적인 지식에 대한 교육 상품입니다.",
      author: "홍길동",
    },
    {
      id: 3,
      content:
        "T2E Trading 은 코인 거래자들에 대한 교육, 트레이더들의 노하우나 투자기법에 대한 교육, 디지털 자산에 대한 전문적인 지식에 대한 교육 상품입니다.",
      author: "홍길동",
    },
    {
      id: 4,
      content:
        "T2E Trading 은 코인 거래자들에 대한 교육, 트레이더들의 노하우나 투자기법에 대한 교육, 디지털 자산에 대한 전문적인 지식에 대한 교육 상품입니다.",
      author: "홍길동",
    },
  ];

  return (
    <div className="flex flex-col overflow-x-hidden">
      <h1 className="w-[633px] ml-auto mr-[164px] pt-[140px] text-6xl leading-tight">
        Team & Advisers for DONQ NFT Nodes
      </h1>
      <div className="flex gap-2 pt-[118px] pl-[63px] pb-[84px]">
        <Button size={"icon"} className="rounded-full bg-[#454545]">
          <FaArrowLeft />
        </Button>
        <Button size={"icon"} className="rounded-full bg-[#454545]">
          <FaArrowRight />
        </Button>
      </div>
      <div className="flex gap-x-4 pb-[180px]">
        {messages.map((message, index) => (
          <MessageBox
            key={message.id}
            className={cn({
              "mt-0": index === 0,
              "mt-[28px]": index === 1,
              "mt-[92px]": index === 2,
              "mt-[71px]": index === 3,
            })}
            author={message.author}
          >
            {message.content}
          </MessageBox>
        ))}
      </div>
    </div>
  );
}
