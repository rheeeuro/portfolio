import React from "react";
import Navbar from "./navbar";
import tw from "tailwind-styled-components";

const LayoutContainer = tw.div`
bg-slate-100
dark:bg-gray-700
h-screen
`;

const ChildrenContainer = tw.div`
w-full
max-w-xl
mx-auto
`;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Navbar />
      <ChildrenContainer>{children}</ChildrenContainer>
    </LayoutContainer>
  );
}
