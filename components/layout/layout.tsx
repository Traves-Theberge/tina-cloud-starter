"use client";

import React, { useEffect, useState } from "react";
import { Header } from "../nav/header";
import { Footer } from "../nav/footer";
import { useTheme } from "next-themes";
import dynamic from 'next/dynamic';

const Background3D = dynamic(() => import('../Background3D'), { ssr: false });

export const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      <div id="background-container" className="fixed inset-0 overflow-hidden gradient-bg">
        <Background3D />
      </div>
      <div className={`flex flex-col min-h-screen z-10 ${resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        <Header />
        <main className="flex-1 flex items-center justify-center overflow-hidden">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;