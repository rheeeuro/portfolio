import React from "react";
import Navbar from "./navbar";
import tw from "tailwind-styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const LayoutContainer = tw.div`
bg-orange-50
dark:bg-[#202023]
min-h-screen
transition-colors
`;

const ChildrenContainer = tw(motion.div)`
w-full
max-w-2xl
mx-auto
p-4
`;

const childrenAnimate = {
  invisible: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: { y: -30, opacity: 0, transition: { duration: 0.3 } },
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <LayoutContainer>
      <Navbar />
      <AnimatePresence>
        <ChildrenContainer
          variants={childrenAnimate}
          transition={{ type: "spring" }}
          initial="invisible"
          animate="visible"
          exit="exit"
          key={router.pathname}
        >
          {children}
        </ChildrenContainer>
      </AnimatePresence>
    </LayoutContainer>
  );
}
