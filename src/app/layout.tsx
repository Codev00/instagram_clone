import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "@/redux/Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Instagram _clone",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en" data-theme="">
         <body className={`flex flex-row ${inter.className} scrollbar-hide`}>
            <Providers>
               <Sidebar />
               <main className="w-full flex min-h-screen flex-col items-center justify-between m-0 xl:m-auto">
                  {children}
               </main>
            </Providers>
         </body>
      </html>
   );
}
