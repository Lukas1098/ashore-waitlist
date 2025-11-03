"use client";
import { Input } from "../ui/input";

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Form submitted");
};

export const Form = () => {
  return (
    <div className="flex items-center justify-center px-4 mt-8">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="relative w-full">
          <Input
            id="email"
            placeholder="Your Email Address"
            type="email"
            className="h-12 pr-28 text-base bg-zinc-900 border border-zinc-700 text-zinc-100 rounded-md"
          />

          <button
            type="submit"
            className="absolute w-25 md:w-auto  md:text-center overflow-hidden right-1 top-1 bottom-1 flex items-center justify-center gap-2 px-4 bg-[#f0f0f0] text-neutral-900 font-semibold rounded-md text-sm cursor-pointer"
          >
            <span>Get Notified</span>
          </button>
        </div>
      </form>
    </div>
  );
};
