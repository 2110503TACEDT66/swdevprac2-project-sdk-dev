import TopMenu from "@/components/TopMenu";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NextAuthProvider from "@/providers/NextAuthProvider";
import ReduxProvider from "@/redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <NextAuthProvider session={session}>
            <TopMenu></TopMenu>
            {children}
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
