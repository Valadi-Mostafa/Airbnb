import { Metadata } from "next";
import { Nunito } from "next/font/google";

import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";

import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";

const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <ClientOnly> */}
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        {/* </ClientOnly> */}
        {children}
      </body>
    </html>
  );
}

export { metadata };
