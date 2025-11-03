import Link from "next/link"

export function Footer() {
    return (
      <footer className="mt-100 px-0 py-4 border-zinc-700">
        <div className="flex items-center justify-center">
          <Link href="https://github.com/lukas1098" target="_blank" className="cursor-pointer">
              <span className="text-[15px] text-[#999999] italic font-instrument">Created by: </span>
              <span className="text-[13px] text-[#ffffff] font-semibold">Lucas Bernasconi</span>
          </Link>
        </div>
      </footer>
    )
  }