import { cn } from "@/lib/utils";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function SocialMedia({
  vertical,
  className,
}: {
  vertical?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex gap-2",
        {
          "flex-col": vertical,
        },
        className
      )}
    >
      <div className="border border-[#868686] p-2 rounded-full">
        <FaXTwitter size={20} />
      </div>
      <div className="border border-[#868686] p-2 rounded-full">
        <FaFacebookF size={20} />
      </div>
      <div className="border border-[#868686] p-2 rounded-full">
        <FaInstagram size={20} />
      </div>
      <div className="border border-[#868686] p-2 rounded-full">
        <FaYoutube size={20} />
      </div>
    </div>
  );
}
