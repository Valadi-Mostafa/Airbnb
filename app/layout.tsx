import { Metadata } from "next";
import { Nunito } from "next/font/google";
import dynamic from "next/dynamic";

import "./globals.css";

import ClientOnly from "./components/ClientOnly";
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
const SearchModal = dynamic(() => import("./components/modals/SearchModal"), {
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
          <SearchModal />
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
