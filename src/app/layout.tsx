import "./globals.css";
import {ReactNode} from "react";
import type {Metadata} from "next";
import Providers from "@/components/providers";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "News",
  description: "Hottest news, scandals and investigations",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({children}: Props) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main className="p-4 flex-grow w-full flex flex-col gap-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
