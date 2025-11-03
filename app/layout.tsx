import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashore",
  icons: {
    icon: "/icon.svg",
  },
  description: "Ashore Waitlist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <div className="flex min-h-screen w-full flex-col">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4">
              {children}
              <Footer/>
            </div>
          </div>
      </body>
    </html>
  );
}
