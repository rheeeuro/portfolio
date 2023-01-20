import React from "react";
import Navbar from "./navbar";
import tw from "tailwind-styled-components";

const LayoutContainer = tw.div`
bg-orange-50
dark:bg-[#202023]
h-screen
`;

const ChildrenContainer = tw.div`
w-full
max-w-2xl
mx-auto
p-4
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
