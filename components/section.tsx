import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  delay: any;
}

const SectionContainer = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const Section = ({ children, delay = 0 }: SectionProps) => {
  return (
    <SectionContainer
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: "0.8", delay }}
      mb={6}
    >
      {children}
    </SectionContainer>
  );
};

export default Section;
