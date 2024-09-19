import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  author: string;
  children: React.ReactNode;
}

export default function MessageBox({
  className,
  author,
  children,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "bg-[#232323] rounded-lg flex flex-col px-10 py-12 size-fit",
        className
      )}
      {...props}
    >
      <p className="pb-20">{children}</p>
      <div className="flex items-center gap-4">
        <Avatar className="size-12">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-bold">{author}</span>
          <span className="text-[#a1a1a1]">Gil Dong Hong</span>
        </div>
      </div>
    </div>
  );
}
