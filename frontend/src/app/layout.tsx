import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import "./globals.css";
import MenuBar from "./components/Menu";

export const metadata: Metadata = {
  title: "EveryHuman recipe",
  description: "EveryHuman recipe description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
            <MenuBar />
           {children}
        </AppRouterCacheProvider>
       </body>
    </html>
  );
}
