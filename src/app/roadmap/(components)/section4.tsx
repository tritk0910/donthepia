"use client";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    id: "01",
    question: "NFT는 뭔가요? 어떻게 사용하나요?",
    answer:
      "FAQ에 대한 답변이 들어갑니다. NFT는 블록체인 기술에서 NFT 거래 방법을 통해 구매할 수 있습니다.",
  },
  {
    id: "02",
    question: "홈페이지를 이용하는데, 로그인은 어떻게 하나요?",
  },
  {
    id: "03",
    question: "NFT를 구매했어요. 사용은 어떻게 하나요?",
  },
  {
    id: "04",
    question: "NFT를 구매하는 것에 실패했어요. 어떻게 해결해야하나요?",
  },
  {
    id: "05",
    question: "NFT를 다른 방식으로 구매하고 싶어요. 어떤 방법이 있나요?",
  },
  {
    id: "06",
    question: "로그인 시 오류가 있어요. 해결 방법이 알고 싶어요.",
  },
  {
    id: "07",
    question: "홈페이지를 이용하는데, 로그인은 어떻게 하나요?",
  },
  {
    id: "08",
    question: "NFT를 구매했어요. 사용은 어떻게 하나요?",
  },
];

export default function Section4() {
  const [openItem, setOpenItem] = useState<string | null>("01");

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <>
      <h1 className="text-6xl leading-tight w-[686px] pt-36 pl-11 pb-[54px]">
        <span className="whitespace-nowrap">If you have questions,</span> see
        our FAQ
      </h1>
      <div className="w-full max-w-[861px] ml-auto mr-[50px] text-white text-[20px] pb-[139px]">
        {faqData.map((item) => (
          <div key={item.id} className="py-4">
            <button
              className="flex justify-between items-start w-full text-left"
              onClick={() => toggleItem(item.id)}
            >
              <div className="flex">
                <span className="mr-4 w-8">{item.id}</span>
                <div className="flex flex-col">
                  <span>{item.question}</span>
                  {openItem === item.id && (
                    <span className="mt-2 text-base text-gray-400">
                      {item.answer}
                    </span>
                  )}
                </div>
              </div>
              <span className="ml-4 flex-shrink-0">
                {openItem === item.id ? (
                  <X strokeWidth={1.5} className="text-[#f1302f]" size={25} />
                ) : (
                  <Plus strokeWidth={1.5} size={25} />
                )}
              </span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
