import { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";

import dynamic from "next/dynamic";

import ClientOnly from "./components/ClientOnly";
// import Navbar from "./components/navbar/Navbar";
// import RegisterModal from "./components/modals/RegisterModal";
// import LoginModal from "./components/modals/LoginModal";
// import RentModal from "./components/modals/RentModal";
// import ToasterProvider from "./providers/ToasterProvider";

const Navbar = dynamic(() => import("./components/navbar/Navbar"), {
  ssr: false,
});
const RegisterModal = dynamic(
  () => import("./components/modals/RegisterModal"),
  {
    ssr: false,
  }
);
const LoginModal = dynamic(() => import("./components/modals/LoginModal"), {
  ssr: false,
});
const RentModal = dynamic(() => import("./components/modals/RentModal"), {
  ssr: false,
});
const ToasterProvider = dynamic(() => import("./providers/ToasterProvider"), {
  ssr: false,
});
import getCurrentUser from "./actions/getCurrentUser";

const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}

export { metadata };
