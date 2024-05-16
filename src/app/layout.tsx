import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import Navbar from "@/components/nav";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mnsdojo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={cn(
            montserrat.className,
            "bg-gradient-to-tr overflow-x-hidden from-zinc-900 to-neutral-950 text-white"
          )}
        >
          <main className="min-h-screen relative ">
            <div className="mx-auto w-[750px] max-w-full px-5 pb-10 pt-28">
              {children}
            </div>
            <Navbar />
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
