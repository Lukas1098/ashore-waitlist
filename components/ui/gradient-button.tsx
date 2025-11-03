"use client";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { AshoreLogo } from "./logo";

interface Props{
    title: string;
}

export function Chip({title}: Props) {
  return (
    <div className="mb-5 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="span"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <AshoreLogo/>
        <span>{title}</span>
      </HoverBorderGradient>
    </div>
  );
}

